import { useState, useRef, ChangeEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Award, 
  ShieldCheck, 
  Building, 
  X, 
  FileBadge,
  Sparkles,
  Camera,
  RotateCcw,
  Maximize2,
  CheckCircle2,
  Star,
  GraduationCap,
  Presentation
} from 'lucide-react';
import { Language, CertificateItem } from '../types';
import { portfolioData } from '../data/portfolioData';
import defaultSecomAwardImg from '../assets/images/secom_certificate_award_1788706822259.jpg';
import defaultTrainerLectureImg from '../assets/images/master_trainer_lecture_1788707262654.jpg';

interface CertificatesSectionProps {
  language: Language;
}

interface LightboxItem {
  url: string;
  title: string;
  subtitle: string;
  caption: string;
  badge: string;
  uploadKey: string;
}

export default function CertificatesSection({ language }: CertificatesSectionProps) {
  const { certificates } = portfolioData;
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);
  const [spotlightTab, setSpotlightTab] = useState<'trainer' | 'secom'>('trainer');
  const [lightboxData, setLightboxData] = useState<LightboxItem | null>(null);

  // Custom photo upload state with localStorage persistence
  const [customPhotoSecom, setCustomPhotoSecom] = useState<string>(() => {
    try {
      return localStorage.getItem('aisana_custom_photo_secom_award') || '';
    } catch {
      return '';
    }
  });

  const [customPhotoTrainer, setCustomPhotoTrainer] = useState<string>(() => {
    try {
      return localStorage.getItem('aisana_custom_photo_trainer_lecture') || '';
    } catch {
      return '';
    }
  });

  const [activeUploadTarget, setActiveUploadTarget] = useState<'secom' | 'trainer'>('trainer');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const secomPhotoUrl = customPhotoSecom || defaultSecomAwardImg;
  const trainerPhotoUrl = customPhotoTrainer || defaultTrainerLectureImg;

  const handlePhotoUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          if (activeUploadTarget === 'secom') {
            setCustomPhotoSecom(result);
            try {
              localStorage.setItem('aisana_custom_photo_secom_award', result);
            } catch {
              // ignore quota
            }
          } else {
            setCustomPhotoTrainer(result);
            try {
              localStorage.setItem('aisana_custom_photo_trainer_lecture', result);
            } catch {
              // ignore quota
            }
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetPhoto = (target: 'secom' | 'trainer') => {
    if (target === 'secom') {
      setCustomPhotoSecom('');
      try {
        localStorage.removeItem('aisana_custom_photo_secom_award');
      } catch {
        // ignore
      }
    } else {
      setCustomPhotoTrainer('');
      try {
        localStorage.removeItem('aisana_custom_photo_trainer_lecture');
      } catch {
        // ignore
      }
    }
  };

  const triggerUpload = (target: 'secom' | 'trainer') => {
    setActiveUploadTarget(target);
    setTimeout(() => {
      fileInputRef.current?.click();
    }, 50);
  };

  const filters = [
    { id: 'all', labelKy: 'Бардык жетишкендиктер', labelRu: 'Все сертификаты и награды', labelEn: 'All Honors & Certs' },
    { id: 'trainer', labelKy: 'Улуттук мастер-тренер', labelRu: 'Мастер-тренер (№0014)', labelEn: 'Master Trainer (№0014)' },
    { id: 'award', labelKy: '★ Жетишкендиктер & SECOM', labelRu: '★ Награды и SECOM', labelEn: '★ Honors & SECOM' },
    { id: 'pisa_stem', labelKy: 'PISA & STEM', labelRu: 'PISA и STEM', labelEn: 'PISA & STEM' },
    { id: 'math', labelKy: 'Математика & Геометрия', labelRu: 'Математика и геометрия', labelEn: 'Math & Geometry' }
  ];

  const filteredCerts = certificates.filter(c => {
    if (activeFilter === 'all') return true;
    return c.category === activeFilter;
  });

  const getCertPhotoData = (cert: CertificateItem): { url: string; target: 'secom' | 'trainer' } | null => {
    if (cert.id === 'cert-1' || cert.photoKey === 'trainer_lecture') {
      return { url: trainerPhotoUrl, target: 'trainer' };
    }
    if (cert.id === 'cert-2' || cert.photoKey === 'secom_award') {
      return { url: secomPhotoUrl, target: 'secom' };
    }
    return null;
  };

  // Active spotlight item based on filter and tab
  const effectiveSpotlightTab = activeFilter === 'trainer' ? 'trainer' : activeFilter === 'award' ? 'secom' : spotlightTab;

  return (
    <section id="certificates" className="py-20 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hidden File Input for Custom Photo */}
        <input 
          type="file" 
          ref={fileInputRef}
          onChange={handlePhotoUpload}
          accept="image/*"
          className="hidden"
          aria-label="Upload photo"
        />

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-[#6366F1] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Award className="w-3.5 h-3.5" />
            <span>
              {language === 'ky' ? 'Квалификация жана жетишкендиктер' : language === 'ru' ? 'Квалификация и достижения' : 'Professional Credentials & Honors'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A1A] tracking-tight">
            {language === 'ky' ? (
              <>
                Сертификаттар жана <span className="text-[#6366F1]">жетишкендиктер</span>
              </>
            ) : language === 'ru' ? (
              <>
                Официальные <span className="text-[#6366F1]">сертификаты и достижения</span>
              </>
            ) : (
              <>
                Official <span className="text-[#6366F1]">Certificates & Honors</span>
              </>
            )}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 font-medium">
            {language === 'ky'
              ? 'Улуттук мастер-тренерлик (№0014), республикалык институттар жана алдыңкы билим берүү борборлорунун расмий документтери'
              : language === 'ru'
              ? 'Квалификация национального мастер-тренера (№0014), официальные сертификаты и награды ведущих образовательных институтов'
              : 'National Master Trainer status (№0014), accredited certificates, and verified pedagogical honors'}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f.id}
              id={`cert-filter-${f.id}`}
              onClick={() => {
                setActiveFilter(f.id);
                if (f.id === 'trainer') setSpotlightTab('trainer');
                if (f.id === 'award') setSpotlightTab('secom');
              }}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                activeFilter === f.id
                  ? 'bg-[#1A1A1A] text-white shadow-md'
                  : 'bg-white text-gray-600 hover:text-[#6366F1] border border-gray-200 shadow-xs'
              }`}
            >
              {language === 'ky' ? f.labelKy : language === 'ru' ? f.labelRu : f.labelEn}
            </button>
          ))}
        </div>

        {/* FEATURED ACHIEVEMENT SPOTLIGHT CARD */}
        {(activeFilter === 'all' || activeFilter === 'trainer' || activeFilter === 'award') && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 rounded-3xl bg-white border-2 border-indigo-100 shadow-xl overflow-hidden"
          >
            {/* Spotlight Tab Switcher (if 'all' filter) */}
            {activeFilter === 'all' && (
              <div className="bg-gray-50 px-6 py-3 border-b border-gray-100 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs font-bold text-gray-500">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span>{language === 'ky' ? 'Негизги жетишкендикти тандоо:' : 'Выбор ключевого достижения:'}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setSpotlightTab('trainer')}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                      effectiveSpotlightTab === 'trainer'
                        ? 'bg-[#1A1A1A] text-white shadow-sm'
                        : 'bg-white text-gray-600 hover:text-black border border-gray-200'
                    }`}
                  >
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>{language === 'ky' ? 'Улуттук мастер-тренер (№0014)' : 'Мастер-тренер (№0014)'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSpotlightTab('secom')}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                      effectiveSpotlightTab === 'secom'
                        ? 'bg-[#1A1A1A] text-white shadow-sm'
                        : 'bg-white text-gray-600 hover:text-black border border-gray-200'
                    }`}
                  >
                    <Award className="w-3.5 h-3.5 text-amber-400" />
                    <span>{language === 'ky' ? 'SECOM Сыйлоо аземи' : 'SECOM Награда'}</span>
                  </button>
                </div>
              </div>
            )}

            {/* Content for Master Trainer or SECOM */}
            {effectiveSpotlightTab === 'trainer' ? (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Photo Container: Master Trainer Lecture */}
                <div className="lg:col-span-5 relative bg-black flex items-center justify-center overflow-hidden group min-h-[340px]">
                  <img
                    src={trainerPhotoUrl}
                    alt={language === 'ky' ? 'Улуттук мастер-тренер лекциясы' : 'Лекция национального мастер-тренера'}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center max-h-[440px] transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Ambient vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A1A1A]/85 backdrop-blur-md text-amber-300 text-xs font-black border border-amber-400/30 shadow-lg">
                      <Star className="w-3.5 h-3.5 fill-amber-300" />
                      <span>{language === 'ky' ? 'Улуттук статус • №0014' : 'Национальный статус • №0014'}</span>
                    </span>
                  </div>

                  {/* Controls */}
                  <div className="absolute bottom-4 right-4 z-10 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setLightboxData({
                        url: trainerPhotoUrl,
                        title: language === 'ky' ? '12 жылдык билим берүү боюнча Улуттук мастер-тренинг' : 'Мастер-тренинг по 12-летнему образованию',
                        subtitle: 'РИПКПР & МОиН КР • 2026-ж.',
                        caption: language === 'ky'
                          ? 'Айсана Абдрахманова интерактивдүү панелде Кыргыз Республикасынын билим берүүнү өнүктүрүү программасы (2021–2040), ченемдик-усулдук система жана 12 жылдык билим берүүнүн стандарттары боюнча мугалимдерге лекция өтүүдө.'
                          : 'Интерактивная лекция-семинар национального мастер-тренера для педагогов по нормативно-методической системе и Программе развития образования КР (2021–2040).',
                        badge: 'Улуттук мастер-тренер',
                        uploadKey: 'trainer'
                      })}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 hover:bg-white text-[#1A1A1A] text-xs font-bold shadow-lg backdrop-blur-md transition-transform hover:scale-105"
                      title="Zoom photo"
                    >
                      <Maximize2 className="w-3.5 h-3.5 text-[#6366F1]" />
                      <span>{language === 'ky' ? 'Чоңойтуу' : 'Увеличить'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => triggerUpload('trainer')}
                      className="p-2 rounded-full bg-white/90 hover:bg-white text-[#6366F1] shadow-lg backdrop-blur-md transition-transform hover:scale-105"
                      title="Replace photo"
                      aria-label="Upload photo"
                    >
                      <Camera className="w-4 h-4" />
                    </button>

                    {customPhotoTrainer && (
                      <button
                        type="button"
                        onClick={() => handleResetPhoto('trainer')}
                        className="p-2 rounded-full bg-black/70 hover:bg-black text-white shadow-lg backdrop-blur-md transition-transform hover:scale-105"
                        title="Reset photo"
                        aria-label="Reset photo"
                      >
                        <RotateCcw className="w-4 h-4" />
                      </button>
                    )}
                  </div>

                  <div className="absolute bottom-4 left-4 z-10 text-white pointer-events-none max-w-[65%]">
                    <span className="text-[11px] font-bold text-white/90 block truncate drop-shadow-md">
                      {language === 'ky' ? 'Интерактивдүү панелде лекция' : 'Интерактивная лекция у экрана'}
                    </span>
                    <span className="text-[10px] text-white/75 font-mono drop-shadow-sm">
                      РИПКПР & МОиН КР • 2026
                    </span>
                  </div>
                </div>

                {/* Details Container */}
                <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-br from-white via-indigo-50/25 to-white">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full bg-indigo-100 text-[#6366F1] text-xs font-mono font-black">
                        2026-жыл
                      </span>
                      <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold inline-flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>{language === 'ky' ? 'Улуттук Сертификат №0014' : 'Национальный сертификат №0014'}</span>
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-bold border border-purple-100">
                        12 жылдык билим берүү
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-[#1A1A1A] leading-tight mb-3">
                      {language === 'ky' 
                        ? '12 жылдык билим берүүнүн жаңыланган мазмунун жайылтуу боюнча Улуттук мастер-тренер' 
                        : language === 'ru' 
                        ? 'Национальный мастер-тренер по обновленному содержанию 12-летнего образования' 
                        : 'National Master Trainer on Disseminating the 12-Year Curriculum'}
                    </h3>

                    <div className="flex items-center gap-2 text-xs font-bold text-[#6366F1] mb-4">
                      <Building className="w-4 h-4 shrink-0" />
                      <span>{language === 'ky' ? 'РИПКПР & Билим берүү жана илим министрлиги' : 'РИПКПР & Министерство образования и науки КР'}</span>
                    </div>

                    <p className="text-sm text-gray-600 leading-relaxed mb-6 font-medium">
                      {language === 'ky'
                        ? 'Кыргыз Республикасынын билим берүүнү өнүктүрүү программасы (2021–2040-жж.), Конституция жана «Билим берүү жөнүндө» Мыйзамы, 12 жылдык мектептик билим берүүнүн ченемдик-усулдук системасы жана мугалимдердин кесиптик даярдыгы боюнча интерактивдүү тренинг-семинар.'
                        : language === 'ru'
                        ? 'Интерактивный лекционно-практический семинар для педагогов республики по нормативно-методической системе, Программе развития образования КР (2021–2040) и внедрению 12-летнего школьного образования.'
                        : 'Interactive master lecture seminar for educators on the regulatory-methodological system, National Education Development Program (2021–2040), and modern 12-year curriculum transition.'}
                    </p>

                    {/* Highlights Checkmarks */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                      <div className="flex items-start gap-2 text-xs text-gray-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{language === 'ky' ? 'Ченемдик-усулдук система жана мыйзамдар' : 'Нормативно-методическая система и закон об образовании'}</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-gray-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{language === 'ky' ? 'Билим берүүнү өнүктүрүү программасы (2021–2040)' : 'Программа развития образования КР (2021–2040)'}</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-gray-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{language === 'ky' ? 'Интерактивдүү панелде санариптик усулдар' : 'Цифровые методики на интерактивной панели'}</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-gray-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{language === 'ky' ? 'Мугалимдерди даярдоо жана квалификация' : 'Повышение квалификации школьных учителей'}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Actions */}
                  <div className="pt-4 border-t border-indigo-100/80 flex flex-wrap items-center justify-between gap-3">
                    <span className="text-xs text-gray-500 font-medium flex items-center gap-1.5">
                      <Presentation className="w-3.5 h-3.5 text-indigo-600" />
                      <span>{language === 'ky' ? 'Интерактивдүү лекция & тренинг' : 'Интерактивная лекция и тренинг'}</span>
                    </span>

                    <button
                      type="button"
                      onClick={() => setLightboxData({
                        url: trainerPhotoUrl,
                        title: language === 'ky' ? '12 жылдык билим берүү боюнча Улуттук мастер-тренинг' : 'Мастер-тренинг по 12-летнему образованию',
                        subtitle: 'РИПКПР & МОиН КР • 2026-ж.',
                        caption: language === 'ky'
                          ? 'Айсана Абдрахманова интерактивдүү панелде Кыргыз Республикасынын билим берүүнү өнүктүрүү программасы (2021–2040), ченемдик-усулдук система жана 12 жылдык билим берүүнүн стандарттары боюнча мугалимдерге лекция өтүүдө.'
                          : 'Интерактивная лекция-семинар национального мастер-тренера для педагогов по нормативно-методической системе и Программе развития образования КР (2021–2040).',
                        badge: 'Улуттук мастер-тренер',
                        uploadKey: 'trainer'
                      })}
                      className="px-4 py-2 rounded-full bg-[#1A1A1A] hover:bg-black text-white text-xs font-bold transition-all shadow-md hover:scale-102 flex items-center gap-1.5"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>{language === 'ky' ? 'Толук сүрөттү көрүү' : language === 'ru' ? 'Смотреть фото' : 'View Master Trainer Photo'}</span>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* Content for SECOM Award */
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                <div className="lg:col-span-5 relative bg-black flex items-center justify-center overflow-hidden group min-h-[340px]">
                  <img
                    src={secomPhotoUrl}
                    alt="SECOM Certificate Award"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center max-h-[440px] transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" />

                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A1A1A]/85 backdrop-blur-md text-amber-300 text-xs font-black border border-amber-400/30 shadow-lg">
                      <Star className="w-3.5 h-3.5 fill-amber-300" />
                      <span>{language === 'ky' ? 'Өзгөчө жетишкендик' : 'Особое достижение'}</span>
                    </span>
                  </div>

                  <div className="absolute bottom-4 right-4 z-10 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setLightboxData({
                        url: secomPhotoUrl,
                        title: language === 'ky' ? 'SECOM Сертификаты жана салтанаттуу сыйлоо аземи' : 'Вручение сертификата SECOM',
                        subtitle: '«SECOM» билим берүү борбору • 2024–2025',
                        caption: language === 'ky'
                          ? '«SECOM» билим берүү борборунун жетекчилиги тарабынан математикалык цикл боюнча педагогикалык үзүрлүү эмгеги, геометрияны окутуунун усулдары жана окуучуларды даярдоодогу жогорку жетишкендиктери үчүн расмий сертификат тапшырылууда.'
                          : 'Вручение официального сертификата образовательного учреждения SECOM за выдающиеся успехи в преподавании математики и геометрии.',
                        badge: 'SECOM Сертификаты & Сыйлоо',
                        uploadKey: 'secom'
                      })}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 hover:bg-white text-[#1A1A1A] text-xs font-bold shadow-lg backdrop-blur-md transition-transform hover:scale-105"
                      title="Zoom photo"
                    >
                      <Maximize2 className="w-3.5 h-3.5 text-[#6366F1]" />
                      <span>{language === 'ky' ? 'Чоңойтуу' : 'Увеличить'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => triggerUpload('secom')}
                      className="p-2 rounded-full bg-white/90 hover:bg-white text-[#6366F1] shadow-lg backdrop-blur-md transition-transform hover:scale-105"
                      title="Replace photo"
                      aria-label="Upload photo"
                    >
                      <Camera className="w-4 h-4" />
                    </button>

                    {customPhotoSecom && (
                      <button
                        type="button"
                        onClick={() => handleResetPhoto('secom')}
                        className="p-2 rounded-full bg-black/70 hover:bg-black text-white shadow-lg backdrop-blur-md transition-transform hover:scale-105"
                        title="Reset photo"
                        aria-label="Reset photo"
                      >
                        <RotateCcw className="w-4 h-4" />
                      </button>
                    )}
                  </div>

                  <div className="absolute bottom-4 left-4 z-10 text-white pointer-events-none max-w-[65%]">
                    <span className="text-[11px] font-bold text-white/90 block truncate drop-shadow-md">
                      {language === 'ky' ? '«SECOM» Билим берүү борбору' : 'Образовательный центр «SECOM»'}
                    </span>
                    <span className="text-[10px] text-white/75 font-mono drop-shadow-sm">
                      № LS230000235 • 2024–2025
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-br from-white via-indigo-50/20 to-white">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full bg-indigo-100 text-[#6366F1] text-xs font-mono font-black">
                        2024–2025
                      </span>
                      <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold inline-flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>{language === 'ky' ? 'Расмий тастыкталган' : 'Официально подтверждено'}</span>
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-mono font-semibold">
                        № LS230000235
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-[#1A1A1A] leading-tight mb-3">
                      {language === 'ky' 
                        ? 'SECOM Сертификаты жана салтанаттуу сыйлоо аземи' 
                        : 'Торжественное вручение официального сертификата SECOM'}
                    </h3>

                    <div className="flex items-center gap-2 text-xs font-bold text-[#6366F1] mb-4">
                      <Building className="w-4 h-4 shrink-0" />
                      <span>«SECOM» билим берүү мекемеси</span>
                      <span className="text-gray-300">•</span>
                      <span className="text-gray-600 font-semibold">Математикалык цикл</span>
                    </div>

                    <p className="text-sm text-gray-600 leading-relaxed mb-6 font-medium">
                      {language === 'ky'
                        ? '«SECOM» билим берүү борборунун жетекчилиги тарабынан математикалык цикл боюнча педагогикалык үзүрлүү эмгеги, геометрияны тереңдетип окутуунун натыйжалуу усулдары жана окуучуларды даярдоодогу жогорку жетишкендиктери үчүн берилген расмий сыйлык-сертификат.'
                        : 'Официальный сертификат, врученный руководством образовательного учреждения SECOM за выдающиеся успехи в преподавании математики и геометрии, высокий профессионализм и результативную подготовку учащихся.'}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                      <div className="flex items-start gap-2 text-xs text-gray-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Математика жана геометрияны окутуунун автордук усулдары</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-gray-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Окуучулардын олимпиадалык & сынак жогорку көрсөткүчтөрү</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-indigo-100/80 flex flex-wrap items-center justify-between gap-3">
                    <span className="text-xs text-gray-500 font-medium flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                      <span>{language === 'ky' ? 'Педагогикалык сыйлык жана тастыктама' : 'Педагогическая награда'}</span>
                    </span>

                    <button
                      type="button"
                      onClick={() => setLightboxData({
                        url: secomPhotoUrl,
                        title: language === 'ky' ? 'SECOM Сертификаты жана салтанаттуу сыйлоо аземи' : 'Вручение сертификата SECOM',
                        subtitle: '«SECOM» билим берүү борбору • 2024–2025',
                        caption: language === 'ky'
                          ? '«SECOM» билим берүү борборунун жетекчилиги тарабынан математикалык цикл боюнча педагогикалык үзүрлүү эмгеги, геометрияны окутуунун усулдары жана окуучуларды даярдоодогу жогорку жетишкендиктери үчүн расмий сертификат тапшырылууда.'
                          : 'Вручение официального сертификата образовательного учреждения SECOM за выдающиеся успехи в преподавании математики и геометрии.',
                        badge: 'SECOM Сертификаты & Сыйлоо',
                        uploadKey: 'secom'
                      })}
                      className="px-4 py-2 rounded-full bg-[#1A1A1A] hover:bg-black text-white text-xs font-bold transition-all shadow-md hover:scale-102 flex items-center gap-1.5"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>{language === 'ky' ? 'Толук сүрөттү көрүү' : 'Смотреть фото'}</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        )}

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredCerts.map((cert) => {
              const isNational = cert.id === 'cert-1';
              const isAward = cert.category === 'award' || cert.id === 'cert-2';
              const photoData = getCertPhotoData(cert);
              const title = language === 'ky' ? cert.titleKy : language === 'ru' ? cert.titleRu : (cert.titleEn || cert.titleRu);
              const issuer = language === 'ky' ? cert.issuerKy : language === 'ru' ? cert.issuerRu : (cert.issuerEn || cert.issuerRu);

              return (
                <motion.div
                  key={cert.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  id={`cert-card-${cert.id}`}
                  onClick={() => setSelectedCert(cert)}
                  className={`group relative rounded-3xl p-6 flex flex-col justify-between cursor-pointer transition-all duration-300 ${
                    isNational
                      ? 'bg-white border-2 border-[#6366F1] shadow-xl hover:border-indigo-600'
                      : isAward
                      ? 'bg-white border-2 border-amber-300 shadow-md hover:shadow-xl hover:border-amber-400'
                      : 'bg-white border border-gray-100 hover:border-indigo-200 shadow-xs hover:shadow-xl hover:-translate-y-1'
                  }`}
                >
                  {/* Top Badge & Number */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-mono font-bold text-[#6366F1] bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full">
                        {cert.year}
                      </span>
                      {cert.badge && (
                        <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${
                          isNational
                            ? 'bg-indigo-50 text-[#6366F1] border-indigo-200'
                            : isAward 
                            ? 'bg-amber-50 text-amber-800 border-amber-200' 
                            : 'bg-pink-50 text-pink-600 border-pink-100'
                        }`}>
                          {cert.badge}
                        </span>
                      )}
                    </div>

                    {/* Small Photo Preview if Cert has photo */}
                    {photoData && (
                      <div className="mb-3 rounded-xl overflow-hidden relative h-28 bg-black flex items-center justify-center">
                        <img 
                          src={photoData.url} 
                          alt="" 
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                        <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md text-white text-[10px] font-bold flex items-center gap-1">
                          <Camera className="w-3 h-3 text-amber-300" />
                          <span>{language === 'ky' ? 'Сүрөтү менен' : language === 'ru' ? 'С фото' : 'With photo'}</span>
                        </span>
                      </div>
                    )}

                    <h3 className="text-base font-black text-[#1A1A1A] group-hover:text-[#6366F1] transition-colors leading-snug mb-3">
                      {title}
                    </h3>

                    <div className="flex items-start gap-2 text-xs text-gray-500 mb-2">
                      <Building className="w-3.5 h-3.5 text-[#6366F1] shrink-0 mt-0.5" />
                      <span className="font-semibold text-gray-700">{issuer}</span>
                    </div>
                  </div>

                  {/* Bottom Footer Details */}
                  <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 text-gray-600 font-mono font-bold">
                      <FileBadge className="w-4 h-4 text-[#6366F1]" />
                      <span>{cert.certificateNumber}</span>
                    </div>

                    <span className="text-[#6366F1] font-bold group-hover:translate-x-0.5 transition-transform">
                      {language === 'ky' ? 'Толук көрүү →' : language === 'ru' ? 'Подробнее →' : 'View Details →'}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Certificate Details Modal */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
              onClick={() => setSelectedCert(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                className="bg-white border border-gray-100 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 text-gray-500 hover:text-black transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* If selected cert has photo, show preview in modal */}
                {(() => {
                  const photoData = getCertPhotoData(selectedCert);
                  if (!photoData) {
                    return (
                      <div className="w-14 h-14 rounded-2xl bg-indigo-100 flex items-center justify-center text-[#6366F1] mb-4">
                        <ShieldCheck className="w-7 h-7" />
                      </div>
                    );
                  }

                  return (
                    <div 
                      className="relative rounded-2xl overflow-hidden mb-4 bg-black max-h-56 group cursor-pointer"
                      onClick={() => setLightboxData({
                        url: photoData.url,
                        title: language === 'ky' ? selectedCert.titleKy : selectedCert.titleRu,
                        subtitle: `${selectedCert.year} • ${selectedCert.certificateNumber}`,
                        caption: language === 'ky' 
                          ? (selectedCert.photoCaptionKy || selectedCert.titleKy) 
                          : (selectedCert.photoCaptionRu || selectedCert.titleRu),
                        badge: selectedCert.badge || '',
                        uploadKey: photoData.target
                      })}
                    >
                      <img 
                        src={photoData.url} 
                        alt="" 
                        referrerPolicy="no-referrer"
                        className="w-full h-52 object-cover object-center group-hover:scale-105 transition-transform duration-500" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-bold">
                        <span className="flex items-center gap-1.5">
                          {selectedCert.id === 'cert-1' ? (
                            <Presentation className="w-4 h-4 text-indigo-300" />
                          ) : (
                            <Award className="w-4 h-4 text-amber-300" />
                          )}
                          <span>
                            {selectedCert.id === 'cert-1' 
                              ? (language === 'ky' ? 'Интерактивдүү лекциянын сүрөтү' : 'Фотография с лекции') 
                              : (language === 'ky' ? 'Сыйлоо аземинин сүрөтү' : 'Фотография вручения')}
                          </span>
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-white/25 backdrop-blur-md text-[11px] flex items-center gap-1">
                          <Maximize2 className="w-3 h-3" />
                          <span>{language === 'ky' ? 'Чоңойтуу' : 'Увеличить'}</span>
                        </span>
                      </div>
                    </div>
                  );
                })()}

                <div className="text-xs font-mono text-[#6366F1] font-bold mb-1">
                  {selectedCert.year} • {selectedCert.certificateNumber}
                </div>

                <h3 className="text-xl font-black text-[#1A1A1A] mb-4 leading-snug">
                  {language === 'ky' 
                    ? selectedCert.titleKy 
                    : language === 'ru' 
                    ? selectedCert.titleRu 
                    : (selectedCert.titleEn || selectedCert.titleRu)}
                </h3>

                <div className="space-y-3 text-sm text-gray-700 mb-6 bg-gray-50 p-5 rounded-2xl border border-gray-100">
                  <div>
                    <span className="text-gray-400 text-xs font-bold block">
                      {language === 'ky' ? 'Берген мекеме:' : language === 'ru' ? 'Организация:' : 'Issuing Organization:'}
                    </span>
                    <span className="font-bold text-[#1A1A1A]">
                      {language === 'ky' 
                        ? selectedCert.issuerKy 
                        : language === 'ru' 
                        ? selectedCert.issuerRu 
                        : (selectedCert.issuerEn || selectedCert.issuerRu)}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs font-bold block">
                      {language === 'ky' ? 'Адистик / Багыт:' : language === 'ru' ? 'Специализация:' : 'Specialization:'}
                    </span>
                    <span className="font-bold text-[#6366F1]">{selectedCert.specialization}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs font-bold block">
                      {language === 'ky' ? 'Окуу форматы:' : language === 'ru' ? 'Формат обучения:' : 'Training Format:'}
                    </span>
                    <span className="font-medium text-gray-800">{selectedCert.format}</span>
                  </div>
                  {selectedCert.photoCaptionKy && (
                    <div>
                      <span className="text-gray-400 text-xs font-bold block">
                        {language === 'ky' ? 'Маалымат:' : language === 'ru' ? 'Информация:' : 'Details:'}
                      </span>
                      <span className="text-xs text-gray-600 font-medium leading-relaxed block mt-0.5">
                        {language === 'ky' 
                          ? selectedCert.photoCaptionKy 
                          : language === 'ru' 
                          ? selectedCert.photoCaptionRu 
                          : selectedCert.photoCaptionEn}
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between gap-3">
                  {(() => {
                    const photoData = getCertPhotoData(selectedCert);
                    if (!photoData) return null;
                    return (
                      <button
                        type="button"
                        onClick={() => triggerUpload(photoData.target)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-indigo-50 hover:bg-indigo-100 text-[#6366F1] text-xs font-bold transition-colors"
                      >
                        <Camera className="w-3.5 h-3.5" />
                        <span>{language === 'ky' ? 'Сүрөт алмаштыруу' : 'Заменить фото'}</span>
                      </button>
                    );
                  })()}

                  <button
                    onClick={() => setSelectedCert(null)}
                    className="ml-auto px-6 py-2.5 rounded-full bg-[#1A1A1A] hover:bg-black text-white font-bold text-sm transition-colors shadow-md"
                  >
                    {language === 'ky' ? 'Жабуу' : language === 'ru' ? 'Закрыть' : 'Close'}
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Full-Screen Lightbox Modal */}
        <AnimatePresence>
          {lightboxData && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setLightboxData(null)}
                className="absolute inset-0 bg-black/85 backdrop-blur-md"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative z-10 bg-white rounded-3xl overflow-hidden max-w-4xl w-full shadow-2xl border border-gray-100 flex flex-col max-h-[92vh]"
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between p-4 sm:p-5 border-b border-gray-100 bg-gray-50/80">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Award className="w-5 h-5 text-indigo-600 shrink-0" />
                    <div className="min-w-0">
                      <h4 className="text-sm sm:text-base font-black text-[#1A1A1A] truncate">
                        {lightboxData.title}
                      </h4>
                      <p className="text-xs text-gray-500 font-medium truncate">
                        {lightboxData.subtitle}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => setLightboxData(null)}
                    className="p-2 rounded-full hover:bg-gray-200 text-gray-600 transition-colors shrink-0"
                    aria-label="Close"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Photo Display */}
                <div className="relative bg-black flex items-center justify-center min-h-[320px] max-h-[62vh] overflow-hidden">
                  <img
                    src={lightboxData.url}
                    alt={lightboxData.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-auto max-h-[62vh] object-contain"
                  />

                  {lightboxData.badge && (
                    <div className="absolute bottom-3 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-bold">
                      {lightboxData.badge}
                    </div>
                  )}
                </div>

                {/* Modal Footer */}
                <div className="p-4 sm:p-5 bg-white border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="text-xs text-gray-600 font-medium max-w-xl leading-relaxed">
                    {lightboxData.caption}
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={() => {
                        const target = lightboxData.uploadKey as 'secom' | 'trainer';
                        setLightboxData(null);
                        triggerUpload(target);
                      }}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-indigo-50 hover:bg-indigo-100 text-[#6366F1] text-xs font-bold transition-colors"
                    >
                      <Camera className="w-3.5 h-3.5" />
                      <span>{language === 'ky' ? 'Башка сүрөт коюу' : 'Заменить фото'}</span>
                    </button>

                    <button
                      onClick={() => setLightboxData(null)}
                      className="px-4 py-1.5 rounded-full bg-[#1A1A1A] hover:bg-black text-white text-xs font-bold transition-colors"
                    >
                      {language === 'ky' ? 'Жабуу' : language === 'ru' ? 'Закрыть' : 'Close'}
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
