import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calculator, 
  Sparkles, 
  Presentation, 
  Laptop, 
  HeartHandshake,
  CheckCircle2,
  TrendingUp
} from 'lucide-react';
import { Language } from '../types';
import { portfolioData } from '../data/portfolioData';

interface CompetenciesSkillsProps {
  language: Language;
}

export default function CompetenciesSkills({ language }: CompetenciesSkillsProps) {
  const { skillCategories } = portfolioData;
  const [activeTab, setActiveTab] = useState<number>(0);

  const categoryIcons = [
    Calculator,
    Sparkles,
    Presentation,
    Laptop,
    HeartHandshake
  ];

  return (
    <section id="skills" className="py-20 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-[#6366F1] text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>{language === 'ky' ? 'Квалификация жана көндүмдөр' : language === 'ru' ? 'Квалификация и компетенции' : 'Qualifications & Skills'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A1A] tracking-tight">
            {language === 'ky' ? (
              <>
                Профессионалдык <span className="text-[#6366F1]">компетенциялар</span>
              </>
            ) : language === 'ru' ? (
              <>
                Профессиональные <span className="text-[#6366F1]">компетенции</span>
              </>
            ) : (
              <>
                Professional <span className="text-[#6366F1]">Core Competencies</span>
              </>
            )}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 font-medium">
            {language === 'ky'
              ? 'Математикалык фундаменталдуулук, эл аралык PISA/STEM стандарттары жана тренерлик чеберчилик'
              : language === 'ru'
              ? 'Глубокие предметные знания математики, владение методиками PISA/STEM и цифровыми инструментами'
              : 'Fundamental math expertise, international PISA/STEM methodologies, and modern pedagogical training mastery'}
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {skillCategories.map((cat, idx) => {
            const Icon = categoryIcons[idx] || Sparkles;
            const isActive = activeTab === idx;
            const title = language === 'ky' ? cat.categoryTitleKy : language === 'ru' ? cat.categoryTitleRu : (cat.categoryTitleEn || cat.categoryTitleRu);

            return (
              <button
                key={idx}
                id={`skill-tab-${idx}`}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                  isActive
                    ? 'bg-[#1A1A1A] text-white shadow-md scale-[1.02]'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-[#6366F1] hover:text-[#6366F1] shadow-sm'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#6366F1]'}`} />
                <span>{title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Tab Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto"
          >
            {skillCategories[activeTab].skills.map((skill, index) => {
              const skillName = skill.name;
              const skillDesc = language === 'ky' ? skill.descKy : language === 'ru' ? skill.descRu : (skill.descEn || skill.descRu);

              return (
                <div
                  key={index}
                  id={`skill-card-${activeTab}-${index}`}
                  className="bg-white border border-gray-100 hover:border-indigo-100 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all group"
                >
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-[#6366F1] shrink-0" />
                      <h4 className="text-sm sm:text-base font-black text-[#1A1A1A] group-hover:text-[#6366F1] transition-colors">
                        {skillName}
                      </h4>
                    </div>
                    {skill.level && (
                      <span className="text-xs font-mono font-black text-[#6366F1]">
                        {skill.level}%
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-gray-600 pl-7 font-medium leading-relaxed">
                    {skillDesc}
                  </p>

                  {/* Progress bar visual */}
                  {skill.level && (
                    <div className="mt-3.5 pl-7">
                      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.8, delay: index * 0.05 }}
                          className="h-full bg-gradient-to-r from-[#6366F1] to-pink-500 rounded-full"
                        />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
