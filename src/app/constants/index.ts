import { Book } from '../interfaces';

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


const tab: object = {
  navTabs: [
    {
      id: '1',
      label: 'Campus',
      link: '/campus',
      miniTabs: [
        {
          id: '1.1',
          label: 'Facilities',
          link: '/campus/facilities',
        },
        {
          id: '1.2',
          label: 'Library',
          link: '/campus/library',
        },
        {
          id: '1.3',
          label: 'Sports Complex',
          link: '/campus/sports-complex',
        },
      ],
    },
    {
      id: '2',
      label: 'About',
      link: '/about',
      miniTabs: [
        {
          id: '2.1',
          label: 'History',
          link: '/about/history',
        },
        {
          id: '2.2',
          label: 'Mission & Vision',
          link: '/about/mission-vision',
        },
        {
          id: '2.3',
          label: 'Staff Directory',
          link: '/about/staff-directory',
        },
      ],
    },
    {
      id: '3',
      label: 'Admissions',
      link: '/admissions',
      miniTabs: [
        {
          id: '3.1',
          label: 'Application Process',
          link: '/admissions/application-process',
        },
        {
          id: '3.2',
          label: 'Tuition & Fees',
          link: '/admissions/tuition-fees',
        },
        {
          id: '3.3',
          label: 'Scholarships',
          link: '/admissions/scholarships',
        },
      ],
    },
    {
      id: '4',
      label: 'Events',
      link: '/events',
      miniTabs: [
        {
          id: '4.1',
          label: 'Upcoming Events',
          link: '/events/upcoming',
        },
        {
          id: '4.2',
          label: 'Annual Fest',
          link: '/events/annual-fest',
        },
        {
          id: '4.3',
          label: 'Sports Day',
          link: '/events/sports-day',
        },
      ],
    },
  ],
};

export { palindromeList, cityList, data, tab };
