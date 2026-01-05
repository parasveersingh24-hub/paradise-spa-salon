
export interface Service {
  id: string;
  name: string;
  category: ServiceCategory;
  description: string;
  duration: string;
  price: string;
  imageUrl: string;
}

export enum ServiceCategory {
  HAIR = 'Hair Services',
  SKIN = 'Skin Care & Facials',
  NAILS = 'Nail Care',
  HAIR_REMOVAL = 'Hair Removal',
  MAKEUP = 'Makeup',
  SPA = 'Spa Treatments'
}

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  date: string;
  imageUrl: string;
  author: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}
