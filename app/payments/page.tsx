'use client';

import { useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Image from 'next/image';

const PAYSTACK_CHECKOUT_URL = 'https://paystack.shop/pay/5sa4xpossk';

export default function PaymentsPage() {
  const [copied, setCopied] = useState(false);
  const [selectedTier, setSelectedTier] = useState<string>('custom');
  const [customAmount, setCustomAmount] = useState<string>('');

  const methods = [
    { name: 'Card (Mastercard, Visa, Verve)', icon: '💳' },
    { name: 'Bank Transfer (Instant Virtual Account)', icon: '🏦' },
    { name: 'USSD Code (*737#, *919#, etc.)', icon: '📱' },
    { name: 'Apple Pay & QR Code', icon: '🤳' }
  ];

  const quickTiers = [
    {
      id: 'scout',
      name: 'Scout Fix Deposit',
      priceUSD: '$323',
      amountNGN: '₦250,000',
      description: 'Landing pages, security fixes, quick sprints'
    },
    {
      id: 'squad',
      name: 'MVP / Squad Tier Deposit (30%)',
      priceUSD: '$675',
      amountNGN: '₦500,000',
      description: 'Standard 4-week MVP project kickoff deposit',
      popular: true
    },
    {
      id: 'retainer',
      name: 'Developer Retainer',
      priceUSD: '$548',
      amountNGN: '₦400,000',
      description: 'Monthly dedicated developer hours'
    },
    {
      id: 'custom',
      name: 'Custom Amount / Invoice',
      priceUSD: 'Flexible',
      amountNGN: 'Any amount',
      description: 'Enter specific project milestone payment'
    }
  ];

  const handleCopyLink = () => {
    navigator.clipboard.writeText(PAYSTACK_CHECKOUT_URL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <main className="bg-slate-950 text-white min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1 pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full uppercase tracking-widest border border-emerald-500/20 inline-block mb-4">
              Paystack Verified Portal
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-5 bg-gradient-to-r from-white via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Fast, Frictionless Payments
            </h1>
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
              Pay your EL CODERS milestone, retainer, or MVP deposit securely in seconds via our dedicated Paystack checkout portal.
            </p>
          </div>

          {/* Easy Way to Pay Section */}
          <div className="mb-12 bg-gradient-to-br from-slate-900 via-slate-900/90 to-[#121b2d] border-2 border-emerald-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-slate-800">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">⚡</span>
                    <h2 className="text-2xl font-bold text-white">The Easiest Way to Pay</h2>
                  </div>
                  <p className="text-sm text-slate-400 mt-1">
                    Select a tier or open checkout directly with 1-click Paystack integration.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyLink}
                    className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-xl border border-slate-700 flex items-center gap-2 transition"
                    title="Copy checkout URL"
                  >
                    <span>{copied ? '✓ Copied URL!' : '📋 Copy Pay Link'}</span>
                  </button>
                  <a
                    href={PAYSTACK_CHECKOUT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm rounded-xl transition shadow-lg shadow-emerald-500/20 hover:scale-105 active:scale-95 flex items-center gap-1.5"
                  >
                    <span>Pay Now</span>
                    <span>→</span>
                  </a>
                </div>
              </div>

              {/* Preset Payment Tier Selection */}
              <div className="pt-8">
                <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">
                  Step 1: Choose Your Payment Type
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  {quickTiers.map((tier) => (
                    <div
                      key={tier.id}
                      onClick={() => setSelectedTier(tier.id)}
                      className={`cursor-pointer p-4 rounded-2xl border transition relative flex flex-col justify-between ${
                        selectedTier === tier.id
                          ? 'bg-emerald-500/10 border-emerald-400 shadow-lg shadow-emerald-500/10'
                          : 'bg-slate-800/40 border-slate-700 hover:border-slate-600'
                      }`}
                    >
                      {tier.popular && (
                        <span className="absolute -top-2.5 right-3 bg-emerald-500 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider">
                          Popular
                        </span>
                      )}
                      <div>
                        <div className="flex justify-between items-baseline mb-1">
                          <h4 className="font-bold text-sm text-white">{tier.name}</h4>
                        </div>
                        <p className="text-xl font-extrabold text-emerald-400 mb-1">{tier.amountNGN}</p>
                        <p className="text-[11px] text-slate-400 leading-snug">{tier.description}</p>
                      </div>
                      <div className="mt-4 pt-2 border-t border-slate-700/60 flex items-center justify-between text-xs text-slate-400">
                        <span>Est: {tier.priceUSD}</span>
                        <span className={`w-4 h-4 rounded-full border flex items-center justify-center text-[10px] ${
                          selectedTier === tier.id ? 'border-emerald-400 bg-emerald-500 text-slate-950 font-bold' : 'border-slate-600'
                        }`}>
                          {selectedTier === tier.id ? '✓' : ''}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Direct Pay Action Box */}
                <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="space-y-1 text-center sm:text-left">
                    <div className="flex items-center justify-center sm:justify-start gap-2">
                      <span className="text-xs font-semibold text-slate-400 uppercase">Selected Target:</span>
                      <span className="text-sm font-bold text-emerald-400">
                        {quickTiers.find((t) => t.id === selectedTier)?.name}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400">
                      Payment is processed securely by Paystack. Supports all Nigerian cards, transfer, and international cards.
                    </p>
                  </div>

                  <a
                    href={PAYSTACK_CHECKOUT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 text-slate-950 rounded-xl font-extrabold text-base hover:shadow-xl hover:shadow-emerald-500/25 transition transform hover:scale-[1.02] flex items-center justify-center gap-2 whitespace-nowrap min-h-[48px]"
                  >
                    <span>💳 Complete Payment on Paystack</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Details & Accepted Methods */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 md:p-12 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-white">All Accepted Methods</h2>
                <div className="space-y-3">
                  {methods.map((method) => (
                    <div key={method.name} className="bg-slate-800/50 border border-slate-700/80 p-4 rounded-xl flex items-center gap-3">
                      <span className="text-2xl">{method.icon}</span>
                      <span className="font-semibold text-slate-200 text-sm">{method.name}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-5 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl">
                  <p className="text-xs text-slate-300 leading-relaxed italic">
                    &quot;Paystack provides an effortless, bank-grade checkout experience. You receive an automated receipt instantly upon completion.&quot;
                  </p>
                </div>
              </div>

              <div className="text-center space-y-6">
                <div className="inline-block p-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-indigo-500 rounded-full shadow-lg shadow-emerald-500/20">
                  <div className="bg-slate-950 p-3 rounded-full">
                    <Image
                      src="/elcoders-logo.png"
                      alt="EL CODERS Logo"
                      width={80}
                      height={80}
                      className="rounded-full object-cover"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">EL CODERS Official Billing</h3>
                  <p className="text-slate-400 text-sm max-w-sm mx-auto">
                    Development Arm of EL VERSE ECOSYSTEM. Direct checkout link for projects, retainers, and services.
                  </p>
                </div>

                <a
                  href={PAYSTACK_CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/20 transition transform hover:scale-[1.02]"
                >
                  Go to Secure Paystack Checkout →
                </a>

                <p className="text-xs text-slate-500 flex items-center justify-center gap-1.5">
                  <span>🔒</span> Secured by Paystack. 256-bit SSL Bank Grade Encryption.
                </p>
              </div>
            </div>
          </div>

          {/* Trust Guarantees */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-slate-900/30 border border-slate-800 rounded-2xl">
              <div className="text-3xl mb-3">🔒</div>
              <h4 className="font-bold mb-1 text-white">PCI-DSS Certified</h4>
              <p className="text-xs text-slate-400">Audited industry-standard security for every payment.</p>
            </div>
            <div className="p-6 bg-slate-900/30 border border-slate-800 rounded-2xl">
              <div className="text-3xl mb-3">⚡</div>
              <h4 className="font-bold mb-1 text-white">Instant Confirmation</h4>
              <p className="text-xs text-slate-400">Receive receipt and prompt onboarding link automatically.</p>
            </div>
            <div className="p-6 bg-slate-900/30 border border-slate-800 rounded-2xl">
              <div className="text-3xl mb-3">💬</div>
              <h4 className="font-bold mb-1 text-white">WhatsApp Kickoff</h4>
              <p className="text-xs text-slate-400">Direct access to engineers once deposit is verified.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
