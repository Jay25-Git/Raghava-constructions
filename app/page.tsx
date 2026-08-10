'use client';

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { DEBUG_ORBIT_CONTROLS } from '@/components/Scene';
import Nav from '@/components/Nav';
import ElevationRail from '@/components/ElevationRail';
import HeroSection from '@/components/HeroSection';
import SkyAmenitiesSection from '@/components/SkyAmenitiesSection';
import ResidencesSection from '@/components/ResidencesSection';
import MidSkyClubSection from '@/components/MidSkyClubSection';
import FoundationSection from '@/components/FoundationSection';
import VisitSection from '@/components/VisitSection';

// Scene uses WebGL / browser APIs only — load it client-side, no SSR.
const Scene = dynamic(() => import('@/components/Scene'), { ssr: false });

export default function Home() {
  const scrollProgress = useRef(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);

    const onScroll = () => {
      const scrollable = document.body.scrollHeight - window.innerHeight;
      scrollProgress.current = scrollable > 0 ? window.scrollY / scrollable : 0;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <main className="relative">
      {/* Fixed 3D background — camera moves as the page scrolls */}
      {loaded && <Scene scrollProgress={scrollProgress} />}

      <Nav />
      <ElevationRail railSide="left" />

      {/* Scrollable HTML content sitting on top of the fixed canvas.
          TEMP: pointer-events-none while DEBUG_ORBIT_CONTROLS is on, so
          mouse drags reach the canvas below for OrbitControls instead of
          being swallowed by this full-viewport overlay. */}
      <div className={`relative z-10 ${DEBUG_ORBIT_CONTROLS ? 'pointer-events-none' : ''}`}>
        <HeroSection />
        <SkyAmenitiesSection />
        <ResidencesSection />
        <MidSkyClubSection />
        <FoundationSection />
        <VisitSection />
      </div>
    </main>
  );
}
