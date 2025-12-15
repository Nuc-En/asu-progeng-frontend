import type { Review } from '@/types/Review/Review';

export const reviewMock: Review = {
  id: '1',
  productId: 1,
  productName: 'Product 1',
  rating: 4.5,
  comment: 'Great product!',
  date: '2023-01-01',
  user: {
    id: 1,
    name: 'John Doe',
    email: '4sKZV@example.com',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi1nkrYXY-ijQv5aCxkwooyg2roNFxj0ewJA&s',
    password: 'password',
    role: 'user',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  media: [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi1nkrYXY-ijQv5aCxkwooyg2roNFxj0ewJA&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi1nkrYXY-ijQv5aCxkwooyg2roNFxj0ewJA&s',
  ],
};
