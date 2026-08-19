'use client';

export function Trust() {
  const trustBadges = [
    { icon: '🚀', title: '12+ MVPs Shipped', desc: 'Fast execution track record' },
    { icon: '⏱️', title: '4-Week Delivery', desc: 'Or guaranteed money back' },
    { icon: '🛡️', title: '100% Code Ownership', desc: 'No lock-in or IP traps' },
    { icon: '💰', title: 'Flat Rate Pricing', desc: 'No unexpected hourly billing' },
    { icon: '🤝', title: 'Free 2-Wk Support', desc: 'Post-launch assistance' },
  ];

  const highlightStats = [
    { value: '500+', label: 'Dev Hours Shipped', sub: 'Across 12+ MVPs' },
    { value: '98%', label: 'Client Satisfaction', sub: '5-Star average rating' },
    { value: '40+', label: 'SaaS Founders', sub: 'Trust EL CODERS' },
    { value: '24hr', label: 'First Commit Guarantee', sub: 'Code shipped day 1' }
  ];

  const testimonials = [
    {
      quote: "EL CODERS built our MVP in 23 days. We raised $500k 3 months later.",
      author: "Sarah Jenkins",
      role: "Founder & CEO, FinFlow",
      initial: "S",
      bg: "bg-[#6C2BD9]"
    },
    {
      quote: "After 3 failed dev teams, EL CODERS delivered a bug-free platform. Finally.",
      author: "Michael Vance",
      role: "CEO, CloudScale SaaS",
      initial: "M",
      bg: "bg-[#1E3A8A]"
    },
    {
      quote: "The team actually explained technical decisions in plain English. Rare and valuable.",
      author: "Jessica Martinez",
      role: "Co-Founder, HealthTech AI",
      initial: "J",
      bg: "bg-[#5B21B6]"
    }
  ];

  const clientLogos = [
    { name: 'EL ACCESS', color: 'decoration-[#6C2BD9]' },
    { name: 'ELSPACE', color: 'decoration-[#1E3A8A]' },
    { name: 'ELITES', color: 'decoration-[#FFB800]' },
    { name: 'NEXEL', color: 'decoration-[#A855F7]' },
  ];

  return (
    <section className="py-20 bg-[#0F172A] border-y border-[#2D2D4A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Badges Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-20">
          {trustBadges.map((badge, idx) => (
            <div
              key={idx}
              className="bg-[#1A1A2E] border border-[#2D2D4A] p-5 rounded-2xl flex flex-col items-center text-center hover:border-[#6C2BD9] transition duration-300 card-hover-lift"
            >
              <div className="w-12 h-12 rounded-full bg-[#6C2BD9]/20 border border-[#6C2BD9]/40 flex items-center justify-center text-2xl mb-3 shadow-inner">
                {badge.icon}
              </div>
              <h4 className="text-sm font-bold text-white mb-1">{badge.title}</h4>
              <p className="text-xs text-[#94A3B8]">{badge.desc}</p>
            </div>
          ))}
        </div>

        {/* Highlight Stats Row */}
        <div className="mb-20 bg-gradient-to-r from-[#1A1A2E] via-[#0F172A] to-[#1A1A2E] border border-[#2D2D4A] rounded-3xl p-8 shadow-xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-[#2D2D4A]">
            {highlightStats.map((stat, idx) => (
              <div key={idx} className="pt-4 sm:pt-0 px-4">
                <p className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-white via-[#A855F7] to-[#6C2BD9] bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-sm font-bold text-white mt-1">{stat.label}</p>
                <p className="text-xs text-[#94A3B8] mt-0.5">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Title */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-[#FFB800] uppercase tracking-widest bg-[#FFB800]/10 px-3 py-1 rounded-full border border-[#FFB800]/20">
            Social Proof
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-4">
            Trusted by Founders Worldwide
          </h2>
          <p className="text-[#94A3B8] text-sm sm:text-base max-w-xl mx-auto mt-2">
            See how EL CODERS helps visionaries build, ship, and scale their tech products.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-[#1A1A2E] border border-[#2D2D4A] border-l-4 border-l-[#6C2BD9] p-8 rounded-2xl relative shadow-lg hover:shadow-[#6C2BD9]/20 transition-all duration-300 card-hover-lift flex flex-col justify-between"
            >
              <div>
                {/* 5-Star Rating */}
                <div className="flex gap-1 text-[#FFB800] mb-4 text-sm">
                  ★ ★ ★ ★ ★
                </div>
                <p className="text-slate-200 text-sm leading-relaxed italic mb-8 relative z-10">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-[#2D2D4A]">
                <div className={`w-10 h-10 ${t.bg} rounded-full flex items-center justify-center font-bold text-white text-sm shadow-md`}>
                  {t.initial}
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{t.author}</p>
                  <p className="text-[#94A3B8] text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ecosystem Logos Strip */}
        <div className="text-center">
          <p className="text-xs uppercase tracking-widest text-[#94A3B8] font-semibold mb-6">
            Powered by EL VERSE ECOSYSTEM
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 opacity-60 hover:opacity-100 transition duration-300">
            {clientLogos.map((logo, idx) => (
              <div
                key={idx}
                className={`text-lg sm:text-xl font-black text-white tracking-tighter italic underline ${logo.color} decoration-2 hover:scale-105 transition`}
              >
                {logo.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
