'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Image from 'next/image';

export default function PaymentsPage() {
  const methods = [
    { name: 'Card', icon: '💳' },
    { name: 'Bank Transfer', icon: '🏦' },
    { name: 'USSD', icon: '📱' },
    { name: 'QR Code', icon: '🤳' }
  ];

  return (
    <main className="bg-slate-950 text-white min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1 pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Secure Payments via Korapay
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Korapay offers plug-and-play payment solutions. Secure and reliable. We accept multiple payment methods for your convenience.
            </p>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-white">Accepted Methods</h2>
                <div className="grid grid-cols-2 gap-4">
                  {methods.map((method) => (
                    <div key={method.name} className="bg-slate-800/50 border border-slate-700 p-4 rounded-xl flex items-center gap-3">
                      <span className="text-2xl">{method.icon}</span>
                      <span className="font-semibold text-slate-200">{method.name}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-10 p-6 bg-blue-600/10 border border-blue-500/20 rounded-2xl">
                  <p className="text-sm text-slate-300 leading-relaxed italic">
                    &quot;Korapay provides a seamless and secure checkout experience, ensuring your transactions are processed instantly.&quot;
                  </p>
                </div>
              </div>

              <div className="text-center space-y-8">
                <div className="inline-block p-4 bg-white rounded-2xl mb-4">
                  <Image
                    src="/elcoders-logo.png"
                    alt="EL CODERS Logo"
                    width={80}
                    height={80}
                  />
                </div>

                <div className="space-y-4">
                  <h3 className="text-3xl font-bold">Ready to proceed?</h3>
                  <p className="text-slate-400">Click the button below to go to our secure checkout portal.</p>
                </div>

                <a
                  href="https://checkout.korapay.com/pay/jz9dTrCxCRGCyRv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/20 transition transform hover:scale-[1.02]"
                >
                  Go to Secure Checkout →
                </a>

                <p className="text-xs text-slate-500">
                  Powered by Korapay. Your security is our priority.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-3xl mb-4">🔒</div>
              <h4 className="font-bold mb-2">PCI-DSS Compliant</h4>
              <p className="text-sm text-slate-400">Industry standard security for every transaction.</p>
            </div>
            <div className="p-6">
              <div className="text-3xl mb-4">⚡</div>
              <h4 className="font-bold mb-2">Instant Confirmation</h4>
              <p className="text-sm text-slate-400">Get notified immediately after your payment is processed.</p>
            </div>
            <div className="p-6">
              <div className="text-3xl mb-4">🌍</div>
              <h4 className="font-bold mb-2">Global Access</h4>
              <p className="text-sm text-slate-400">Pay from anywhere in the world with multiple currency support.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
