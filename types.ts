
export type Language = 'ur' | 'en' | 'roman';

export enum ProjectStatus {
  PROPOSED = 'Proposed',
  ONGOING = 'Ongoing',
  COMPLETED = 'Completed'
}

export interface Project {
  id: string;
  category: 'Infrastructure' | 'Education' | 'Health' | 'Employment' | 'Youth' | 'Women';
  title: string;
  titleUrdu: string;
  description: string;
  descriptionUrdu: string;
  location: string;
  status: ProjectStatus;
  imageUrl?: string;
}

export interface Grievance {
  id: string;
  name: string;
  mobile: string;
  area: string;
  department: string;
  description: string;
  status: 'Submitted' | 'In Review' | 'Resolved';
  timestamp: number;
}

export interface Demand {
  id: string;
  sector: string;
  content: string;
  votes: number;
  area: string;
  timestamp: number;
}
