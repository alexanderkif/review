import { Section } from 'src/components/models';

const sections: Section[] = [
  {
    id: 25,
    name: 'Angular-zoneless-template',
    active: true,
    content: {
      title: 'Angular Zoneless Template',
      stack:
        'Angular 20 Zoneless, SSR, NGRX, Karma/Jasmine unit tests, Playwright e2e tests, Vercel deploy',
      year: '2025',
      description:
        '🚀 Angular 20 Zoneless Starter Starter template for Angular 20 Zoneless apps with SSR and NgRx state management. Includes 100% unit test coverage (Karma + Jasmine), e2e tests (Playwright), and is optimized for Vercel deployment.',
      github: 'https://github.com/alexanderkif/angular-zoneless-template',
      deploy: 'https://angular-zoneless-template.vercel.app/',
    },
    images: [
      'angular-zoneless-1-min.png',
      'angular-zoneless-2-min.png',
      'angular-zoneless-3-min.png',
      'angular-zoneless-4-min.png',
      'angular-zoneless-5-min.png',
      'angular-zoneless-6-min.png',
    ],
    bg: {
      gradient: [
        { color: '#f0f8ff', percent: 0 },
        { color: '#87ceeb', percent: 20 },
        { color: '#f0f8ff', percent: 40 },
        { color: '#f0f8ff', percent: 60 },
        { color: '#ffa07a', percent: 100 },
      ],
      wave: { color1: '#87ceeb', color2: '#f0f8ff' },
    },
  },
  {
    id: 24,
    name: 'Piano',
    active: true,
    content: {
      title: 'Piano PWA',
      stack: 'JavaScript Progressive Web App',
      year: '2025',
      description:
        'Couldn’t resist vibe coding again 🙂 My daughter’s class asked the kids to bring a musical instrument — even a toy piano would do. We have a full 88-key synth at home (way too heavy to carry 😅), so I built a little PWA toy piano for the phone that works offline. Then I added sampled piano sounds… and later asked AI to add a key-width switch. Fixing small things here and there is easy, but the fun part is realizing how much you can do when AI becomes your tireless coding partner 🤖🚀',
      github: 'https://github.com/alexanderkif/piano/',
      deploy: 'https://alexanderkif.github.io/piano/',
    },
    images: [
      'piano1-min.png',
      'piano2-min.png',
      'piano3-min.png',
      'piano4-min.png',
    ],
    bg: {
      gradient: [
        { color: '#FFFFFF', percent: 0 },
        { color: '#999999', percent: 25 },
        { color: '#FFFFFF', percent: 38 },
        { color: '#333333', percent: 87 },
        { color: '#999999', percent: 100 },
      ],
      wave: { color1: '#333333', color2: '#999999' },
    },
  },
  {
    id: 23,
    name: 'Picture Puzzle',
    active: true,
    content: {
      title: 'Sliding Picture Puzzle game',
      stack: 'JavaScript Progressive Web App',
      year: '2025',
      description:
        'Vibe coding is seriously addictive 😅 I’ve been experimenting again — this time trying to build the classic “Fifteen” game with AI, giving it only verbal instructions. The funny part? AI is amazing with simple stuff, but once the requests pile up, it sometimes freezes or starts looping like a stuck record 🎶. The trick I found: jump in, fix the code a bit yourself, and then tell the AI “forget everything we talked about before — now just listen to this new request”. Works like magic ✨. I honestly think the future of programming belongs to those who don’t just use AI, but know how to tame it. 🚀',
      github: 'https://github.com/alexanderkif/picture-puzzle/',
      deploy: 'https://alexanderkif.github.io/picture-puzzle/',
    },
    images: [
      'picturePuzzle1-min.png',
      'picturePuzzle2-min.png',
      'picturePuzzle3-min.png',
    ],
    bg: {
      gradient: [
        { color: '#FFFFFF', percent: 0 },
        { color: '#b755af', percent: 25 },
        { color: '#37b3ec', percent: 50 },
        { color: '#b755af', percent: 75 },
        { color: '#37b3ec', percent: 100 },
      ],
      wave: { color1: '#37b3ec', color2: '#b755af' },
    },
  },
  {
    id: 22,
    name: 'Cards',
    active: true,
    content: {
      title: 'Cards for training memory',
      stack: 'ReactJS PWA',
      year: '2024',
      description: `🚀 Boost Your Memory and Learning with Cards! 📚✨
        🔹 Create Personalized Flashcards: Easily make groups of cards with terms, concepts, or any information you want to remember. Each card shows your chosen content on one side and its translation, definition, or examples on the other.
        🔹 Share Your Flashcards: Easily share your groups of flashcards with others, making collaborative learning a breeze.🚀
        Start your journey towards better memory and enhanced learning with Cards today!
        ✨ I\'ve set up a Telegram group where everyone can share their flashcards! 📚 You can join the group directly from the top menu of the Cards app.
        🤖 Plus, I've created a Telegram bot to help keep things organized and ensure everyone follows the group rules.
        📋 I've also added some example messages with card files attached to help you get started. Can't wait to see you there! 🚀`,
      github: '',
      deploy: 'https://cards-pwa.vercel.app/',
    },
    images: [
      'cards0-min.png',
      'cards1-min.png',
      'cards2-min.png',
      'cards3-min.png',
      'cards4-min.png',
      'cards5-min.png',
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
    active: false,
    content: {
      title: 'My GitHub review',
      stack: 'JavaScript PWA',
      year: '2024',
      description:
        'This application. This is an overview of test and training projects on my Github. There are no production applications here. For obvious reasons, I cannot post production code here. Each item in the list has screenshots, a description, a stack, the year of creation and links to Github and deployment.',
      github: 'https://github.com/alexanderkif/review',
      deploy: 'https://review-alexanderkif.vercel.app',
    },
    images: ['review1-min.png'],
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
    active: false,
    content: {
      title: 'Alesia Game',
      stack: 'JavaScript PWA',
      year: '2022',
      description:
        'I wrote this simple game with my daughter to teach and explain to her how the browser and JavaScript work.',
      github: 'https://github.com/alexanderkif/alesiagame',
      deploy: 'https://alesiagame.vercel.app',
    },
    images: ['alesiagame1-min.png', 'alesiagame2-min.png'],
    bg: {
      gradient: [
        { color: '#F2FDC7', percent: 0 },
        { color: '#4C6A5B', percent: 100 },
      ],
      wave: { color1: '#4C6A5B', color2: '#F2FDC7' },
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
        'This is a simple yet practical application for tracking your expenses and income. It’s built as a Progressive Web App (PWA), which means you can install it on your device and use it just like a native app. 📱 Installable on desktop or mobile 🔒 All data stays on your device (stored in browser local storage) 🌐 Works completely offline — no internet required Perfect for quick personal finance tracking without the complexity of big apps.',
      github: 'https://github.com/alexanderkif/walletPWA',
      deploy: 'https://alexanderkif.github.io/walletPWA',
    },
    images: [
      'wallets1-min.png',
      'wallets2-min.png',
      'wallets3-min.png',
      'wallets4-min.png',
      'wallets5-min.png',
      'wallets6-min.png',
      'wallets7-min.png',
      'wallets8-min.png',
      'wallets9-min.png',
      'wallets10-min.png',
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
    id: 19,
    name: 'Spinme',
    active: true,
    content: {
      title: 'Spin me Game',
      stack: 'Vue.js / Quasar framework, Pinia store',
      year: '2022',
      description:
        'SpinMe Game is a casual puzzle game where the goal is to place all pieces on the board by spinning them around their axis. If a square is already occupied, the game highlights it to help you plan your moves. 🕹 How to play Select a piece – swipe UP or press the UP key, or simply click on a piece. Rotate the piece – swipe LEFT/RIGHT, use the arrow keys, or tap the on-screen rotate buttons. Place the piece – swipe DOWN, press the DOWN key, or tap the on-screen button. The game supports both keyboard controls and touch gestures, making it equally fun to play on desktop or mobile.',
      github: '',
      deploy: 'https://www.spinmegame.com',
    },
    images: [
      'spinmegame1-min.png',
      'spinmegame2-min.png',
      'spinmegame3-min.png',
      'spinmegame4-min.png',
      'spinmegame5-min.png',
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
    id: 17,
    name: 'REACT-MOVIES',
    active: true,
    content: {
      title: 'Netflix Roulette',
      stack:
        'React, Redux, Router, Thunk, Enzyme, Testing-library/react, hooks',
      year: '2021',
      description:
        'This project is a React training course challenge. It demonstrates state management with Redux, routing with React Router, asynchronous actions with Thunk, and testing with Enzyme and React Testing Library. ⚠️ Note: The app works fully with the local API. The Vercel deployment uses a remote API that is no longer functional.',
      github: 'https://github.com/alexanderkif/react-movies',
      deploy: 'https://react-movies-kappa.vercel.app/',
    },
    images: [
      'react-movie_1-min.png',
      'react-movie_2-min.png',
      'react-movie_3-min.png',
      'react-movie_4-min.png',
      'react-movie_5-min.png',
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
      'sibdev2_1-min.png',
      'sibdev2_2-min.png',
      'sibdev2_3-min.png',
      'sibdev2_4-min.png',
      'sibdev2_5-min.png',
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
    id: 16,
    name: 'LOGIST',
    active: true,
    content: {
      title: 'Logistic task',
      stack: 'Vue.js / Quasar framework',
      year: '2021',
      description: `This application is a logistics task simulator designed to plan and optimize delivery routes for a fleet of vehicles serving multiple stores in a district. Users can upload a sample Excel order file, and the program automatically calculates:
        Optimal delivery routes and schedules for a 5-day workweek
        Estimated transportation costs, including vehicle operation, hired transport, overtime, and penalties
        Detailed analysis of delivery efficiency, considering load capacity, travel time, and operational constraints
        The system accounts for:
        Different product types with restrictions on combined transport
        Vehicle limitations (own fleet and hired vehicles)
        Loading, unloading, and break times
        Overtime and underutilization penalties
        The output includes tables, charts, and delivery plans, helping visualize schedules, costs, and route efficiency.
        The full task description in Russian and the map diagram showing the location of the warehouse and stores can be found in the README file of the GitHub project.
        To test the program, download a sample Excel file, paste it into the designated field, and wait for the tables and reports to be generated.`,
      github: 'https://github.com/alexanderkif/logist',
      deploy: 'https://alexanderkif.github.io/logist',
    },
    images: [
      'logist1-min.png',
      'logist2-min.png',
      'logist3-min.png',
      'logist4-min.png',
      'logist5-min.png',
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
    id: 14,
    name: 'SIBDEV1',
    active: false,
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
      'sibdev1_1-min.png',
      'sibdev1_2-min.png',
      'sibdev1_3-min.png',
      'sibdev1_4-min.png',
      'sibdev1_5-min.png',
    ],
    bg: {
      gradient: [
        { color: '#FCFFF7', percent: 0 },
        { color: '#E1FFB0', percent: 100 },
      ],
      wave: { color1: '#E1FFB0', color2: '#FCFFF7' },
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
      'takeoff1-min.png',
      'takeoff2-min.png',
      'takeoff3-min.png',
      'takeoff4-min.png',
      'takeoff5-min.png',
      'takeoff6-min.png',
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
    active: false,
    content: {
      title: 'Test task, part 2',
      stack: 'Vue.js',
      year: '2020',
      description:
        'Test task for MEDODS company. Part 2. Simon The Game. Description in Readme file on GitHub.',
      github: 'https://github.com/alexanderkif/medods2',
      deploy: 'https://alexanderkif.github.io/medods2',
    },
    images: ['simon1-min.png', 'simon2-min.png'],
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
    active: false,
    content: {
      title: 'Test task, part 1',
      stack: 'Vue.js, Vuelidate, Sass',
      year: '2020',
      description:
        'Test task for MEDODS company. Part 1. Make a customer creation form. Description in Readme file on GitHub.',
      github: 'https://github.com/alexanderkif/medods1',
      deploy: 'https://alexanderkif.github.io/medods1',
    },
    images: ['customer1-min.png', 'customer2-min.png'],
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
      description: `This application allows multiple users to collaboratively manage shopping lists in real time. Each list can be filled out and updated by several users simultaneously. All data is securely stored in a MongoDB database, and the Vercel serverless API handles access and updates.
        Features include:
        Create, edit, and share shopping lists with a group of users
        Real-time updates across all users in the same group
        Persistent storage in MongoDB for reliable access from any device
        Demo access available without registration
        To try the app, you can register/login and use group IDs: 5f152ec3ea3c4800083d7de6 or 5f13f49eca7ee00007801c84.
        Alternatively, use the demo credentials:
        User: Saha2
        Password: s222`,
      github: 'https://github.com/alexanderkif/todogroup',
      deploy: 'https://buyforme.vercel.app',
    },
    images: [
      'buyforme_login-min.png',
      'buyforme_fab-min.png',
      'buyforme_items-min.png',
      'buyforme_fab-min.png',
      'buyforme_detail-min.png',
      'buyforme_groups-min.png',
      'buyforme_red-blue-min.png',
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
    id: 8,
    name: 'DOMETEO',
    active: true,
    content: {
      title: 'Autonomous weather station with solar panels',
      stack: 'Arduino, Node.js, MongoDB, Vue/Quasar',
      year: '2020',
      description: `This is an autonomous weather station that can also store data from any sensors. In my setup, I used a weather sensor (BME280). The board starts, sends data, and then goes to sleep for 5 minutes to save power.
        To optimize battery usage:
        A field-effect transistor connected to pin D6 cuts off power to the BME280 when the board sleeps.
        The 18650 lithium battery is monitored via input A0.
        If the battery voltage exceeds 4.2V, the D7 output disables the solar panel charging circuit to prevent overcharging.`,
      github: 'https://github.com/alexanderkif/dometeo',
      deploy: 'https://alexanderkif.github.io/dometeo',
    },
    images: [
      'dometeo1-min.png',
      'dometeo2-min.png',
      'dometeo3-min.png',
      'dometeo4-min.png',
    ],
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
    active: false,
    content: {
      title: 'Football trainer page',
      stack: 'JavaScript, Vue',
      year: '2020',
      description:
        "The employer's task: implementing the layout using Vue Quasar. The page layout is attached in the Readme file. Used a little JavaScript logic.",
      github: 'https://github.com/alexanderkif/football',
      deploy: 'https://alexanderkif.github.io/football',
    },
    images: ['football-min.png'],
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
      title: 'Autonomous outdoor weather station Wi-Fi',
      stack: 'Arduino, NodeJS, MongoDB, MongoClient, JavaScript, Vue/Quasar',
      year: '2019',
      description: `The weather station is powered by a lithium battery, charged by a solar panel. Data is transmitted via Wi-Fi to a back-end hosted on Zeit.co and stored in MongoDB.
        A universal GET request is available:
        /data?start=START_DATE&finish=FINISH_DATE&tframe=TFRAME&step=STEP
        TFRAME can be month, day, hour, or minute.
        A small frontend is built with Quasar. To view it, click [TO DEPLOY]. The last reading was on March 14, 2022, at 9:58 AM — at that time, I was forced to leave my home forever. To explore historical data and graphs, select the period from July 1, 2019, to March 14, 2022.`,
      github: 'https://github.com/alexanderkif/meteo',
      deploy: 'https://alexanderkif.github.io/meteo-front',
    },
    images: ['meteo1-min-min.png', 'meteo2-min-min.png', 'meteo3-min-min.png'],
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
    active: false,
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
    images: ['fnb1-min-min.png', 'fnb2-min-min.png', 'fnb3-min-min.png'],
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
      title: 'Solar Tracker Robot – Junior Robotics Competition (2017)',
      stack: 'Quasar/vue, PWA',
      year: '2016',
      description:
        "Mentored my son to build a robot that tracks the sun, automatically rotating solar panels to collect maximum energy. Participated in the Junior Russian Schoolchildren's Competition at MEPhI, where my son won first place, and I received a Project Supervisor Certificate. Skills demonstrated: PWA development, robotics, automation, and mentoring in STEM projects.",
      github: 'https://github.com/alexanderkif/solarTracker',
      deploy: 'https://alexanderkif.github.io/solarTracker/',
    },
    images: ['st1-min-min.png', 'st2-min-min.png', 'st3-min-min.png'],
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
    active: false,
    content: {
      title: 'Modifiable slider',
      stack: 'Webpack, JS, Pug, SCSS, BEM',
      year: '2019',
      description:
        'This is a learning assignment. The slider is written in Javascript with the ability to change the appearance. Javascript classes are used. Mentors reviewed the code and wrote issue.',
      github: 'https://github.com/alexanderkif/modifiable-slider',
      deploy: 'https://alexanderkif.github.io/modifiable-slider/',
    },
    images: ['slider1-min.png', 'slider2-min-min.png'],
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
    active: false,
    content: {
      title: 'Test task',
      stack: 'HTML, Pug, CSS, SCSS, BEM, Javascript, Webpack',
      year: '2018',
      description:
        'This is a learning assignment. Several basics web elements is written in HTML, CSS, Javascript with different appearance. Javascript classes are used. Mentors reviewed the code and wrote issue.',
      github: 'https://github.com/alexanderkif/flatUI',
      deploy: 'https://alexanderkif.github.io/flatUI',
    },
    images: ['flatUI-min-min.png'],
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
    active: false,
    content: {
      title: 'Javascript test task',
      stack: 'JavaScript, HTML, CSS',
      year: '2019',
      description:
        'This is a test task for an interview. The same class is used to calculate the moves of a chess knight and visualize moves on a chessboard.',
      github: 'https://github.com/alexanderkif/js-test-task',
      deploy: 'https://alexanderkif.github.io/js-test-task',
    },
    images: ['jstask-min-min.png'],
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
