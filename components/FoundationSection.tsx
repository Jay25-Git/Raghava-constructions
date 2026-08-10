const COMMUTES = [
  { time: "2 min", place: "ORR exit 18 · Nanakramguda" },
  { time: "8 min", place: "Raidurg Metro terminal" },
  { time: "12 min", place: "HITEC City · Gachibowli campuses" },
  { time: "28 min", place: "RGIA international terminal" },
];

export default function FoundationSection() {
  return (
    <section
      id="foundation"
      data-floors="7,0"
      data-zone="Ground"
      className="relative flex min-h-screen flex-col justify-center border-t border-[#C4A06A]/[0.12] px-[clamp(20px,5vw,80px)] py-[clamp(80px,12vh,140px)] pl-[clamp(160px,13vw,210px)]"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,14,20,0) 0%, rgba(196,160,106,.07) 78%, rgba(10,14,20,0) 100%)",
        }}
      />

      <div className="relative grid grid-cols-1 items-center gap-[clamp(30px,5vw,80px)] lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <div className="mb-[18px] font-mono text-[9px] tracking-[0.3em] text-[#C4A06A]/80 uppercase">
            Level 00 · 7.19 Acres
          </div>
          <h2 className="mt-0 mb-[26px] font-display text-[clamp(44px,6.5vw,90px)] leading-[0.98] text-[#F5F1E8]">
            The Foundation
          </h2>
          <p className="m-0 mb-8 max-w-[440px] text-[clamp(14.5px,1.4vw,17px)] leading-[1.65] font-light text-[#F5F1E8]/70 text-pretty">
            Road No. 2, Nanakramguda — Hyderabad&apos;s Financial District,
            where the ORR releases into Gachibowli. Five towers set back on
            seven acres, so the ground stays open.
          </p>

          <div className="flex flex-col">
            {COMMUTES.map((c, i) => (
              <div
                key={c.time}
                className={`grid grid-cols-[64px_1fr] gap-4 border-t border-[#C4A06A]/[0.16] py-[15px] ${
                  i === COMMUTES.length - 1 ? "border-b" : ""
                }`}
              >
                <span className="font-mono text-[12px] text-[#C4A06A]">{c.time}</span>
                <span className="text-[14px] font-light text-[#F5F1E8]/68">
                  {c.place}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-[14px]">
          <div className="hatch-pattern relative flex aspect-[4/3] items-center justify-center border border-[#C4A06A]/22">
            <span className="text-center font-mono text-[9px] leading-[2] tracking-[0.2em] text-[#F5F1E8]/42 uppercase">
              Site plan
              <br />5 towers · 7.19 acres
            </span>
            <div className="absolute bottom-3 left-[14px] font-mono text-[8px] tracking-[0.16em] text-[#C4A06A]/70">
              17.4144° N, 78.3402° E
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
