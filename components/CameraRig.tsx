'use client';

import { useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

// Waypoints derived from the model's REAL post-scale, post-recenter bounding
// box, as logged by Tower.tsx's diagnostics (after removing the incorrect
// Z-up -> Y-up rotation — the model is Y-up on export already):
//   size:   x=48.0   y=164.0  z=50.5
//   world box (recentered, symmetric about x=0/z=0): x=[-24, 24]  y=[0, 164]  z=[-25.3, 25.3]
//
// This is a simple, roughly-square-footprint tower centered at the origin —
// no offset shaft/annex math needed (that was an artifact of the earlier
// sideways orientation). Bounding-sphere radius ~89, footprint half-diagonal
// ~35 (the minimum safe camera-to-look distance to avoid clipping into the
// building).
const WAYPOINTS = [
  { t: 0.0, pos: [200, 220, 200], look: [0, 80, 0] },     // wide 3/4 aerial establishing shot — full tower, base to crown
  { t: 0.2, pos: [70, 160, 70], look: [0, 150, 0] },      // descending past the upper floors / crown
  { t: 0.4, pos: [60, 120, 60], look: [0, 110, 0] },      // upper-mid floors
  { t: 0.6, pos: [55, 70, 55], look: [0, 60, 0] },        // lower floors
  { t: 0.8, pos: [50, 30, 50], look: [0, 20, 0] },        // podium / ground level
  { t: 1.0, pos: [-220, 180, -220], look: [0, 80, 0] },   // wide pull-back beauty shot, opposite angle from t=0
];

function lerpWaypoints(t: number) {
  const clamped = Math.min(Math.max(t, 0), 1);
  let a = WAYPOINTS[0];
  let b = WAYPOINTS[WAYPOINTS.length - 1];

  for (let i = 0; i < WAYPOINTS.length - 1; i++) {
    if (clamped >= WAYPOINTS[i].t && clamped <= WAYPOINTS[i + 1].t) {
      a = WAYPOINTS[i];
      b = WAYPOINTS[i + 1];
      break;
    }
  }

  const span = b.t - a.t || 1;
  const localT = (clamped - a.t) / span;

  const pos = new THREE.Vector3().lerpVectors(
    new THREE.Vector3(...a.pos),
    new THREE.Vector3(...b.pos),
    localT
  );
  const look = new THREE.Vector3().lerpVectors(
    new THREE.Vector3(...a.look),
    new THREE.Vector3(...b.look),
    localT
  );

  return { pos, look };
}

// scrollProgress is a ref (0-1) updated by the page's scroll listener,
// read every frame so camera motion stays smooth even if React re-renders lag.
export default function CameraRig({ scrollProgress }: { scrollProgress: React.MutableRefObject<number> }) {
  const { camera } = useThree();
  const currentLook = useRef(new THREE.Vector3(0, 80, 0));

  useFrame(() => {
    const { pos, look } = lerpWaypoints(scrollProgress.current);

    // Smooth (damped) follow instead of a hard snap, so scroll feels cinematic.
    camera.position.lerp(pos, 0.08);
    currentLook.current.lerp(look, 0.08);
    camera.lookAt(currentLook.current);
  });

  return null;
}
