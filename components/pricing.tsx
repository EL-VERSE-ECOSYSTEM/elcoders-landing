'use client';

import { useState } from 'react';

export function Pricing() {
  const plans = [
    {
      id: 'scout',
      name: 'SCOUT',
      price: '$323+',
      badge: 'Quick Fixes',
      features: [
        'Landing Page Development',
        'Website Security Audit',
        'Cloud Hosting Setup',
        'Bug Fixes & Hotfixes',
        'Direct Support'
      ],
      highlighted: false,
    },
    {
      id: 'squad',
      name: 'SQUAD',
      price: '$2,258+',
      badge: '⭐ MOST POPULAR',
      features: [
        'MVP (Minimum Viable Product)',
        'Full Stack Development',
        'API Design & Integration',
        'E-commerce Solutions',
        '2 Weeks Post-Launch Support'
      ],
      highlighted: true,
    },
    {
      id: 'cto',
      name: 'CTO',
      price: '$4,193+',
      badge: 'Enterprise',
      features: [
        'Full SaaS Platform Build',
        'Advanced AI/ML Integration',
        'Security Penetration Testing',
        'Monthly Retainer Support',
        'Architecture Roadmap'
      ],
      highlighted: false,
    },
  ];

  const handleBookConsultation = () => {
    const bookingSection = document.getElementById('booking');
    bookingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-20 bg-slate-950 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-4">
            Pricing
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            Flat Fees. Full Ownership. No Hourly Surprises.
          </h3>
          <p className="text-lg text-slate-400">
            Simple, project-based pricing designed for speed and transparency.
          </p>
        </div>

        {/* Risk Reversal Banner */}
        <div className="bg-cyan-100 border-2 border-cyan-300 rounded-2xl p-8 mb-16 max-w-4xl mx-auto relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-indigo-950 font-black text-2xl mb-2">
                4-Week Delivery or First Week Free
              </p>
              <p className="text-indigo-900 font-medium">
                We take the risk so you can focus on growth. 100% Code Ownership.
              </p>
            </div>
            <div className="flex flex-col gap-2">
               <div className="flex items-center gap-2 text-indigo-900 text-sm font-bold">
                 <span>✓</span> No upfront payment for large projects (30% deposit)
               </div>
               <div className="flex items-center gap-2 text-indigo-900 text-sm font-bold">
                 <span>✓</span> Free 2-week support after launch
               </div>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-3xl p-8 relative transition transform hover:scale-105 ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-blue-600 via-cyan-600 to-indigo-600 border-2 border-cyan-400 shadow-2xl shadow-cyan-500/20'
                  : 'bg-slate-900/50 border border-slate-800'
              }`}
            >
              <div className={`text-xs font-bold inline-block px-3 py-1 rounded-full mb-6 ${
                plan.highlighted ? 'bg-white text-blue-600' : 'bg-slate-800 text-slate-300'
              }`}>
                {plan.badge}
              </div>

              <h3 className="text-3xl font-bold mb-2 text-white">{plan.name}</h3>
              <div className="mb-8">
                <span className="text-5xl font-bold text-white">{plan.price}</span>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="text-sm flex items-start text-slate-200">
                    <span className="mr-3 text-cyan-400">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={handleBookConsultation}
                className={`w-full py-4 rounded-xl font-bold transition text-center ${
                  plan.highlighted
                    ? 'bg-white text-blue-600 hover:bg-slate-100'
                    : 'bg-slate-800 text-white hover:bg-slate-700 border border-slate-700'
                }`}
              >
                Get Started →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
