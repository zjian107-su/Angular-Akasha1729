export interface User {
  name: string;
  id: number;
}

export interface Post {
  userId: number;
  title: string;
  body: string;
}
