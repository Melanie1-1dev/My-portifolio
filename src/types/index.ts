export interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  tech: string[];
  github?: string;
  live?: string;
  image?: string;
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Achievement {
  title: string;
  description: string;
  year?: string;
  type: "hackathon" | "competition" | "certification" | "workshop" | "leadership" | "project";
}
