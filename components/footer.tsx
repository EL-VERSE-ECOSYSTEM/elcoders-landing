'use client';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              EL CODERS
            </h3>
            <p className="text-slate-400 text-xs mb-4">
              We Build. You Scale.
            </p>
            <p className="text-slate-500 text-xs leading-relaxed">
              Part of EL VERSE ECOSYSTEM — EL ACCESS, ELSPACE, ELITES, NEXEL
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="/#services" className="hover:text-cyan-400 transition">Frontend Dev</a></li>
              <li><a href="/#services" className="hover:text-cyan-400 transition">Backend Dev</a></li>
              <li><a href="/#services" className="hover:text-cyan-400 transition">Full Stack Apps</a></li>
              <li><a href="/#services" className="hover:text-cyan-400 transition">Cybersecurity</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="/#pricing" className="hover:text-cyan-400 transition">Pricing Plans</a></li>
              <li><a href="/payments" className="hover:text-cyan-400 transition">Payments</a></li>
              <li><a href="/careers" className="hover:text-cyan-400 transition">Careers</a></li>
              <li><a href="/#faq" className="hover:text-cyan-400 transition">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a 
                  href="https://wa.link/d4oxqj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a 
                  href="mailto:elcoderssofwares12@gmail.com"
                  className="hover:text-cyan-400 transition"
                >
                  Email
                </a>
              </li>
              <li>
                <a 
                  href="https://x.com/ElVerse27"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition"
                >
                  Twitter
                </a>
              </li>
              <li><a href="#" className="hover:text-cyan-400 transition">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm">
            &copy; {currentYear} EL VERSE TECHNOLOGIES. Daily Velocity, Zero Fluff.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="/privacy-policy" className="text-slate-500 hover:text-slate-400 text-sm transition">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="text-slate-500 hover:text-slate-400 text-sm transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
