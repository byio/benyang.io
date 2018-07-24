const uuidv4 = require('uuid/v4');

export const works = [
  {
    id: `${uuidv4()}`,
    title: 'PWA Newsfeed',
    imgURL: 'https://picsum.photos/200/?random',
    description: 'Read artcles from a wide variety of international news sources. This PWA Newsfeed app is built based on ReactJS following Google\'s recommended Progressive Web Apps (PWA) standards.',
    githubURL: 'https://github.com/byio/pwa-newsfeed',
    liveURL: 'https://pwa-newsfeed-4f116.firebaseapp.com/',
    keywords: 'reactjs redux pwa jsx newsapi newsfeed firebase',
  },
  {
    id: `${uuidv4()}`,
    title: 'Smart Brain',
    imgURL: 'https://picsum.photos/200/?random',
    description: 'Smart Brain is a fullstack face detection web app built with ReactJs/Redux on the frontend, and NodeJS/Express and Postgres on the backend.',
    githubURL: 'https://github.com/byio/pwa-newsfeed',
    liveURL: 'https://pwa-newsfeed-4f116.firebaseapp.com/',
    keywords: 'reactjs redux jsx face detection clarifai nodejs express postgresql sql nosql',
  },
  {
    id: `${uuidv4()}`,
    title: 'Fallout Webstore',
    imgURL: 'https://picsum.photos/200/?random',
    description: 'If the events of the Fallout universe ever happens, the Fallout Webstore has your back. Make purchases in the wasteland devoid of precious WiFi, and have the transactions go through when you are back in the WiFi comforts of your vault. Another innovation brought to you by VaultTec.',
    githubURL: 'https://github.com/byio/pwa-newsfeed',
    liveURL: 'https://pwa-newsfeed-4f116.firebaseapp.com/',
    keywords: 'gatsbyjs reactjs pwa snipcart ecommerce store payments',
  },
  {
    id: `${uuidv4()}`,
    title: 'GeoLancers',
    imgURL: 'https://picsum.photos/200/?random',
    description: 'Find a freelancer just around the corner!',
    githubURL: 'https://github.com/byio/pwa-newsfeed',
    liveURL: 'https://pwa-newsfeed-4f116.firebaseapp.com/',
    keywords: 'reactjs redux nodejs express mongodb mongoose mlab api restful graphql apollo',
  },
  {
    id: `${uuidv4()}`,
    title: 'Serverless Todo',
    imgURL: 'https://picsum.photos/200/?random',
    description: 'A todo app that\'s more than meets the eye. It\'s built on serverless technology, and even allows credit card transactions.',
    githubURL: 'https://github.com/byio/pwa-newsfeed',
    liveURL: 'https://pwa-newsfeed-4f116.firebaseapp.com/',
    keywords: 'reactjs aws serverless stripe dynamodb lambda gateway netlify',
  }
];
