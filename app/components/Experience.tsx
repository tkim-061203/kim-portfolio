export default function Experience() {
  const featuredResearch = {
    title: "REFINE-VerilogV2 - Dual-SLM Framework for Verilog Generation",
    role: "First-author research, graduation thesis",
    range: "2025 - Present",
    highlights: [
      "Fine-tuned Qwen2.5-Coder-7B with LoRA (rank=2048, bfloat16, 4096-context) into Generator SLM and Debugger SLM role-separated adapters on dual NVIDIA RTX 5880 Ada GPUs using Hugging Face PEFT and Transformers.",
      "Built a LangGraph runtime with Generator, Sanitizer, and Correcter stages that routes Verilator, Icarus, and UVM diagnostics back to the Debugger via Topmost Exception Debugging and an Exception-Debugging Trial Manager (EDTM).",
      "Curated the 690K-module Pyranet corpus using Yosys-based capacity-aware filtering by cell count and cell-type diversity, removing manual per-tier loss weighting.",
      "Built an end-to-end evaluation pipeline across VerilogEval V2 (156 modules) and RTLLM v1.1 (29 designs), tracking syntax and functional pass@k, EDA toolchain success, per-class failure modes, and TED iteration cost.",
      "Achieved 100% syntax pass@5 and 66.9% functional pass@5 on RTLLM v1.1; resolved 18/18 initial compile faults across 29 designs (+6.9 points over prior REFINE-Verilog).",
    ],
    stack: "Python, PyTorch, Hugging Face PEFT/Transformers, LoRA, LangGraph, Verilator, Icarus Verilog, Yosys, UVM",
  }

  const researchExperience = [
    {
      range: "Apr 2023 - Present",
      title: "Undergraduate Researcher, DESLab Laboratory, University of Science (VNUHCM)",
      description: [
        "Built a quadruped robot end-to-end: 3D-printed hardware, motor control with STM32/ESP32, and PCB design for motor drivers.",
        "Designed and laid out analog ICs (Inverter, NAND, NOR, XOR, SRAM, Full Adder) with pre/post-layout simulation in Cadence Virtuoso.",
      ],
    },
  ]

  const education = [
    {
      range: "Sep 2021 - Sep 2026",
      title: "B.Eng. Electronics & Telecommunications",
      subtitle: "VNUHCM University of Science",
    },
    {
      range: "Apr 2025 - Sep 2025",
      title: "JUSST Exchange",
      subtitle: "University of Electro-Communications, Japan",
    },
  ]

  const publications = [
    {
      title: "REFINE-VerilogV2: Enhancement in Partial Verilog Generation Leveraging Small Language Model in Combination with EDA Debugging",
      authors: ["N.-T.-K. Nguyen", "V.-M.-T. Nguyen", "C.-K. Pham", "D.-H. Le"],
      venue: "Under review",
      year: "2026",
      note: "first author",
    },
    {
      title: "REFINE-Verilog: Reliability-based fine-tuning and inference enhancement for SLM in partial Verilog generation",
      authors: ["V.-M.-T. Nguyen", "N.-T.-K. Nguyen", "D.-H. Le"],
      venue: "Int. Conf. on Information and Communication Technology (ICICT)",
      year: "2026",
    },
    {
      title: "COMBA-PROMPT: Comprehensive benchmark and augmentation for Verilog generation leveraging dual-LLM prompting",
      authors: ["V.-M.-T. Nguyen", "N.-T.-K. Nguyen", "D.-H. Le"],
      venue: "Int. Conf. on Multimedia, Computing and Technology for Sustainable Development (MCT4SD)",
      year: "2025",
    },
  ]

  return (
    <>
      <section id="experience" className="academic-section scroll-mt-20">
        <h2 className="academic-heading">Research & Experience</h2>

        <div className="academic-list mt-5 space-y-5">
          <article className="academic-entry">
            <p className="academic-date font-sans text-xs font-bold uppercase tracking-wide" style={{ color: "var(--tertiary-text)" }}>
              {featuredResearch.range}
            </p>
            <h3 className="academic-entry-title mt-1 font-sans text-lg font-bold leading-snug" style={{ color: "var(--heading)" }}>
              {featuredResearch.title}
            </h3>
            <p className="academic-subtitle mt-1 text-sm" style={{ color: "var(--secondary-text)" }}>
              {featuredResearch.role}
            </p>
            <ul className="academic-bullets mt-3 list-disc space-y-1 pl-5 text-[15px]" style={{ color: "var(--body-text)" }}>
              {featuredResearch.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            <p className="academic-subtitle mt-3 text-sm" style={{ color: "var(--secondary-text)" }}>
              <span className="font-bold" style={{ color: "var(--body-text)" }}>Stack:</span>{" "}
              {featuredResearch.stack}
            </p>
          </article>

          {researchExperience.map((item) => (
            <article key={item.title} className="academic-entry">
              <p className="academic-date font-sans text-xs font-bold uppercase tracking-wide" style={{ color: "var(--tertiary-text)" }}>
                {item.range}
              </p>
              <h3 className="academic-entry-title mt-1 font-sans text-[17px] font-bold leading-snug" style={{ color: "var(--heading)" }}>
                {item.title}
              </h3>
              {item.description && (
                <ul className="academic-bullets mt-2 list-disc space-y-1 pl-5 text-[15px]" style={{ color: "var(--body-text)" }}>
                  {item.description.map((desc) => (
                    <li key={desc}>{desc}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </section>

      <section id="publications" className="academic-section scroll-mt-20">
        <h2 className="academic-heading">Publications</h2>

        <div className="academic-list mt-5 space-y-5">
          {publications.map((publication) => (
            <article key={publication.title} className="academic-entry">
              <h3 className="academic-entry-title academic-publication-title font-sans text-[17px] font-bold leading-snug" style={{ color: "var(--link)" }}>
                {publication.title}
              </h3>
              <p className="academic-subtitle mt-2 text-sm leading-relaxed" style={{ color: "var(--secondary-text)" }}>
                {publication.authors.map((author, index) => (
                  <span key={author}>
                    {author === "N.-T.-K. Nguyen" ? (
                      <span className="underline underline-offset-2">{author}</span>
                    ) : (
                      author
                    )}
                    {index < publication.authors.length - 1 ? ", " : ""}
                  </span>
                ))}
              </p>
              <p className="academic-subtitle mt-1 text-sm leading-relaxed" style={{ color: "var(--body-text)" }}>
                {publication.venue}, {publication.year}
                {publication.note ? ` (${publication.note})` : ""}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="education" className="academic-section scroll-mt-20">
        <h2 className="academic-heading">Education</h2>

        <div className="academic-list mt-5 space-y-5">
          {education.map((item) => (
            <article key={item.title} className="academic-entry">
              <p className="academic-date font-sans text-xs font-bold uppercase tracking-wide" style={{ color: "var(--tertiary-text)" }}>
                {item.range}
              </p>
              <h3 className="academic-entry-title mt-1 font-sans text-[17px] font-bold leading-snug" style={{ color: "var(--heading)" }}>
                {item.title}
              </h3>
              <p className="academic-subtitle mt-1 text-sm" style={{ color: "var(--secondary-text)" }}>
                {item.subtitle}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
