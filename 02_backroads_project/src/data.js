// import tour1 from './images/tour-1.jpeg';
// import tour2 from './images/tour-2.jpeg';
// import tour3 from './images/tour-3.jpeg';
// import tour4 from './images/tour-4.jpeg';
import tour1 from './images/tour1.jpg';
import tour2 from './images/tour2.webp';
import tour3 from './images/tour3.jpg';

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
];
export const socialLinks = [
  { id: 1, href: 'https://www.twitter.com', icon: 'fab fa-facebook' },
  { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
  { id: 3, href: 'https://www.twitter.com', icon: 'fab fa-squarespace' },
];

export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.',
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.',
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: 'december 26th, 2023',
    title: 'Chighu Resort Anini',
    info: `This is the newly completed Chighu Resort at Anini, Arunachal Pradesh. Chigu resort has a beautiful backdrop with snow-capped mountains and pine trees. Take a trip to Arunachal Pradesh, and enjoy the warm hospitality of its people, and the stunning beauty of its mountains. As its not opened for public yet. People can come and visit the place, but cant avail overnight accommodation.`,
    location: 'Acheso',
    duration: 7,
    cost: 29999,
  },
  {
    id: 2,
    image: tour2,
    date: 'october 1th, 2023',
    title: 'Seven Lakes Trek',
    info: ` For Professional Trekkers and Adventure Photographers, the Seven Lakes trek in Anini is only a climb of 5-6 hours a day on average. The slope at an average of 70° but not very steep. We were not professional Trekkers but highly excited and motivated intermediate people. We kept on motivating each other. If you are one of these then I can guarantee you that you will always cherish these adventures till you die.`,
    location: 'Anini',
    duration: 7,
    cost: 29999,
  },
  {
    id: 3,
    image: tour3,
    date: 'november 15th, 2023',
    title: 'Dibang Wildlife Sanctuary',
    info: `Nestled in the beautiful valleys of Arunachal Pradesh, Dibang Wildlife Sanctuary is one of the eight sanctuaries located nearby Anini district in the state. Established in 1980s, the Dibang Wildlife Sanctuary occupies part of the Eastern Himalayas, and is a massive spread of lofty mountains, snow covered peaks, deep gorges, lush forests and glistening rivers adding to the beauty which is abundant in natural beauty, adventurous expeditions,`,
    location: 'Anini',
    duration: 7,
    cost: 29999,
  },
  // {
  //   id: 4,
  //   image: tour4,
  //   date: 'december 5th, 2019',
  //   title: 'kenya highlights',
  //   info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
  //   location: 'kenya',
  //   duration: 20,
  //   cost: 3300,
  // },
];