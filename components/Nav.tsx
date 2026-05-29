'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { JANE_APP_URL } from '@/lib/constants'

const links = [
  { label: 'Our Story', href: '/our-story' },
  { label: 'Services', href: '/services' },
  { label: 'For Families', href: '/for-families' },
  { label: 'For Adults', href: '/for-adults' },
  { label: 'FAQ', href: '/faq' },
]

export function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#FAFAF8]/95 backdrop-blur-md shadow-sm' : 'bg-[#FAFAF8]'
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20"
        aria-label="Main navigation"
      >
        {/* Logo — cropped to flower + "Clarity", white bg dissolved via multiply */}
        <Link href="/" aria-label="Clarity ADHD Clinic — home">
          <div className="relative w-32 h-[72px] overflow-hidden">
            <Image
              src="/images/Logo.png"
              alt="Clarity ADHD Clinic"
              fill
              className="object-cover object-top mix-blend-multiply"
              priority
            />
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7" role="list">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-sm text-[#6B7280] hover:text-[#2C5F6F] transition-colors duration-200"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href={JANE_APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block px-5 py-2.5 rounded-full bg-[#2C5F6F] text-white text-sm font-medium hover:bg-[#2C5F6F]/90 transition-colors duration-200"
        >
          Book Now
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#2C5F6F] rounded-md"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#FAFAF8] border-t border-[#F2F2F0] px-6 py-6 space-y-5">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block text-base text-[#6B7280] hover:text-[#2C5F6F] transition-colors duration-200"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={JANE_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-2 text-center px-5 py-3 rounded-full bg-[#2C5F6F] text-white text-sm font-medium"
            onClick={() => setOpen(false)}
          >
            Book Now
          </a>
        </div>
      </div>
    </header>
  )
}
