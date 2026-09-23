import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Printer, 
  Download, 
  Award, 
  GraduationCap, 
  Briefcase, 
  BookMarked, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { Language } from '../types';
import { portfolioData } from '../data/portfolioData';
import portraitImg from '../assets/images/aisana_portrait_1788703673827.jpg';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export default function ResumeModal({ isOpen, onClose, language }: ResumeModalProps) {
  if (!isOpen) return null;

  const { profile, education, experience, certificates, publications } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm p-4 sm:p-6 md:p-10 flex items-center justify-center print:p-0 print:bg-white print:static">
        
        {/* Modal Backdrop / Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-white border border-gray-100 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative text-[#1A1A1A] print:border-none print:shadow-none print:max-h-none print:overflow-visible"
        >
          {/* Header Controls (Hidden during print) */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/95 backdrop-blur-md border-b border-gray-100 print:hidden">
            <div className="flex items-center gap-2">
              <span className="text-xs font-black text-[#6366F1] font-mono uppercase tracking-wider">
                {language === 'en' ? 'CURRICULUM VITAE' : 'CV / РЕЗЮМЕ'}
              </span>
              <span className="text-gray-300">•</span>
              <span className="text-xs font-bold text-gray-700">
                {language === 'en' ? 'Aisana Abdrakhmanova' : 'Айсана Абдрахманова'}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                id="print-resume-btn"
                className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#1A1A1A] hover:bg-black text-white font-bold text-xs transition-all shadow-md active:scale-95"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>{language === 'ky' ? 'Басып чыгаруу (Print)' : language === 'ru' ? 'Печать' : 'Print / Save PDF'}</span>
              </button>

              <button
                onClick={onClose}
                id="close-resume-modal-btn"
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors active:scale-95"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Resume Body Content */}
          <div className="p-6 sm:p-10 print:p-0 space-y-8">
            
            {/* Candidate Header */}
            <div className="border-b border-gray-100 pb-6 print:border-gray-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div className="flex items-center gap-5">
                  <img
                    src={localStorage.getItem('aisana_custom_photo') || portraitImg}
                    alt={language === 'ky' ? profile.name.ky : language === 'ru' ? profile.name.ru : profile.name.en}
                    referrerPolicy="no-referrer"
                    className="w-20 h-24 rounded-2xl object-cover object-top border-2 border-indigo-100 shadow-sm shrink-0"
                  />
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-black text-[#1A1A1A] print:text-black tracking-tight">
                      {language === 'ky' ? profile.name.ky : language === 'ru' ? profile.name.ru : profile.name.en}
                    </h1>
                    <p className="text-sm sm:text-base font-bold text-[#6366F1] print:text-indigo-700 mt-1">
                      {language === 'ky' ? profile.tagline.ky : language === 'ru' ? profile.tagline.ru : (profile.tagline.en || profile.tagline.ru)}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500 print:text-gray-600 mt-1 font-medium">
                      {language === 'ky' 
                        ? 'Математика мугалими · Окутуучу · Тренер · Изилдөөчү' 
                        : language === 'ru'
                        ? 'Учитель математики · Преподаватель · Тренер · Исследователь'
                        : 'Mathematics Teacher · Lecturer · Master Trainer · Researcher'}
                    </p>
                  </div>
                </div>

                <div className="text-xs space-y-1 text-gray-600 print:text-gray-700 font-mono">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#6366F1]" />
                    <span>{profile.contacts.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#6366F1]" />
                    <span>{profile.contacts.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#6366F1]" />
                    <span>{language === 'ky' ? profile.location.ky : language === 'ru' ? profile.location.ru : (profile.location.en || profile.location.ru)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-base font-black text-[#1A1A1A] print:text-black uppercase tracking-wider mb-4 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-[#6366F1]" />
                <span>{language === 'ky' ? 'Иш тажрыйбасы' : language === 'ru' ? 'Опыт работы' : 'Professional Experience'}</span>
              </h2>

              <div className="space-y-4">
                {experience.map((exp, idx) => {
                  const role = language === 'ky' ? exp.roleKy : language === 'ru' ? exp.roleRu : (exp.roleEn || exp.roleRu);
                  const period = language === 'ky' ? exp.period : language === 'ru' ? exp.periodRu : (exp.periodEn || exp.periodRu);
                  const org = language === 'ky' ? exp.organizationKy : language === 'ru' ? exp.organizationRu : (exp.organizationEn || exp.organizationRu);
                  const responsibilities = language === 'ky' ? exp.responsibilitiesKy : language === 'ru' ? exp.responsibilitiesRu : (exp.responsibilitiesEn || exp.responsibilitiesRu);

                  return (
                    <div key={idx} className="bg-gray-50 p-5 rounded-2xl border border-gray-100 print:border-gray-300 print:bg-white">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="text-sm font-black text-[#1A1A1A] print:text-black">
                          {role}
                        </h3>
                        <span className="text-xs text-[#6366F1] print:text-indigo-700 font-mono font-bold">
                          {period}
                        </span>
                      </div>
                      <div className="text-xs text-gray-500 print:text-gray-600 mb-2 font-medium">
                        {org}
                      </div>
                      <ul className="space-y-1">
                        {responsibilities.map((r, rIdx) => (
                          <li key={rIdx} className="text-xs text-gray-600 print:text-gray-800 flex items-start gap-1.5 font-medium">
                            <span className="text-[#6366F1] font-bold">•</span>
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-base font-black text-[#1A1A1A] print:text-black uppercase tracking-wider mb-4 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-[#6366F1]" />
                <span>{language === 'ky' ? 'Билими' : language === 'ru' ? 'Образование' : 'Education'}</span>
              </h2>

              <div className="space-y-3">
                {education.map((edu, idx) => {
                  const degree = language === 'ky' ? edu.degreeKy : language === 'ru' ? edu.degreeRu : (edu.degreeEn || edu.degreeRu);
                  const inst = language === 'ky' ? edu.institutionKy : language === 'ru' ? edu.institutionRu : (edu.institutionEn || edu.institutionRu);
                  const faculty = language === 'ky' ? edu.facultyKy : language === 'ru' ? edu.facultyRu : (edu.facultyEn || edu.facultyRu);

                  return (
                    <div key={idx} className="bg-gray-50 p-5 rounded-2xl border border-gray-100 print:border-gray-300 print:bg-white">
                      <div className="flex justify-between items-start">
                        <h3 className="text-sm font-black text-[#1A1A1A] print:text-black">
                          {degree}
                        </h3>
                        <span className="text-xs text-[#6366F1] print:text-indigo-700 font-mono font-bold">{edu.year}</span>
                      </div>
                      <div className="text-xs text-gray-500 print:text-gray-600 font-medium">
                        {inst}
                      </div>
                      {faculty && (
                        <div className="text-xs text-gray-400 print:text-gray-500 mt-0.5 font-medium">
                          {faculty}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Certificates & Achievements */}
            <div>
              <h2 className="text-base font-black text-[#1A1A1A] print:text-black uppercase tracking-wider mb-4 flex items-center gap-2">
                <Award className="w-4 h-4 text-[#6366F1]" />
                <span>{language === 'ky' ? 'Сертификаттар жана жетишкендиктер' : language === 'ru' ? 'Сертификаты и достижения' : 'Certificates & Key Achievements'}</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {certificates.map((cert) => {
                  const title = language === 'ky' ? cert.titleKy : language === 'ru' ? cert.titleRu : (cert.titleEn || cert.titleRu);
                  const issuer = language === 'ky' ? cert.issuerKy : language === 'ru' ? cert.issuerRu : (cert.issuerEn || cert.issuerRu);

                  return (
                    <div key={cert.id} className="p-4 rounded-2xl bg-gray-50 border border-gray-100 print:border-gray-300 print:bg-white text-xs flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="text-[#6366F1] print:text-indigo-700 font-mono text-[11px] font-bold">
                            {cert.year}
                          </span>
                          {cert.badge && (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-50 text-[#6366F1] border border-indigo-100 print:border-gray-300">
                              {cert.badge}
                            </span>
                          )}
                        </div>
                        <div className="font-black text-[#1A1A1A] print:text-black mb-1">
                          {title}
                        </div>
                        <div className="text-gray-500 print:text-gray-600 font-medium">
                          {issuer}
                        </div>
                      </div>
                      <div className="mt-2 text-gray-400 print:text-gray-600 font-mono text-[10px] font-semibold">
                        {cert.certificateNumber}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Scientific Work */}
            <div>
              <h2 className="text-base font-black text-[#1A1A1A] print:text-black uppercase tracking-wider mb-4 flex items-center gap-2">
                <BookMarked className="w-4 h-4 text-[#6366F1]" />
                <span>{language === 'ky' ? 'Илимий басылмалар' : language === 'ru' ? 'Научные публикации' : 'Research Publications'}</span>
              </h2>

              <div className="space-y-2 text-xs">
                {publications.map((pub, idx) => {
                  const title = language === 'ky' ? pub.titleKy : language === 'ru' ? pub.titleRu : (pub.titleEn || pub.titleRu);
                  const publisher = language === 'ky' ? pub.publisherKy : language === 'ru' ? pub.publisherRu : (pub.publisherEn || pub.publisherRu);

                  return (
                    <div key={idx} className="p-4 rounded-2xl bg-gray-50 border border-gray-100 print:border-gray-300 print:bg-white">
                      <div className="font-black text-[#1A1A1A] print:text-black">
                        {title} ({pub.year})
                      </div>
                      <div className="text-gray-500 print:text-gray-600 font-medium">
                        {publisher}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
