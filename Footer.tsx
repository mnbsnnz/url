import { ArrowUp, Heart, Sparkles } from 'lucide-react';
import { Language } from '../types';

interface FooterProps {
  language: Language;
}

export default function Footer({ language }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-gray-100 py-12 text-gray-500 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Info */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-[#6366F1] font-mono font-black shadow-sm">
              ∑
            </div>
            <div>
              <div className="font-black text-sm text-[#1A1A1A]">
                {language === 'en' ? 'Aisana Abdrakhmanova' : 'Айсана Абдрахманова'}
              </div>
              <p className="text-[11px] text-gray-400 font-medium">
                {language === 'ky' 
                  ? 'Математика мугалими · Улуттук мастер-тренер (№0014)' 
                  : language === 'ru'
                  ? 'Учитель математики · Национальный мастер-тренер'
                  : 'Mathematics Teacher · National Master Trainer (№0014)'}
              </p>
            </div>
          </div>

          {/* Copyright & Quote */}
          <div className="text-center md:text-left">
            <p className="text-gray-500 font-medium">
              © {new Date().getFullYear()} {language === 'en' ? 'Aisana Abdrakhmanova. All rights reserved.' : `Айсана Абдрахманова. ${language === 'ky' ? 'Бардык укуктар корголгон.' : 'Все права защищены.'}`}
            </p>
            <p className="text-[11px] text-gray-400 font-medium mt-0.5">
              {language === 'ky' 
                ? 'Билим берүү — келечекке салынган эң күчтүү инвестиция' 
                : language === 'ru'
                ? 'Образование — самая надежная инвестиция в будущее'
                : 'Education is the most powerful investment in the future'}
            </p>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            id="footer-back-to-top-btn"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold transition-all shadow-sm active:scale-95"
          >
            <span>{language === 'ky' ? 'Жогору' : language === 'ru' ? 'Наверх' : 'Top'}</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#6366F1]" />
          </button>

        </div>

      </div>
    </footer>
  );
}
