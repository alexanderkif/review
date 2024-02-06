import { Section } from 'src/components/models';

const sections: Section[] = [
  {
    id: 17,
    name: 'REACT-MOVIES',
    active: true,
    year: '2021',
    content: {
      title: 'NetflixRoulette',
      stack:
        'React, Redux, Router, Thunk, Enzyme, Testing-library/react, hooks',
      description:
        'Localhost api is fully functional. Vercel use remote api with no edit, add and delete movies. Follow the link.',
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
        { color: '#fbed96', percent: 0 },
        { color: '#abecd6', percent: 100 },
      ],
      wave: { color1: '#abecd6', color2: '#fbed96' },
    },
  },
  {
    id: 16,
    name: 'LOGIST',
    active: true,
    year: '2021',
    content: {
      title: 'Logistic task',
      stack: 'Vue.js / Quasar framework',
      description:
        'Student coursework. Description in README. Follow the link. Upload example xlsx file. Use it with program. And wait for counting the tables...',
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
        { color: '#fbed96', percent: 0 },
        { color: '#abecd6', percent: 100 },
      ],
      wave: { color1: '#abecd6', color2: '#fbed96' },
    },
  },
  {
    id: 15,
    name: 'SIBDEV2',
    active: true,
    year: '2020',
    content: {
      title: 'sibdev2',
      stack: 'Vue.js / Quasar framework',
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
        { color: '#fbed96', percent: 0 },
        { color: '#abecd6', percent: 100 },
      ],
      wave: { color1: '#abecd6', color2: '#fbed96' },
    },
  },
  {
    id: 14,
    name: 'SIBDEV1',
    active: true,
    year: '',
    content: {
      title: 'sibdev1',
      stack: 'Vue.js',
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
        { color: '#aaffaa', percent: 0 },
        { color: '#ffffff', percent: 100 },
      ],
      image: 'fractal_star.svg',
    },
  },
  {
    id: 13,
    name: 'TAKEOFFSTAFF',
    active: true,
    year: '2020',
    content: {
      title: 'Test task',
      stack: 'Vue.js / Quasar framework',
      description:
        'Test task for TakeoffStaff. Description in Readme file on GitHub.',
      github: 'https://github.com/alexanderkif/takeoffstaff',
      deploy: 'https://alexanderkif.github.io/takeoffstaff',
    },
    images: [
      'takeoff1.png',
      'takeoff2.png',
      'takeoff3.png',
      'takeoff4.png',
      'takeoff5.png',
    ],
    bg: {
      gradient: [
        { color: '#fbed96', percent: 0 },
        { color: '#abecd6', percent: 100 },
      ],
      wave: { color1: '#abecd6', color2: '#fbed96' },
    },
  },
  {
    id: 12,
    name: 'MEDODS-2',
    active: true,
    year: '2020',
    content: {
      title: 'Test task, part 2',
      stack: 'Vue.js',
      description:
        'Test task for MEDODS company. Part 2. Simon The Game. Description in Readme file on GitHub.',
      github: 'https://github.com/alexanderkif/medods2',
      deploy: 'https://alexanderkif.github.io/medods2',
    },
    images: ['simon1.png', 'simon2.png'],
    bg: {
      gradient: [
        { color: '#fbed96', percent: 0 },
        { color: '#abecd6', percent: 100 },
      ],
      wave: { color1: '#abecd6', color2: '#fbed96' },
    },
  },
  {
    id: 11,
    name: 'MEDODS-1',
    active: true,
    year: '2020',
    content: {
      title: 'Test task, part 1',
      stack: 'Vue.js, Vuelidate, Sass',
      description:
        'Test task for MEDODS company. Part 1. Make a customer creation form. Description in Readme file on GitHub.',
      github: 'https://github.com/alexanderkif/medods1',
      deploy: 'https://alexanderkif.github.io/medods1',
    },
    images: ['customer1.png', 'customer2.png'],
    bg: {
      gradient: [
        { color: '#fbed96', percent: 0 },
        { color: '#abecd6', percent: 100 },
      ],
      wave: { color1: '#abecd6', color2: '#fbed96' },
    },
  },
  {
    id: 10,
    name: 'BUY FOR ME',
    active: true,
    year: '2020',
    content: {
      title: 'Shopping lists for groups of users',
      stack: 'Vercel serverless, Node.js, MongoDB, Vue/Quasar',
      description:
        'Several users can fill out one shopping list. The shopping list is stored in the Mongodb database. Vercel serverless api gets access to the database. To try it register/login and add the groups with ids: 5f152ec3ea3c4800083d7de6 and 5f13f49eca7ee00007801c84. Or use the next credentials for demo access: Saha2 - s222.',
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
        { color: '#fbed96', percent: 0 },
        { color: '#abecd6', percent: 100 },
      ],
      wave: { color1: '#abecd6', color2: '#fbed96' },
    },
  },
  {
    id: 9,
    name: 'LIGHT',
    active: true,
    year: '2020',
    content: {
      title: 'Test task for led light company',
      stack: 'HTML, CSS, JavaScript, Vue/Quasar',
      description: 'Test task for led light company.',
      github: 'https://github.com/alexanderkif/light',
      deploy: 'https://alexanderkif.github.io/light/#/color',
    },
    images: ['light_menu.png', 'light_popup.png', 'light_select.png'],
    bg: {
      gradient: [
        { color: '#fbed96', percent: 0 },
        { color: '#abecd6', percent: 100 },
      ],
      wave: { color1: '#abecd6', color2: '#fbed96' },
    },
  },
  {
    id: 8,
    name: 'DOMETEO',
    active: true,
    year: '2020',
    content: {
      title: 'Autonomous weather station with solar panels',
      stack: 'Arduino, Node.js, MongoDB, Vue/Quasar',
      description:
        'You can also store data from any sensors. In my case, for example, I took the weather sensor. The board starts, sends data and falls asleep for 5 minutes. To save battery power, the field effect transistor at pin D6 turns off the power to the BME280. The 18650 battery is controlled by input A0. If the battery voltage exceeds 4.2V, the D7 output breaks the battery charge circuit from the solar panel.',
      github: 'https://github.com/alexanderkif/dometeo',
      deploy: 'https://alexanderkif.github.io/dometeo',
    },
    images: ['dometeo1.png', 'dometeo2.png', 'dometeo3.png', 'dometeo4.png'],
    bg: {
      gradient: [
        { color: '#fbed96', percent: 0 },
        { color: '#abecd6', percent: 100 },
      ],
      wave: { color1: '#abecd6', color2: '#fbed96' },
    },
  },
  {
    id: 7,
    name: 'FOOTBALL',
    active: true,
    year: '2020',
    content: {
      title: 'Football trainer page',
      stack: 'JavaScript, Vue',
      description:
        "The employer's task: implementing the layout using Vue Quasar. The page layout is attached in the Readme file. Used a little JavaScript logic.",
      github: 'https://github.com/alexanderkif/football',
      deploy: 'https://alexanderkif.github.io/football',
    },
    images: ['football.png'],
    bg: {
      gradient: [
        { color: '#fbed96', percent: 0 },
        { color: '#abecd6', percent: 100 },
      ],
      wave: { color1: '#abecd6', color2: '#fbed96' },
    },
  },
  {
    id: 6,
    name: 'METEO',
    active: true,
    year: '2019',
    content: {
      title: 'Autonomous outdoor weather station with Wi-Fi',
      stack: 'Arduino, NodeJS, MongoDB, MongoClient, JavaScript, Vue/Quasar',
      description:
        'The weather station is powered by a lithium battery, which is charged from the solar panel. Data is transmitted via Wi-Fi to the back-end Zeit.co and stored in Mongodb. Universal get request: / data? Start = START_DATE & finish = FINISH_DATE & tframe = TFRAME & step = STEP. The TFRAME can be month, day, hour, minute. A small frontend is written on the quasar. To view, click TO DEPLOY.',
      github: 'https://github.com/alexanderkif/meteo',
      deploy: 'https://alexanderkif.github.io/meteo-front',
    },
    images: ['meteo1-min.png', 'meteo2-min.png', 'meteo3-min.png'],
    bg: {
      gradient: [
        { color: '#fbed96', percent: 0 },
        { color: '#abecd6', percent: 100 },
      ],
      wave: { color1: '#abecd6', color2: '#fbed96' },
    },
  },
  {
    id: 5,
    name: 'FISHNBUY',
    active: true,
    year: '2017',
    content: {
      title: 'Training project FISHNBUY',
      stack:
        'Java, SpringBoot, Maven, Secure, BCrypt, Mongo DB, MongoRepository, GridFS, Lombok, BEM, JavaScript, Pug, SCSS',
      description:
        'A training project for storing, modifying, and deleting user messages with pictures. Backend was written using SpringBoot. External interface - with Pug, SCSS, BEM, Javascript (without frameworks). To work with users and records, AccountRepository and DocRepository are used. For work with images used GridFsOperations. You can delete and modify only your own documents.',
      github: 'https://github.com/alexanderkif/fishandbuy',
      deploy: 'https://fishandbuy.herokuapp.com',
    },
    images: ['fnb1-min.png', 'fnb2-min.png', 'fnb3-min.png'],
    bg: {
      gradient: [
        { color: '#fbed96', percent: 0 },
        { color: '#abecd6', percent: 100 },
      ],
      wave: { color1: '#abecd6', color2: '#fbed96' },
    },
  },
  {
    id: 4,
    name: 'TRACKER',
    active: true,
    year: '2016',
    content: {
      title: 'My son took first place at robot competition',
      stack: 'Quasar/vue, PWA',
      description:
        "My son, with my help, made a robot that watches the sun. The tracker independently rotates the solar panels in the direction of light during the day to collect more solar energy. We took part in the Junior Russian schoolchildren's competition at Moscow University of MEPhI. And my son took first place there.",
      github: 'https://github.com/alexanderkif/solarTracker',
      deploy: 'https://alexanderkif.github.io/solarTracker/',
    },
    images: ['st1-min.png', 'st2-min.png', 'st3-min.png'],
    bg: {
      gradient: [
        { color: '#fbed96', percent: 0 },
        { color: '#abecd6', percent: 100 },
      ],
      wave: { color1: '#abecd6', color2: '#fbed96' },
    },
  },
  {
    id: 3,
    name: 'SLIDER',
    active: true,
    year: '2019',
    content: {
      title: 'Modifiable slider',
      stack: 'Webpack, JS, Pug, SCSS, BEM',
      description:
        'This is a learning assignment. The slider is written in Javascript with the ability to change the appearance. Javascript classes are used. Mentors reviewed the code and wrote issue.',
      github: 'https://github.com/alexanderkif/modifiable-slider',
      deploy: 'https://alexanderkif.github.io/modifiable-slider/',
    },
    images: ['slider1.png', 'slider2-min.png'],
    bg: {
      gradient: [
        { color: '#ffffff', percent: 0 },
        { color: '#aaffaa', percent: 100 },
      ],
      wave: { color1: '#aaffaa', color2: '#ffffff' },
    },
  },
  {
    id: 2,
    name: 'FLAT UI',
    active: true,
    year: '2018',
    content: {
      title: 'Test task',
      stack: 'HTML, Pug, CSS, SCSS, BEM, Javascript, Webpack',
      description:
        'This is a learning assignment. Several basics web elements is written in HTML, CSS, Javascript with different appearance. Javascript classes are used. Mentors reviewed the code and wrote issue.',
      github: 'https://github.com/alexanderkif/flatUI',
      deploy: 'https://alexanderkif.github.io/flatUI',
    },
    images: ['flatUI-min.png'],
    bg: {
      color: '#33aaff',
      wave: { color1: '#55bbff', color2: '#88ccff' },
    },
  },
  {
    id: 1,
    name: 'JS-TEST-TASK',
    active: true,
    year: '2019',
    content: {
      title: 'Javascript test task',
      stack: 'JavaScript, HTML, CSS',
      description:
        'This is a test task for an interview. The same class is used to calculate the moves of a chess knight and visualize moves on a chessboard.',
      github: 'https://github.com/alexanderkif/js-test-task',
      deploy: 'https://alexanderkif.github.io/js-test-task',
    },
    images: ['jstask-min.png'],
    bg: {
      gradient: [
        { color: '#69EACB', percent: 0 },
        { color: '#EACCF8', percent: 48 },
        { color: '#6654F1', percent: 100 },
      ],
      wave: { color1: '#6654F1', color2: '#69EACB' },
      image: 'box_fractal.svg',
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
