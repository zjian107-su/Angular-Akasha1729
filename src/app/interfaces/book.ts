export interface Book {
  title: string;
  authors: {
    key: string;
    name: string;
  }[];
}

export interface APIResponse {
  works: Book[];
}
