export interface Cv {
  name: string;
  bio: string;
  title: string;
  subtitle: string;
  email: string;
  phone: string;
  website: string;
  address1: string;
  address2: string;
  portrait: Picture[];
  profile: string;
  work: Job[];
  education: Education[];
  skills: Skill[];
  projects: Project[];
}

export interface Picture {
  src: string;
  width: number;
  height: number;
}

export interface Job {
  title: string;
  company: string;
  location: string;
  type: string;
  dates: DateRange;
  techs: string[];
  website: string;
  description: string;
}

export interface DateRange {
  from: string;
  to?: string;
}

export interface Education {
  school: string;
  diploma: string;
  location: string;
  date: string;
  description: string;
}

export interface Skill {
  name: string;
  level: string;
  experience: number;
  related: string[];
  description: string;
}

export interface Project {
  name: string;
  description: string;
  shortDescription: string;
  website: string;
  pictures: Picture[];
}
