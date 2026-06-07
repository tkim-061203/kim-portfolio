export default function Skills() {
  const groups = [
    {
      title: "AI / ML",
      items: ["LLM & SLM Fine-tuning", "LoRA/QLoRA", "LangGraph", "Agents", "RAG", "Prompt Engineering", "PyTorch", "Hugging Face"],
    },
    {
      title: "Programming",
      items: ["Python", "Pandas", "Embedded C"],
    },
    {
      title: "Systems / Hardware",
      items: ["STM32", "ESP32", "Arduino", "PCB Design (Altium, KiCad)", "Cadence Virtuoso"],
    },
    {
      title: "Languages",
      items: ["Vietnamese (native)", "English (professional working)"],
    },
    {
      title: "Certification",
      items: ["AI Engineer Core Track - LLM Engineering, RAG, QLoRA, Agents (2025)"],
    },
  ]

  return (
    <section id="skills" className="academic-section scroll-mt-20">
      <h2 className="academic-heading">Technical Skills</h2>
      <div className="academic-list mt-5 space-y-4">
        {groups.map((group) => (
          <div key={group.title} className="academic-entry">
            <h3 className="academic-entry-title font-sans text-[16px] font-bold" style={{ color: "var(--heading)" }}>
              {group.title}
            </h3>
            <p className="academic-subtitle mt-1 text-[15px] leading-relaxed" style={{ color: "var(--body-text)" }}>
              {group.items.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
