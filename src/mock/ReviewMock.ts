import type { Review } from "@/types/Review/Review";

export const reviewMock: Review = {
  id: "rvw_001",
  productId: 1,
  productName: "Смартфон Samsung Galaxy S23",
  rating: 4.5,
  comment:
    "Отличный смартфон! Камера просто потрясающая, особенно ночная съемка. Батареи хватает на полный день активного использования. Дисплей яркий и сочный. Единственное, цена немного завышена.",
  date: "2024-01-15",
  user: {
    id: 101,
    name: "Александр Петров",
    email: "alex.petrov@example.com",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80",
    password: "hashed_password_123",
    role: "user",
    createdAt: new Date("2023-05-10"),
    updatedAt: new Date("2024-01-15"),
  },
  media: [
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?ixlib=rb-4.0.3&auto=format&fit=crop&w-800&q=80",
    "https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  ],
};
