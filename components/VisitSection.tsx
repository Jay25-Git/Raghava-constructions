const FOOTER_INFO = [
  { label: "Starting at", value: "₹3.60 Cr" },
  {
    label: "Address",
    value: "Road No. 2, Nanakramguda",
    sub: "Financial District · Hyderabad 500032",
  },
  { label: "Enquiries", value: "+91 9289 212 121" },
];

export default function VisitSection() {
  return (
    <section
      id="visit"
      data-floors="0,0"
      data-zone="Arrival"
      className="relative flex min-h-screen flex-col justify-center border-t border-[#C4A06A]/[0.12] px-[clamp(20px,5vw,80px)] pt-[clamp(80px,12vh,140px)] pb-[clamp(60px,8vh,100px)] pl-[clamp(160px,13vw,210px)]"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(80% 70% at 50% 118%, rgba(196,160,106,.22) 0%, rgba(10,14,20,0) 64%)",
        }}
      />

      <div className="relative max-w-[900px]">
        <div className="mb-[22px] font-mono text-[9px] tracking-[0.3em] text-[#C4A06A]/80 uppercase">
          Level 00 · Arrival Court
        </div>
        <h2 className="m-0 mb-6 font-display text-[clamp(52px,9vw,140px)] leading-[0.9] text-[#F5F1E8]">
          Experience <span className="italic">CINQ</span>
        </h2>
        <p className="m-0 mb-10 max-w-[520px] text-[clamp(15px,1.5vw,18px)] leading-[1.65] font-light text-[#F5F1E8]/70 text-pretty">
          The experience centre is open daily, 10:00 — 19:00. Private
          viewings of the 61st-floor mock-up by appointment.
        </p>

        <div className="flex flex-wrap items-center gap-[26px]">
          <a
            href="#visit"
            className="rounded-[1px] bg-[#C4A06A] px-[34px] py-[17px] font-mono text-[10px] tracking-[0.22em] whitespace-nowrap text-[#0a0e14] uppercase transition-colors hover:bg-[#F5F1E8]"
          >
            Book a Site Visit
          </a>
          <a
            href="#visit"
            className="border-b border-[#7A1F2B]/90 py-[17px] font-mono text-[10px] tracking-[0.22em] whitespace-nowrap text-[#F5F1E8] uppercase transition-colors hover:border-[#C4A06A]"
          >
            Download Brochure
          </a>
        </div>

        <div className="mt-[clamp(48px,8vh,88px)] flex flex-wrap gap-[clamp(24px,4vw,56px)] border-t border-[#C4A06A]/[0.16] pt-[26px]">
          {FOOTER_INFO.map((f) => (
            <div key={f.label}>
              <div className="mb-2 font-mono text-[8.5px] tracking-[0.22em] text-[#F5F1E8]/38 uppercase">
                {f.label}
              </div>
              <div className="font-display text-2xl text-[#F5F1E8]">{f.value}</div>
              {f.sub && (
                <div className="mt-[6px] font-mono text-[9px] tracking-[0.14em] text-[#F5F1E8]/42">
                  {f.sub}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-[clamp(40px,7vh,72px)] flex flex-wrap justify-between gap-5 font-mono text-[8px] tracking-[0.2em] text-[#F5F1E8]/30 uppercase">
          <span>Raghava Constructions · CINQ</span>
          <span>TS RERA P02400009341 · Permit BPO/100/2024</span>
          <span>Concept design · indicative renders</span>
        </div>
      </div>
    </section>
  );
}
