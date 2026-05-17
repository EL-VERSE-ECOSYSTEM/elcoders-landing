'use client';

export function Trust() {
  const testimonials = [
    {
      quote: "EL CODERS built our MVP in 23 days. We raised $500k 3 months later.",
      author: "Sarah",
      role: "FinTech Founder"
    },
    {
      quote: "After 3 failed dev teams, EL CODERS delivered a bug-free platform. Finally.",
      author: "Michael",
      role: "SaaS CEO"
    },
    {
      quote: "The team actually explained technical decisions in plain English. Rare and valuable.",
      author: "Jessica",
      role: "Non-tech Founder"
    }
  ];

  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-slate-500 uppercase tracking-[0.2em] mb-4">Trusted by Founders Worldwide</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-slate-900/30 border border-slate-800/50 p-8 rounded-3xl relative">
              <div className="text-4xl text-cyan-500/20 absolute top-4 left-4 font-serif">&ldquo;</div>
              <p className="text-slate-300 italic mb-6 relative z-10">
                {t.quote}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center font-bold text-slate-400">
                  {t.author[0]}
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{t.author}</p>
                  <p className="text-slate-500 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-30 grayscale">
          {/* Logo placeholders */}
          <div className="text-xl font-black text-white tracking-tighter italic underline decoration-cyan-500">EL ACCESS</div>
          <div className="text-xl font-black text-white tracking-tighter italic underline decoration-blue-500">ELSPACE</div>
          <div className="text-xl font-black text-white tracking-tighter italic underline decoration-indigo-500">ELITES</div>
          <div className="text-xl font-black text-white tracking-tighter italic underline decoration-cyan-400">NEXEL</div>
        </div>
      </div>
    </section>
  );
}
