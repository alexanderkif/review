import { Section } from 'src/components/models';

const sections: Section[] = [
  {
    id: 22,
    name: 'Cards',
    active: true,
    content: {
      title: 'Cards for training memory',
      stack: 'ReactJS PWA',
      year: '2024',
      description: `🚀 Boost Your Memory and Learning with Cards! 📚✨
\n🔹 Create Personalized Flashcards: Easily make groups of cards with terms, concepts, or any information you want to remember. Each card shows your chosen content on one side and its translation, definition, or examples on the other.
\n🔹 Share Your Flashcards: Easily share your groups of flashcards with others, making collaborative learning a breeze.🚀
\nStart your journey towards better memory and enhanced learning with Cards today!
\n✨ I\'ve set up a Telegram group where everyone can share their flashcards! 📚 You can join the group directly from the top menu of the Cards app.
\n🤖 Plus, I've created a Telegram bot to help keep things organized and ensure everyone follows the group rules.
\n📋 I've also added some example messages with card files attached to help you get started. Can't wait to see you there! 🚀`,
      github: '',
      deploy: 'https://cards-pwa.vercel.app/',
    },
    images: [
      'cards0.png',
      'cards1.png',
      'cards2.png',
      'cards3.png',
      'cards4.png',
      'cards5.png',
    ],
    bg: {
      gradient: [
        { color: '#FFFFdd', percent: 0 },
        { color: '#118822', percent: 1 },
        { color: '#FFFFdd', percent: 13 },
        { color: '#FFFFdd', percent: 73 },
        { color: '#ddffff', percent: 100 },
      ],
      wave: { color1: '#118822', color2: '#FFF888' },
    },
  },
  {
    id: 21,
    name: 'Review',
    active: true,
    content: {
      title: 'My GitHub review',
      stack: 'JavaScript PWA',
      year: '2024',
      description:
        'This application. This is an overview of test and training projects on my Github. There are no production applications here. For obvious reasons, I cannot post production code here. Each item in the list has screenshots, a description, a stack, the year of creation and links to Github and deployment.',
      github: 'https://github.com/alexanderkif/review',
      deploy: 'https://review-alexanderkif.vercel.app',
    },
    images: ['review1.png'],
    bg: {
      gradient: [
        { color: '#FFFFFF', percent: 0 },
        { color: '#59B755', percent: 25 },
        { color: '#FFFFFF', percent: 38 },
        { color: '#EC6337', percent: 50 },
        { color: '#FFFFFF', percent: 62 },
        { color: '#59B755', percent: 75 },
        { color: '#FFFFFF', percent: 87 },
        { color: '#EC6337', percent: 100 },
      ],
      wave: { color1: '#EC6337', color2: '#3f51b1' },
    },
  },
  {
    id: 20,
    name: 'Alesia',
    active: true,
    content: {
      title: 'Alesia Game',
      stack: 'JavaScript PWA',
      year: '2022',
      description:
        'I wrote this simple game with my daughter to teach and explain to her how the browser and JavaScript work.',
      github: 'https://github.com/alexanderkif/alesiagame',
      deploy: 'https://alesiagame.vercel.app',
    },
    images: ['alesiagame1.png', 'alesiagame2.png'],
    bg: {
      gradient: [
        { color: '#F2FDC7', percent: 0 },
        { color: '#4C6A5B', percent: 100 },
      ],
      wave: { color1: '#4C6A5B', color2: '#F2FDC7' },
    },
  },
  {
    id: 19,
    name: 'Spinme',
    active: true,
    content: {
      title: 'Spin me Game',
      stack: 'Vue.js / Quasar framework, Pinia store',
      year: '2022',
      description:
        'The goal of the Spin Me Game is to place all the pieces on the plane by spinning them around its axis. If the space under the square is occupied, it is highlighted.',
      github: '',
      deploy: 'https://www.spinmegame.com',
    },
    images: [
      'spinmegame1.png',
      'spinmegame2.png',
      'spinmegame3.png',
      'spinmegame4.png',
      'spinmegame5.png',
    ],
    bg: {
      gradient: [
        { color: '#FFFFFF', percent: 0 },
        { color: '#555555', percent: 50 },
        { color: '#59B755', percent: 60 },
        { color: '#EC6337', percent: 100 },
      ],
      wave: { color1: '#EC6337', color2: '#59B755' },
    },
  },
  {
    id: 18,
    name: 'Wallets',
    active: true,
    content: {
      title: 'Wallets',
      stack: 'Vue.js / Quasar framework',
      year: '2022',
      description:
        "I have created a small application that can help you keep track of money. The application can be installed on the device as native. It stores all data directly in your browser's storage and can work without an Internet connection.",
      github: 'https://github.com/alexanderkif/walletPWA',
      deploy: 'https://alexanderkif.github.io/walletPWA',
    },
    images: [
      'wallets1.png',
      'wallets2.png',
      'wallets3.png',
      'wallets4.png',
      'wallets5.png',
      'wallets6.png',
      'wallets7.png',
      'wallets8.png',
      'wallets9.png',
      'wallets10.png',
    ],
    bg: {
      gradient: [
        { color: '#E4FEE1', percent: 0 },
        { color: '#DDDDDD', percent: 40 },
        { color: '#FADFDF', percent: 80 },
        { color: '#FADFDF', percent: 100 },
      ],
      wave: { color1: '#FADFDF', color2: '#E4FEE1' },
    },
  },
  {
    id: 17,
    name: 'REACT-MOVIES',
    active: true,
    content: {
      title: 'Netflix Roulette',
      stack:
        'React, Redux, Router, Thunk, Enzyme, Testing-library/react, hooks',
      year: '2021',
      description:
        'This application is a React training course challenge. The Localhost API must be fully functional. Vercel uses a remote API that no longer works. Follow the link.',
      github: 'https://github.com/alexanderkif/react-movies',
      deploy: 'https://react-movies-kappa.vercel.app/',
    },
    images: [
      'react-movie_1.png',
      'react-movie_2.png',
      'react-movie_3.png',
      'react-movie_4.png',
      'react-movie_5.png',
    ],
    bg: {
      gradient: [
        { color: '#FBF2F2', percent: 0 },
        { color: '#E29598', percent: 100 },
      ],
      wave: { color1: '#E29598', color2: '#FBF2F2' },
    },
  },
  {
    id: 16,
    name: 'LOGIST',
    active: true,
    content: {
      title: 'Logistic task',
      stack: 'Vue.js / Quasar framework',
      year: '2021',
      description:
        'Logistics task. The description is in the README file on Github. Follow the link below. To test, download a sample xlsx file. Then paste it into the appropriate field in the program. And then wait for the tables to be counted.',
      github: 'https://github.com/alexanderkif/logist',
      deploy: 'https://alexanderkif.github.io/logist',
    },
    images: [
      'logist1.png',
      'logist2.png',
      'logist3.png',
      'logist4.png',
      'logist5.png',
    ],
    bg: {
      gradient: [
        { color: '#FBF8FC', percent: 0 },
        { color: '#DBBFE4', percent: 100 },
      ],
      wave: { color1: '#DBBFE4', color2: '#FBF8FC' },
    },
  },
  {
    id: 15,
    name: 'SIBDEV2',
    active: true,
    content: {
      title: 'sibdev2',
      stack: 'Vue.js / Quasar framework',
      year: '2020',
      description:
        'Test task for Sibdev. Part 2. Working with the YouTube API. Description and link to Figma in Readme file on GitHub. Demo access: user1 password1',
      github: 'https://github.com/alexanderkif/sibdev2',
      deploy: 'https://alexanderkif.github.io/sibdev2/',
    },
    images: [
      'sibdev2_1.png',
      'sibdev2_2.png',
      'sibdev2_3.png',
      'sibdev2_4.png',
      'sibdev2_5.png',
    ],
    bg: {
      gradient: [
        { color: '#EEF4FB', percent: 0 },
        { color: '#428EDE', percent: 100 },
      ],
      wave: { color1: '#428EDE', color2: '#EEF4FB' },
    },
  },
  {
    id: 14,
    name: 'SIBDEV1',
    active: true,
    content: {
      title: 'sibdev1',
      stack: 'Vue.js',
      year: '2020',
      description:
        'Test task for Sibdev. Part 1. Responsive drawer. Make up the page according to the layout. Description and link to Figma in Readme file on GitHub.',
      github: 'https://github.com/alexanderkif/sibdev1',
      deploy: 'https://alexanderkif.github.io/sibdev1/',
    },
    images: [
      'sibdev1_1.png',
      'sibdev1_2.png',
      'sibdev1_3.png',
      'sibdev1_4.png',
      'sibdev1_5.png',
    ],
    bg: {
      gradient: [
        { color: '#FCFFF7', percent: 0 },
        { color: '#E1FFB0', percent: 100 },
      ],
      wave: { color1: '#E1FFB0', color2: '#FCFFF7' },
      // image: 'fractal_star.svg',
    },
  },
  {
    id: 13,
    name: 'TAKEOFFSTAFF',
    active: true,
    content: {
      title: 'Test task',
      stack: 'Vue.js / Quasar framework',
      year: '2020',
      description:
        "Test task for TakeoffStaff. Description in Readme file on GitHub. I've tried Babylon JS here later.",
      github: 'https://github.com/alexanderkif/takeoffstaff',
      deploy: 'https://alexanderkif.github.io/takeoffstaff',
    },
    images: [
      'takeoff1.png',
      'takeoff2.png',
      'takeoff3.png',
      'takeoff4.png',
      'takeoff5.png',
      'takeoff6.png',
    ],
    bg: {
      gradient: [
        { color: '#E9EEF8', percent: 0 },
        { color: '#3874CB', percent: 50 },
        { color: '#D5D5D5', percent: 100 },
      ],
      wave: { color1: '#3874CB', color2: '#E9EEF8' },
    },
  },
  {
    id: 12,
    name: 'MEDODS-2',
    active: true,
    content: {
      title: 'Test task, part 2',
      stack: 'Vue.js',
      year: '2020',
      description:
        'Test task for MEDODS company. Part 2. Simon The Game. Description in Readme file on GitHub.',
      github: 'https://github.com/alexanderkif/medods2',
      deploy: 'https://alexanderkif.github.io/medods2',
    },
    images: ['simon1.png', 'simon2.png'],
    bg: {
      gradient: [
        { color: '#DBEDD4', percent: 0 },
        { color: '#9999F8', percent: 30 },
        { color: '#F19E9C', percent: 60 },
        { color: '#FFFF54', percent: 100 },
      ],
      wave: { color1: '#A4CB9D', color2: '#FFFF54' },
    },
  },
  {
    id: 11,
    name: 'MEDODS-1',
    active: true,
    content: {
      title: 'Test task, part 1',
      stack: 'Vue.js, Vuelidate, Sass',
      year: '2020',
      description:
        'Test task for MEDODS company. Part 1. Make a customer creation form. Description in Readme file on GitHub.',
      github: 'https://github.com/alexanderkif/medods1',
      deploy: 'https://alexanderkif.github.io/medods1',
    },
    images: ['customer1.png', 'customer2.png'],
    bg: {
      gradient: [
        { color: '#F5F5F5', percent: 0 },
        { color: '#888888', percent: 100 },
      ],
      wave: { color1: '#888888', color2: '#F5F5F5' },
    },
  },
  {
    id: 10,
    name: 'BUY FOR ME',
    active: true,
    content: {
      title: 'Shopping lists for groups of users',
      stack: 'Vercel serverless, Node.js, MongoDB, Vue/Quasar',
      year: '2020',
      description:
        'Several users can fill out one shopping list. The shopping list is stored in the Mongodb database. Vercel serverless api gets access to the database. To try it register/login and add the groups with ids: 5f152ec3ea3c4800083d7de6 and 5f13f49eca7ee00007801c84. Or use the next credentials for demo access user: Saha2 password: s222',
      github: 'https://github.com/alexanderkif/todogroup',
      deploy: 'https://buyforme.vercel.app',
    },
    images: [
      'buyforme_login.png',
      'buyforme_fab.png',
      'buyforme_items.png',
      'buyforme_fab.png',
      'buyforme_detail.png',
      'buyforme_groups.png',
      'buyforme_red-blue.png',
    ],
    bg: {
      gradient: [
        { color: '#FFFBD7', percent: 0 },
        { color: '#F5BD63', percent: 70 },
        { color: '#FCF086', percent: 100 },
      ],
      wave: { color1: '#F5BD63', color2: '#FFFBD7' },
    },
  },
  {
    id: 9,
    name: 'LIGHT',
    active: true,
    content: {
      title: 'Test task for led light company',
      stack: 'HTML, CSS, JavaScript, Vue/Quasar',
      year: '2020',
      description:
        'Assignment to create a page layout for an LED lighting company.',
      github: 'https://github.com/alexanderkif/light',
      deploy: 'https://alexanderkif.github.io/light/#/color',
    },
    images: ['light_menu.png', 'light_popup.png', 'light_select.png'],
    bg: {
      gradient: [
        { color: '#fafafa', percent: 0 },
        { color: '#BDE4F8', percent: 50 },
        { color: '#F5D7D7', percent: 100 },
      ],
      wave: { color1: '#BDE4F8', color2: '#F5D7D7' },
    },
  },
  {
    id: 8,
    name: 'DOMETEO',
    active: true,
    content: {
      title: 'Autonomous weather station with solar panels',
      stack: 'Arduino, Node.js, MongoDB, Vue/Quasar',
      year: '2020',
      description:
        'You can also store data from any sensors. In my case, for example, I took the weather sensor. The board starts, sends data and falls asleep for 5 minutes. To save battery power, the field effect transistor at pin D6 turns off the power to the BME280. The 18650 battery is controlled by input A0. If the battery voltage exceeds 4.2V, the D7 output breaks the battery charge circuit from the solar panel.',
      github: 'https://github.com/alexanderkif/dometeo',
      deploy: 'https://alexanderkif.github.io/dometeo',
    },
    images: ['dometeo1.png', 'dometeo2.png', 'dometeo3.png', 'dometeo4.png'],
    bg: {
      gradient: [
        { color: '#D1EBC3', percent: 0 },
        { color: '#A2C78F', percent: 100 },
      ],
      wave: { color1: '#A2C78F', color2: '#D1EBC3' },
    },
  },
  {
    id: 7,
    name: 'FOOTBALL',
    active: true,
    content: {
      title: 'Football trainer page',
      stack: 'JavaScript, Vue',
      year: '2020',
      description:
        "The employer's task: implementing the layout using Vue Quasar. The page layout is attached in the Readme file. Used a little JavaScript logic.",
      github: 'https://github.com/alexanderkif/football',
      deploy: 'https://alexanderkif.github.io/football',
    },
    images: ['football.png'],
    bg: {
      gradient: [
        { color: '#FFEDC2', percent: 0 },
        { color: '#C9FFC2', percent: 40 },
        { color: '#C9FFC2', percent: 60 },
        { color: '#FFA8A6', percent: 100 },
      ],
      wave: { color1: '#FFA8A6', color2: '#F5FFD0' },
    },
  },
  {
    id: 6,
    name: 'METEO',
    active: true,
    content: {
      title: 'Autonomous outdoor weather station with Wi-Fi',
      stack: 'Arduino, NodeJS, MongoDB, MongoClient, JavaScript, Vue/Quasar',
      year: '2019',
      description:
        'The weather station is powered by a lithium battery, which is charged from the solar panel. Data is transmitted via Wi-Fi to the back-end Zeit.co and stored in Mongodb. Universal get request: / data? Start = START_DATE & finish = FINISH_DATE & tframe = TFRAME & step = STEP. The TFRAME can be month, day, hour, minute. A small frontend is written on the quasar. To view, click TO DEPLOY.',
      github: 'https://github.com/alexanderkif/meteo',
      deploy: 'https://alexanderkif.github.io/meteo-front',
    },
    images: ['meteo1-min.png', 'meteo2-min.png', 'meteo3-min.png'],
    bg: {
      gradient: [
        { color: '#FFD5CE', percent: 0 },
        { color: '#969CFF', percent: 100 },
      ],
      wave: { color1: '#969CFF', color2: '#FFD5CE' },
    },
  },
  {
    id: 5,
    name: 'FISHNBUY',
    active: true,
    content: {
      title: 'Training project FISHNBUY',
      stack:
        'Java, SpringBoot, Maven, Secure, BCrypt, Mongo DB, MongoRepository, GridFS, Lombok, BEM, JavaScript, Pug, SCSS',
      year: '2017',
      description:
        'A training project for storing, modifying, and deleting user messages with pictures. Backend was written using SpringBoot. External interface - with Pug, SCSS, BEM, Javascript (without frameworks). To work with users and records, AccountRepository and DocRepository are used. For work with images used GridFsOperations. You can delete and modify only your own documents.',
      github: 'https://github.com/alexanderkif/fishandbuy',
      deploy: 'https://fishandbuy.herokuapp.com',
    },
    images: ['fnb1-min.png', 'fnb2-min.png', 'fnb3-min.png'],
    bg: {
      gradient: [
        { color: '#F8FAE8', percent: 0 },
        { color: '#EBF9E8', percent: 100 },
      ],
      wave: { color1: '#EBF9E8', color2: '#F8FAE8' },
    },
  },
  {
    id: 4,
    name: 'TRACKER',
    active: true,
    content: {
      title: 'My son took first place at robot competition',
      stack: 'Quasar/vue, PWA',
      year: '2016',
      description:
        "My son, with my help, made a robot that watches the sun. The tracker independently rotates the solar panels in the direction of light during the day to collect more solar energy. We took part in the Junior Russian schoolchildren's competition at Moscow University of MEPhI. And my son took first place there.",
      github: 'https://github.com/alexanderkif/solarTracker',
      deploy: 'https://alexanderkif.github.io/solarTracker/',
    },
    images: ['st1-min.png', 'st2-min.png', 'st3-min.png'],
    bg: {
      gradient: [
        { color: '#E2F9E2', percent: 0 },
        { color: '#4FA442', percent: 100 },
      ],
      wave: { color1: '#4FA442', color2: '#E2F9E2' },
    },
  },
  {
    id: 3,
    name: 'SLIDER',
    active: true,
    content: {
      title: 'Modifiable slider',
      stack: 'Webpack, JS, Pug, SCSS, BEM',
      year: '2019',
      description:
        'This is a learning assignment. The slider is written in Javascript with the ability to change the appearance. Javascript classes are used. Mentors reviewed the code and wrote issue.',
      github: 'https://github.com/alexanderkif/modifiable-slider',
      deploy: 'https://alexanderkif.github.io/modifiable-slider/',
    },
    images: ['slider1.png', 'slider2-min.png'],
    bg: {
      gradient: [
        { color: '#E1F5FF', percent: 0 },
        { color: '#F0D769', percent: 100 },
        { color: '#FAE06D', percent: 100 },
      ],
      wave: { color1: '#F0D769', color2: '#FAE06D' },
    },
  },
  {
    id: 2,
    name: 'FLAT UI',
    active: true,
    content: {
      title: 'Test task',
      stack: 'HTML, Pug, CSS, SCSS, BEM, Javascript, Webpack',
      year: '2018',
      description:
        'This is a learning assignment. Several basics web elements is written in HTML, CSS, Javascript with different appearance. Javascript classes are used. Mentors reviewed the code and wrote issue.',
      github: 'https://github.com/alexanderkif/flatUI',
      deploy: 'https://alexanderkif.github.io/flatUI',
    },
    images: ['flatUI-min.png'],
    bg: {
      gradient: [
        { color: '#fafafa', percent: 0 },
        { color: '#D66141', percent: 30 },
        { color: '#6BB5A8', percent: 40 },
        { color: '#6BB5A8', percent: 100 },
      ],
      wave: { color1: '#D66141', color2: '#fafafa' },
    },
  },
  {
    id: 1,
    name: 'JS-TEST-TASK',
    active: true,
    content: {
      title: 'Javascript test task',
      stack: 'JavaScript, HTML, CSS',
      year: '2019',
      description:
        'This is a test task for an interview. The same class is used to calculate the moves of a chess knight and visualize moves on a chessboard.',
      github: 'https://github.com/alexanderkif/js-test-task',
      deploy: 'https://alexanderkif.github.io/js-test-task',
    },
    images: ['jstask-min.png'],
    bg: {
      gradient: [
        { color: '#75147C', percent: 0 },
        { color: '#FFD88E', percent: 50 },
        { color: '#75147C', percent: 100 },
      ],
      wave: { color1: '#FFD88E', color2: '#75147C' },
      // image: 'box_fractal.svg',
    },
  },
];

export const links = [
  {
    name: 'github',
    link: 'https://github.com/alexanderkif',
  },
  {
    name: 'linkedin',
    link: 'https://www.linkedin.com/in/aleksandr-nikiforov-8a417712a/',
  },
  {
    name: 'facebook',
    link: 'https://www.facebook.com/aleksandr.nikiforov.100',
  },
  {
    name: 'telegram',
    link: 'https://t.me/alexanderkif',
  },
  {
    name: 'whatsapp',
    link: 'https://wa.me/79120189321',
  },
  {
    name: 'mail-dot-ru',
    link: 'alexander_kif@mail.ru',
  },
];

export default sections;
