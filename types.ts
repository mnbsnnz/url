export type Language = 'ky' | 'ru' | 'en';

export interface EducationItem {
  year: string;
  institution: string;
  degree: string;
  faculty?: string;
  specialty?: string;
  description?: string;
}

export interface ExperiencePhoto {
  key: string;
  photoTitleKy: string;
  photoTitleRu: string;
  photoTitleEn: string;
  badgeLabelKy: string;
  badgeLabelRu: string;
  badgeLabelEn: string;
  photoCaptionKy: string;
  photoCaptionRu: string;
  photoCaptionEn: string;
  tagKy?: string;
  tagRu?: string;
  tagEn?: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  responsibilities: string[];
  highlightBadge?: string;
  photos?: ExperiencePhoto[];
  photoKey?: string;
  photoTitleKy?: string;
  photoTitleRu?: string;
  photoTitleEn?: string;
  photoCaptionKy?: string;
  photoCaptionRu?: string;
  photoCaptionEn?: string;
  badgeLabelKy?: string;
  badgeLabelRu?: string;
  badgeLabelEn?: string;
}

export interface CertificateItem {
  id: string;
  year: string;
  titleKy: string;
  titleRu: string;
  titleEn?: string;
  issuerKy: string;
  issuerRu: string;
  issuerEn?: string;
  specialization: string;
  certificateNumber?: string;
  format: string;
  category: 'trainer' | 'math' | 'pisa_stem' | 'award' | string;
  date?: string;
  badge?: string;
  badgeEn?: string;
  photoKey?: string;
  photoTitleKy?: string;
  photoTitleRu?: string;
  photoTitleEn?: string;
  photoCaptionKy?: string;
  photoCaptionRu?: string;
  photoCaptionEn?: string;
}

export interface PublicationItem {
  title: string;
  type: string;
  publisher: string;
  year: string;
  details?: string;
  doiOrCitation?: string;
}

export interface DigitalResourceItem {
  id: string;
  name: string;
  platform: string;
  description: string;
  url: string;
  iconName: string;
  tag: string;
  highlight: string;
}

export interface SkillCategory {
  categoryTitle: string;
  skills: {
    name: string;
    level?: number;
    description?: string;
  }[];
}

export interface MathChallenge {
  id: number;
  question: string;
  context: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  hint: string;
}
