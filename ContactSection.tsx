import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { 
  MessageCircle, 
  Send, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle,
  Clock,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { Language } from '../types';
import { portfolioData } from '../data/portfolioData';

interface ContactSectionProps {
  language: Language;
}

export default function ContactSection({ language }: ContactSectionProps) {
  const { profile } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    role: 'parent',
    service: 'ort',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const roleMap: Record<string, string> = {
      parent: language === 'ky' ? 'Ата-эне' : language === 'ru' ? 'Родитель' : 'Parent',
      student: language === 'ky' ? 'Окуучу' : language === 'ru' ? 'Ученик' : 'Student',
      teacher: language === 'ky' ? 'Мугалим' : language === 'ru' ? 'Учитель / Коллега' : 'Teacher / Colleague',
      admin: language === 'ky' ? 'Мектеп жетекчилиги' : language === 'ru' ? 'Администрация школы' : 'School Administration'
    };

    const serviceMap: Record<string, string> = {
      ort: language === 'ky' ? 'ЖРТ / ОРТга даярдоо' : language === 'ru' ? 'Подготовка к ОРТ/ЖРТ' : 'ORT/NTC Math Preparation',
      training: language === 'ky' ? 'Мугалимдерге тренинг' : language === 'ru' ? 'Тренинг для учителей (12-летнее образование / PISA)' : 'Teacher Workshop (12-Year Curriculum / PISA)',
      tutoring: language === 'ky' ? 'Математика / Алгебра сабагы' : language === 'ru' ? 'Занятия по математике / алгебре / геометрии' : 'Mathematics / Algebra / Geometry Tutoring',
      consult: language === 'ky' ? 'Педагогикалык кеңеш алуу' : language === 'ru' ? 'Педагогическая консультация' : 'Pedagogical Consultation'
    };

    const greeting = language === 'en' ? 'Hello Aisana!' : 'Саламатсызбы, Айсана мугалим!';
    const nameLabel = language === 'en' ? 'My name' : 'Менин атым';
    const roleLabel = language === 'en' ? 'Role' : 'Ким';
    const subjectLabel = language === 'en' ? 'Inquiry' : 'Кызыктырган багыт';
    const msgLabel = language === 'en' ? 'Message' : 'Билдирүү';

    const text = `${greeting}
${nameLabel}: ${formData.name || (language === 'ky' ? 'Аты көрсөтүлгөн жок' : language === 'ru' ? 'Не указано' : 'Not specified')}
${roleLabel}: ${roleMap[formData.role] || formData.role}
${subjectLabel}: ${serviceMap[formData.service] || formData.service}
${msgLabel}: ${formData.message || (language === 'en' ? 'Inquiring regarding classes and training.' : 'Маалымат алуу үчүн кайрылып жатам.')}`;

    const encoded = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/996776613730?text=${encoded}`;
    
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactCards = [
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      handle: '+996 776 613 730',
      descriptionKy: 'Тез байланыш жана тренингдерге жазылуу',
      descriptionRu: 'Быстрая связь и запись на обучение',
      descriptionEn: 'Instant communication and course enrollment',
      href: 'https://wa.me/996776613730?text=%D0%A1%D0%B0%D0%BB%D0%B0%D0%BC%D0%B0%D1%82%D1%81%D1%8B%D0%B7%D0%B1%D1%8B%2C%20%D0%90%D0%B9%D1%81%D0%B0%D0%BD%D0%B0!%20',
      icon: MessageCircle,
      accent: 'emerald'
    },
    {
      id: 'telegram',
      name: 'Telegram',
      handle: '0776613730',
      descriptionKy: 'Суроолор жана материалдар менен алмашуу',
      descriptionRu: 'Вопросы и обмен материалами',
      descriptionEn: 'Inquiries, questions, and resource exchange',
      href: 'https://t.me/+996776613730',
      icon: Send,
      accent: 'teal'
    },
    {
      id: 'instagram',
      name: 'Instagram',
      handle: '@aisana_06.02',
      descriptionKy: 'Мугалимдин ишмердүүлүгү жана окуу жашоосу',
      descriptionRu: 'Педагогические будни и жизнь тренера',
      descriptionEn: 'Pedagogical highlights, events, and education updates',
      href: 'https://instagram.com/aisana_06.02',
      icon: Instagram,
      accent: 'rose'
    },
    {
      id: 'email',
      name: 'Email',
      handle: 'fmomabdrakhmanova@gmail.com',
      descriptionKy: 'Расмий сунуштар жана кызматташтык',
      descriptionRu: 'Официальные предложения и сотрудничество',
      descriptionEn: 'Formal inquiries, partnerships, and collaborations',
      href: 'mailto:fmomabdrakhmanova@gmail.com',
      icon: Mail,
      accent: 'blue'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-[#6366F1] text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>{language === 'ky' ? 'Байланышуу' : language === 'ru' ? 'Контакты' : 'Contact & Collaboration'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A1A] tracking-tight">
            {language === 'ky' ? (
              <>
                Кызматташууга жана <span className="text-[#6366F1]">сабактарга кош келиңиз!</span>
              </>
            ) : language === 'ru' ? (
              <>
                Буду рада <span className="text-[#6366F1]">сотрудничеству и общению</span>
              </>
            ) : (
              <>
                Open to <span className="text-[#6366F1]">Collaborations & Inquiries</span>
              </>
            )}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 font-medium">
            {language === 'ky'
              ? 'Мугалимдер үчүн тренингдерге буйрутма берүү, ЖРТга даярдануу же консультация алуу үчүн байланышыңыз'
              : language === 'ru'
              ? 'Запись на подготовку к экзаменам, проведение тренингов для учителей и консультации'
              : 'Book teacher workshops, enroll for ORT math prep, or request an educational consultation'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Cards Column */}
          <div className="lg:col-span-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactCards.map((card) => {
                const Icon = card.icon;
                const cardDesc = language === 'ky' ? card.descriptionKy : language === 'ru' ? card.descriptionRu : card.descriptionEn;

                return (
                  <a
                    key={card.id}
                    href={card.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`contact-card-${card.id}`}
                    className="group bg-white border border-gray-100 hover:border-indigo-100 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-[#6366F1] group-hover:bg-indigo-100 transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-[#6366F1] transition-colors" />
                    </div>

                    <div className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">
                      {card.name}
                    </div>
                    <div className="text-sm font-black text-[#1A1A1A] group-hover:text-[#6366F1] transition-colors truncate">
                      {card.handle}
                    </div>
                    <p className="text-xs text-gray-500 font-medium mt-2">
                      {cardDesc}
                    </p>
                  </a>
                );
              })}
            </div>

            {/* Direct Location & Status Card */}
            <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-[#6366F1] shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-black text-[#1A1A1A]">
                    {language === 'ky' ? 'Ош шаары, Кыргызстан' : language === 'ru' ? 'город Ош, Кыргызстан' : 'Osh city, Kyrgyzstan'}
                  </h4>
                  <p className="text-xs text-gray-500 font-medium">
                    {language === 'ky' ? 'Оффлайн жана онлайн тренингдер' : language === 'ru' ? 'Очные и онлайн тренинги по всей стране' : 'Offline & online workshops nationwide'}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-bold shrink-0 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                <span>{language === 'ky' ? 'Ачык' : language === 'ru' ? 'Активна' : 'Active'}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Direct WhatsApp Message Builder Form */}
          <div className="lg:col-span-6 bg-white border border-indigo-100 rounded-3xl p-6 sm:p-8 shadow-xl">
            <h3 className="text-xl font-black text-[#1A1A1A] mb-2">
              {language === 'ky' ? 'Тез кайрылуу калтыруу' : language === 'ru' ? 'Быстрая заявка на обучение / тренинг' : 'Fast Inquiry / Training Booking'}
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-6 font-medium">
              {language === 'ky' 
                ? 'Форманы толтуруп «WhatsApp аркылуу жөнөтүү» баскычын басыңыз. Маалымат дароо Айсана мугалимге жетет.'
                : language === 'ru'
                ? 'Заполните форму, и готовое сообщение будет автоматически сформировано для отправки в WhatsApp.'
                : 'Fill out this quick form to generate a structured direct WhatsApp message to Ms. Aisana.'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Input */}
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">
                  {language === 'ky' ? 'Сиздин аты-жөнүңүз:' : language === 'ru' ? 'Ваше имя:' : 'Your Name:'}
                </label>
                <input
                  type="text"
                  required
                  placeholder={language === 'ky' ? 'Мисалы: Айгүл' : language === 'ru' ? 'Например: Айгуль' : 'e.g. Aigul'}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-gray-50 border border-gray-200 text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-[#6366F1] focus:bg-white text-sm font-medium transition-all"
                />
              </div>

              {/* Role Selector */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">
                    {language === 'ky' ? 'Сиз ким болосуз?' : language === 'ru' ? 'Кем вы являетесь?' : 'Who are you?'}
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-gray-50 border border-gray-200 text-[#1A1A1A] focus:outline-none focus:border-[#6366F1] focus:bg-white text-sm font-medium transition-all"
                  >
                    <option value="parent">{language === 'ky' ? 'Ата-эне' : language === 'ru' ? 'Родитель' : 'Parent'}</option>
                    <option value="student">{language === 'ky' ? 'Окуучу' : language === 'ru' ? 'Ученик' : 'Student'}</option>
                    <option value="teacher">{language === 'ky' ? 'Мугалим / Кесиптеш' : language === 'ru' ? 'Учитель / Коллега' : 'Teacher / Colleague'}</option>
                    <option value="admin">{language === 'ky' ? 'Мектеп жетекчиси' : language === 'ru' ? 'Администрация школы' : 'School Administrator'}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">
                    {language === 'ky' ? 'Кызыктырган багыт:' : language === 'ru' ? 'Направление:' : 'Interest / Service:'}
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-gray-50 border border-gray-200 text-[#1A1A1A] focus:outline-none focus:border-[#6366F1] focus:bg-white text-sm font-medium transition-all"
                  >
                    <option value="ort">{language === 'ky' ? 'ЖРТ / ОРТга даярдоо' : language === 'ru' ? 'Подготовка к ОРТ/ЖРТ' : 'ORT/NTC Math Prep'}</option>
                    <option value="training">{language === 'ky' ? 'Мугалимдерге тренинг' : language === 'ru' ? 'Тренинг для учителей' : 'Teacher Training'}</option>
                    <option value="tutoring">{language === 'ky' ? 'Математика сабагы' : language === 'ru' ? 'Уроки математики' : 'Math Lessons'}</option>
                    <option value="consult">{language === 'ky' ? 'Консультация' : language === 'ru' ? 'Консультация' : 'Consultation'}</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">
                  {language === 'ky' ? 'Кошумча сурооңуз же каалооңуз:' : language === 'ru' ? 'Ваше сообщение / вопросы:' : 'Additional message or questions:'}
                </label>
                <textarea
                  rows={3}
                  placeholder={language === 'ky' ? 'Саламатсызбы, окуу убактысы жана шарттары боюнча...' : language === 'ru' ? 'Здравствуйте, интересует расписание и формат...' : 'Hello, interested in schedule and details...'}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-gray-50 border border-gray-200 text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-[#6366F1] focus:bg-white text-sm font-medium transition-all"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                id="submit-whatsapp-message-btn"
                className="w-full flex items-center justify-center gap-2 py-4 rounded-full bg-[#1A1A1A] hover:bg-black text-white font-black text-sm sm:text-base shadow-xl transition-all hover:scale-[1.01] active:scale-[0.99]"
              >
                <MessageCircle className="w-5 h-5 text-emerald-400" />
                <span>{language === 'ky' ? 'WhatsApp аркылуу жөнөтүү' : language === 'ru' ? 'Отправить в WhatsApp' : 'Send via WhatsApp'}</span>
              </button>

              {submitted && (
                <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs text-center font-bold">
                  {language === 'ky' ? 'WhatsApp ачылууда...' : language === 'ru' ? 'Переход в WhatsApp...' : 'Opening WhatsApp...'}
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
