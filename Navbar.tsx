import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  Sparkles, 
  GraduationCap, 
  Award, 
  BookOpen, 
  Briefcase, 
  FileText, 
  MessageCircle,
  Globe
} from 'lucide-react';
import { Language } from '../types';

interface NavbarProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  onOpenResumeModal: () => void;
}

export default function Navbar({ language, setLanguage, onOpenResumeModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', labelKy: 'Мен жөнүндө', labelRu: 'Обо мне', labelEn: 'About', icon: GraduationCap },
    { href: '#experience', labelKy: 'Тажрыйба', labelRu: 'Опыт', labelEn: 'Experience', icon: Briefcase },
    { href: '#education', labelKy: 'Билим', labelRu: 'Образование', labelEn: 'Education', icon: BookOpen },
    { href: '#skills', labelKy: 'Компетенциялар', labelRu: 'Навыки', labelEn: 'Skills', icon: Sparkles },
    { href: '#certificates', labelKy: 'Жетишкендиктер', labelRu: 'Достижения', labelEn: 'Achievements', icon: Award },
    { href: '#resources', labelKy: 'Ресурстар', labelRu: 'Ресурсы', labelEn: 'EdTech', icon: BookOpen },
    { href: '#contact', labelKy: 'Байланыш', labelRu: 'Контакты', labelEn: 'Contact', icon: MessageCircle }
  ];

  const getRoleLabel = () => {
    if (language === 'ky') return 'Улуттук мастер-тренер';
    if (language === 'ru') return 'Национальный мастер-тренер';
    return 'National Master Trainer';
  };

  const getNavLabel = (link: typeof navLinks[0]) => {
    if (language === 'ky') return link.labelKy;
    if (language === 'ru') return link.labelRu;
    return link.labelEn;
  };

  return (
    <header 
      id="main-navigation" 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/85 backdrop-blur-md border-b border-gray-200/80 py-3 shadow-sm' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a 
          href="#" 
          id="brand-logo-link"
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 rounded-xl bg-[#6366F1] flex items-center justify-center text-white font-bold text-xl shadow-md shadow-indigo-500/25 group-hover:scale-105 transition-transform duration-300">
            ∑
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-black text-lg sm:text-xl tracking-tight text-[#1A1A1A] group-hover:text-[#6366F1] transition-colors">
                {language === 'en' ? 'Aisana Abdrakhmanova' : 'Айсана Абдрахманова'}
              </span>
              <span className="inline-block w-2 h-2 rounded-full bg-[#6366F1] animate-pulse"></span>
            </div>
            <p className="text-[11px] sm:text-xs font-semibold text-[#6366F1] flex items-center gap-1">
              <span>{getRoleLabel()}</span>
              <span className="text-gray-300">•</span>
              <span className="text-gray-500 font-bold">№0014</span>
            </p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/90 p-1.5 rounded-full border border-gray-200/80 shadow-sm backdrop-blur-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              id={`nav-link-${link.href.replace('#', '')}`}
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-gray-600 hover:text-[#6366F1] hover:bg-indigo-50/80 transition-all duration-200"
            >
              {getNavLabel(link)}
            </a>
          ))}
        </nav>

        {/* Action Controls: Language Switcher, CV Button & WhatsApp */}
        <div className="hidden md:flex items-center gap-3">
          
          {/* Language Switcher with KG, RU, EN */}
          <div className="flex items-center bg-gray-100 border border-gray-200 rounded-full p-1 text-xs font-bold">
            <button
              id="lang-btn-ky"
              onClick={() => setLanguage('ky')}
              className={`px-2.5 py-1 rounded-full transition-all ${
                language === 'ky' 
                  ? 'bg-[#6366F1] text-white shadow-sm font-bold' 
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              KG
            </button>
            <button
              id="lang-btn-ru"
              onClick={() => setLanguage('ru')}
              className={`px-2.5 py-1 rounded-full transition-all ${
                language === 'ru' 
                  ? 'bg-[#6366F1] text-white shadow-sm font-bold' 
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              RU
            </button>
            <button
              id="lang-btn-en"
              onClick={() => setLanguage('en')}
              className={`px-2.5 py-1 rounded-full transition-all ${
                language === 'en' 
                  ? 'bg-[#6366F1] text-white shadow-sm font-bold' 
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              EN
            </button>
          </div>

          {/* CV / Resume Button */}
          <button
            id="open-resume-btn-header"
            onClick={onOpenResumeModal}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-gray-200 hover:border-[#6366F1] bg-white hover:bg-indigo-50/50 text-[#1A1A1A] text-xs font-bold transition-all shadow-sm"
            title={language === 'ky' ? 'Резюмени көрүү жана басып чыгаруу' : language === 'ru' ? 'Просмотр и печать резюме' : 'View and print full CV'}
          >
            <FileText className="w-3.5 h-3.5 text-[#6366F1]" />
            <span>{language === 'en' ? 'CV / Resume' : 'Резюме'}</span>
          </button>

          {/* Quick WhatsApp button */}
          <a
            id="header-whatsapp-btn"
            href="https://wa.me/996776613730?text=%D0%A1%D0%B0%D0%BB%D0%B0%D0%BC%D0%B0%D1%82%D1%81%D1%8B%D0%B7%D0%B1%D1%8B%2C%20%D0%90%D0%B9%D1%81%D0%B0%D0%BD%D0%B0!%20"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-[#1A1A1A] hover:bg-[#6366F1] text-white font-bold text-xs transition-all shadow-md hover:shadow-lg active:scale-95"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>{language === 'ky' ? 'Байланышуу' : language === 'ru' ? 'Связаться' : 'Contact'}</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          {/* Mobile Language Switcher */}
          <div className="flex items-center bg-gray-100 border border-gray-200 rounded-full p-0.5 text-[11px] font-bold">
            {(['ky', 'ru', 'en'] as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`px-2 py-0.5 rounded-full transition-all ${
                  language === lang 
                    ? 'bg-[#6366F1] text-white shadow-xs font-bold' 
                    : 'text-gray-600'
                }`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>

          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-white border border-gray-200 text-[#1A1A1A] hover:text-[#6366F1] focus:outline-none shadow-sm"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 border-b border-gray-200 backdrop-blur-xl px-4 pt-3 pb-6 shadow-xl"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold text-gray-700 hover:bg-indigo-50 hover:text-[#6366F1] transition-colors"
                  >
                    <Icon className="w-4 h-4 text-[#6366F1]" />
                    <span>{getNavLabel(link)}</span>
                  </a>
                );
              })}

              <div className="pt-3 mt-2 border-t border-gray-100 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResumeModal();
                  }}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-gray-50 text-[#1A1A1A] text-sm font-bold border border-gray-200 shadow-sm"
                >
                  <FileText className="w-4 h-4 text-[#6366F1]" />
                  <span>{language === 'ky' ? 'Толук Резюмени көрүү (CV)' : language === 'ru' ? 'Полное резюме (CV)' : 'View Complete CV / Resume'}</span>
                </button>

                <a
                  href="https://wa.me/996776613730?text=%D0%A1%D0%B0%D0%BB%D0%B0%D0%BC%D0%B0%D1%82%D1%81%D1%8B%D0%B7%D0%B1%D1%8B%2C%20%D0%90%D0%B9%D1%81%D0%B0%D0%BD%D0%B0!%20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-[#1A1A1A] text-white font-bold text-sm shadow-md"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>{language === 'ky' ? 'WhatsApp аркылуу жазуу' : language === 'ru' ? 'Написать в WhatsApp' : 'Direct WhatsApp Chat'}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
