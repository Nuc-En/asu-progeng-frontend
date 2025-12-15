export const userMock: User = {
  id: 1,
  name: "Александр Петров",
  email: "4sKZV@example.com",
  avatar:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80",
  password: "password",
  role: "user",
  createdAt: new Date(),
  updatedAt: new Date(),
};

export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
  avatar?: string;
};
