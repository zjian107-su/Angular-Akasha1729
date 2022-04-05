interface Book {
  title: string;
  authors: string[];
}

interface Tab {
  label: string;
  children?: Tab[]; // for nested tabs, optional
  isActive: boolean; // control click event and user interaction, optional
}

export { Book, Tab };
