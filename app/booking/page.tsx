import { Navbar } from '@/components/navbar';
import { Booking } from '@/components/booking';
import { Footer } from '@/components/footer';

export const metadata = {
  title: 'Book a Tech Consultation | ELCODERS',
  description: 'Schedule a 30-minute strategy call for your next MVP, Web App, or Cybersecurity project.',
};

export default function BookingPage() {
  return (
    <main className="bg-slate-950 text-white min-h-screen">
      <Navbar />
      <div className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Let&apos;s Build Your Vision
            </h1>
            <p className="text-xl text-slate-400">
                Book a strategy session with ELCODERS. We&apos;ll discuss your requirements, timeline, and budget.
            </p>
        </div>
        <Booking />
      </div>
      <Footer />
    </main>
  );
}
