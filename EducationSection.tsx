import { motion } from 'motion/react';
import { 
  GraduationCap, 
  BookOpen, 
  Calendar, 
  FileCheck, 
  Building, 
  CheckCircle,
  Award
} from 'lucide-react';
import { Language } from '../types';
import { portfolioData } from '../data/portfolioData';

interface EducationSectionProps {
  language: Language;
}

export default function EducationSection({ language }: EducationSectionProps) {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-[#6366F1] text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>{language === 'ky' ? 'Академиялык база' : language === 'ru' ? 'Академическая база' : 'Academic Background'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A1A] tracking-tight">
            {language === 'ky' ? (
              <>
                Билим алуу жана <span className="text-[#6366F1]">илимий даярдык</span>
              </>
            ) : language === 'ru' ? (
              <>
                Образование и <span className="text-[#6366F1]">академическая подготовка</span>
              </>
            ) : (
              <>
                Education & <span className="text-[#6366F1]">Academic Background</span>
              </>
            )}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 font-medium">
            {language === 'ky'
              ? 'Ош мамлекеттик университетиндеги фундаменталдык математикалык жана методикалык билим'
              : language === 'ru'
              ? 'Фундаментальное математическое образование в Ошском государственном университете'
              : 'Fundamental mathematical and pedagogical education from Osh State University'}
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {education.map((item, index) => {
            const isMaster = index === 0;

            const degree = language === 'ky' ? item.degreeKy : language === 'ru' ? item.degreeRu : (item.degreeEn || item.degreeRu);
            const institution = language === 'ky' ? item.institutionKy : language === 'ru' ? item.institutionRu : (item.institutionEn || item.institutionRu);
            const faculty = language === 'ky' ? item.facultyKy : language === 'ru' ? item.facultyRu : (item.facultyEn || item.facultyRu);
            const specialty = language === 'ky' ? item.specialtyKy : language === 'ru' ? item.specialtyRu : (item.specialtyEn || item.specialtyRu);
            const description = language === 'ky' ? item.descriptionKy : language === 'ru' ? item.descriptionRu : (item.descriptionEn || item.descriptionRu);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                id={`education-card-${index}`}
                className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                  isMaster 
                    ? 'bg-white border-2 border-[#6366F1] shadow-xl md:-translate-y-2' 
                    : 'bg-white border border-gray-100 shadow-sm hover:shadow-md'
                }`}
              >
                {isMaster && (
                  <div className="absolute -top-3.5 left-6 inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#6366F1] text-white font-black text-[11px] shadow-md shadow-indigo-500/30">
                    <Award className="w-3.5 h-3.5" />
                    <span>{language === 'ky' ? 'Илимий даража' : language === 'ru' ? 'Ученая степень' : 'Master Degree'}</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className={`text-xs font-bold font-mono px-3 py-1 rounded-full ${
                      isMaster 
                        ? 'text-[#6366F1] bg-indigo-50 border border-indigo-100' 
                        : 'text-gray-700 bg-gray-100'
                    }`}>
                      {item.year}
                    </span>
                    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${
                      isMaster ? 'bg-indigo-100 text-[#6366F1]' : 'bg-gray-100 text-gray-700'
                    }`}>
                      <GraduationCap className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-[#1A1A1A] mb-2">
                    {degree}
                  </h3>

                  <div className="flex items-start gap-1.5 text-xs text-gray-500 mb-3">
                    <Building className="w-3.5 h-3.5 text-[#6366F1] shrink-0 mt-0.5" />
                    <span className="font-bold text-[#1A1A1A]">
                      {institution}
                    </span>
                  </div>

                  {faculty && (
                    <div className="text-xs text-gray-500 mb-2">
                      <span className="text-gray-400">{language === 'ky' ? 'Факультет / Институт: ' : language === 'ru' ? 'Институт: ' : 'Faculty / Institute: '}</span>
                      <span className="font-semibold text-gray-700">{faculty}</span>
                    </div>
                  )}

                  {specialty && (
                    <div className="text-xs text-gray-500 mb-3">
                      <span className="text-gray-400">{language === 'ky' ? 'Кафедра: ' : language === 'ru' ? 'Кафедра: ' : 'Department: '}</span>
                      <span className="font-semibold text-gray-700">{specialty}</span>
                    </div>
                  )}
                </div>

                <div className="pt-4 mt-4 border-t border-gray-100 text-xs text-gray-600 leading-relaxed font-medium">
                  {description}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Master's Thesis Spotlight Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-indigo-100 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-indigo-100 flex items-center justify-center text-[#6366F1] shrink-0">
              <FileCheck className="w-7 h-7" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#6366F1] uppercase tracking-wider mb-1">
                {language === 'ky' ? 'Магистрдик илимий диссертация' : language === 'ru' ? 'Магистерская диссертация' : "Master's Thesis Research"}
              </div>
              <h4 className="text-base sm:text-lg font-black text-[#1A1A1A] leading-snug">
                «Методы обучения решению математических задач в старшей школе»
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-2xl font-medium">
                {language === 'ky'
                  ? 'Жогорку класстарда математикалык маселелерди чыгарууда көйгөйгө багытталган окутуу (PBL) усулдарын колдонуунун методикалык модели жана анализи.'
                  : language === 'ru'
                  ? 'Исследование современных методов обучения решению математических задач в старших классах, включая Problem-Based Learning (PBL).'
                  : 'Research on modern problem-solving methodologies in secondary high school mathematics, integrating Problem-Based Learning (PBL) paradigms.'}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 shrink-0">
            <span className="text-xs font-bold px-3.5 py-1.5 rounded-full bg-indigo-50 text-[#6366F1] border border-indigo-100">
              {language === 'en' ? 'PBL Methodology' : 'PBL методологиясы'}
            </span>
            <span className="text-xs font-bold px-3.5 py-1.5 rounded-full bg-pink-50 text-pink-600 border border-pink-100">
              {language === 'en' ? 'OshSU 2025' : 'ОшМУ 2025'}
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
