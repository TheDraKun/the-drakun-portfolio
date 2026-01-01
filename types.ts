
export interface Project {
  id: string;
  title: string;
  description: string;
  role: string;
  metrics?: string[];
  tags: string[];
  imageUrl: string;
  link?: string;
  screenshots: string[];
  category: string;
  organization: string;
  date: string;
  rolesContributions?: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  achievements: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}
