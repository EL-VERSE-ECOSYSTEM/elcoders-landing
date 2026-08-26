'use client';

import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0F172A] pt-20 pb-12 border-t border-[#2D2D4A] overflow-hidden">
      {/* Top Subtle Purple Gradient Line Divider */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#6C2BD9] to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand & Ecosystem */}
          <div className="space-y-3">
            <h3 className="text-2xl font-extrabold bg-gradient-to-r from-white via-[#A855F7] to-[#6C2BD9] bg-clip-text text-transparent">
              EL CODERS
            </h3>
            <p className="text-sm font-semibold text-[#FFB800]">
              EL CODERS — We Build. You Scale.
            </p>
            <div className="inline-block px-3 py-1 bg-[#1A1A2E] border border-[#2D2D4A] rounded-lg">
              <p className="text-xs text-[#94A3B8] font-medium">
                Part of <span className="text-white font-bold">EL VERSE ECOSYSTEM</span>
              </p>
            </div>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              EL ACCESS • ELSPACE • ELITES • NEXEL
            </p>
          </div>

          {/* Solutions / Services */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-[#6C2BD9] pl-2">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-sm text-[#94A3B8]">
              <li><a href="/#services" className="hover:text-white transition">Frontend Development</a></li>
              <li><a href="/#services" className="hover:text-white transition">Backend & APIs</a></li>
              <li><a href="/#services" className="hover:text-white transition">Full Stack MVPs</a></li>
              <li><a href="/#services" className="hover:text-white transition">AI & Automation</a></li>
              <li><a href="/#services" className="hover:text-white transition">Cybersecurity</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-[#6C2BD9] pl-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-[#94A3B8]">
              <li><Link href="/portfolio" className="hover:text-white transition">Portfolio</Link></li>
              <li><Link href="/technologies" className="hover:text-white transition">Technologies</Link></li>
              <li><a href="/#pricing" className="hover:text-white transition">Pricing Plans</a></li>
              <li><Link href="/payments" className="hover:text-white transition">Payments</Link></li>
              <li><Link href="/careers" className="hover:text-white transition">Careers</Link></li>
              <li><a href="/#faq" className="hover:text-white transition">FAQ</a></li>
              <li><Link href="/auth" className="hover:text-white transition">Client Portal</Link></li>
            </ul>
          </div>

          {/* Connect & Socials */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-[#6C2BD9] pl-2">
              Connect
            </h4>
            <ul className="space-y-2.5 text-sm text-[#94A3B8]">
              <li>
                <a 
                  href="https://wa.link/d4oxqj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition flex items-center gap-2"
                >
                  <span>💬 WhatsApp Connect</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:elcoderssofwares12@gmail.com"
                  className="hover:text-white transition flex items-center gap-2"
                >
                  <span>✉️ Email Support</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://x.com/ElVerse27"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  Twitter / X (@ElVerse27)
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#2D2D4A] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#94A3B8]">
          <p>
            &copy; {currentYear} EL VERSE ECOSYSTEM. Daily Velocity, Zero Fluff.
          </p>

          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white transition">
              Terms of Service
            </Link>
            {/* Hidden Admin Portal Link */}
            <Link href="/auth" className="opacity-20 hover:opacity-100 transition text-[10px]">
              Admin Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
