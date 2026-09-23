import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calculator, 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Sparkles, 
  ChevronRight,
  Lightbulb
} from 'lucide-react';
import { Language } from '../types';
import { portfolioData } from '../data/portfolioData';

interface InteractiveMathWidgetProps {
  language: Language;
}

export default function InteractiveMathWidget({ language }: InteractiveMathWidgetProps) {
  const { mathChallenges } = portfolioData;
  const [currentChallengeIndex, setCurrentChallengeIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const currentChallenge = mathChallenges[currentChallengeIndex];

  const handleSelect = (index: number) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(index);
  };

  const handleSubmit = () => {
    if (selectedOption === null) return;
    setIsAnswerSubmitted(true);
  };

  const handleReset = () => {
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setShowHint(false);
  };

  const handleNextChallenge = () => {
    handleReset();
    setCurrentChallengeIndex((prev) => (prev + 1) % mathChallenges.length);
  };

  const isCorrect = selectedOption === currentChallenge.correctIndex;

  return (
    <section id="interactive-challenge" className="py-20 bg-transparent relative overflow-hidden">
      
      {/* Subtle Background Math Pattern */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-[#6366F1] text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === 'ky' ? 'Интерактивдүү лаборатория' : language === 'ru' ? 'Интерактивная лаборатория' : 'Interactive Math Lab'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1A1A1A] tracking-tight">
            {language === 'ky' ? (
              <>
                PISA жана <span className="text-[#6366F1]">логикалык ой жүгүртүү</span>
              </>
            ) : language === 'ru' ? (
              <>
                Практика PISA и <span className="text-[#6366F1]">математическая логика</span>
              </>
            ) : (
              <>
                PISA Literacy & <span className="text-[#6366F1]">Mathematical Reasoning</span>
              </>
            )}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 font-medium">
            {language === 'ky'
              ? 'Айсана мугалимдин сабактарындагы интерактивдүү методиканы өзүңүз сынап көрүңүз!'
              : language === 'ru'
              ? 'Опробуйте методику решения практических задач на математическую грамотность'
              : "Try out Ms. Aisana's interactive problem-solving and critical reasoning methodology firsthand!"}
          </p>
        </div>

        {/* Interactive Challenge Card */}
        <div className="bg-white border-2 border-[#6366F1] rounded-3xl p-6 sm:p-8 shadow-xl relative">
          
          {/* Top Challenge Indicator */}
          <div className="flex items-center justify-between gap-2 pb-5 border-b border-gray-100 mb-6">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-indigo-50 border border-indigo-100 text-[#6366F1] flex items-center justify-center font-black text-sm">
                #{currentChallengeIndex + 1}
              </div>
              <span className="text-xs sm:text-sm font-black text-[#1A1A1A]">
                {language === 'ky' ? currentChallenge.questionKy : language === 'ru' ? currentChallenge.questionRu : (currentChallenge.questionEn || currentChallenge.questionRu)}
              </span>
            </div>

            <button
              onClick={handleNextChallenge}
              className="text-xs text-[#6366F1] hover:text-indigo-700 font-bold flex items-center gap-1 transition-colors"
            >
              <span>{language === 'ky' ? 'Кийинки суроо' : language === 'ru' ? 'Следующая' : 'Next Question'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Context / Question Text */}
          <p className="text-base sm:text-lg text-[#1A1A1A] font-bold leading-relaxed mb-6">
            {language === 'ky' ? currentChallenge.contextKy : language === 'ru' ? currentChallenge.contextRu : (currentChallenge.contextEn || currentChallenge.contextRu)}
          </p>

          {/* Answer Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {(language === 'en' && currentChallenge.optionsEn ? currentChallenge.optionsEn : currentChallenge.options).map((option, idx) => {
              const isSelected = selectedOption === idx;
              let optionStyle = 'bg-gray-50 border-gray-200 text-gray-800 hover:border-indigo-300 font-medium';

              if (isSelected && !isAnswerSubmitted) {
                optionStyle = 'bg-indigo-50 border-[#6366F1] text-[#6366F1] font-black shadow-sm';
              } else if (isAnswerSubmitted) {
                if (idx === currentChallenge.correctIndex) {
                  optionStyle = 'bg-emerald-50 border-emerald-500 text-emerald-800 font-black';
                } else if (isSelected) {
                  optionStyle = 'bg-red-50 border-red-500 text-red-800 font-black';
                } else {
                  optionStyle = 'bg-gray-50 border-gray-100 text-gray-400 opacity-50';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  disabled={isAnswerSubmitted}
                  className={`flex items-center justify-between p-4 rounded-2xl border text-sm transition-all text-left ${optionStyle}`}
                >
                  <span>{option}</span>
                  {isAnswerSubmitted && idx === currentChallenge.correctIndex && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  )}
                  {isAnswerSubmitted && isSelected && idx !== currentChallenge.correctIndex && (
                    <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Actions & Hint */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <button
              onClick={() => setShowHint(!showHint)}
              className="inline-flex items-center gap-1.5 text-xs text-amber-600 hover:text-amber-700 font-bold"
            >
              <Lightbulb className="w-4 h-4" />
              <span>{showHint ? (language === 'ky' ? 'Ишаратты жашыруу' : language === 'ru' ? 'Скрыть подсказку' : 'Hide Hint') : (language === 'ky' ? 'Ишарат / Подсказка алуу' : language === 'ru' ? 'Показать подсказку' : 'Need a Hint?')}</span>
            </button>

            <div className="flex items-center gap-3">
              {isAnswerSubmitted ? (
                <button
                  onClick={handleReset}
                  className="flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{language === 'ky' ? 'Кайра аракет' : language === 'ru' ? 'Заново' : 'Try Again'}</span>
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={selectedOption === null}
                  className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all ${
                    selectedOption !== null
                      ? 'bg-[#1A1A1A] hover:bg-black text-white shadow-md active:scale-95'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  {language === 'ky' ? 'Жоопту текшерүү' : language === 'ru' ? 'Проверить ответ' : 'Verify Answer'}
                </button>
              )}
            </div>
          </div>

          {/* Hint Block */}
          {showHint && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-4 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-medium leading-relaxed"
            >
              <div className="font-bold mb-1 flex items-center gap-1.5 text-amber-700">
                <Lightbulb className="w-3.5 h-3.5" />
                <span>{language === 'ky' ? 'Мугалимдин ишараты:' : language === 'ru' ? 'Подсказка учителя:' : "Teacher's Hint:"}</span>
              </div>
              <p>{language === 'ky' ? currentChallenge.hintKy : language === 'ru' ? currentChallenge.hintRu : (currentChallenge.hintEn || currentChallenge.hintRu)}</p>
            </motion.div>
          )}

          {/* Result Explanation */}
          <AnimatePresence>
            {isAnswerSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-5 p-5 rounded-2xl border text-xs sm:text-sm leading-relaxed font-medium ${
                  isCorrect 
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-900' 
                    : 'bg-gray-50 border-gray-200 text-gray-800'
                }`}
              >
                <div className="flex items-center gap-2 font-black mb-1.5">
                  {isCorrect ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-700">
                        {language === 'ky' ? 'Азаматсыз, так жана туура!' : language === 'ru' ? 'Отлично, абсолютно верно!' : 'Bravo, precisely correct!'}
                      </span>
                    </>
                  ) : (
                    <>
                      <HelpCircle className="w-4 h-4 text-[#6366F1]" />
                      <span className="text-[#6366F1]">
                        {language === 'ky' ? 'Чыгаруунун түшүндүрмөсү:' : language === 'ru' ? 'Разбор решения:' : 'Step-by-step Solution:'}
                      </span>
                    </>
                  )}
                </div>
                <p>{language === 'ky' ? currentChallenge.explanationKy : language === 'ru' ? currentChallenge.explanationRu : (currentChallenge.explanationEn || currentChallenge.explanationRu)}</p>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
