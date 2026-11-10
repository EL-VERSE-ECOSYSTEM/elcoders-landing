'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const WHATSAPP_URL = 'https://wa.link/d4oxqj';
const SUPPORT_EMAIL = 'elcoderssofwares12@gmail.com';

function PaymentSuccessContent() {
  const searchParams = useSearchParams();
  // Paystack redirects with trxref and/or reference query params
  const trxref = searchParams.get('trxref');
  const reference = searchParams.get('reference') || trxref;

  const [displayRef, setDisplayRef] = useState<string>('');
  const [formattedDate, setFormattedDate] = useState<string>('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Determine the reference to display
    const finalRef = reference || `ELC-PAY-${Math.random().toString(36).substring(2, 9).toUpperCase()}`;
    setDisplayRef(finalRef);
    setFormattedDate(
      new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      })
    );
  }, [reference]);

  const handleCopyRef = () => {
    if (displayRef) {
      navigator.clipboard.writeText(displayRef);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-4 sm:p-6 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="relative z-10 max-w-lg w-full">
        {/* Brand Header */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-emerald-500 shadow-lg shadow-emerald-500/20">
            <Image
              src="/elcoders-logo.png"
              alt="EL CODERS Logo"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-left">
            <h2 className="text-lg font-extrabold tracking-tight text-white leading-none">
              EL CODERS
            </h2>
            <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-0.5">
              EL VERSE ECOSYSTEM
            </p>
          </div>
        </div>

        {/* Card Receipt */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-sm text-center relative overflow-hidden">
          {/* Subtle top glow bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500"></div>

          {/* Animated Success Badge with glowing pulse */}
          <div className="relative w-24 h-24 mx-auto mb-5">
            <div className="absolute inset-0 bg-emerald-500/20 rounded-full animate-ping opacity-60"></div>
            <div className="relative w-24 h-24 bg-gradient-to-tr from-emerald-500/20 to-teal-500/10 border-2 border-emerald-400 rounded-full flex items-center justify-center shadow-xl shadow-emerald-500/25">
              <svg
                className="w-12 h-12 text-emerald-400 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-3.5 py-1 rounded-full uppercase tracking-widest border border-emerald-500/20 inline-block mb-3">
            ✓ Paystack Verified
          </span>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 bg-gradient-to-r from-white via-emerald-200 to-teal-300 bg-clip-text text-transparent">
            Payment Confirmed!
          </h1>
          <p className="text-sm text-slate-400 max-w-sm mx-auto mb-6">
            Thank you for trusting EL CODERS with your build. Your transaction has been received and verified.
          </p>

          {/* Receipt Data Box */}
          <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 sm:p-5 text-left space-y-3 mb-6">
            <div className="flex justify-between items-center text-xs pb-2 border-b border-slate-800/80">
              <span className="text-slate-400">Payment Processor</span>
              <span className="font-semibold text-slate-200 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                Paystack Gateway
              </span>
            </div>

            <div className="flex justify-between items-center text-xs pb-2 border-b border-slate-800/80">
              <span className="text-slate-400">Transaction Status</span>
              <span className="font-bold text-emerald-400 uppercase tracking-wide">
                ✓ Successful
              </span>
            </div>

            {formattedDate && (
              <div className="flex justify-between items-center text-xs pb-2 border-b border-slate-800/80">
                <span className="text-slate-400">Date & Time</span>
                <span className="text-slate-300 font-mono">{formattedDate}</span>
              </div>
            )}

            <div className="flex justify-between items-center text-xs pt-1">
              <span className="text-slate-400">Reference Number</span>
              <div className="flex items-center gap-2">
                <span className="font-mono text-cyan-300 text-xs truncate max-w-[170px] sm:max-w-[210px]">
                  {displayRef || 'Processing...'}
                </span>
                <button
                  onClick={handleCopyRef}
                  className="text-[11px] text-slate-400 hover:text-white px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 transition"
                  title="Copy reference"
                >
                  {copied ? '✓' : 'Copy'}
                </button>
              </div>
            </div>
          </div>

          {/* Direct Next Step Action */}
          <div className="p-4 sm:p-5 bg-gradient-to-br from-emerald-950/40 via-slate-900 to-teal-950/30 border border-emerald-500/30 rounded-2xl mb-6 text-left">
            <div className="flex items-start gap-3.5">
              <span className="text-2xl flex-shrink-0 bg-emerald-500/20 p-2 rounded-xl border border-emerald-500/30">🚀</span>
              <div>
                <h3 className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  Next Step: Instant Project Kickoff
                </h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Connect directly with our engineering lead on WhatsApp to confirm specifications, private GitHub repo access, and kickoff sprint milestone.
                </p>
                <div className="mt-2.5 flex items-center gap-2 text-[11px] text-emerald-300 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Response time: Under 15 minutes
                </div>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 bg-[#25D366] hover:bg-[#20bd5c] text-slate-950 font-extrabold text-sm rounded-xl transition shadow-lg shadow-[#25D366]/20 flex items-center justify-center gap-2"
            >
              {/* WhatsApp Icon */}
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
              </svg>
              <span>Connect on WhatsApp for Kickoff</span>
            </a>

            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={handlePrint}
                className="py-3 px-4 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-xl border border-slate-700 transition flex items-center justify-center gap-1.5"
              >
                <span>🖨️</span>
                <span>Print / Save Receipt</span>
              </button>

              <a
                href={`mailto:${SUPPORT_EMAIL}?subject=Payment Confirmation: ${displayRef}`}
                className="py-3 px-4 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-xl border border-slate-700 transition flex items-center justify-center gap-1.5"
              >
                <span>✉️</span>
                <span>Email Support</span>
              </a>
            </div>

            <Link
              href="/"
              className="mt-2 py-3 text-slate-400 hover:text-white text-xs font-semibold transition"
            >
              ← Return to EL CODERS Homepage
            </Link>
          </div>
        </div>

        {/* Footer Guarantee */}
        <p className="text-center text-[11px] text-slate-500 mt-6">
          EL CODERS • 100% Code Ownership • Flat Project Pricing • 4-Week MVP Delivery
        </p>
      </div>
    </div>
  );
}

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-emerald-400 mx-auto mb-4"></div>
        <p className="text-white text-sm">Loading receipt details...</p>
      </div>
    </div>
  );
}

export default function PaymentSuccess() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <PaymentSuccessContent />
    </Suspense>
  );
}
