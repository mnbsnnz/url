import { useState, useRef, ChangeEvent, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Briefcase, 
  Award, 
  Calendar, 
  CheckCircle2, 
  GraduationCap, 
  Building2,
  Users,
  Camera,
  RotateCcw,
  Maximize2,
  X,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Layers
} from 'lucide-react';
import { Language, ExperiencePhoto } from '../types';
import { portfolioData } from '../data/portfolioData';
import defaultTrainerImg from '../assets/images/trainer_workshop_1788704657612.jpg';
import defaultTrainerLectureImg from '../assets/images/master_trainer_lecture_1788707262654.jpg';
import defaultSecomImg from '../assets/images/secom_students_stage_1788705489359.jpg';
import defaultSecomAwardImg from '../assets/images/secom_certificate_award_1788706822259.jpg';
import defaultSchoolProjectImg from '../assets/images/students_project_award_1788705460253.jpg';
import defaultEngagingMathImg from '../assets/images/engaging_math_event_1788706407688.jpg';

interface ExperienceTimelineProps {
  language: Language;
}

export default function ExperienceTimeline({ language }: ExperienceTimelineProps) {
  const { experience } = portfolioData;

  const defaultImages: Record<string, string> = {
    trainer_lecture: defaultTrainerLectureImg,
    trainer: defaultTrainerImg,
    secom: defaultSecomImg,
    secom_award: defaultSecomAwardImg,
    school_project: defaultSchoolProjectImg,
    engaging_math: defaultEngagingMathImg,
  };

  const [customPhotos, setCustomPhotos] = useState<Record<string, string>>(() => {
    try {
      return {
        trainer_lecture: localStorage.getItem('aisana_custom_photo_trainer_lecture') || '',
        trainer: localStorage.getItem('aisana_custom_photo_trainer') || '',
        secom: localStorage.getItem('aisana_custom_photo_secom') || '',
        secom_award: localStorage.getItem('aisana_custom_photo_secom_award') || '',
        school_project: localStorage.getItem('aisana_custom_photo_school_project') || '',
        engaging_math: localStorage.getItem('aisana_custom_photo_engaging_math') || '',
      };
    } catch {
      return {};
    }
  });

  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<Record<number, number>>({});
  const [activeUploadKey, setActiveUploadKey] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [modalPhotoData, setModalPhotoData] = useState<{
    itemIndex: number;
    photoIndex: number;
    photosList: ExperiencePhoto[];
    subtitle: string;
  } | null>(null);

  const handleTriggerUpload = (key: string) => {
    setActiveUploadKey(key);
    setTimeout(() => {
      fileInputRef.current?.click();
    }, 50);
  };

  const handlePhotoUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && activeUploadKey) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setCustomPhotos((prev) => ({ ...prev, [activeUploadKey]: result }));
          try {
            localStorage.setItem(`aisana_custom_photo_${activeUploadKey}`, result);
          } catch (err) {
            console.error('Failed to save photo to localStorage', err);
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetPhoto = (key: string) => {
    setCustomPhotos((prev) => {
      const next = { ...prev };
      delete next[key];
      return next;
    });
    try {
      localStorage.removeItem(`aisana_custom_photo_${key}`);
    } catch (err) {
      console.error(err);
    }
  };

  const getPhotoFor = (key: string) => {
    return customPhotos[key] || defaultImages[key] || defaultTrainerImg;
  };

  return (
    <section id="experience" className="py-20 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-[#6366F1] text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
            <Briefcase className="w-3.5 h-3.5" />
            <span>{language === 'ky' ? 'Ишмердүүлүк жолу' : language === 'ru' ? 'Трудовая биография' : 'Career Timeline'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A1A] tracking-tight">
            {language === 'ky' ? (
              <>
                Иш тажрыйбасы жана <span className="text-[#6366F1]">тренерлик</span>
              </>
            ) : language === 'ru' ? (
              <>
                Опыт работы и <span className="text-[#6366F1]">тренерская деятельность</span>
              </>
            ) : (
              <>
                Experience & <span className="text-[#6366F1]">Training Practice</span>
              </>
            )}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 font-medium">
            {language === 'ky'
              ? 'Окуучулар менен иштөө (ЖРТ/ОРТ, олимпиада, илимий-долбоордук иштер) жана республикалык деңгээлдеги мастер-тренерлик тажрыйбасы'
              : language === 'ru'
              ? 'Работа с учащимися (ОРТ/ЖРТ, олимпиады, исследовательские проекты) и республиканская тренерская деятельность'
              : 'Working with students (ORT/JRT prep, competitions, research projects) and nationwide master-trainer practice'}
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Timeline Guide Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#6366F1] via-pink-400 to-amber-400 hidden sm:block" />

          <div className="space-y-12">
            {experience.map((item, index) => {
              const isEven = index % 2 === 0;
              const isTrainer = index === 0;

              const period = language === 'ky' ? item.period : language === 'ru' ? item.periodRu : (item.periodEn || item.periodRu);
              const role = language === 'ky' ? item.roleKy : language === 'ru' ? item.roleRu : (item.roleEn || item.roleRu);
              const organization = language === 'ky' ? item.organizationKy : language === 'ru' ? item.organizationRu : (item.organizationEn || item.organizationRu);
              const responsibilities = language === 'ky' ? item.responsibilitiesKy : language === 'ru' ? item.responsibilitiesRu : (item.responsibilitiesEn || item.responsibilitiesRu);
              const photoCaption = language === 'ky' ? item.photoCaptionKy : language === 'ru' ? item.photoCaptionRu : (item.photoCaptionEn || item.photoCaptionRu);

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  id={`experience-item-${index}`}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Center Node / Icon */}
                  <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-white border-2 border-[#6366F1] items-center justify-center text-[#6366F1] z-10 shadow-lg shadow-indigo-500/20">
                    {index === 0 ? (
                      <Award className="w-5 h-5" />
                    ) : index === 1 ? (
                      <Users className="w-5 h-5 text-pink-600" />
                    ) : (
                      <GraduationCap className="w-5 h-5 text-amber-600" />
                    )}
                  </div>

                  {/* Empty Spacer on opposite side */}
                  <div className="w-full sm:w-1/2" />

                  {/* Content Card */}
                  <div className={`w-full sm:w-1/2 ${isEven ? 'sm:pr-12' : 'sm:pl-12'}`}>
                    <div className="bg-white border border-gray-100 hover:border-indigo-100 rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 group">
                      
                      {/* Period & Highlight Badge */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#6366F1] bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{period}</span>
                        </div>

                        {item.highlightBadge && (
                          <span className="text-[11px] font-bold px-3 py-0.5 rounded-full bg-pink-50 text-pink-600 border border-pink-100">
                            {item.highlightBadge}
                          </span>
                        )}
                      </div>

                      {/* Role Title */}
                      <h3 className="text-xl font-black text-[#1A1A1A] group-hover:text-[#6366F1] transition-colors">
                        {role}
                      </h3>

                      {/* Organization */}
                      <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-500 font-bold mt-1 mb-4">
                        <Building2 className="w-4 h-4 text-[#6366F1]" />
                        <span>{organization}</span>
                      </div>

                      {/* Responsibilities list */}
                      <ul className="space-y-2.5 mb-5">
                        {responsibilities.map((resp, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-600 font-medium">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span className="leading-snug">{resp}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Photo Attachment (Trainer Workshop, Student Events & Research) */}
                      {(() => {
                        const photosList: ExperiencePhoto[] = (item.photos && item.photos.length > 0)
                          ? item.photos
                          : (item.photoKey ? [{
                              key: item.photoKey,
                              photoTitleKy: item.photoTitleKy || role,
                              photoTitleRu: item.photoTitleRu || role,
                              photoTitleEn: item.photoTitleEn || role,
                              badgeLabelKy: item.badgeLabelKy || organization,
                              badgeLabelRu: item.badgeLabelRu || organization,
                              badgeLabelEn: item.badgeLabelEn || organization,
                              photoCaptionKy: photoCaption || '',
                              photoCaptionRu: photoCaption || '',
                              photoCaptionEn: photoCaption || '',
                            }] : []);

                        if (photosList.length === 0) return null;

                        const activePIdx = selectedPhotoIndex[index] || 0;
                        const currentPhoto = photosList[activePIdx] || photosList[0];

                        const curTitle = language === 'ky' 
                          ? currentPhoto.photoTitleKy 
                          : language === 'ru' 
                          ? currentPhoto.photoTitleRu 
                          : currentPhoto.photoTitleEn;

                        const curBadge = language === 'ky' 
                          ? currentPhoto.badgeLabelKy 
                          : language === 'ru' 
                          ? currentPhoto.badgeLabelRu 
                          : currentPhoto.badgeLabelEn;

                        const curCaption = language === 'ky' 
                          ? currentPhoto.photoCaptionKy 
                          : language === 'ru' 
                          ? currentPhoto.photoCaptionRu 
                          : currentPhoto.photoCaptionEn;

                        return (
                          <div className="mt-5 pt-4 border-t border-gray-100">
                            {/* Header: Title / Switcher & Actions */}
                            <div className="flex items-center justify-between gap-2 mb-2.5">
                              <div className="flex items-center gap-1.5 text-xs font-black text-[#1A1A1A] truncate">
                                <Sparkles className="w-3.5 h-3.5 text-[#6366F1] shrink-0" />
                                <span className="truncate">{curTitle}</span>
                              </div>

                              <div className="flex items-center gap-1.5 shrink-0">
                                <button
                                  type="button"
                                  onClick={() => handleTriggerUpload(currentPhoto.key)}
                                  title={language === 'ky' ? 'Сүрөттү алмаштыруу / жүктөө' : language === 'ru' ? 'Загрузить своё фото' : 'Upload photo'}
                                  className="p-1.5 rounded-lg bg-gray-50 hover:bg-indigo-50 text-gray-500 hover:text-[#6366F1] transition-colors"
                                >
                                  <Camera className="w-3.5 h-3.5" />
                                </button>

                                {customPhotos[currentPhoto.key] && (
                                  <button
                                    type="button"
                                    onClick={() => handleResetPhoto(currentPhoto.key)}
                                    title={language === 'ky' ? 'Баштапкы сүрөткө кайтаруу' : language === 'ru' ? 'Сбросить фото' : 'Reset photo'}
                                    className="p-1.5 rounded-lg bg-gray-50 hover:bg-pink-50 text-gray-500 hover:text-pink-600 transition-colors"
                                  >
                                    <RotateCcw className="w-3.5 h-3.5" />
                                  </button>
                                )}
                              </div>
                            </div>

                            {/* Event selector tabs if multiple photos */}
                            {photosList.length > 1 && (
                              <div className="flex items-center gap-1.5 p-1 bg-gray-100/90 rounded-xl mb-3 overflow-x-auto scrollbar-none">
                                {photosList.map((p, pIdx) => {
                                  const isSelected = pIdx === activePIdx;
                                  const tabName = language === 'ky' 
                                    ? (p.tagKy || p.photoTitleKy) 
                                    : language === 'ru' 
                                    ? (p.tagRu || p.photoTitleRu) 
                                    : (p.tagEn || p.photoTitleEn);

                                  return (
                                    <button
                                      key={p.key}
                                      type="button"
                                      onClick={() => setSelectedPhotoIndex(prev => ({ ...prev, [index]: pIdx }))}
                                      className={`flex items-center gap-1.5 px-3 py-1 text-[11px] font-bold rounded-lg transition-all whitespace-nowrap ${
                                        isSelected
                                          ? 'bg-white text-[#1A1A1A] shadow-xs'
                                          : 'text-gray-500 hover:text-gray-900 hover:bg-white/50'
                                      }`}
                                    >
                                      <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-[#6366F1]' : 'bg-gray-300'}`} />
                                      <span>{tabName}</span>
                                    </button>
                                  );
                                })}
                              </div>
                            )}

                            {/* Main Image Box with zoom preview */}
                            <div 
                              onClick={() => {
                                setModalPhotoData({
                                  itemIndex: index,
                                  photoIndex: activePIdx,
                                  photosList: photosList,
                                  subtitle: organization,
                                });
                              }}
                              className="relative rounded-2xl overflow-hidden border border-gray-200 group/img cursor-pointer shadow-sm hover:shadow-md transition-all"
                            >
                              <img
                                src={getPhotoFor(currentPhoto.key)}
                                alt={curTitle}
                                referrerPolicy="no-referrer"
                                className="w-full aspect-[16/9] object-cover group-hover/img:scale-105 transition-transform duration-500"
                              />

                              {/* Badge Overlay */}
                              <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-bold">
                                {curBadge}
                              </div>

                              {/* Multi-photo indicator tag if more than 1 */}
                              {photosList.length > 1 && (
                                <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-indigo-600/80 backdrop-blur-md text-white text-[10px] font-bold flex items-center gap-1">
                                  <Layers className="w-2.5 h-2.5" />
                                  <span>{activePIdx + 1}/{photosList.length}</span>
                                </div>
                              )}

                              {/* Zoom Button on hover */}
                              <div className="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-full bg-[#1A1A1A]/80 backdrop-blur-md text-white text-[11px] font-bold flex items-center gap-1.5 opacity-90 group-hover/img:opacity-100 transition-opacity">
                                <Maximize2 className="w-3 h-3" />
                                <span>{language === 'ky' ? 'Чоңойтуу' : language === 'ru' ? 'Открыть' : 'Expand'}</span>
                              </div>
                            </div>

                            {/* Interactive thumbnails if multiple photos */}
                            {photosList.length > 1 && (
                              <div className="grid grid-cols-2 gap-2 mt-2.5">
                                {photosList.map((p, pIdx) => {
                                  const isSelected = pIdx === activePIdx;
                                  const miniTitle = language === 'ky' 
                                    ? (p.tagKy || p.photoTitleKy) 
                                    : language === 'ru' 
                                    ? (p.tagRu || p.photoTitleRu) 
                                    : (p.tagEn || p.photoTitleEn);
                                  const miniBadge = language === 'ky' 
                                    ? p.badgeLabelKy 
                                    : language === 'ru' 
                                    ? p.badgeLabelRu 
                                    : p.badgeLabelEn;

                                  return (
                                    <button
                                      key={p.key}
                                      type="button"
                                      onClick={() => setSelectedPhotoIndex(prev => ({ ...prev, [index]: pIdx }))}
                                      className={`flex items-center gap-2 p-1.5 rounded-xl border text-left transition-all ${
                                        isSelected 
                                          ? 'border-[#6366F1] bg-indigo-50/60 ring-1 ring-[#6366F1]/30' 
                                          : 'border-gray-200 hover:border-gray-300 bg-white/70'
                                      }`}
                                    >
                                      <img
                                        src={getPhotoFor(p.key)}
                                        alt={miniTitle}
                                        className="w-10 h-8 rounded-lg object-cover shrink-0"
                                      />
                                      <div className="min-w-0 flex-1">
                                        <p className="text-[11px] font-bold text-[#1A1A1A] truncate leading-tight">{miniTitle}</p>
                                        <span className="text-[10px] text-gray-500 block truncate leading-tight">
                                          {miniBadge}
                                        </span>
                                      </div>
                                    </button>
                                  );
                                })}
                              </div>
                            )}

                            {curCaption && (
                              <p className="text-[11px] text-gray-500 font-medium mt-2 leading-tight">
                                {curCaption}
                              </p>
                            )}
                          </div>
                        );
                      })()}

                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>

      {/* Hidden file input for uploading custom photos */}
      <input 
        type="file"
        ref={fileInputRef}
        onChange={handlePhotoUpload}
        accept="image/*"
        className="hidden"
      />

      {/* Lightbox / Zoom Modal for Selected Experience Photo */}
      <AnimatePresence>
        {modalPhotoData && (() => {
          const curPhoto = modalPhotoData.photosList[modalPhotoData.photoIndex] || modalPhotoData.photosList[0];
          const hasMultiple = modalPhotoData.photosList.length > 1;

          const modalTitle = language === 'ky' 
            ? curPhoto.photoTitleKy 
            : language === 'ru' 
            ? curPhoto.photoTitleRu 
            : curPhoto.photoTitleEn;

          const modalCaption = language === 'ky' 
            ? curPhoto.photoCaptionKy 
            : language === 'ru' 
            ? curPhoto.photoCaptionRu 
            : curPhoto.photoCaptionEn;

          const handlePrevPhoto = (e: MouseEvent) => {
            e.stopPropagation();
            setModalPhotoData((prev) => {
              if (!prev) return null;
              const newIndex = (prev.photoIndex - 1 + prev.photosList.length) % prev.photosList.length;
              // also update card state
              setSelectedPhotoIndex(s => ({ ...s, [prev.itemIndex]: newIndex }));
              return { ...prev, photoIndex: newIndex };
            });
          };

          const handleNextPhoto = (e: MouseEvent) => {
            e.stopPropagation();
            setModalPhotoData((prev) => {
              if (!prev) return null;
              const newIndex = (prev.photoIndex + 1) % prev.photosList.length;
              // also update card state
              setSelectedPhotoIndex(s => ({ ...s, [prev.itemIndex]: newIndex }));
              return { ...prev, photoIndex: newIndex };
            });
          };

          return (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setModalPhotoData(null)}
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
                    <Award className="w-5 h-5 text-[#6366F1] shrink-0" />
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm sm:text-base font-black text-[#1A1A1A] truncate">
                          {modalTitle}
                        </h4>
                        {hasMultiple && (
                          <span className="px-2 py-0.5 rounded-full bg-indigo-100 text-[#6366F1] text-[10px] font-extrabold shrink-0">
                            {modalPhotoData.photoIndex + 1} / {modalPhotoData.photosList.length}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 font-medium truncate">
                        {modalPhotoData.subtitle}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => setModalPhotoData(null)}
                    className="p-2 rounded-full hover:bg-gray-200 text-gray-600 transition-colors shrink-0"
                    aria-label="Close"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Photo Display with Prev/Next Navigation */}
                <div className="relative bg-black flex items-center justify-center min-h-[300px] max-h-[60vh] overflow-hidden group">
                  <img
                    key={curPhoto.key}
                    src={getPhotoFor(curPhoto.key)}
                    alt={modalTitle}
                    referrerPolicy="no-referrer"
                    className="w-full h-auto max-h-[60vh] object-contain transition-opacity duration-300"
                  />

                  {/* Prev Button */}
                  {hasMultiple && (
                    <button
                      type="button"
                      onClick={handlePrevPhoto}
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md transition-all shadow-lg hover:scale-105"
                      aria-label="Previous photo"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                  )}

                  {/* Next Button */}
                  {hasMultiple && (
                    <button
                      type="button"
                      onClick={handleNextPhoto}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md transition-all shadow-lg hover:scale-105"
                      aria-label="Next photo"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  )}

                  {/* Bottom indicator badge */}
                  <div className="absolute bottom-3 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-bold">
                    {language === 'ky' 
                      ? curPhoto.badgeLabelKy 
                      : language === 'ru' 
                      ? curPhoto.badgeLabelRu 
                      : curPhoto.badgeLabelEn}
                  </div>
                </div>

                {/* Switcher tabs inside modal if multiple */}
                {hasMultiple && (
                  <div className="px-4 py-2 bg-gray-50 border-t border-gray-100 flex items-center gap-2 overflow-x-auto">
                    {modalPhotoData.photosList.map((p, pIdx) => {
                      const isSel = pIdx === modalPhotoData.photoIndex;
                      const tabTitle = language === 'ky' ? (p.tagKy || p.photoTitleKy) : language === 'ru' ? (p.tagRu || p.photoTitleRu) : (p.tagEn || p.photoTitleEn);
                      return (
                        <button
                          key={p.key}
                          type="button"
                          onClick={() => {
                            setModalPhotoData(prev => prev ? { ...prev, photoIndex: pIdx } : null);
                            setSelectedPhotoIndex(s => ({ ...s, [modalPhotoData.itemIndex]: pIdx }));
                          }}
                          className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-bold transition-all whitespace-nowrap ${
                            isSel 
                              ? 'bg-white border-[#6366F1] text-[#1A1A1A] shadow-xs' 
                              : 'bg-transparent border-transparent text-gray-500 hover:text-gray-900'
                          }`}
                        >
                          <img 
                            src={getPhotoFor(p.key)} 
                            alt="" 
                            className="w-5 h-4 rounded object-cover" 
                          />
                          <span>{tabTitle}</span>
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Modal Footer / Details */}
                <div className="p-4 sm:p-5 bg-white border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="text-xs text-gray-600 font-medium max-w-xl leading-relaxed">
                    {modalCaption}
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={() => {
                        const keyToUpload = curPhoto.key;
                        setModalPhotoData(null);
                        handleTriggerUpload(keyToUpload);
                      }}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-indigo-50 hover:bg-indigo-100 text-[#6366F1] text-xs font-bold transition-colors"
                    >
                      <Camera className="w-3.5 h-3.5" />
                      <span>{language === 'ky' ? 'Башка сүрөт коюу' : language === 'ru' ? 'Заменить фото' : 'Change photo'}</span>
                    </button>

                    <button
                      onClick={() => setModalPhotoData(null)}
                      className="px-4 py-1.5 rounded-full bg-[#1A1A1A] hover:bg-black text-white text-xs font-bold transition-colors"
                    >
                      {language === 'ky' ? 'Жабуу' : language === 'ru' ? 'Закрыть' : 'Close'}
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })()}
      </AnimatePresence>

    </section>
  );
}
