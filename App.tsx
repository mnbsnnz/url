import { useState } from 'react';
import { Language } from './types';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutPhilosophySection from './components/AboutPhilosophySection';
import ExperienceTimeline from './components/ExperienceTimeline';
import EducationSection from './components/EducationSection';
import CompetenciesSkills from './components/CompetenciesSkills';
import CertificatesSection from './components/CertificatesSection';
import PublicationsSection from './components/PublicationsSection';
import DigitalResourcesSection from './components/DigitalResourcesSection';
import InteractiveMathWidget from './components/InteractiveMathWidget';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [language, setLanguage] = useState<Language>('ky');
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#1A1A1A] flex flex-col selection:bg-indigo-500 selection:text-white relative overflow-x-hidden">
      {/* Vibrant Ambient Gradient Glows in Background */}
      <div className="fixed -top-32 -right-32 w-96 h-96 bg-indigo-100/70 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="fixed top-1/3 -left-32 w-96 h-96 bg-pink-100/60 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="fixed bottom-1/4 -right-24 w-96 h-96 bg-amber-100/50 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="fixed -bottom-24 left-1/4 w-96 h-96 bg-purple-100/50 rounded-full blur-3xl pointer-events-none z-0" />
      
      {/* Navigation */}
      <Navbar 
        language={language} 
        setLanguage={setLanguage}
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-grow relative z-10">
        {/* 1. Hero with Portrait, Stats & Badges */}
        <HeroSection 
          language={language}
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
        />

        {/* 2. Professional Philosophy & Approaches */}
        <AboutPhilosophySection language={language} />

        {/* 3. Work Experience & Master Trainer Activities */}
        <ExperienceTimeline language={language} />

        {/* 4. Education & Master's Dissertation */}
        <EducationSection language={language} />

        {/* 5. Competencies & Skills Matrix */}
        <CompetenciesSkills language={language} />

        {/* 6. Official Certificates & Qualifications */}
        <CertificatesSection language={language} />

        {/* 7. Scientific Publications & Academic Research */}
        <PublicationsSection language={language} />

        {/* 8. Digital Educational Platforms (Blooket, LearningApps, etc.) */}
        <DigitalResourcesSection language={language} />

        {/* 9. Interactive PISA & Math Literacy Challenge */}
        <InteractiveMathWidget language={language} />

        {/* 10. Contact, Booking & WhatsApp Integration */}
        <ContactSection language={language} />
      </main>

      {/* Footer */}
      <Footer language={language} />

      {/* Full Resume / CV Modal */}
      <ResumeModal 
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        language={language}
      />

      {/* Floating WhatsApp Quick Action Button */}
      <a
        id="floating-whatsapp-btn"
        href="https://wa.me/996776613730?text=%D0%A1%D0%B0%D0%BB%D0%B0%D0%BC%D0%B0%D1%82%D1%81%D1%8B%D0%B7%D0%B1%D1%8B%2C%20%D0%90%D0%B9%D1%81%D0%B0%D0%BD%D0%B0!%20"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#1A1A1A] hover:bg-[#6366F1] text-white flex items-center justify-center shadow-2xl shadow-indigo-500/30 hover:scale-110 active:scale-95 transition-all duration-300 print:hidden group"
      >
        <MessageCircle className="w-6 h-6 text-emerald-400 group-hover:text-white transition-colors" />
        <span className="absolute right-16 px-3.5 py-2 rounded-xl bg-[#1A1A1A] text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl border border-gray-800">
          {language === 'ky' ? 'WhatsApp аркылуу жазуу' : language === 'ru' ? 'Написать в WhatsApp' : 'Message on WhatsApp'}
        </span>
      </a>

    </div>
  );
}
