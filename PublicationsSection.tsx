import { motion } from 'motion/react';
import { 
  BookMarked, 
  FileText, 
  Calendar, 
  Building2, 
  Library,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { Language } from '../types';
import { portfolioData } from '../data/portfolioData';

interface PublicationsSectionProps {
  language: Language;
}

export default function PublicationsSection({ language }: PublicationsSectionProps) {
  const { publications } = portfolioData;

  return (
    <section id="research" className="py-20 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-[#6366F1] text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
            <BookMarked className="w-3.5 h-3.5" />
            <span>{language === 'ky' ? 'Илимий изилдөөлөр' : language === 'ru' ? 'Научная деятельность' : 'Scientific Research & Publications'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A1A] tracking-tight">
            {language === 'ky' ? (
              <>
                Илимий басылмалар жана <span className="text-[#6366F1]">диссертация</span>
              </>
            ) : language === 'ru' ? (
              <>
                Научные публикации и <span className="text-[#6366F1]">исследования</span>
              </>
            ) : (
              <>
                Academic Publications & <span className="text-[#6366F1]">Research Thesis</span>
              </>
            )}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 font-medium">
            {language === 'ky'
              ? 'Математиканы окутуу усулдары жана олимпиадалык маселелер боюнча илимий изилдөө иштери'
              : language === 'ru'
              ? 'Результаты исследований в области методики обучения математике и олимпиадных задач'
              : 'Peer-reviewed research and scholarly monographs exploring mathematical problem-solving methodologies and secondary pedagogy'}
          </p>
        </div>

        {/* Publications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {publications.map((item, index) => {
            const isDissertation = index === 2;
            const title = language === 'ky' ? item.titleKy : language === 'ru' ? item.titleRu : (item.titleEn || item.titleRu);
            const type = language === 'ky' ? item.typeKy : language === 'ru' ? item.typeRu : (item.typeEn || item.typeRu);
            const publisher = language === 'ky' ? item.publisherKy : language === 'ru' ? item.publisherRu : (item.publisherEn || item.publisherRu);
            const details = language === 'ky' ? item.detailsKy : language === 'ru' ? item.detailsRu : (item.detailsEn || item.detailsRu);

            const badgeLabel = isDissertation 
              ? (language === 'ky' ? 'Диссертация' : language === 'ru' ? 'Диссертация' : "Master's Thesis")
              : (language === 'ky' ? 'Илимий макала' : language === 'ru' ? 'Научная статья' : 'Scholarly Article');

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                id={`publication-card-${index}`}
                className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                  isDissertation
                    ? 'bg-white border-2 border-[#6366F1] shadow-xl'
                    : 'bg-white border border-gray-100 hover:border-indigo-100 shadow-sm hover:shadow-xl'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono font-bold text-[#6366F1] bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full">
                      {item.year}
                    </span>
                    <span className="text-[10px] font-bold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                      {badgeLabel}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-[#1A1A1A] mb-3 leading-snug">
                    {title}
                  </h3>

                  <div className="text-xs text-gray-500 mb-2">
                    <span className="text-[#6366F1] font-bold block mb-0.5">
                      {type}
                    </span>
                    <span className="font-semibold text-gray-700">{publisher}</span>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-100 text-xs text-gray-600 font-medium">
                  <div className="flex items-start gap-1.5">
                    <Library className="w-3.5 h-3.5 text-[#6366F1] shrink-0 mt-0.5" />
                    <span>{details}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
