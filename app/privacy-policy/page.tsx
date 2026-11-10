'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <main className="bg-slate-950 text-white min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 w-full">
        {/* Header Breadcrumb & Title */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-4">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <span className="text-cyan-400 font-semibold">Privacy Policy</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-cyan-300 to-blue-400 bg-clip-text text-transparent mb-3">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-400">
            Effective Date: April 2026 • EL CODERS (EL VERSE ECOSYSTEM)
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-10">
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400">1.</span> Introduction
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              ELCODERS (“we,” “us,” “our,” or “Universe”), the software development arm of EL VERSE ECOSYSTEM, is committed to safeguarding your privacy. This Privacy Policy details our procedures regarding the collection, use, disclosure, and protection of your data when visiting our website or utilizing our high-velocity software engineering services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400">2.</span> Information We Collect
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-800/40 border border-slate-700/60 p-5 rounded-2xl">
                <h3 className="text-base font-semibold text-white mb-2">2.1 Personal Information</h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-3">
                  Information you willingly submit when creating client accounts, requesting quotes, or scheduling consultations:
                </p>
                <ul className="list-disc list-inside text-xs sm:text-sm text-slate-400 space-y-1">
                  <li>Full name, company, and job title</li>
                  <li>Email address and phone number</li>
                  <li>Project scope, tech stack, and milestone specs</li>
                  <li>Direct WhatsApp and Telegram handles</li>
                </ul>
              </div>

              <div className="bg-slate-800/40 border border-slate-700/60 p-5 rounded-2xl">
                <h3 className="text-base font-semibold text-white mb-2">2.2 Payment Information</h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Payments are processed through certified PCI-DSS compliant gateways, primarily <strong>Paystack</strong>, along with Stripe, Coinbase, and Flutterwave. We do not store credit card credentials, CVVs, or bank secrets on our servers.
                </p>
              </div>
            </div>

            <div className="bg-slate-800/30 border border-slate-800 p-5 rounded-2xl">
              <h3 className="text-base font-semibold text-white mb-2">2.3 Automated Usage Analytics</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                When interacting with our web applications, we gather minimal technical logs such as IP addresses, browser types, referral links, and page performance metrics solely for UX optimization and security auditing.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400">3.</span> How We Utilize Your Data
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2 bg-slate-950/40 p-3 rounded-xl border border-slate-800/80">
                <span className="text-cyan-400">✓</span> Engineering & MVP delivery
              </div>
              <div className="flex items-center gap-2 bg-slate-950/40 p-3 rounded-xl border border-slate-800/80">
                <span className="text-cyan-400">✓</span> Invoicing & milestone billing via Paystack
              </div>
              <div className="flex items-center gap-2 bg-slate-950/40 p-3 rounded-xl border border-slate-800/80">
                <span className="text-cyan-400">✓</span> Real-time sprint progress notifications
              </div>
              <div className="flex items-center gap-2 bg-slate-950/40 p-3 rounded-xl border border-slate-800/80">
                <span className="text-cyan-400">✓</span> Fraud prevention & server security
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400">4.</span> Third-Party Disclosure & Zero-Selling Policy
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              We uphold a strict zero-data-selling guarantee. Your code repositories, proprietary startup ideas, and contact records are never sold, traded, or shared with advertising exchanges. Third-party disclosures are strictly limited to payment processors (Paystack, Stripe) and hosting infrastructure (Vercel, AWS).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400">5.</span> Data Security & Code Confidentiality
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              All client communications and code repositories are governed by mutual Non-Disclosure Agreements (NDAs). Our servers enforce 256-bit TLS encryption, role-based access control, and mandatory multi-factor authentication across all developer environments.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400">6.</span> Your Privacy Rights
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              You retain the right to request access to your records, rectify inaccurate data, or request permanent deletion of your project account from our systems at any time.
            </p>
          </section>

          <section className="space-y-4 pt-4 border-t border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400">7.</span> Direct Support & Data Inquiries
            </h2>
            <p className="text-slate-300 text-sm">
              For any questions regarding privacy policies or data security practices, reach our security team directly:
            </p>
            <div className="flex flex-wrap gap-4 text-xs sm:text-sm">
              <a
                href="mailto:elcoderssofwares12@gmail.com"
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-cyan-400 rounded-xl border border-slate-700 transition"
              >
                ✉️ elcoderssofwares12@gmail.com
              </a>
              <a
                href="https://wa.link/d4oxqj"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] rounded-xl border border-[#25D366]/30 transition"
              >
                💬 WhatsApp Security Officer
              </a>
            </div>
          </section>
        </div>

        {/* Back Link */}
        <div className="mt-10 flex justify-between items-center text-xs text-slate-400">
          <Link href="/" className="text-cyan-400 hover:text-cyan-300 font-semibold transition">
            ← Back to Homepage
          </Link>
          <Link href="/terms-of-service" className="text-slate-400 hover:text-white transition">
            View Terms of Service →
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
