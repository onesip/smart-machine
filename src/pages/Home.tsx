import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import MES from '../components/MES';
import Platform from '../components/Platform';
import Models from '../components/Models';
import Contact from '../components/Contact';
import AIChatbot from '../components/AIChatbot';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-200 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <MES />
        <Platform />
        <Models />
        <Contact />
      </main>
      <AIChatbot />
    </div>
  );
}
