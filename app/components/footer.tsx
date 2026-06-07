export default function Footer() {
  return (
    <footer
      className="site-footer w-full max-w-[1180px] mx-auto px-4 sm:px-6 md:px-8 mt-16 mb-10 pt-6 border-t transition-colors"
      style={{ borderColor: 'var(--border)' }}
    >
      <p
        className="font-sans text-xs text-center tracking-wide"
        style={{ color: 'var(--secondary-text)' }}
      >
        (c) {new Date().getFullYear()} Ngoc Thien Kim Nguyen. All rights reserved.
      </p>
    </footer>
  )
}
