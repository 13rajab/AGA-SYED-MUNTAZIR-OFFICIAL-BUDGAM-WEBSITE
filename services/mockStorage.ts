
import { Project, ProjectStatus, Grievance, Demand } from '../types';

export const mockProjects: Project[] = [
  {
    id: '1',
    category: 'Infrastructure',
    title: 'Budgam Main Road Macadamization',
    titleUrdu: 'بڈگام مین روڈ کی میکڈیمائزیشن',
    description: 'Upgrading the primary connectivity route in the heart of Budgam. Project initiated shortly after assuming office in October 2024.',
    descriptionUrdu: 'بڈگام کے قلب میں بنیادی رابطہ سڑک کی اپ گریڈیشن۔ اکتوبر 2024 میں عہدہ سنبھالنے کے فوراً بعد پراجیکٹ کا آغاز کیا گیا۔',
    location: 'Main Budgam Market',
    status: ProjectStatus.COMPLETED,
    imageUrl: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    category: 'Health',
    title: 'New Emergency Ward for District Hospital',
    titleUrdu: 'ضلع ہسپتال کے لیے نیا ایمرجنسی وارڈ',
    description: 'State-of-the-art facility to handle critical cases locally. Approved and construction began in November 2024.',
    descriptionUrdu: 'مقامی طور پر نازک کیسوں سے نمٹنے کے لیے جدید ترین سہولت۔ نومبر 2024 میں منظوری دی گئی اور تعمیر کا آغاز ہوا۔',
    location: 'Budgam Town',
    status: ProjectStatus.ONGOING,
    imageUrl: 'https://images.unsplash.com/photo-1586773860418-d3b97978c65a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    category: 'Education',
    title: 'Smart Classrooms for Government Girls School',
    titleUrdu: 'سرکاری گرلز اسکول کے لیے اسمارٹ کلاس رومز',
    description: 'Integrating technology into early education. Part of the December 2024 education reform and modernization plan.',
    descriptionUrdu: 'بہتر تعلیمی نتائج کے لیے ابتدائی تعلیم میں ٹیکنالوجی کا انضمام۔ دسمبر 2024 کے تعلیمی اصلاحاتی اور جدید کاری کے منصوبے کا حصہ۔',
    location: 'Ichgam',
    status: ProjectStatus.PROPOSED,
    imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800'
  }
];

export const mockGrievances: Grievance[] = [
  {
    id: 'GRV-001',
    name: 'Suhail Ahmed',
    mobile: '9876543210',
    area: 'Ompora',
    department: 'Power Development',
    description: 'Frequent power cuts during evening hours. Reported in late October 2024.',
    status: 'In Review',
    timestamp: 1730000000000 // Oct 2024 timestamp
  }
];

export const mockDemands: Demand[] = [
  {
    id: 'DEM-001',
    sector: 'Water',
    content: 'Need for a new filtration plant in Beerwah border villages. Proposed in November 2024.',
    votes: 124,
    area: 'Beerwah',
    timestamp: 1731000000000 // Nov 2024 timestamp
  }
];
