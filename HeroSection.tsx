import { useState, useRef, ChangeEvent } from 'react';
import { motion } from 'motion/react';
import { 
  Award, 
  Sparkles, 
  GraduationCap, 
  FileText, 
  MessageCircle, 
  ArrowRight, 
  CheckCircle2, 
  MapPin, 
  Calculator,
  Compass,
  Layers,
  ChevronDown,
  Camera,
  RotateCcw
} from 'lucide-react';
import { Language } from '../types';
import { portfolioData } from '../data/portfolioData';
import portraitImg from '../assets/images/aisana_portrait_1788703673827.jpg';

interface HeroSectionProps {
  language: Language;
  onOpenResumeModal: () => void;
}

export default function HeroSection({ language, onOpenResumeModal }: HeroSectionProps) {
  const { profile } = portfolioData;
  const [customPhoto, setCustomPhoto] = useState<string | null>(() => {
    return localStorage.getItem('aisana_custom_photo');
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setCustomPhoto(result);
          localStorage.setItem('aisana_custom_photo', result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetPhoto = () => {
    setCustomPhoto(null);
    localStorage.removeItem('aisana_custom_photo');
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[90vh] flex flex-col justify-center pt-28 pb-16 overflow-hidden bg-[#FDFCFB]"
    >
      {/* Subtle Background Glows & Mathematical Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-70 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-indigo-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-10 -right-10 w-96 h-96 bg-pink-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-100/50 rounded-full blur-3xl pointer-events-none" />

      {/* Floating Mathematical Symbols */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <motion.div 
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }} 
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-24 left-[8%] text-2xl font-mono text-[#6366F1]/20 font-bold"
        >
          ∫ f(x)dx
        </motion.div>
        <motion.div 
          animate={{ y: [0, 18, 0], rotate: [0, -6, 0] }} 
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-44 right-[10%] text-3xl font-mono text-pink-500/20 font-bold"
        >
          ∑ (xᵢ - μ)²
        </motion.div>
        <motion.div 
          animate={{ y: [0, -12, 0] }} 
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-32 left-[12%] text-2xl font-mono text-amber-500/25 font-bold"
        >
          π ≈ 3.14159
        </motion.div>
        <motion.div 
          animate={{ y: [0, 14, 0] }} 
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-28 right-[15%] text-2xl font-mono text-indigo-400/20 font-bold"
        >
          a² + b² = c²
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & Profile Info */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* National Master-Trainer Verified Pill */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-[#6366F1] text-xs sm:text-sm font-bold tracking-wider uppercase mb-5 shadow-sm"
            >
              <Award className="w-4 h-4 text-[#6366F1]" />
              <span>{language === 'ky' ? profile.tagline.ky : language === 'ru' ? profile.tagline.ru : profile.tagline.en}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#6366F1]"></span>
            </motion.div>

            {/* Name Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#1A1A1A] leading-[1.1] mb-5"
            >
              {language === 'en' ? (
                <>
                  <span className="text-[#6366F1]">Aisana</span> Abdrakhmanova
                </>
              ) : (
                <>
                  <span className="text-[#6366F1]">Айсана</span> Абдрахманова
                </>
              )}
            </motion.h1>

            {/* Dynamic Roles & Specialization Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center gap-2.5 mb-6"
            >
              {(language === 'ky' ? profile.titles.ky : language === 'ru' ? profile.titles.ru : profile.titles.en).map((title, idx) => {
                const badgeStyles = [
                  'bg-[#6366F1] text-white font-bold shadow-sm shadow-indigo-500/20',
                  'bg-pink-50 text-pink-700 border border-pink-200/70 font-bold',
                  'bg-amber-50 text-amber-800 border border-amber-200/70 font-bold',
                  'bg-emerald-50 text-emerald-800 border border-emerald-200/70 font-bold'
                ];

                return (
                  <span
                    key={idx}
                    className={`text-xs sm:text-sm px-3.5 py-1.5 rounded-full flex items-center gap-1.5 ${badgeStyles[idx % badgeStyles.length]}`}
                  >
                    {idx === 0 && <Award className="w-3.5 h-3.5" />}
                    {idx === 1 && <Calculator className="w-3.5 h-3.5 text-pink-600" />}
                    {idx === 2 && <GraduationCap className="w-3.5 h-3.5 text-amber-600" />}
                    {idx === 3 && <Sparkles className="w-3.5 h-3.5 text-emerald-600" />}
                    {title}
                  </span>
                );
              })}
            </motion.div>

            {/* Short Bio Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-gray-600 font-medium leading-relaxed max-w-2xl mb-8"
            >
              {language === 'ky' ? profile.shortBio.ky : language === 'ru' ? profile.shortBio.ru : profile.shortBio.en}
            </motion.p>

            {/* Primary Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8 w-full sm:w-auto"
            >
              <a
                id="hero-contact-whatsapp-btn"
                href="https://wa.me/996776613730?text=%D0%A1%D0%B0%D0%BB%D0%B0%D0%BC%D0%B0%D1%82%D1%81%D1%8B%D0%B7%D0%B1%D1%8B%2C%20%D0%90%D0%B9%D1%81%D0%B0%D0%BD%D0%B0!%20%D0%A1%D0%B8%D0%B7%D0%B4%D0%B8%D0%BD%20%D0%BF%D0%BE%D1%80%D1%82%D1%84%D0%BE%D0%BB%D0%B8%D0%BE%D2%A3%D1%83%D0%B7%D0%B4%D1%83%20%D0%BA%D3%A9%D1%80%D2%AF%D0%BF%20%D0%B6%D0%B0%D0%B7%D1%8B%D0%BF%20%D0%B6%D0%B0%D1%82%D0%B0%D0%BC."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#1A1A1A] hover:bg-black text-white font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle className="w-5 h-5 text-emerald-400" />
                <span>{language === 'ky' ? 'Байланышуу (WhatsApp)' : language === 'ru' ? 'Связаться в WhatsApp' : 'Contact (WhatsApp)'}</span>
              </a>

              <button
                id="hero-open-resume-btn"
                onClick={onOpenResumeModal}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-gray-50 text-[#1A1A1A] font-bold text-sm sm:text-base border border-gray-200 hover:border-[#6366F1] shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <FileText className="w-5 h-5 text-[#6366F1]" />
                <span>{language === 'ky' ? 'Резюмени кароо (CV)' : language === 'ru' ? 'Смотреть резюме (CV)' : 'View Curriculum Vitae (CV)'}</span>
              </button>

              <a
                href="#interactive-challenge"
                id="hero-try-math-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3.5 text-xs sm:text-sm font-bold text-[#6366F1] hover:text-indigo-700 transition-colors"
              >
                <span>{language === 'ky' ? 'PISA логикалык тапшырмасын чечүү' : language === 'ru' ? 'Решить задачу PISA' : 'Solve PISA Challenge'}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Quick Location & Availability */}
            <div className="flex flex-wrap items-center gap-6 text-xs text-gray-500 font-semibold">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#6366F1]" />
                <span>{language === 'ky' ? profile.location.ky : language === 'ru' ? profile.location.ru : profile.location.en}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{language === 'ky' ? 'Тренингдер жана сабактарга ачык' : language === 'ru' ? 'Открыта к тренингам и урокам' : 'Open for Trainings & Lessons'}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Portrait & Floating Achievement Cards */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Outer Decorative Frame matching Vibrant Palette */}
            <div className="relative w-72 sm:w-80 md:w-96 aspect-[3/4] max-w-full">
              
              {/* Vibrant Glow background behind portrait */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-300 via-pink-300 to-amber-200 rounded-[44px] blur-2xl opacity-60 transform -rotate-2 scale-95" />
              
              {/* Portrait Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative w-full h-full rounded-[40px] overflow-hidden border-8 border-white bg-white shadow-2xl group"
              >
                <img
                  src={customPhoto || portraitImg}
                  alt={language === 'ky' ? profile.name.ky : language === 'ru' ? profile.name.ru : profile.name.en}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.02] group-hover:scale-105 transition-transform duration-700"
                />

                {/* Subtle Gradient Overlay at the bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent pointer-events-none" />

                {/* Photo Change Controls */}
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handlePhotoChange} 
                  accept="image/*" 
                  className="hidden" 
                />
                
                <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    id="hero-change-photo-btn"
                    className="p-2 rounded-full bg-white/90 hover:bg-white text-gray-800 shadow-md backdrop-blur-md transition-all hover:scale-105 active:scale-95 text-xs font-bold flex items-center gap-1"
                    title={language === 'ky' ? 'Башка сүрөт жүктөө' : language === 'ru' ? 'Загрузить другое фото' : 'Upload custom photo'}
                  >
                    <Camera className="w-4 h-4 text-[#6366F1]" />
                  </button>
                  {customPhoto && (
                    <button
                      onClick={handleResetPhoto}
                      id="hero-reset-photo-btn"
                      className="p-2 rounded-full bg-white/90 hover:bg-white text-gray-800 shadow-md backdrop-blur-md transition-all hover:scale-105 active:scale-95 text-xs font-bold"
                      title={language === 'ky' ? 'Баштапкыга кайтаруу' : language === 'ru' ? 'Сбросить фото' : 'Reset to default photo'}
                    >
                      <RotateCcw className="w-3.5 h-3.5 text-rose-500" />
                    </button>
                  )}
                </div>

                {/* Bottom Card Inside Portrait */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-gray-100 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-black text-[#1A1A1A]">
                        {language === 'en' ? 'Aisana Abdrakhmanova' : 'Айсана Абдрахманова'}
                      </h4>
                      <p className="text-[11px] text-[#6366F1] font-bold">
                        {language === 'ky' 
                          ? 'Математика мугалими & Мастер-тренер' 
                          : language === 'ru' 
                          ? 'Учитель математики & Мастер-тренер' 
                          : 'Math Educator & Master Trainer'}
                      </p>
                    </div>
                    <div className="w-9 h-9 rounded-xl bg-indigo-100 text-[#6366F1] flex items-center justify-center font-bold">
                      <Award className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge 1: 12-Year Education Master Trainer */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -top-4 -left-4 sm:-left-6 bg-white border border-gray-100 rounded-2xl p-3.5 shadow-xl flex items-center gap-3 z-20"
              >
                <div className="w-11 h-11 rounded-xl bg-indigo-100 text-[#6366F1] flex items-center justify-center">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                    {language === 'ky' ? 'Улуттук статус' : language === 'ru' ? 'Национальный статус' : 'National Status'}
                  </div>
                  <div className="text-xs font-black text-[#1A1A1A]">
                    {language === 'ky' ? '12 жылдык билим' : language === 'ru' ? '12-летнее образование' : '12-Year Education'}
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge 2: PISA & STEM Methodology */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -bottom-4 -right-4 sm:-right-6 bg-white border border-gray-100 rounded-2xl p-3.5 shadow-xl flex items-center gap-3 z-20"
              >
                <div className="w-11 h-11 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                    {language === 'ky' ? 'Заманбап усулдар' : language === 'ru' ? 'Современные подходы' : 'Modern Methods'}
                  </div>
                  <div className="text-xs font-black text-pink-600">
                    PISA · STEM · STEAM
                  </div>
                </div>
              </motion.div>

            </div>
          </div>

        </div>

        {/* Bottom Key Stats Cards (Vibrant Palette 4-Card layout) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {profile.keyStats.map((stat, idx) => {
            const iconBoxes = [
              { bg: 'bg-indigo-100', text: 'text-[#6366F1]', icon: Layers },
              { bg: 'bg-pink-100', text: 'text-pink-600', icon: Award },
              { bg: 'bg-amber-100', text: 'text-amber-600', icon: Calculator },
              { bg: 'bg-emerald-100', text: 'text-emerald-600', icon: Sparkles }
            ];
            const currentBox = iconBoxes[idx % iconBoxes.length];
            const Icon = currentBox.icon;

            const label = language === 'ky' ? stat.labelKy : language === 'ru' ? stat.labelRu : (stat.labelEn || stat.labelRu);
            const sub = language === 'ky' ? stat.subKy : language === 'ru' ? stat.subRu : (stat.subEn || stat.subRu);

            return (
              <div 
                key={idx} 
                id={`stat-box-${idx}`}
                className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-all flex items-center gap-5"
              >
                <div className={`w-14 h-14 ${currentBox.bg} ${currentBox.text} rounded-2xl flex items-center justify-center shrink-0`}>
                  <Icon className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#1A1A1A] tracking-tight font-mono">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-gray-600">
                    {label}
                  </div>
                  <div className={`text-[11px] font-bold ${currentBox.text} mt-0.5`}>
                    {sub}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>

      </div>

      {/* Down arrow anchor indicator */}
      <div className="flex justify-center mt-12">
        <a 
          href="#about" 
          aria-label="Scroll to About section"
          className="p-2.5 rounded-full bg-white border border-gray-200 text-gray-400 hover:text-[#6366F1] shadow-sm transition-colors animate-bounce"
        >
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
