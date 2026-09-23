import {
  EducationItem,
  ExperienceItem,
  CertificateItem,
  PublicationItem,
  DigitalResourceItem,
  MathChallenge
} from '../types';

export const portfolioData = {
  profile: {
    name: {
      ky: 'Айсана Абдрахманова',
      ru: 'Айсана Абдрахманова',
      en: 'Aisana Abdrakhmanova'
    },
    titles: {
      ky: [
        'Улуттук мастер-тренер',
        'Математика мугалими',
        'Педагог-изилдөөчү',
        'PISA & STEM тренери'
      ],
      ru: [
        'Национальный мастер-тренер',
        'Учитель математики',
        'Педагог-исследователь',
        'Тренер PISA & STEM'
      ],
      en: [
        'National Master Trainer',
        'Mathematics Teacher',
        'Pedagogue-Researcher',
        'PISA & STEM Trainer'
      ]
    },
    tagline: {
      ky: '12 жылдык билим берүүнүн жаңыланган мазмуну боюнча Улуттук мастер-тренер (№0014)',
      ru: 'Национальный мастер-тренер по распространению обновлённого содержания 12-летнего образования (№0014)',
      en: 'National Master Trainer on 12-Year Education Curriculum (№0014)'
    },
    shortBio: {
      ky: 'Профессионал педагог, математика мугалими жана улуттук тренер. 2022-жылдан бери билим берүү тармагында эмгектенип, окуучуларды ЖРТга (ОРТ), олимпиадаларга жана математикалык сабаттуулукка даярдайт. Заманбап PISA, STEM/STEAM жана санариптик усулдарды кеңири колдонот.',
      ru: 'Профессиональный педагог, преподаватель математики и тренер. Работаю в сфере образования с 2022 года. Специализируюсь на преподавании математики, подготовке учащихся к экзаменам и развитию математической грамотности.',
      en: 'Professional educator, mathematics teacher, and national trainer. Working in education since 2022. Specializing in advanced mathematics instruction, exam preparation (ORT), and fostering mathematical literacy through modern PISA and STEM/STEAM methodologies.'
    },
    location: {
      ky: 'Ош шаары, Кыргызстан',
      ru: 'г. Ош, Кыргызстан',
      en: 'Osh City, Kyrgyzstan'
    },
    contacts: {
      phone: '+996 776 613 730',
      whatsapp: '996776613730',
      telegram: '0776613730',
      instagram: 'aisana_06.02',
      instagramUrl: 'https://instagram.com/aisana_06.02',
      email: 'fmomabdrakhmanova@gmail.com'
    },
    keyStats: [
      {
        value: '4+',
        labelKy: 'Жыл педагогикалык тажрыйба',
        labelRu: 'Года педагогического опыта',
        labelEn: 'Years of Teaching Experience',
        subKy: '2022-жылдан бери',
        subRu: 'С 2022 года',
        subEn: 'Since 2022'
      },
      {
        value: '№0014',
        labelKy: 'Улуттук мастер-тренер',
        labelRu: 'Национальный мастер-тренер',
        labelEn: 'National Master Trainer',
        subKy: '12 жылдык билим берүү',
        subRu: '12-летнее образование',
        subEn: '12-Year Education'
      },
      {
        value: '2',
        labelKy: 'Илимий басылма жана диссертация',
        labelRu: 'Научные публикации и диссертация',
        labelEn: 'Academic Publications & Thesis',
        subKy: 'Эл аралык деңгээлде',
        subRu: 'Международный уровень',
        subEn: 'International Level'
      },
      {
        value: '100%',
        labelKy: 'Интерактивдүү санариптик усулдар',
        labelRu: 'Интерактивные цифровые методики',
        labelEn: 'Interactive EdTech Methods',
        subKy: 'PISA · STEAM · PBL',
        subRu: 'PISA · STEAM · PBL',
        subEn: 'PISA · STEAM · PBL'
      }
    ]
  },

  philosophy: {
    quote: {
      ky: '«Математика — бул жөн гана формулалар жана эсептөөлөр эмес. Менин мугалимдик милдетим — окуучуга логикалык ой жүгүртүүнү, талдоону, чыгаруунун ар түрдүү жолдорун издөөнү жана алган билимдерин реалдуу турмушта колдонууну үйрөтүү.»',
      ru: '«Математика — это не только формулы и вычисления. Моя задача как педагога — помочь ученику научиться мыслить, анализировать, искать разные пути решения и применять знания в реальных ситуациях.»',
      en: '“Mathematics is far more than formulas and calculations. My mission as an educator is to guide students to think logically, analyze critically, explore diverse solution paths, and apply their knowledge in real-life situations.”'
    },
    principles: [
      {
        icon: 'Sparkles',
        titleKy: 'Фундаменталдык жана инновациялык айкалыш',
        titleRu: 'Синтез фундаментального и инновационного',
        titleEn: 'Fundamental & Innovative Synthesis',
        descKy: 'Классикалык так математикалык билимди заманбап билим берүү технологиялары менен байланыштырып, окутууну түшүнүктүү, практикалык жана кызыктуу кылуу.',
        descRu: 'Сочетание фундаментальных математических знаний с современными образовательными технологиями для понятного и практичного обучения.',
        descEn: 'Connecting core mathematical rigor with modern educational technologies to create intuitive, practical, and engaging learning.'
      },
      {
        icon: 'Brain',
        titleKy: 'Көйгөйгө багытталган окутуу (PBL)',
        titleRu: 'Проблемно-ориентированное обучение (PBL)',
        titleEn: 'Problem-Based Learning (PBL)',
        descKy: 'Даяр эрежелерди жаттатпастан, окуучу өз алдынча изденип, суроо берип жана чыгарылышты өз акылы менен таап чыгуусуна шарт түзүү.',
        descRu: 'Развитие самостоятельности и математического мышления через исследование реальных проблем и практических кейсов.',
        descEn: 'Moving beyond rote memorization to empower students to explore, question, and discover problem solutions independently.'
      },
      {
        icon: 'Compass',
        titleKy: 'PISA жана функционалдык сабаттуулук',
        titleRu: 'PISA и функциональная грамотность',
        titleEn: 'PISA & Functional Literacy',
        descKy: 'Математикалык түшүнүктөрдү күнүмдүк турмуштагы чечимдерди кабыл алууга, каржылык жана логикалык кырдаалдарга колдонуу көндүмүн калыптандыруу.',
        descRu: 'Формирование способности применять математические знания для решения практических жизненных задач.',
        descEn: 'Building skills to apply mathematical concepts to real-world decision-making, financial literacy, and logical reasoning.'
      },
      {
        icon: 'Users',
        titleKy: 'Мугалимдер арасында тажрыйба бөлүшүү',
        titleRu: 'Трансляция опыта и менторство педагогов',
        titleEn: 'Teacher Mentorship & Knowledge Sharing',
        descKy: 'Улуттук мастер-тренер катары республиканын мугалимдерине 12 жылдык билим берүү стандарттарын жана интерактивдүү куралдарды үйрөтүү.',
        descRu: 'Участие в распространении обновленного содержания 12-летнего образования в качестве национального мастер-тренера.',
        descEn: 'Sharing updated 12-year educational standards and interactive pedagogical tools with teachers across the republic as a National Master Trainer.'
      }
    ]
  },

  education: [
    {
      year: '2023–2025',
      degreeKy: 'Магистратура (Артыкчылык менен)',
      degreeRu: 'Магистратура',
      degreeEn: "Master's Degree (Honors)",
      institutionKy: 'Ош мамлекеттик университети',
      institutionRu: 'Ошский государственный университет',
      institutionEn: 'Osh State University',
      facultyKy: 'Математика, физика, техника жана маалыматтык технологиялар институту',
      facultyRu: 'Институт математики, физики, техники и информационных технологий',
      facultyEn: 'Institute of Mathematics, Physics, Technology and Information Technology',
      specialtyKy: 'Математиканы, информатиканы окутуу технологиясы жана билим берүү менеджменти кафедрасы',
      specialtyRu: 'Кафедра технологии обучения математике, информатике и образовательного менеджмента',
      specialtyEn: 'Department of Mathematics and Informatics Teaching Technologies and Educational Management',
      descriptionKy: 'Изилдөө темасы: «Жогорку класстарда математикалык маселелерди чыгарууну окутуу усулдары». Проблемалык-ориентирленген окутуу (PBL) усулдары жана алардын натыйжалуулугу изилденген.',
      descriptionRu: 'Тема исследования: «Методы обучения решению математических задач в старшей школе». Изучались современные методы обучения (PBL) и их влияние на результаты учащихся.',
      descriptionEn: 'Research topic: "Methods of Teaching Mathematical Problem Solving in High School". Investigated Problem-Based Learning (PBL) methodologies and evaluated their empirical impact on student outcomes.'
    },
    {
      year: '2019–2023',
      degreeKy: 'Бакалавриат',
      degreeRu: 'Бакалавриат',
      degreeEn: "Bachelor's Degree",
      institutionKy: 'Ош мамлекеттик университети',
      institutionRu: 'Ошский государственный университет',
      institutionEn: 'Osh State University',
      facultyKy: 'Математика жана маалыматтык технологиялар факультети',
      facultyRu: 'Факультет математики и информационных технологий',
      facultyEn: 'Faculty of Mathematics and Information Technologies',
      specialtyKy: 'Математика жана педагогикалык билим берүү',
      specialtyRu: 'Математическое и педагогическое образование',
      specialtyEn: 'Mathematics & Pedagogical Education',
      descriptionKy: 'Жогорку жана мектеп математикасынын усулдары, алгебра, геометрия, математикалык анализ жана программалоо негиздери өздөштүрүлдү.',
      descriptionRu: 'Освоение фундаментальной математики, алгебры, геометрии, матанализа и методик школьного преподавания.',
      descriptionEn: 'Mastered foundational mathematics, linear algebra, geometry, calculus, and contemporary school pedagogy.'
    },
    {
      year: '2019',
      degreeKy: 'Орто билим',
      degreeRu: 'Среднее общее образование',
      degreeEn: 'Secondary School Education',
      institutionKy: 'Карл Маркс атындагы №2 орто жалпы билим берүүчү мектеби',
      institutionRu: 'Средняя общеобразовательная школа №2 им. Карла Маркса',
      institutionEn: 'Karl Marx Secondary Comprehensive School №2',
      descriptionKy: 'Орто мектепти ийгиликтүү аяктаган.',
      descriptionRu: 'Окончила среднюю общеобразовательную школу.',
      descriptionEn: 'Graduated from secondary school with academic distinction.'
    }
  ],

  experience: [
    {
      period: '2026-ж. августтан — азыркы убакытка чейин',
      periodRu: 'С августа 2026 года — настоящее время',
      periodEn: 'August 2026 — Present',
      roleKy: 'Улуттук мастер-тренер',
      roleRu: 'Национальный мастер-тренер',
      roleEn: 'National Master Trainer',
      organizationKy: 'КР Билим берүү жана илим министрлиги / РИПКПР',
      organizationRu: 'РИПКПР при МОиН Кыргызской Республики',
      organizationEn: 'RIPKPR under the Ministry of Education and Science of the Kyrgyz Republic',
      highlightBadge: 'Сертификат №0014',
      responsibilitiesKy: [
        '12 жылдык билим берүүнүн жаңыланган мазмунун жайылтуу боюнча мугалимдерге тренингдерди өткөрүү',
        'Педагогдор үчүн заманбап билим берүү технологиялары жана методикасы боюнча окутуу иш-чараларын уюштуруу',
        'STEM / STEAM усулдары жана PISA эл аралык баалоосуна даярдоо боюнча практикалык мастер-класстар',
        'Санариптик билим берүү технологияларын сабакта колдонуу боюнча методикалык коштоо'
      ],
      responsibilitiesRu: [
        'Проведение обучающих мероприятий и тренингов для педагогов по обновленному содержанию 12-летнего образования',
        'Обучение педагогов современным образовательным технологиям и методикам преподавания математики',
        'Практические мастер-классы по интеграции STEM/STEAM подходов и компетенций PISA',
        'Методическое сопровождение учителей по внедрению цифровых образовательных технологий'
      ],
      responsibilitiesEn: [
        'Conducting professional training sessions for teachers on the updated 12-year educational curriculum',
        'Organizing workshops on modern pedagogical methodologies and mathematics instructional strategies',
        'Delivering practical masterclasses on STEM/STEAM integration and PISA mathematical literacy frameworks',
        'Providing ongoing methodological support for educators on classroom EdTech integration'
      ],
      photoCaptionKy: 'Айсана Абдрахманова интерактивдүү панелде мугалимдерге 12 жылдык билим берүүнүн жаңыланган мазмунун, Кыргыз Республикасынын билим берүүнү өнүктүрүү программасын жана усулдук системасын түшүндүрүүдө',
      photoCaptionRu: 'Айсана Абдрахманова проводит обучающий интерактивный семинар для педагогов по нормативно-методической системе и Программе развития образования КР на 2021–2040 годы',
      photoCaptionEn: 'Aisana Abdrakhmanova leading an interactive seminar for educators on the 12-year curriculum framework and national educational development program',
      photoKey: 'trainer_lecture',
      photoTitleKy: 'Интерактивдүү панелде лекция: 12 жылдык билим берүү жана ченемдик-усулдук система',
      photoTitleRu: 'Интерактивная лекция: Нормативно-методическая система и 12-летнее образование',
      photoTitleEn: 'Interactive Lecture: Regulatory-Methodological Framework & 12-Year Education',
      badgeLabelKy: 'Улуттук мастер-тренинг',
      badgeLabelRu: 'Национальный мастер-тренинг',
      badgeLabelEn: 'National Master Training',
      photos: [
        {
          key: 'trainer_lecture',
          photoTitleKy: 'Интерактивдүү панелде лекция: 12 жылдык билим берүү жана ченемдик-усулдук система',
          photoTitleRu: 'Интерактивная лекция: Нормативно-методическая система и 12-летнее образование',
          photoTitleEn: 'Interactive Lecture: Regulatory-Methodological Framework & 12-Year Education',
          badgeLabelKy: 'Интерактивдүү лекция',
          badgeLabelRu: 'Интерактивная лекция',
          badgeLabelEn: 'Interactive Lecture',
          photoCaptionKy: 'Айсана Абдрахманова интерактивдүү панелде мугалимдерге 12 жылдык билим берүүнүн жаңыланган мазмунун, Кыргыз Республикасынын билим берүүнү өнүктүрүү программасын жана ченемдик-усулдук системасын түшүндүрүүдө',
          photoCaptionRu: 'Айсана Абдрахманова проводит обучающий интерактивный семинар для педагогов по нормативно-методической системе и Программе развития образования КР на 2021–2040 годы',
          photoCaptionEn: 'Aisana Abdrakhmanova leading an interactive seminar for educators on the 12-year curriculum framework and national educational development program',
          tagKy: 'Интерактивдүү лекция',
          tagRu: 'Интерактивная лекция',
          tagEn: 'Interactive Lecture'
        },
        {
          key: 'trainer',
          photoTitleKy: 'Педагогдор менен практикалык топтук иш',
          photoTitleRu: 'Практическая групповая работа с педагогами',
          photoTitleEn: 'Hands-on Teacher Workshop Group Session',
          badgeLabelKy: 'РИПКПР & МОиН КР',
          badgeLabelRu: 'РИПКПР & МОиН КР',
          badgeLabelEn: 'RIPKPR & Ministry of Ed',
          photoCaptionKy: 'Мектеп мугалимдери менен өткөрүлгөн практикалык мастер-тренинг (12 жылдык билим берүү)',
          photoCaptionRu: 'Практический мастер-тренинг с учителями математики по 12-летнему образованию',
          photoCaptionEn: 'Hands-on master training workshop with mathematics educators on the 12-year curriculum',
          tagKy: 'Топтук иш & Практикум',
          tagRu: 'Групповая работа',
          tagEn: 'Workshop Session'
        }
      ]
    },
    {
      period: '2023-жылдан бери — азыркы убакытка чейин',
      periodRu: 'С 2023 года — настоящее время',
      periodEn: '2023 — Present',
      roleKy: 'Окутуучу («SECOM» билим берүү борбору)',
      roleRu: 'Преподаватель образовательного центра «SECOM»',
      roleEn: 'Lead Mathematics Instructor (SECOM Center)',
      organizationKy: '«SECOM» билим берүү борбору',
      organizationRu: 'Образовательный центр «SECOM»',
      organizationEn: 'SECOM Educational Center',
      highlightBadge: 'SECOM & ЖРТ / ОРТ',
      responsibilitiesKy: [
        'Жалпы республикалык тестирлөөгө (ЖРТ / ОРТ) комплекстүү даярдоо',
        'Окуучулар менен жекече (индивидуалдуу) жана топтук иштерди алып баруу',
        'Практикалык жана диагностикалык тесттик материалдарды иштеп чыгуу',
        'Ар түрдүү деңгээлдеги окуучулардын математикалык сабаттуулугун жана логикасын көтөрүү'
      ],
      responsibilitiesRu: [
        'Комплексная подготовка учащихся к сдаче ОРТ/ЖРТ с высоким средним баллом',
        'Индивидуальная и групповая работа с учащимися с разным уровнем подготовки',
        'Разработка практических и диагностических материалов для проверки знаний',
        'Развитие математической грамотности и уверенности в решении сложных задач'
      ],
      responsibilitiesEn: [
        'Comprehensive preparation for National Scholarship Testing (ORT) with high average scores',
        'Personalized 1-on-1 tutoring and interactive small-group problem-solving sessions',
        'Developing original diagnostic assessments and targeted practice test materials',
        'Cultivating critical logic and quantitative confidence in diverse student cohorts'
      ],
      photoKey: 'secom_award',
      photoTitleKy: 'SECOM Сертификаты жана сыйлоо аземи',
      photoTitleRu: 'Вручение сертификата SECOM от руководства центра',
      photoTitleEn: 'SECOM Certificate Presentation Ceremony',
      badgeLabelKy: 'Кесиптик сыйлык & Сертификат',
      badgeLabelRu: 'Награда & Сертификат',
      badgeLabelEn: 'Award & Certificate',
      photoCaptionKy: 'SECOM билим берүү борборунун жетекчилиги тарабынан математикалык цикл боюнча педагогикалык үзүрлүү эмгеги үчүн расмий сертификат тапшырылууда',
      photoCaptionRu: 'Вручение официального сертификата SECOM за выдающиеся успехи в преподавании математики и подготовку учащихся',
      photoCaptionEn: 'Presentation of official SECOM certificate of accomplishment for teaching mathematics and student development',
      photos: [
        {
          key: 'secom_award',
          photoTitleKy: 'SECOM Сертификаты жана сыйлоо аземи',
          photoTitleRu: 'Вручение сертификата SECOM',
          photoTitleEn: 'SECOM Certificate Presentation',
          badgeLabelKy: 'Сертификат & Сыйлык',
          badgeLabelRu: 'Сертификат & Награда',
          badgeLabelEn: 'Award & Certificate',
          photoCaptionKy: 'SECOM билим берүү борборунун жетекчилиги тарабынан математикалык цикл боюнча педагогикалык үзүрлүү эмгеги үчүн расмий сертификат тапшырылууда',
          photoCaptionRu: 'Торжественное вручение официального сертификата SECOM за выдающиеся успехи в преподавании математики',
          photoCaptionEn: 'Presentation of official SECOM certificate of accomplishment for teaching mathematics',
          tagKy: 'Сертификат тапшыруу',
          tagRu: 'Вручение сертификата',
          tagEn: 'Certificate Award'
        },
        {
          key: 'secom',
          photoTitleKy: 'SECOM окуучулары жана бүтүрүүчүлөрү менен',
          photoTitleRu: 'С учениками и выпускниками SECOM',
          photoTitleEn: 'With SECOM Students & Graduates',
          badgeLabelKy: 'SECOM Салтанаты',
          badgeLabelRu: 'Церемония SECOM',
          badgeLabelEn: 'SECOM Gala',
          photoCaptionKy: 'SECOM билим берүү борборунун окуучулары жана бүтүрүүчүлөрү менен салтанаттуу аземде',
          photoCaptionRu: 'Торжественное мероприятие и чествование выпускников образовательного центра SECOM',
          photoCaptionEn: 'Celebratory ceremony with students and graduates of SECOM Educational Center',
          tagKy: 'Окуучулар & Сахна',
          tagRu: 'Выпускники SECOM',
          tagEn: 'SECOM Graduates'
        }
      ]
    },
    {
      period: '2022-жылдан бери — азыркы убакытка чейин',
      periodRu: 'С 2022 года — настоящее время',
      periodEn: '2022 — Present',
      roleKy: 'Математика мугалими',
      roleRu: 'Учитель математики',
      roleEn: 'Mathematics Teacher',
      organizationKy: 'Жалпы билим берүүчү мектеп',
      organizationRu: 'Общеобразовательная школа',
      organizationEn: 'Secondary Comprehensive School',
      highlightBadge: 'Педагог & Класс жетекчи',
      responsibilitiesKy: [
        '5–11-класстарда математика, алгебра жана геометрия сабактарын окутуу',
        'Сабактан тышкаркы математикалык иш-чараларды («Увлекательная математика» таймашы, викториналар, долбоорлор) уюштуруу',
        'Окуучулардын жаш өзгөчөлүктөрүнө ылайык окутуу процессин уюштуруу',
        'Автордук окуу-практикалык материалдарды жана интерактивдүү тапшырмаларды түзүү',
        'Класстык жетекчилик, тарбиялык иштерди жана ата-энелер менен тыгыз байланышты жүргүзүү'
      ],
      responsibilitiesRu: [
        'Преподавание математики, алгебры и геометрии в общеобразовательной школе',
        'Организация внеклассных мероприятий и интеллектуальных конкурсов («Увлекательная математика», викторины, исследовательские проекты)',
        'Работа с учащимися разных возрастных групп с учетом их индивидуальных особенностей',
        'Разработка учебных и практических материалов, применение интерактивных методик',
        'Классное руководство, воспитательная работа и взаимодействие с родителями'
      ],
      responsibilitiesEn: [
        'Teaching mathematics, algebra, and geometry across grades 5–11 in accordance with national curricula',
        'Organizing co-curricular STEM events, math olympiads, and interactive competitions ("Fascinating Mathematics", project defenses)',
        'Differentiating classroom instruction based on developmental stages and individual learning speeds',
        'Creating original practice worksheets, interactive tasks, and problem-based activities',
        'Serving as homeroom advisor, mentoring student leadership, and partnering closely with parents'
      ],
      photoKey: 'engaging_math',
      photoTitleKy: '«Увлекательная математика» сабактан тышкаркы иш-чарасы',
      photoTitleRu: 'Внеклассное мероприятие «Увлекательная математика»',
      photoTitleEn: 'Co-curricular Event "Fascinating Mathematics"',
      badgeLabelKy: 'Интерактивдүү таймаш',
      badgeLabelRu: 'Интерактивная викторина',
      badgeLabelEn: 'Interactive Quiz & Teams',
      photoCaptionKy: 'Окуучулар арасында өткөрүлгөн «Увлекательная математика» интеллектуалдык таймашы жана командалык чыгармачыл иштер',
      photoCaptionRu: 'Интеллектуальная игра-викторина «Увлекательная математика» с командным решением задач',
      photoCaptionEn: 'Interactive "Fascinating Math" team competition and creative problem-solving showcase',
      photos: [
        {
          key: 'engaging_math',
          photoTitleKy: '«Увлекательная математика» сабактан тышкаркы иш-чарасы',
          photoTitleRu: 'Внеклассное мероприятие «Увлекательная математика»',
          photoTitleEn: 'Co-curricular Event "Fascinating Mathematics"',
          badgeLabelKy: 'Интерактивдүү таймаш',
          badgeLabelRu: 'Интерактивная викторина',
          badgeLabelEn: 'Interactive Quiz',
          photoCaptionKy: 'Окуучулар арасында өткөрүлгөн «Увлекательная математика» интеллектуалдык таймашы жана командалык чыгармачыл иштер',
          photoCaptionRu: 'Интеллектуальная игра-викторина «Увлекательная математика» с командным решением нестандартных задач',
          photoCaptionEn: 'Interactive "Fascinating Math" team competition and creative problem-solving showcase',
          tagKy: '«Увлекательная математика»',
          tagRu: '«Увлекательная математика»',
          tagEn: 'Fascinating Math'
        },
        {
          key: 'school_project',
          photoTitleKy: 'Окуучулардын илимий-изилдөө долбоорун коргоосу',
          photoTitleRu: 'Защита исследовательских проектов учеников',
          photoTitleEn: 'Student Applied Math Defense',
          badgeLabelKy: 'Илимий долбоор',
          badgeLabelRu: 'Исследовательский проект',
          badgeLabelEn: 'Applied Project',
          photoCaptionKy: 'Окуучулардын «Нужна ли математика в повседневной жизни?» долбоорун коргоосу жана сертификат тапшыруу аземи',
          photoCaptionRu: 'Защита проектов учащихся «Нужна ли математика в повседневной жизни?» и вручение сертификатов',
          photoCaptionEn: 'Student project defense on "Is math needed in everyday life?" and certificate award ceremony',
          tagKy: 'Изилдөө долбоору',
          tagRu: 'Изилдөө долбоору',
          tagEn: 'Research Defense'
        }
      ]
    }
  ],

  certificates: [
    {
      id: 'cert-1',
      year: '2026',
      titleKy: '12 жылдык билим берүүнүн жаңыланган мазмунун жайылтуу боюнча Улуттук мастер-тренер',
      titleRu: 'Национальный мастер-тренер по распространению обновлённого содержания 12-летнего образования',
      titleEn: 'National Master Trainer on Disseminating the Updated 12-Year Education Curriculum',
      issuerKy: 'Педагогикалык кызматкерлердин квалификациясын жогорулатуу жана кайра даярдоо республикалык институту (РИПКПР)',
      issuerRu: 'Республиканский институт повышения квалификации и переподготовки педагогических работников',
      issuerEn: 'Republican Institute for In-Service Training and Retraining of Pedagogical Staff (RIPKPR)',
      specialization: 'Математика',
      certificateNumber: '№0014',
      format: 'Күндүзгү окуу (Очное обучение)',
      category: 'trainer',
      badge: 'Улуттук статус (№0014)',
      badgeEn: 'National Status (№0014)',
      photoKey: 'trainer_lecture',
      photoTitleKy: '12 жылдык билим берүү боюнча интерактивдүү мастер-тренинг',
      photoTitleRu: 'Интерактивный мастер-тренинг по 12-летнему образованию',
      photoTitleEn: 'Interactive Master Training on 12-Year Education',
      photoCaptionKy: 'Айсана Абдрахманова интерактивдүү панелде мугалимдерге 12 жылдык билим берүүнүн жаңыланган мазмунун, Кыргыз Республикасынын билим берүүнү өнүктүрүү программасын жана ченемдик-усулдук системасын түшүндүрүүдө',
      photoCaptionRu: 'Айсана Абдрахманова проводит обучающий семинар для педагогов по нормативно-методической системе и Программе развития образования КР на 2021–2040 годы',
      photoCaptionEn: 'Aisana Abdrakhmanova conducting an interactive master training for teachers on the 12-year educational curriculum and national development framework'
    },
    {
      id: 'cert-2',
      year: '2024–2025',
      titleKy: 'SECOM: Геометрияны окутуунун усулдары жана математикалык цикл боюнча чеберчилик',
      titleRu: 'SECOM: Методы обучения геометрии и мастерство преподавания математического цикла',
      titleEn: 'SECOM: Teaching Geometry Methodologies & Mathematics Pedagogical Excellence',
      issuerKy: '«SECOM» билим берүү мекемеси',
      issuerRu: 'Образовательное учреждение «SECOM»',
      issuerEn: 'SECOM Educational Institution',
      specialization: 'Математика жана геометрия',
      certificateNumber: '№ LS230000235',
      format: 'Күндүзгү окуу (Очное обучение)',
      category: 'award',
      badge: 'SECOM Сертификаты & Сыйлоо',
      badgeEn: 'SECOM Award & Certificate',
      photoKey: 'secom_award',
      photoTitleKy: 'SECOM Сертификаты жана сыйлоо аземи',
      photoTitleRu: 'Вручение сертификата SECOM от руководства центра',
      photoTitleEn: 'SECOM Certificate Presentation Ceremony',
      photoCaptionKy: '«SECOM» билим берүү борборунун жетекчилиги тарабынан математикалык цикл боюнча жетишкендиктер жана үзүрлүү эмгек үчүн берилген расмий сертификат',
      photoCaptionRu: 'Торжественное вручение официального сертификата SECOM за достижения в обучении математике и подготовку учащихся',
      photoCaptionEn: 'Official certificate presented by SECOM leadership recognizing exemplary mathematics instruction and student excellence'
    },
    {
      id: 'cert-3',
      year: '2024',
      titleKy: 'PISA компетенцияларын калыптандыруу аркылуу окуучулардын математикалык сабаттуулугун жогорулатуу',
      titleRu: 'Повышение математической грамотности учащихся посредством формирования компетенций PISA',
      titleEn: 'Enhancing Students’ Mathematical Literacy Through PISA Competencies Development',
      issuerKy: 'РИПКПР',
      issuerRu: 'Республиканский институт повышения квалификации и переподготовки педагогических работников',
      issuerEn: 'Republican Pedagogical Institute (RIPKPR)',
      specialization: 'Математика мугалими',
      certificateNumber: '№ 12843',
      format: 'Күндүзгү окуу (Очное обучение)',
      category: 'pisa_stem',
      badge: 'PISA компетенциялары',
      badgeEn: 'PISA Competencies'
    },
    {
      id: 'cert-4',
      year: '2023–2024',
      titleKy: 'Математиканы окутуунун усулдары жана жогорку математиканын элементтери',
      titleRu: 'Методы преподавания математики и элементы высшей математики',
      titleEn: 'Mathematics Teaching Methodologies & Foundations of Higher Mathematics',
      issuerKy: 'Secom билим берүү мекемеси',
      issuerRu: 'Образовательное учреждение Secom',
      issuerEn: 'Secom Educational Institution',
      specialization: 'Математика',
      certificateNumber: 'Аяктаган күнү: 15.05.2024',
      format: 'Күндүзгү окуу (Очное обучение)',
      category: 'math',
      badge: 'Жогорку математика',
      badgeEn: 'Advanced Math'
    },
    {
      id: 'cert-5',
      year: '2023–2024',
      titleKy: 'Инновациялык педагогикалык технологиялар жана STEM-билим берүүнүн негиздери',
      titleRu: 'Инновационные педагогические технологии и основы STEM-образования',
      titleEn: 'Innovative Pedagogical Technologies and Fundamentals of STEM Education',
      issuerKy: 'РИПКПР',
      issuerRu: 'Республиканский институт повышения квалификации и переподготовки педагогических работников',
      issuerEn: 'Republican Pedagogical Institute (RIPKPR)',
      specialization: 'Математика',
      certificateNumber: 'Аяктаган күнү: 12.01.2024',
      format: 'Күндүзгү окуу (Очное обучение)',
      category: 'pisa_stem',
      badge: 'STEM / Инновация',
      badgeEn: 'STEM & Innovation'
    },
    {
      id: 'cert-6',
      year: '2023',
      titleKy: 'PISA-2025 изилдөөсү, Алтын тамга, предметтик олимпиада, ЖРТ, STEAM усулу жана виртуалдык лабораториялар',
      titleRu: 'Исследование PISA-2025, Алтын тамга, предметные олимпиады, ЖРТ, методика STEAM и виртуальные лаборатории',
      titleEn: 'PISA-2025 Assessment, Altyn Tamga, Subject Olympiads, ORT, STEAM & Virtual Labs',
      issuerKy: '«Аян» окуу борбору',
      issuerRu: 'Учебный центр «Аян»',
      issuerEn: 'Ayan Educational Center',
      specialization: 'Математика',
      certificateNumber: '№ K3/23',
      format: 'Күндүзгү окуу (Очное обучение)',
      category: 'pisa_stem',
      badge: 'PISA & Алтын тамга',
      badgeEn: 'PISA & Olympiads'
    }
  ],

  publications: [
    {
      titleKy: '«Математикалык маселе окутуу каражаты катары»',
      titleRu: '«Математическая задача как средство обучения»',
      titleEn: '“The Mathematical Problem as an Educational Instrument”',
      typeKy: 'Эл аралык илимий-практикалык конференция макаласы',
      typeRu: 'Статья Всероссийской научно-практической конференции с международным участием',
      typeEn: 'Article in International Scientific-Practical Conference Proceedings',
      publisherKy: '«Илим менен билимди өнүктүрүүдө санариптик технологиялар жана инновациялар» жыйнагы',
      publisherRu: '«Цифровые технологии и инновации в развитии науки и образования»',
      publisherEn: 'Collection: "Digital Technologies and Innovations in Science and Education"',
      year: '2024',
      detailsKy: 'Чебоксары: И.Я. Яковлев атындагы Чуваш мамлекеттик педагогикалык университети, 2024.',
      detailsRu: 'Чебоксары: Чувашский государственный педагогический университет, 2024.',
      detailsEn: 'Cheboksary: I.Y. Yakovlev Chuvash State Pedagogical University, 2024.'
    },
    {
      titleKy: '«Математика боюнча олимпиадалык маселелерди чыгаруунун базалык усулдары»',
      titleRu: '«Базовые методы решения олимпиадных задач по математике»',
      titleEn: '“Core Methodologies for Solving Olympiad Mathematical Problems”',
      typeKy: 'Илимий журналдагы рецензияланган макала',
      typeRu: 'Научная статья в рецензируемом журнале',
      typeEn: 'Peer-Reviewed Research Journal Article',
      publisherKy: 'Табигый-илимий изилдөөлөр журналы (Журнал естественно-научных исследований)',
      publisherRu: 'Журнал естественно-научных исследований',
      publisherEn: 'Journal of Natural Science Research',
      year: '2024',
      detailsKy: '2024. № 9(1). 18–24-беттер.',
      detailsRu: '2024. № 9(1). С. 18–24.',
      detailsEn: '2024. Vol. 9(1), pp. 18–24.'
    },
    {
      titleKy: 'Магистрдик диссертация: «Жогорку класстарда математикалык маселелерди чыгарууну окутуу усулдары»',
      titleRu: 'Магистерская диссертация: «Методы обучения решению математических задач в старшей школе»',
      titleEn: 'Master’s Thesis: “Methodologies of Teaching Mathematical Problem Solving in High School”',
      typeKy: 'Академиялык илимий-изилдөө иши',
      typeRu: 'Академическая научно-исследовательская работа',
      typeEn: 'Academic Research Dissertation',
      publisherKy: 'ОшМУ, Математиканы жана информатиканы окутуу технологиялары кафедрасы',
      publisherRu: 'ОшГУ, Кафедра технологии обучения математике, информатике и образовательного менеджмента',
      publisherEn: 'Osh State University, Dept. of Mathematics & Informatics Teaching Technologies',
      year: '2025',
      detailsKy: 'Изилдөөдө заманбап усулдар, анын ичинде проблемалык-багытталган окутуу (PBL) жана анын окуучулардын жыйынтыгына тийгизген таасири терең анализденген.',
      detailsRu: 'В работе изучались современные методы обучения, включая проблемно-ориентированное обучение (PBL) и их влияние на результаты учащихся.',
      detailsEn: 'In-depth investigation of modern instructional frameworks, focusing on Problem-Based Learning (PBL) and its empirical impact on student learning outcomes.'
    }
  ],

  digitalResources: [
    {
      id: 'blooket',
      name: 'Blooket',
      platform: 'Blooket Platform',
      tag: 'Интерактивдүү тесттер',
      tagEn: 'Interactive Quizzes',
      highlight: 'Оюн формасындагы математика',
      highlightEn: 'Gamified Mathematics',
      descriptionKy: 'Автордук интерактивдүү тапшырмалар жана викториналар жыйнагы. Окуучулардын сабактагы активдүүлүгүн жана мотивациясын көтөрөт.',
      descriptionRu: 'Создание авторских наборов интерактивных заданий в игровом формате для повышения вовлеченности учащихся.',
      descriptionEn: 'Custom sets of interactive game-based quizzes that significantly boost classroom engagement and conceptual recall.',
      url: 'https://share.google/2G948TkDmLujBln16',
      iconName: 'Gamepad2'
    },
    {
      id: 'learningapps',
      name: 'LearningApps',
      platform: 'LearningApps.org',
      tag: 'Мультимедиалык көнүгүүлөр',
      tagEn: 'Multimedia Modules',
      highlight: 'Жекече логикалык машыгуу',
      highlightEn: 'Algorithmic Drills',
      descriptionKy: 'Математика, геометрия жана алгебра формулалары боюнча түзүлгөн мультимедиялык интерактивдүү көнүгүүлөр топтому.',
      descriptionRu: 'Создание мультимедийных интерактивных упражнений для закрепления формул, определений и алгоритмов решений.',
      descriptionEn: 'Multimedia interactive exercises designed to reinforce algebraic formulas, geometric definitions, and multi-step algorithms.',
      url: 'https://share.google/PICuwJgRWi9d13YXC',
      iconName: 'Boxes'
    },
    {
      id: 'infourok',
      name: 'Инфоурок',
      platform: 'Infourok.ru',
      tag: 'Методикалык иштелмелер',
      tagEn: 'Curricular Materials',
      highlight: 'Кесиптик тажрыйба алмашуу',
      highlightEn: 'Professional Knowledge Sharing',
      descriptionKy: 'Мугалимдик кесиптик өнүгүү профили жана автордук сабак иштелмелери, методикалык колдонмолор жана тесттер.',
      descriptionRu: 'Использование образовательной платформы для профессионального развития и публикации учебных материалов.',
      descriptionEn: 'Professional pedagogical portfolio featuring verified lesson plans, methodological guides, and assessment rubrics.',
      url: 'https://share.google/mQ1a2m4ziqkJSK3Cd',
      iconName: 'FileText'
    },
    {
      id: 'canva-gamma',
      name: 'Canva & Gamma AI',
      platform: 'Digital Visuals & AI',
      tag: 'Визуалдык карточкалар',
      tagEn: 'Visual Learning Flashcards',
      highlight: 'AI & Заманбап дизайн',
      highlightEn: 'AI & Modern Graphic Design',
      descriptionKy: 'Сабактар үчүн визуалдык карточкалар, түшүндүрүү плакаттары жана AI-инструменттер менен түзүлгөн заманбап презентациялар.',
      descriptionRu: 'Создание презентаций, визуальных материалов, образовательных карточек и цифрового контента с помощью ИИ.',
      descriptionEn: 'Visual concept flashcards, instructional infographics, and dynamic AI-assisted presentations for enhanced cognitive intake.',
      url: '#',
      iconName: 'Palette'
    }
  ],

  skillCategories: [
    {
      categoryTitleKy: 'Математика жана предметтик компетенциялар',
      categoryTitleRu: 'Математика и предметные компетенции',
      categoryTitleEn: 'Mathematics & Core Subject Competencies',
      skills: [
        { name: 'Алгебра & Геометрия', level: 98, descKy: 'Тереңдетилген мектеп программасы', descRu: 'Углубленный школьный курс', descEn: 'Advanced secondary curriculum' },
        { name: 'ЖРТ / ОРТга даярдоо', level: 95, descKy: 'Негизги жана кошумча тесттер', descRu: 'Основной и предметный тест', descEn: 'Core & subject test prep' },
        { name: 'Олимпиадалык математика', level: 90, descKy: 'Логикалык нестандарттуу маселелер', descRu: 'Нестандартные задачи и доказательства', descEn: 'Non-standard problems & proofs' },
        { name: 'Математикалык маселе чыгаруу усулдары', level: 96, descKy: 'Магистрдик диссертациялык багыт', descRu: 'Методология решения задач', descEn: 'Problem-solving methodologies' },
        { name: 'Жогорку математиканын элементтери', level: 88, descKy: 'Матанализ, сызыктуу алгебра', descRu: 'Матанализ, элементы высшей математики', descEn: 'Calculus & linear algebra' }
      ]
    },
    {
      categoryTitleKy: 'Заманбап билим берүү технологиялары',
      categoryTitleRu: 'Современные образовательные технологии',
      categoryTitleEn: 'Modern Educational Technologies',
      skills: [
        { name: 'PISA математикалык сабаттуулук', level: 95, descKy: 'Функционалдык сабаттуулук компетенциялары', descRu: 'Функциональная грамотность PISA', descEn: 'PISA functional literacy' },
        { name: 'STEM / STEAM интеграциясы', level: 92, descKy: 'Практикалык жана долбоордук окутуу', descRu: 'Практико-ориентированное обучение', descEn: 'Project-based STEM learning' },
        { name: 'PBL (Көйгөйгө багытталган окутуу)', level: 94, descKy: 'Problem-Based Learning технологиясы', descRu: 'Проблемно-ориентированное обучение', descEn: 'Problem-Based Learning (PBL)' },
        { name: '12 жылдык билим берүү мазмуну', level: 98, descKy: 'Улуттук деңгээлдеги стандарттар', descRu: 'Стандарты 12-летнего образования', descEn: '12-year national curriculum' },
        { name: 'Интерактивдүү окутуу усулдары', level: 95, descKy: 'Окуучулардын активдүү катышуусу', descRu: 'Интерактивные методы преподавания', descEn: 'Active student engagement' }
      ]
    },
    {
      categoryTitleKy: 'Тренерлик жана методикалык чеберчилик',
      categoryTitleRu: 'Тренерская деятельность и ораторство',
      categoryTitleEn: 'Training & Pedagogical Mentorship',
      skills: [
        { name: 'Педагогдор үчүн тренингдерди өткөрүү', level: 96, descKy: 'Республикалык масштабдагы семинарлар', descRu: 'Семинары республиканского масштаба', descEn: 'National-scale workshops' },
        { name: 'Оратордук чеберчилик & Публика алдында сүйлөө', level: 92, descKy: 'Аудиторияны шыктандыруу', descRu: 'Публичные выступления и вовлечение', descEn: 'Public speaking & inspiration' },
        { name: 'Мугалимдерге методикалык коштоо', level: 94, descKy: 'Насаатчылык жана кеңеш берүү', descRu: 'Методическое сопровождение педагогов', descEn: 'Methodological mentorship' },
        { name: 'Топтук фасилитация жана командалык иш', level: 90, descKy: 'Педагогикалык топтор менен иш алып баруу', descRu: 'Командная работа и модерация', descEn: 'Group moderation & teamwork' }
      ]
    },
    {
      categoryTitleKy: 'Санариптик технологиялар (EdTech)',
      categoryTitleRu: 'Цифровые технологии (EdTech)',
      categoryTitleEn: 'Digital Technologies (EdTech)',
      skills: [
        { name: 'Blooket & Оюндаштырылган тесттер', level: 95, descKy: 'Геймификация жана баалоо', descRu: 'Геймификация образовательного процесса', descEn: 'Gamified formative assessment' },
        { name: 'LearningApps мультимедиа көнүгүүлөр', level: 94, descKy: 'Интерактивдүү көнүгүү түзүү', descRu: 'Разработка интерактивных модулей', descEn: 'Interactive practice apps' },
        { name: 'Canva & Gamma AI дизайн', level: 92, descKy: 'Презентациялар, карточкалар, инфографика', descRu: 'Визуальные материалы и презентации', descEn: 'Visual infographics & decks' },
        { name: 'Виртуалдык доскалар жана лабораториялар', level: 90, descKy: 'Онлайн интерактивдүү куралдар', descRu: 'Виртуальные доски и лаборатории', descEn: 'Virtual boards & simulations' },
        { name: 'Инфоурок санариптик платформасы', level: 92, descKy: 'Методикалык материалдарды жайылтуу', descRu: 'Работа с образовательными ресурсами', descEn: 'Educational resource sharing' }
      ]
    },
    {
      categoryTitleKy: 'Soft Skills жана жеке сапаттар',
      categoryTitleRu: 'Soft Skills и личные качества',
      categoryTitleEn: 'Soft Skills & Personal Competencies',
      skills: [
        { name: 'Коммуникабелдүүлүк жана тил табышуу', level: 98, descKy: 'Ар бир окуучуга жеке мамиле табуу', descRu: 'Индивидуальный подход к каждому', descEn: 'Individualized student approach' },
        { name: 'Ийкемдүүлүк (Адаптивдүүлүк)', level: 95, descKy: 'Жаңы шарттарга тез көнүү', descRu: 'Быстрая адаптация к новшествам', descEn: 'Swift pedagogical adaptability' },
        { name: 'Лидерлик жана уюштуруучулук', level: 92, descKy: 'Жоопкерчиликти алуу жана демилге', descRu: 'Лидерские качества и организация', descEn: 'Leadership & initiative' },
        { name: 'Креативдүүлүк жана педагогикалык чыгармачылык', level: 94, descKy: 'Сабакты кызыктуу куруу', descRu: 'Творческий подход к преподаванию', descEn: 'Creative pedagogical design' }
      ]
    }
  ],

  // Interactive PISA & Math critical thinking challenges to showcase interactive pedagogical style
  mathChallenges: [
    {
      id: 1,
      questionKy: 'PISA тапшырмасы: «Жайкы лагердин бюджети»',
      questionRu: 'Задача PISA: «Бюджет летнего лагеря»',
      questionEn: 'PISA Challenge: "Summer Camp Budget"',
      contextKy: 'Мектеп лагеринде 24 окуучуга 6 күн тамак-аш даярдоо үчүн 18 кг күрүч сарпталат. Эгер лагерге 32 окуучу келип, лагер 9 күн уланса, канча килограмм күрүч талап кылынат?',
      contextRu: 'Для 24 школьников на 6 дней в летнем лагере требуется 18 кг риса. Сколько килограммов риса потребуется, если в лагерь приедут 32 школьника на 9 дней?',
      contextEn: 'In a school camp, 18 kg of rice is consumed to feed 24 students for 6 days. If 32 students attend the camp for 9 days, how many kilograms of rice will be required?',
      options: ['32 кг', '36 кг', '40 кг', '45 кг'],
      optionsEn: ['32 kg', '36 kg', '40 kg', '45 kg'],
      correctIndex: 1,
      hintKy: 'Бир окуучунун бир күндүк нормасын табыңыз: 18 кг / (24 * 6) = ?',
      hintRu: 'Найдите суточную норму на одного ученика: 18 кг / (24 * 6) = ?',
      hintEn: 'Find the daily portion for one student: 18 kg / (24 * 6) = ?',
      explanationKy: '1) Бир окуучу 1 күндө: 18 / (24 * 6) = 18 / 144 = 0.125 кг күрүч жейт. 2) 32 окуучу 9 күндө: 32 * 9 * 0.125 = 288 * 0.125 = 36 кг. Туура жооп: 36 кг! Мындай практикалык маселелер окуучунун турмуштук сабаттуулугун өстүрөт.',
      explanationRu: '1) Норма на 1 человека в день: 18 / (24 * 6) = 0.125 кг. 2) На 32 человека за 9 дней: 32 * 9 * 0.125 = 36 кг. Ответ: 36 кг. Подобные задачи PISA формируют реальную функциональную грамотность!',
      explanationEn: '1) Daily ration per student: 18 / (24 * 6) = 0.125 kg. 2) For 32 students over 9 days: 32 * 9 * 0.125 = 36 kg. Correct answer: 36 kg! Practical tasks like this foster authentic mathematical literacy.'
    },
    {
      id: 2,
      questionKy: 'ЖРТ / Логика: «Сандардын мыйзам ченемдүүлүгү»',
      questionRu: 'ОРТ / Логика: «Числовая закономерность»',
      questionEn: 'ORT / Logic: "Numerical Pattern"',
      contextKy: 'Катардагы белгисиз санды аныктаңыз: 2, 6, 12, 20, 30, ?',
      contextRu: 'Определите следующее число в последовательности: 2, 6, 12, 20, 30, ?',
      contextEn: 'Determine the next number in the sequence: 2, 6, 12, 20, 30, ?',
      options: ['38', '40', '42', '44'],
      optionsEn: ['38', '40', '42', '44'],
      correctIndex: 2,
      hintKy: 'Кошулуп жаткан айырмаларды байкаңыз: +4, +6, +8, +10...',
      hintRu: 'Обратите внимание на разности соседних чисел: +4, +6, +8, +10...',
      hintEn: 'Look at the step differences: +4, +6, +8, +10...',
      explanationKy: 'Айырмалар жуп сандар менен чоңоюуда: 2 (+4) -> 6 (+6) -> 12 (+8) -> 20 (+10) -> 30 (+12) -> 42. Же формула: n*(n+1) -> 1*2=2, 2*3=6, 3*4=12, 4*5=20, 5*6=30, 6*7=42! Туура жооп: 42.',
      explanationRu: 'Разности последовательно увеличиваются на 2: +4, +6, +8, +10, следовательно следующая прибавка +12: 30 + 12 = 42. Либо формула n*(n+1): 6*7 = 42. Правильный ответ: 42.',
      explanationEn: 'Differences increase by +2 each step: +4, +6, +8, +10, so the next increment is +12: 30 + 12 = 42. Alternatively, n*(n+1): 6*7 = 42. Correct answer: 42.'
    }
  ]
};
