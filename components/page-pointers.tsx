'use client';

import Link from 'next/link';
import {
  Compass,
  ArrowRight,
  Briefcase,
  Code2,
  Layers,
  DollarSign,
  CreditCard,
  UserPlus,
  Calendar,
  HelpCircle,
  MapPin,
  Sparkles
} from 'lucide-react';

interface PointerItem {
  id: string;
  title: string;
  type: 'Page' | 'Section';
  path: string;
  isExternalLink: boolean;
  description: string;
  uiUxFeature: string;
  icon: any;
  partBadge: string;
}

const POINTERS: PointerItem[] = [
  {
    id: 'services',
    title: 'Services & Catalog',
    type: 'Section',
    path: '/#services',
    isExternalLink: false,
    description: 'Lists all digital solutions, software development services, emergency bug fixes, and hourly retainers.',
    uiUxFeature: 'Interactive search bar, category filter tabs, shortest time badge, and real-time Korapay modal checkout.',
    icon: Layers,
    partBadge: 'Part 1: Solutions'
  },
  {
    id: 'portfolio',
    title: 'Product & Software Portfolio',
    type: 'Page',
    path: '/portfolio',
    isExternalLink: true,
    description: 'Showcases 20 ready-to-deploy digital products built by EL CODERS (Fintech, AI, SaaS, Health, Web3).',
    uiUxFeature: 'Filterable product cards with key features, tech stack badges, and direct WhatsApp deliverable requests.',
    icon: Briefcase,
    partBadge: 'Part 2: Products'
  },
  {
    id: 'technologies',
    title: 'Technologies & Stack',
    type: 'Page',
    path: '/technologies',
    isExternalLink: true,
    description: 'Comprehensive directory of programming languages, frameworks, cloud DevOps, AI libraries, and security.',
    uiUxFeature: 'Searchable tech matrix, proficiency tags (Core Expertise / Production Ready), and architecture consult CTA.',
    icon: Code2,
    partBadge: 'Part 3: Tech Matrix'
  },
  {
    id: 'pricing',
    title: 'Pricing Plans & Retainers',
    type: 'Section',
    path: '/#pricing',
    isExternalLink: false,
    description: 'Transparent fixed-price MVP tiers and monthly developer hourly retainers with zero hidden fees.',
    uiUxFeature: 'Side-by-side plan comparison cards, feature checklists, and instant project booking triggers.',
    icon: DollarSign,
    partBadge: 'Part 4: Investment'
  },
  {
    id: 'payments',
    title: 'Payment Gateway Portal',
    type: 'Page',
    path: '/payments',
    isExternalLink: true,
    description: 'Secure online payment processing portal for client invoices, service deposits, and retainer billing.',
    uiUxFeature: 'Automated Korapay payment integration, currency selection, and instant transaction receipt generation.',
    icon: CreditCard,
    partBadge: 'Part 5: Payments'
  },
  {
    id: 'careers',
    title: 'Careers & Talent Portal',
    type: 'Page',
    path: '/careers',
    isExternalLink: true,
    description: 'Recruitment hub for senior developers, UI/UX designers, and tech leads joining EL CODERS ecosystem.',
    uiUxFeature: 'Open role listings, developer application forms, compensation breakdown, and onboarding details.',
    icon: UserPlus,
    partBadge: 'Part 6: Careers'
  },
  {
    id: 'booking',
    title: 'Consultation & Booking',
    type: 'Section',
    path: '/#booking',
    isExternalLink: false,
    description: 'Direct booking schedule for discovery calls, project scoping, and architecture consultation with engineers.',
    uiUxFeature: 'Interactive form inputs, project requirement selector, and automated calendar dispatch.',
    icon: Calendar,
    partBadge: 'Part 7: Consultation'
  },
  {
    id: 'faq',
    title: 'Frequently Asked Questions',
    type: 'Section',
    path: '/#faq',
    isExternalLink: false,
    description: 'Answers to common questions regarding delivery timelines, code ownership, tech stack, and support.',
    uiUxFeature: 'Accordion collapsible UI for smooth reading and instant search query answers.',
    icon: HelpCircle,
    partBadge: 'Part 8: FAQ & Support'
  }
];

export function PagePointers() {
  return (
    <section id="pointers" className="py-20 bg-[#0F172A] relative overflow-hidden border-t border-[#2D2D4A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6C2BD9]/20 border border-[#6C2BD9]/40 text-[#A855F7] text-xs font-semibold uppercase tracking-wider mb-4">
            <Compass className="w-3.5 h-3.5 text-[#FFB800]" />
            <span>Platform Directory & User Guide</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-[#A855F7] bg-clip-text text-transparent mb-4">
            Explore Ecosystem Parts & UI/UX Features
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
            New to <span className="text-white font-semibold">EL CODERS</span>? Use these pointers to navigate directly to any page or section, understand what each UI/UX feature does, and jump straight into action.
          </p>
        </div>

        {/* Pointer Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {POINTERS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-[#1A1A2E]/90 border border-[#2D2D4A] rounded-2xl p-6 flex flex-col justify-between hover:border-[#6C2BD9]/60 hover:shadow-xl hover:shadow-[#6C2BD9]/10 transition-all duration-300 group"
              >
                <div>
                  {/* Badge & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0F172A] border border-[#2D2D4A] flex items-center justify-center text-[#A855F7] group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-[#6C2BD9]/20 border border-[#6C2BD9]/40 text-[#A855F7]">
                      {item.partBadge}
                    </span>
                  </div>

                  {/* Title & Type */}
                  <div className="mb-3">
                    <span className="text-[10px] uppercase font-semibold text-[#FFB800] tracking-wider block mb-0.5">
                      {item.type}
                    </span>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#A855F7] transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  {/* What it does */}
                  <p className="text-xs text-[#94A3B8] leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* UI/UX Details Box */}
                  <div className="bg-[#0F172A]/70 p-3 rounded-xl border border-[#2D2D4A]/60 mb-6">
                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                      <Sparkles className="w-3 h-3 text-[#A855F7]" />
                      <span>UI/UX Feature</span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-normal">
                      {item.uiUxFeature}
                    </p>
                  </div>
                </div>

                {/* Move to Part Action Button */}
                <div>
                  {item.isExternalLink ? (
                    <Link
                      href={item.path}
                      className="w-full py-2.5 px-4 bg-gradient-to-r from-[#6C2BD9] to-[#5B21B6] hover:from-[#7C3AED] hover:to-[#6C2BD9] text-white rounded-xl text-xs font-bold shadow-md shadow-[#6C2BD9]/20 flex items-center justify-center gap-2 transition-all duration-200"
                    >
                      <span>Move to {item.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  ) : (
                    <a
                      href={item.path}
                      className="w-full py-2.5 px-4 bg-[#1A1A2E] hover:bg-[#6C2BD9] border border-[#2D2D4A] hover:border-[#6C2BD9] text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all duration-200"
                    >
                      <span>Move to {item.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
