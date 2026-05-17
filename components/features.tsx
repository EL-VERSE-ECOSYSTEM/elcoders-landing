'use client';

export function Features() {
  const painPoints = [
    "Tired of freelancers who disappear mid-project?",
    "Hourly billing burning your budget?",
    "Your current dev team doesn't understand your vision?",
    "MVP taking 6+ months instead of 6 weeks?"
  ];

  const serviceCategories = [
    {
      title: '🌐 Frontend Development',
      services: [
        { name: 'Landing Page', price: '$323', delivery: '3 days' },
        { name: 'Corporate Website', price: '$774', delivery: '10 days' },
        { name: 'Dashboard / Admin Panel', price: '$1,613', delivery: '15 days' }
      ]
    },
    {
      title: '⚙️ Backend Development',
      services: [
        { name: 'RESTful API', price: '$968', delivery: '10 days' },
        { name: 'Database Design', price: '$516', delivery: '5 days' }
      ]
    },
    {
      title: '📱 Full Stack Applications',
      services: [
        { name: 'MVP (Min Viable Product)', price: '$2,258', delivery: '4 weeks' },
        { name: 'SaaS Platform', price: '$4,193', delivery: '6-8 weeks' },
        { name: 'E-commerce Store', price: '$2,580', delivery: '4 weeks' }
      ]
    },
    {
      title: '🛡️ Cybersecurity',
      services: [
        { name: 'Website Security Audit', price: '$323', delivery: '2 days' },
        { name: 'Penetration Testing', price: '$968', delivery: '7 days' }
      ]
    },
    {
      title: '🤖 AI & Automation',
      services: [
        { name: 'ChatGPT Integration', price: '$968', delivery: '5 days' },
        { name: 'Lead Scoring AI', price: '$1,935', delivery: '2 weeks' }
      ]
    },
    {
      title: '🔧 DevOps & Maintenance',
      services: [
        { name: 'Cloud Hosting Setup', price: '$323', delivery: '2 days' },
        { name: 'Monthly Retainer (20h)', price: '$548', delivery: 'Monthly' }
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-slate-950 to-slate-900 relative">
      <div className="max-w-6xl mx-auto px-4">
        {/* Pain Points Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-4">The Challenge</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Building is Hard. We Make it Easy.</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {painPoints.map((point, index) => (
              <div key={index} className="bg-slate-900/40 border border-slate-800/50 p-6 rounded-2xl flex items-center gap-4">
                <span className="text-red-500 text-xl flex-shrink-0">✕</span>
                <p className="text-slate-300 text-sm leading-snug">{point}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Catalog Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-4">
            Catalog
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            Complete Service Catalog
          </h3>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Flat Fees. Full Ownership. No Ghosting. High-velocity development tailored for startups.
          </p>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((cat, index) => (
            <div key={index} className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 hover:bg-slate-800/40 transition group">
              <h4 className="text-xl font-bold text-white mb-6 border-b border-slate-800 pb-4 group-hover:border-cyan-500/30 transition">
                {cat.title}
              </h4>
              <ul className="space-y-6">
                {cat.services.map((svc, sIndex) => (
                  <li key={sIndex} className="flex flex-col gap-1">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-200 font-semibold group-hover:text-cyan-400 transition">{svc.name}</span>
                      <span className="text-white font-bold">{svc.price}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs text-slate-500">
                      <span>{svc.delivery}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block p-1 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500">
            <div className="bg-slate-950 px-8 py-3 rounded-full">
              <p className="text-slate-200 text-sm">
                Need a custom bundle? <a href="https://wa.link/d4oxqj" className="text-cyan-400 font-bold hover:underline">Chat with us on WhatsApp →</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
