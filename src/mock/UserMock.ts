export const userMock: User = {
  id: 1,
  name: 'John Doe',
  email: '4sKZV@example.com',
  avatar:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi1nkrYXY-ijQv5aCxkwooyg2roNFxj0ewJA&s',
  password: 'password',
  role: 'user',
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
