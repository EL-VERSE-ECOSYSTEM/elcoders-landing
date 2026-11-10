'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Link from 'next/link';

export default function TermsOfService() {
  return (
    <main className="bg-slate-950 text-white min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 w-full">
        {/* Header Breadcrumb & Title */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-4">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <span className="text-cyan-400 font-semibold">Terms of Service</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-cyan-300 to-blue-400 bg-clip-text text-transparent mb-3">
            Terms of Service
          </h1>
          <p className="text-sm text-slate-400">
            Last updated: April 2026 • EL CODERS (EL VERSE ECOSYSTEM)
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-10">
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400">1.</span> Agreement to Terms
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              By engaging EL CODERS or utilizing our web applications and software engineering services, you agree to be bound by these Terms of Service. If you disagree with any segment of these terms, please refrain from commissioning services or utilizing this portal.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400">2.</span> Service Plans, Pricing & Rollover
            </h2>
            <div className="space-y-3">
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                EL CODERS operates on transparent flat-fee project pricing and developer hourly retainers:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-slate-800/40 border border-slate-700/60 p-4 rounded-2xl">
                  <h3 className="font-bold text-white text-sm">Scout Tier</h3>
                  <p className="text-emerald-400 font-extrabold text-lg mt-1">$323+</p>
                  <p className="text-xs text-slate-400 mt-1">Landing pages, bug fixes, quick sprints, 7-day rollover.</p>
                </div>
                <div className="bg-slate-800/40 border border-emerald-500/40 p-4 rounded-2xl shadow-lg shadow-emerald-500/5">
                  <h3 className="font-bold text-white text-sm">Squad Tier</h3>
                  <p className="text-emerald-400 font-extrabold text-lg mt-1">$2,258+</p>
                  <p className="text-xs text-slate-400 mt-1">Full 4-week MVP development, 100% code ownership, 14-day rollover.</p>
                </div>
                <div className="bg-slate-800/40 border border-slate-700/60 p-4 rounded-2xl">
                  <h3 className="font-bold text-white text-sm">CTO Tier</h3>
                  <p className="text-emerald-400 font-extrabold text-lg mt-1">$4,193+</p>
                  <p className="text-xs text-slate-400 mt-1">Enterprise SaaS, architecture roadmaps, 30-day rollover.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400">3.</span> Payment Processing & Paystack Integration
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              All invoice milestones, deposits, and retainers are billed and secured through our dedicated payment partner <strong>Paystack</strong> (alongside Stripe for international card settlements). By authorizing transactions, you verify the legitimacy of payment instruments used.
            </p>
            <div className="p-4 bg-slate-950/50 border border-slate-800 rounded-2xl text-xs sm:text-sm text-slate-300">
              ⚡ <strong>1-Click Paystack Checkout:</strong> Invoices can be paid seamlessly via card, bank transfer, or USSD code through <Link href="/payments" className="text-emerald-400 hover:underline">EL CODERS Payments Portal</Link>.
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400">4.</span> 100% Code Ownership Guarantee
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              You own all intellectual property produced for your project. Upon settlement of project milestones, complete ownership of source code, repositories, graphic assets, database schemas, and documentation transfers to the client without licensing restrictions or vendor lock-in.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400">5.</span> 4-Week Delivery & Risk-Free First Day
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              Our 4-week MVP guarantee provides that if initial code commits are not pushed on the first active project day, the kickoff is 100% risk-free. Clients also receive 2 weeks of complimentary post-launch support and bug fixes following production deployment.
            </p>
          </section>

          <section className="space-y-4 pt-4 border-t border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-cyan-400">6.</span> Legal Contact & Queries
            </h2>
            <p className="text-slate-300 text-sm">
              If you have any questions or require custom contract amendments, connect with our administrative team:
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
                💬 WhatsApp Legal Team
              </a>
            </div>
          </section>
        </div>

        {/* Back Link */}
        <div className="mt-10 flex justify-between items-center text-xs text-slate-400">
          <Link href="/" className="text-cyan-400 hover:text-cyan-300 font-semibold transition">
            ← Back to Homepage
          </Link>
          <Link href="/privacy-policy" className="text-slate-400 hover:text-white transition">
            View Privacy Policy →
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
