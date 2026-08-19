'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '/#services' },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'Payments', href: '/payments' },
    { name: 'Careers', href: '/careers' },
    { name: 'FAQ', href: '/#faq' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0F172A]/90 backdrop-blur-md shadow-lg shadow-[#6C2BD9]/10 border-b border-[#2D2D4A]'
          : 'bg-[#0F172A]/70 backdrop-blur-sm border-b border-[#2D2D4A]/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-[#6C2BD9] group-hover:ring-[#A855F7] transition duration-300">
            <Image
              src="/elcoders-logo.png"
              alt="EL CODERS Logo"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-white via-[#A855F7] to-[#6C2BD9] bg-clip-text text-transparent">
              EL CODERS
            </span>
            <span className="text-[9px] uppercase tracking-widest text-[#94A3B8] -mt-1 font-semibold">
              Ecosystem
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <a
                key={link.name}
                href={link.href}
                className="relative text-sm font-medium text-[#94A3B8] hover:text-white transition duration-200 py-1 group"
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#6C2BD9] transform origin-left transition-transform duration-300 ${
                    isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </a>
            );
          })}
        </div>

        {/* Action Button & Hamburger */}
        <div className="flex items-center gap-4">
          <a
            href="/auth"
            className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 bg-gradient-to-r from-[#6C2BD9] to-[#5B21B6] text-white rounded-xl text-sm font-bold shadow-md shadow-[#6C2BD9]/30 hover:shadow-lg hover:shadow-[#6C2BD9]/50 hover:scale-105 active:scale-95 transition-all duration-300 min-h-[44px]"
          >
            Join Now
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2.5 rounded-xl text-white bg-[#1A1A2E] border border-[#2D2D4A] hover:bg-[#6C2BD9]/20 transition focus:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Slide-down */}
      {isOpen && (
        <div className="md:hidden bg-[#1A1A2E] border-b border-[#2D2D4A] px-6 py-6 transition-all duration-300 ease-in-out">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-slate-300 hover:text-white hover:pl-2 transition-all duration-200 py-2 border-b border-[#2D2D4A]/50 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-[#6C2BD9]">→</span>
              </a>
            ))}
            <a
              href="/auth"
              onClick={() => setIsOpen(false)}
              className="mt-2 w-full py-3 bg-gradient-to-r from-[#6C2BD9] to-[#5B21B6] text-white text-center rounded-xl font-bold text-base shadow-md shadow-[#6C2BD9]/30 min-h-[44px] flex items-center justify-center"
            >
              Join Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
