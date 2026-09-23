import { motion } from 'motion/react';
import { 
  Sparkles, 
  Brain, 
  Compass, 
  Users, 
  Quote, 
  CheckCircle,
  BookOpen,
  Target,
  Award
} from 'lucide-react';
import { Language } from '../types';
import { portfolioData } from '../data/portfolioData';

interface AboutPhilosophySectionProps {
  language: Language;
}

export default function AboutPhilosophySection({ language }: AboutPhilosophySectionProps) {
  const { philosophy } = portfolioData;

  const getPrincipleIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return Sparkles;
      case 'Brain':
        return Brain;
      case 'Compass':
        return Compass;
      case 'Users':
        return Users;
      default:
        return Target;
    }
  };

  return (
    <section id="about" className="py-20 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-[#6366F1] text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === 'ky' ? 'Педагогикалык көз караш' : language === 'ru' ? 'Педагогическая концепция' : 'Educational Philosophy'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A1A] tracking-tight">
            {language === 'ky' ? (
              <>
                Кесиптик <span className="text-[#6366F1]">философия</span> жана усулдар
              </>
            ) : language === 'ru' ? (
              <>
                Профессиональная <span className="text-[#6366F1]">философия</span> и подходы
              </>
            ) : (
              <>
                Professional <span className="text-[#6366F1]">Philosophy</span> & Methods
              </>
            )}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 font-medium">
            {language === 'ky' 
              ? 'Окуучуну жөн гана эреже жаттатпастан, өз алдынча ой жүгүртүүгө жана математиканы турмушта эркин колдонууга үйрөтүү'
              : language === 'ru'
              ? 'Обучение через понимание сути, развитие математического мышления и применение знаний в реальных жизненных ситуациях'
              : 'Empowering students to think critically, understand mathematical foundations, and apply concepts with confidence in real life.'}
          </p>
        </div>

        {/* Philosophy Quote Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-white border border-gray-100 rounded-3xl p-6 sm:p-10 mb-16 shadow-xl overflow-hidden"
        >
          <div className="absolute top-0 right-0 translate-x-4 -translate-y-4 text-indigo-50 pointer-events-none">
            <Quote className="w-44 h-44" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="w-14 h-14 rounded-2xl bg-indigo-100 flex items-center justify-center shrink-0 text-[#6366F1]">
              <Quote className="w-7 h-7" />
            </div>
            <div>
              <p className="text-lg sm:text-xl md:text-2xl text-[#1A1A1A] font-bold italic leading-relaxed">
                "{language === 'ky' ? philosophy.quote.ky : language === 'ru' ? philosophy.quote.ru : philosophy.quote.en}"
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-8 h-1 bg-[#6366F1] rounded-full"></div>
                <span className="text-sm font-black text-[#6366F1]">
                  {language === 'en' ? 'Aisana Abdrakhmanova' : 'Айсана Абдрахманова'}
                </span>
                <span className="text-xs text-gray-500 font-semibold">
                  {language === 'ky' 
                    ? 'Математика мугалими, Улуттук мастер-тренер' 
                    : language === 'ru' 
                    ? 'Учитель математики, Мастер-тренер' 
                    : 'Math Educator, National Master Trainer'}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 4 Core Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {philosophy.principles.map((principle, index) => {
            const Icon = getPrincipleIcon(principle.icon);
            const principleColors = [
              { bg: 'bg-pink-100', text: 'text-pink-600' },
              { bg: 'bg-indigo-100', text: 'text-[#6366F1]' },
              { bg: 'bg-amber-100', text: 'text-amber-600' },
              { bg: 'bg-emerald-100', text: 'text-emerald-600' }
            ];
            const currentC = principleColors[index % principleColors.length];

            const title = language === 'ky' ? principle.titleKy : language === 'ru' ? principle.titleRu : (principle.titleEn || principle.titleRu);
            const desc = language === 'ky' ? principle.descKy : language === 'ru' ? principle.descRu : (principle.descEn || principle.descRu);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                id={`principle-card-${index}`}
                className="group bg-white border border-gray-100 hover:border-indigo-100 rounded-3xl p-6 sm:p-7 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1"
              >
                <div className="flex items-start gap-5">
                  <div className={`w-14 h-14 rounded-2xl ${currentC.bg} ${currentC.text} flex items-center justify-center transition-colors shrink-0`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-[#1A1A1A] group-hover:text-[#6366F1] transition-colors">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 leading-relaxed font-medium">
                      {desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Key Chronological Facts Bar */}
        <div className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-sm">
          <h3 className="text-base sm:text-lg font-black text-[#1A1A1A] mb-6 flex items-center gap-2">
            <Award className="w-5 h-5 text-[#6366F1]" />
            <span>{language === 'ky' ? 'Негизги кесиптик фактылар' : language === 'ru' ? 'Ключевые профессиональные факты' : 'Key Professional Highlights'}</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-indigo-50/50 border border-indigo-100/60">
              <span className="text-xs font-bold text-[#6366F1] uppercase tracking-wider block mb-1">
                {language === 'en' ? 'Since 2022' : '2022-жылдан бери'}
              </span>
              <p className="text-sm font-bold text-[#1A1A1A]">
                {language === 'ky' ? 'Жалпы билим берүүчү мектепте математика мугалими' : language === 'ru' ? 'Преподаватель в сфере школьного образования' : 'Mathematics Teacher in Secondary Education'}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-pink-50/50 border border-pink-100/60">
              <span className="text-xs font-bold text-pink-600 uppercase tracking-wider block mb-1">
                {language === 'en' ? 'Since 2023' : '2023-жылдан бери'}
              </span>
              <p className="text-sm font-bold text-[#1A1A1A]">
                {language === 'ky' ? 'Билим берүү борборунда ЖРТ/ОРТ жана олимпиадага даярдоо' : language === 'ru' ? 'Преподаватель в центре дополнительного образования' : 'ORT/NTC & Olympiad Prep Instructor'}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-amber-50/50 border border-amber-100/60">
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block mb-1">
                {language === 'en' ? 'Since 2026' : '2026-жылдан бери'}
              </span>
              <p className="text-sm font-bold text-[#1A1A1A]">
                {language === 'ky' ? '12 жылдык билим берүү боюнча Улуттук мастер-тренер' : language === 'ru' ? 'Национальный мастер-тренер 12-летнего образования' : 'National Master Trainer for 12-Year Education'}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-100/60">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block mb-1">
                {language === 'en' ? 'Academic Credential' : 'Илимий даража'}
              </span>
              <p className="text-sm font-bold text-[#1A1A1A]">
                {language === 'ky' ? 'Магистрдик диссертация & 2 эл аралык басылма' : language === 'ru' ? 'Магистерская диссертация и 2 научные статьи' : "Master's Thesis & 2 International Publications"}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
