export type ServiceCategory = 'facials' | 'massage' | 'hair' | 'nails' | 'aesthetics' | 'vip';

export interface ServiceItem {
  id: string;
  name: string;
  category: ServiceCategory;
  description: string;
  durationMinutes: number;
  price: number;
  featured?: boolean;
  image: string;
  benefits: string[];
  includes?: string[];
}

export interface Therapist {
  id: string;
  name: string;
  role: string;
  specialty: string;
  experienceYears: number;
  bio: string;
  image: string;
  rating: number;
}

export interface SpaPackage {
  id: string;
  name: string;
  subtitle: string;
  duration: string;
  price: number;
  originalPrice: number;
  badge?: string;
  image: string;
  includedServices: string[];
  popular?: boolean;
}

export interface AppointmentRequest {
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  serviceId: string;
  serviceName: string;
  therapistId?: string;
  therapistName?: string;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
}

export interface AppointmentResponse extends AppointmentRequest {
  id: number;
  status: 'PENDING' | 'CONFIRMED' | 'CANCELLED';
  createdAt: string;
}

export interface ContactRequest {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface NewsletterRequest {
  email: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  comment: string;
  rating: number;
  avatar: string;
  treatment: string;
  date: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishedAt: string;
  readTime: string;
  coverImage: string;
  tags: string[];
}
