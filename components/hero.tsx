'use client';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#0F172A]">
      {/* Subtle animated ambient background with purple & deep blue accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6C2BD9]/25 rounded-full filter blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#1E3A8A]/30 rounded-full filter blur-[120px] animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Badges / Ribbons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#6C2BD9]/15 border border-[#6C2BD9]/40 rounded-full shadow-sm shadow-[#6C2BD9]/20">
            <span className="text-xs font-bold text-[#FFB800] bg-[#FFB800]/10 px-2 py-0.5 rounded-full uppercase tracking-wider">🔥 Limited</span>
            <span className="text-xs font-bold text-white tracking-wide">First 7 days 40% off</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#1A1A2E] border border-[#2D2D4A] rounded-full shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="text-xs font-semibold text-[#94A3B8]">Trusted by Founders</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-[52px] lg:text-[56px] font-extrabold leading-tight text-white mb-6 text-balance tracking-tight">
              Your Idea + Our Code ={' '}
              <span className="bg-gradient-to-r from-[#6C2BD9] via-[#A855F7] to-[#FFB800] bg-clip-text text-transparent block sm:inline">
                Scalable Success
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-[22px] text-[#94A3B8] mb-8 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              From Whiteboard to Worldwide — In 4 Weeks. EL CODERS: Where Startups Find Their Technical Backbone.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <a
                href="https://wa.link/d4oxqj"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#6C2BD9] to-[#5B21B6] text-white rounded-xl font-bold text-[18px] hover:scale-105 transition-all duration-300 shadow-lg shadow-[#6C2BD9]/40 hover:shadow-[#6C2BD9]/70 animate-cta-pulse flex items-center justify-center gap-2 min-h-[48px]"
              >
                <span>Start Your Project</span>
                <span>→</span>
              </a>

              <a
                href="https://wa.link/d4oxqj"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-[#1A1A2E] text-white border-2 border-[#2D2D4A] hover:border-[#6C2BD9] rounded-xl font-semibold text-[16px] hover:bg-[#1A1A2E]/80 transition-all duration-300 flex items-center justify-center gap-2.5 min-h-[48px]"
              >
                {/* WhatsApp Icon */}
                <svg className="w-5 h-5 text-emerald-400 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                </svg>
                <span>WhatsApp Connect</span>
              </a>
            </div>

            {/* Quick Guarantees & Reassurance Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-[#94A3B8]">
              <span className="flex items-center gap-1.5 bg-[#1A1A2E] px-3 py-1.5 rounded-lg border border-[#2D2D4A]">
                <span className="text-[#FFB800]">⚡</span> 24hr First Commit Guarantee
              </span>
              <span className="flex items-center gap-1.5 bg-[#1A1A2E] px-3 py-1.5 rounded-lg border border-[#2D2D4A]">
                <span className="text-emerald-400">🛡️</span> No Credit Card Needed
              </span>
              <span className="flex items-center gap-1.5 bg-[#1A1A2E] px-3 py-1.5 rounded-lg border border-[#2D2D4A]">
                <span className="text-[#6C2BD9]">💎</span> First Day Risk-Free
              </span>
            </div>
          </div>

          {/* Right Visual / Code Illustration Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md bg-[#1A1A2E] border-2 border-[#2D2D4A] rounded-2xl shadow-2xl p-6 font-mono text-sm overflow-hidden animate-float">
              {/* Window Controls */}
              <div className="flex items-center justify-between pb-4 border-b border-[#2D2D4A] mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <div className="text-[11px] text-[#94A3B8] font-bold">elcoders-app.ts</div>
                <div className="text-[10px] bg-[#6C2BD9]/30 text-[#A855F7] px-2 py-0.5 rounded font-bold">V2.4</div>
              </div>

              {/* Code Snippet */}
              <div className="space-y-2 text-xs leading-relaxed text-slate-300">
                <p className="text-emerald-400">// EL CODERS: Accelerating Startup MVPs</p>
                <p>
                  <span className="text-[#A855F7]">const</span> startup ={' '}
                  <span className="text-[#FFB800]">&apos;Your Vision&apos;</span>;
                </p>
                <p>
                  <span className="text-[#A855F7]">const</span> techStack = [
                  <span className="text-cyan-300">&apos;Next.js&apos;</span>,{' '}
                  <span className="text-cyan-300">&apos;AI&apos;</span>,{' '}
                  <span className="text-cyan-300">&apos;Cloud&apos;</span>];
                </p>
                <p className="pt-2 text-[#94A3B8]">async function launchMVP() {'{'}</p>
                <p className="pl-4 text-slate-200">
                  <span className="text-[#A855F7]">await</span> buildWithSpeed({'{'}
                </p>
                <p className="pl-8 text-[#FFB800]">timeline: &apos;4 Weeks&apos;,</p>
                <p className="pl-8 text-[#FFB800]">ownership: &apos;100% Code&apos;,</p>
                <p className="pl-8 text-[#FFB800]">pricing: &apos;Flat Rate&apos;</p>
                <p className="pl-4 text-slate-200">{'}'});</p>
                <p className="pl-4 text-emerald-400">return &apos;🚀 Funded & Scaled&apos;;</p>
                <p className="text-[#94A3B8]">{'}'}</p>
              </div>

              {/* Floating Status Pill */}
              <div className="mt-6 pt-4 border-t border-[#2D2D4A] flex items-center justify-between text-xs">
                <span className="flex items-center gap-2 text-emerald-400 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Build Status: Optimal
                </span>
                <span className="text-[#94A3B8]">500+ Hours Shipped</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
