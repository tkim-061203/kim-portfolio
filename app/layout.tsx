import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Lora } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Navbar } from './components/nav'
import Footer from './components/footer'
import { ThemeProvider } from './components/theme-provider'
import { baseUrl } from './sitemap'

const lora = Lora({
  subsets: ['vietnamese', 'latin'],
  display: 'swap',
  variable: '--font-lora',
})

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Ngoc Thien Kim Nguyen | Portfolio',
    template: '%s | Ngoc Thien Kim Nguyen',
  },
  description: 'Ngoc Thien Kim Nguyen - AI Engineer researching applied LLMs at the intersection of AI and hardware.',
  icons: {
    icon: [
      { url: '/favicon.png?v=2', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: [
      { url: '/favicon.png?v=2', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png?v=2', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'Ngoc Thien Kim Nguyen | Portfolio',
    description: 'Ngoc Thien Kim Nguyen - AI Engineer researching applied LLMs at the intersection of AI and hardware.',
    url: baseUrl,
    siteName: 'Ngoc Thien Kim Nguyen Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

const criticalCss = `
  :root {
    --text: #494e52;
    --border: #f2f3f3;
    --bg: #ffffff;
    --link: #52adc8;
    --heading: #494e52;
    --body-text: #494e52;
    --secondary-text: #6f777d;
    --tertiary-text: #9ba1a6;
    --nav-bg: #ffffff;
    --nav-border: #f2f3f3;
    --image-border: #f2f3f3;
    --image-bg: #f7f8f8;
  }
  html {
    min-width: 360px;
    scroll-behavior: smooth;
  }
  body.site-body {
    margin: 0;
    background: var(--bg);
    color: var(--text);
    font-family: var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }
  a {
    color: var(--link);
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  .academic-masthead {
    width: 100%;
    border-bottom: 1px solid var(--nav-border);
    background: var(--nav-bg);
  }
  .academic-masthead-inner,
  .site-main,
  .site-footer {
    width: 100%;
    max-width: 1180px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1rem;
    padding-right: 1rem;
    box-sizing: border-box;
  }
  .academic-masthead-inner {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  .academic-title {
    color: var(--heading);
    font-size: 1rem;
    font-weight: 700;
  }
  .academic-nav {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem 1.25rem;
  }
  .academic-nav-link {
    color: var(--secondary-text);
    font-size: 13px;
    font-weight: 600;
  }
  .academic-nav-link:hover,
  .academic-title:hover {
    color: var(--heading);
  }
  .site-main {
    min-width: 0;
    margin-top: 2rem;
  }
  .academic-layout {
    display: grid;
    gap: 2.5rem;
  }
  .profile-sidebar {
    text-align: center;
  }
  .profile-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .profile-photo {
    width: 10rem;
    height: 10rem;
    border-radius: 9999px;
    object-fit: cover;
    border: 1px solid var(--image-border);
    background: var(--image-bg);
  }
  .profile-name {
    margin: 1.25rem 0 0;
    color: var(--heading);
    font-size: 1.25rem;
    line-height: 1.25;
  }
  .profile-bio {
    max-width: 260px;
    margin: 0.5rem 0 0;
    color: var(--secondary-text);
    font-size: 0.875rem;
  }
  .profile-location,
  .profile-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--secondary-text);
    font-size: 0.875rem;
  }
  .profile-location {
    margin-top: 1rem;
  }
  .profile-location svg,
  .profile-link svg {
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
  }
  .profile-follow {
    width: 100%;
    max-width: 260px;
    margin-top: 1.5rem;
    padding-top: 1rem;
    border-top: 1px solid var(--border);
  }
  .profile-follow-title {
    margin: 0;
    color: var(--heading);
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.025em;
    text-transform: uppercase;
  }
  .profile-links {
    margin: 0.75rem 0 0;
    padding: 0;
    list-style: none;
  }
  .profile-links li + li {
    margin-top: 0.5rem;
  }
  .content-column {
    min-width: 0;
  }
  .content-column > * + * {
    margin-top: 2.5rem;
  }
  .academic-section {
    scroll-margin-top: 5rem;
  }
  .academic-heading {
    margin: 0;
    padding-bottom: 0.35rem;
    border-bottom: 1px solid var(--border);
    color: var(--heading);
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.3;
  }
  .academic-body,
  .academic-entry p,
  .academic-entry li {
    color: var(--body-text);
    font-size: 15px;
  }
  .academic-body {
    margin: 1rem 0 0;
    text-align: justify;
  }
  .academic-list {
    margin-top: 1.25rem;
  }
  .academic-list > * + * {
    margin-top: 1.25rem;
  }
  .academic-entry {
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--border);
  }
  .academic-entry:last-child {
    padding-bottom: 0;
    border-bottom: 0;
  }
  .academic-date {
    margin: 0;
    color: var(--tertiary-text) !important;
    font-size: 0.75rem !important;
    font-weight: 700;
    letter-spacing: 0.025em;
    text-transform: uppercase;
  }
  .academic-entry-title {
    margin: 0.25rem 0 0;
    color: var(--heading);
    font-size: 17px;
    font-weight: 700;
    line-height: 1.375;
  }
  .academic-publication-title {
    color: var(--link);
  }
  .academic-subtitle {
    margin: 0.25rem 0 0;
    color: var(--secondary-text) !important;
    font-size: 0.875rem !important;
  }
  .academic-bullets {
    margin: 0.75rem 0 0;
    padding-left: 1.25rem;
  }
  .site-footer {
    margin-top: 4rem;
    margin-bottom: 2.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid var(--border);
  }
  .site-footer p {
    margin: 0;
    color: var(--secondary-text);
    text-align: center;
    font-size: 0.75rem;
    letter-spacing: 0.025em;
  }
  @media (min-width: 640px) {
    .academic-masthead-inner,
    .site-main,
    .site-footer {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
    .academic-masthead-inner {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }
  @media (min-width: 768px) {
    .academic-masthead-inner,
    .site-main,
    .site-footer {
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }
  @media (min-width: 1024px) {
    .academic-layout {
      grid-template-columns: 260px minmax(0, 1fr);
      gap: 3rem;
    }
    .profile-sidebar {
      position: sticky;
      top: 2rem;
      align-self: start;
      text-align: left;
    }
    .profile-inner {
      align-items: flex-start;
    }
  }
`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cx(
        lora.variable,
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="site-body antialiased flex flex-col min-h-screen">
        <style dangerouslySetInnerHTML={{ __html: criticalCss }} />
        <ThemeProvider>
          <Navbar />
          <main className="site-main flex-auto min-w-0 max-w-[1180px] w-full mx-auto px-4 sm:px-6 md:px-8 mt-8 flex flex-col">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
