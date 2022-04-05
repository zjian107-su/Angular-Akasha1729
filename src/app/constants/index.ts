import { Book } from '../interfaces';
import { Tab } from '../interfaces';

const palindromeList: string[] = ['aba', 'abb', 'abc', 'ccc'];

const cityList: string[] = [
  'Los Angeles',
  'New York',
  'Chicago',
  'Houston',
  'Philadelphia',
  'Phoenix',
  'San Antonio',
  'San Diego',
  'Dallas',
  'San Jose',
  'Austin',
  'Jacksonville',
  'Fort Worth',
  'Columbus',
  'Charlotte',
  'San Francisco',
  'Indianapolis',
  'Seattle',
  'Denver',
  'Washington',
  'Boston',
  'El Paso',
  'Nashville',
  'Detroit',
  'Oklahoma City',
  'Portland',
  'Las Vegas',
  'Memphis',
  'Louisville',
  'Baltimore',
  'Milwaukee',
  'Albuquerque',
  'Tucson',
  'Fresno',
  'Mesa',
  'Sacramento',
  'Atlanta',
  'Kansas City',
  'Colorado Springs',
  'Miami',
  'Raleigh',
  'Omaha',
  'Long Beach',
  'Virginia Beach',
  'Oakland',
  'Minneapolis',
  'Tulsa',
  'Arlington',
  'Tampa',
  'New Orleans',
];

const data: Book[] = [
  { title: 'To Kill a Mockingbird', authors: ['Harper Lee'] },
  { title: '1984', authors: ['George Orwell'] },
  { title: 'Pride and Prejudice', authors: ['Jane Austen'] },
  { title: 'The Great Gatsby', authors: ['F. Scott Fitzgerald'] },
  { title: 'Moby-Dick', authors: ['Herman Melville'] },
  { title: 'The Catcher in the Rye', authors: ['J.D. Salinger'] },
  { title: 'Jane Eyre', authors: ['Charlotte Bronte'] },
  { title: 'Brave New World', authors: ['Aldous Huxley'] },
  { title: 'The Lord of the Rings', authors: ['J.R.R. Tolkien'] },
  { title: 'Animal Farm', authors: ['George Orwell'] },
  { title: 'Wuthering Heights', authors: ['Emily Brontë'] },
  { title: 'The Odyssey', authors: ['Homer'] },
  { title: 'Crime and Punishment', authors: ['Fyodor Dostoevsky'] },
  { title: 'The Da Vinci Code', authors: ['Dan Brown'] },
  { title: 'War and Peace', authors: ['Leo Tolstoy'] },
  { title: 'The Grapes of Wrath', authors: ['John Steinbeck'] },
  { title: 'Ulysses', authors: ['James Joyce'] },
  { title: 'The Brothers Karamazov', authors: ['Fyodor Dostoevsky'] },
  {
    title: 'One Hundred Years of Solitude',
    authors: ['Gabriel García Márquez'],
  },
  { title: 'Great Expectations', authors: ['Charles Dickens'] },
  { title: 'The Adventures of Huckleberry Finn', authors: ['Mark Twain'] },
  { title: 'In Search of Lost Time', authors: ['Marcel Proust'] },
];

const tabs: Tab[] = [
  {
    label: 'Campuses',
    children: [
      { label: 'EF Academy', isActive: false },
      { label: 'AJ Academy', isActive: false },
    ],
    isActive: false,
  },
  {
    label: 'Activities',
    children: [
      {
        label: 'Skating',
        children: [
          {
            label: 'Ice Skate',
            children: [
              { label: 'Lake Rink', isActive: false },
              { label: 'Artificial Rink', isActive: false },
            ],
            isActive: false,
          },
          { label: 'Roller Skate', isActive: false },
        ],
        isActive: false,
      },
    ],
    isActive: false,
  },
];

export { palindromeList, cityList, data, tabs };
