import Link from 'next/link'

const navItems = [
  { href: '#about', name: 'About' },
  { href: '#experience', name: 'Experience' },
  { href: '#publications', name: 'Publications' },
  { href: '#education', name: 'Education' },
  { href: '#skills', name: 'Skills' },
  { href: '/CV_en.pdf', name: 'CV', external: true },
]

export function Navbar() {
  return (
    <header
      className="academic-masthead w-full border-b transition-colors"
      style={{
        backgroundColor: 'var(--nav-bg)',
        borderColor: 'var(--nav-border)',
      }}
    >
      <div className="academic-masthead-inner max-w-[1180px] mx-auto px-4 sm:px-6 md:px-8 flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/"
          className="academic-title font-sans text-base font-bold transition-colors nav-title"
          style={{ color: 'var(--heading)' }}
        >
          Ngoc Thien Kim Nguyen
        </Link>
        <nav className="academic-nav flex flex-wrap items-center gap-x-5 gap-y-2" id="nav">
          {navItems.map(({ href, name, external }) => (
            <a
              key={href}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noreferrer' : undefined}
              className="academic-nav-link font-sans text-[13px] font-semibold transition-colors py-1 nav-link"
              style={{ color: 'var(--secondary-text)' }}
            >
              {name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
