import type { User } from '@/mock/UserMock';

export type Review = {
  id: string;
  productId: number;
  productName: string;
  rating: number;
  comment: string;
  date: string;
  user: User;
  media?: string[];
};
