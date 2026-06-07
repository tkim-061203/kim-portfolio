import Image from "next/image"
import { FileText, Github, Linkedin, Mail, MapPin } from "lucide-react"
import Experience from "./components/Experience"
import Skills from "./components/Skills"

export default function HomePage() {
  const links = [
    { href: "mailto:nntkim.work@gmail.com", icon: Mail, label: "Email" },
    { href: "https://github.com/tkim-061203", icon: Github, label: "GitHub" },
    { href: "https://www.linkedin.com/in/nntkim061203", icon: Linkedin, label: "LinkedIn" },
    { href: "/CV_en.pdf", icon: FileText, label: "CV" },
  ]

  return (
    <div className="academic-layout grid gap-10 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-12">
      <aside className="profile-sidebar lg:sticky lg:top-8 lg:self-start">
        <div className="profile-inner flex flex-col items-center text-center lg:items-start lg:text-left">
          <Image
            src="/img/portrait.jpg"
            alt="Ngoc Thien Kim Nguyen"
            className="profile-photo h-40 w-40 rounded-full object-cover"
            style={{
              border: "1px solid var(--image-border)",
              backgroundColor: "var(--image-bg)",
            }}
            unoptimized
            width={160}
            height={160}
            priority
          />

          <h1 className="profile-name mt-5 font-sans text-xl font-bold leading-tight" style={{ color: "var(--heading)" }}>
            Ngoc Thien Kim Nguyen
          </h1>
          <p className="profile-bio mt-2 max-w-[260px] font-sans text-sm leading-relaxed" style={{ color: "var(--secondary-text)" }}>
            AI Engineer researching applied LLMs at the intersection of AI and hardware.
          </p>

          <div className="profile-location mt-4 flex items-start gap-2 text-sm" style={{ color: "var(--secondary-text)" }}>
            <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
            <span>District 1, Ho Chi Minh City, Vietnam</span>
          </div>

          <div className="profile-follow mt-6 w-full max-w-[260px] border-t pt-4" style={{ borderColor: "var(--border)" }}>
            <p className="profile-follow-title font-sans text-xs font-bold uppercase tracking-wide" style={{ color: "var(--heading)" }}>
              Follow
            </p>
            <ul className="profile-links mt-3 space-y-2">
              {links.map(({ href, icon: Icon, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    className="profile-link inline-flex items-center gap-2 font-sans text-sm"
                    style={{ color: "var(--secondary-text)" }}
                  >
                    <Icon className="h-4 w-4" aria-hidden />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>

      <div className="content-column min-w-0 space-y-10">
        <section id="about" className="academic-section scroll-mt-20">
          <h2 className="academic-heading">About</h2>
          <p className="academic-body mt-4 text-[15px] leading-relaxed text-justify" style={{ color: "var(--body-text)" }}>
            I am a final-year ECE student researching applied LLMs at the intersection
            of AI and hardware. I am the first author of REFINE-VerilogV2, a dual-SLM
            framework combining LangGraph and EDA-in-the-loop debugging for Verilog
            generation, reaching 100% syntax pass@5 and 66.9% functional pass@5 on
            RTLLM v1.1. My work spans LLM-assisted Verilog generation, embedded systems,
            robotics, PCB design, and analog IC layout.
          </p>
        </section>

        <Experience />
        <Skills />

        <section id="contact" className="academic-section scroll-mt-20">
          <h2 className="academic-heading">Contact</h2>
          <p className="academic-body mt-4 text-[15px]" style={{ color: "var(--body-text)" }}>
            For opportunities, collaborations, or questions, email{" "}
            <a href="mailto:nntkim.work@gmail.com">nntkim.work@gmail.com</a>.
          </p>
        </section>
      </div>
    </div>
  )
}
