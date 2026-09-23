import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Gamepad2, 
  Boxes, 
  FileText, 
  Palette, 
  ExternalLink, 
  Copy, 
  Check, 
  Sparkles,
  Layers
} from 'lucide-react';
import { Language } from '../types';
import { portfolioData } from '../data/portfolioData';

interface DigitalResourcesSectionProps {
  language: Language;
}

export default function DigitalResourcesSection({ language }: DigitalResourcesSectionProps) {
  const { digitalResources } = portfolioData;
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const getPlatformIcon = (iconName: string) => {
    switch (iconName) {
      case 'Gamepad2':
        return Gamepad2;
      case 'Boxes':
        return Boxes;
      case 'FileText':
        return FileText;
      case 'Palette':
        return Palette;
      default:
        return Layers;
    }
  };

  const handleCopy = (id: string, url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="resources" className="py-20 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-[#6366F1] text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === 'ky' ? 'Санариптик билим берүү' : language === 'ru' ? 'Цифровые ресурсы' : 'Digital Learning Resources'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A1A] tracking-tight">
            {language === 'ky' ? (
              <>
                Автордук санариптик <span className="text-[#6366F1]">окуу материалдары</span>
              </>
            ) : language === 'ru' ? (
              <>
                Цифровые <span className="text-[#6366F1]">образовательные ресурсы</span>
              </>
            ) : (
              <>
                Author's Digital <span className="text-[#6366F1]">Learning Materials</span>
              </>
            )}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 font-medium">
            {language === 'ky'
              ? 'Окуучулардын кызыгуусун жана катышуусун арттыруу үчүн түзүлгөн интерактивдүү оюндар, тесттер жана тапшырмалар'
              : language === 'ru'
              ? 'Интерактивные задания и платформы для повышения вовлеченности учащихся на уроках'
              : 'Interactive assignments, gamified quizzes, and collaborative platforms fostering student engagement and deep math intuition'}
          </p>
        </div>

        {/* Digital Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {digitalResources.map((res, index) => {
            const Icon = getPlatformIcon(res.iconName);
            const hasExternalUrl = res.url && res.url !== '#';
            const desc = language === 'ky' ? res.descriptionKy : language === 'ru' ? res.descriptionRu : (res.descriptionEn || res.descriptionRu);

            return (
              <motion.div
                key={res.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                id={`resource-card-${res.id}`}
                className="bg-white border border-gray-100 hover:border-indigo-100 rounded-3xl p-6 sm:p-7 flex flex-col justify-between group shadow-sm hover:shadow-xl transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-indigo-50 group-hover:bg-indigo-100 border border-indigo-100 flex items-center justify-center text-[#6366F1] transition-colors">
                      <Icon className="w-7 h-7" />
                    </div>
                    
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-pink-50 text-pink-600 border border-pink-100">
                      {res.tag}
                    </span>
                  </div>

                  <div className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">
                    {res.platform}
                  </div>
                  <h3 className="text-xl font-black text-[#1A1A1A] group-hover:text-[#6366F1] transition-colors mb-2">
                    {res.name}
                  </h3>

                  <div className="inline-block text-xs font-bold text-[#6366F1] bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full mb-3">
                    {res.highlight}
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed mb-6 font-medium">
                    {desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
                  {hasExternalUrl ? (
                    <>
                      <a
                        href={res.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        id={`open-link-${res.id}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1A1A1A] hover:bg-black text-white font-bold text-xs transition-all shadow-md active:scale-95"
                      >
                        <span>{language === 'ky' ? 'Материалдарды ачуу' : language === 'ru' ? 'Открыть материалы' : 'Open Resource'}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>

                      <button
                        onClick={() => handleCopy(res.id, res.url)}
                        id={`copy-link-${res.id}`}
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold transition-colors"
                        title={language === 'ky' ? 'Шилтемени көчүрүү' : language === 'ru' ? 'Скопировать ссылку' : 'Copy Link'}
                      >
                        {copiedId === res.id ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span className="text-emerald-600">{language === 'ky' ? 'Көчүрүлдү!' : language === 'ru' ? 'Скопировано!' : 'Copied!'}</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>{language === 'ky' ? 'Шилтемени көчүрүү' : language === 'ru' ? 'Копировать' : 'Copy'}</span>
                          </>
                        )}
                      </button>
                    </>
                  ) : (
                    <div className="text-xs text-gray-400 font-medium italic">
                      {language === 'ky' ? 'Класста жана тренингдерде көрсөтүлөт' : language === 'ru' ? 'Демонстрируется на уроках и тренингах' : 'Demonstrated during classroom sessions & teacher workshops'}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
