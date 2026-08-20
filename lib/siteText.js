// All user-facing site copy lives here — components only render it.
// Edit this file (plus aboutData.js / projectsData.js / socialsData.js)
// to change any text on the site.
import {
  HiHome,
  HiUser,
  HiRectangleGroup,
  HiEnvelope,
} from 'react-icons/hi2';

// site-wide
export const headerText = {
  name: 'Alex Tran',
  tagline: 'portfolio',
};

export const seoText = {
  siteName: 'Alex Tran | Software Engineer',
  ogSiteName: 'Alex Tran',
  titleSuffix: 'Alex Tran',
};

export const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  { name: 'projects', path: '/projects', icon: <HiRectangleGroup /> },
  { name: 'contact', path: '/contact', icon: <HiEnvelope /> },
];

// home page
export const homeText = {
  seoDescription:
    'Portfolio of Alex Tran, a software engineer in Helsinki building mobile apps, APIs, databases and cloud infrastructure with AI-driven workflows.',
  greeting: 'Hello world!',
  iAm: 'I am',
  name: 'Alex Tran',
  role: 'Software engineer',
  intro: [
    'I engineer products end to end - mobile apps, APIs, databases and cloud infrastructure.',
    'I build with AI-driven workflows: Claude, MCP servers, CI/CD and automation.',
  ],
};

// about page
export const aboutText = {
  seoTitle: 'About',
  seoDescription:
    'My software engineer journey — the skills, education, experience and awards of Alex Tran, software & platform engineer.',
  heading: {
    start: 'My journey as a',
    accent: 'software engineer'
  },
  headingMobile: 'About me',
  paragraphs: [
    'I started building websites over a decade ago on CMS platforms, then studied full-stack programming at Business College Helsinki and shipped production work as a full-stack developer for several Finnish companies.',
    'At Hobbly Technologies I helped take a local-activities platform from idea to the app stores, and was promoted to software engineer along the way.',
    'Today at One Lion Company I deliver products end to end — mobile apps, APIs, databases and Kubernetes deployments for projects like Sijaismestari and Netin Turva — with AI workflows built on Claude, MCP servers and CI/CD automation at the core of how I work.',
  ],
};

// projects page
export const projectsText = {
  seoTitle: 'Projects',
  seoDescription:
    'Recent projects by Alex Tran — mobile apps, web platforms and cloud deployments, with live demos and source code.',
  heading: 'My projects',
  intro:
    'Check out my recent work — mobile apps, web platforms and cloud deployments. Visit the live sites, grab the apps from the stores, or dig into the public source code.',
};

// contact page
export const contactText = {
  seoTitle: 'Contact',
  seoDescription: 'Get in touch with Alex Tran — send a message straight to my inbox.',
  heading: {
    start: "Let's",
    accent: 'connect.',
  },
};

export const formText = {
  sending: 'Sending message. Please wait!',
  sent: 'Thank you for the message!',
  failed: 'Something went wrong... Please try again!',
  tryAgain: 'Try again',
  sendAnother: 'Send another message',
  send: 'Send',
  fields: {
    name: 'Name',
    email: 'E-mail',
    subject: 'Subject',
    message: 'Message',
  },
};

// 404 page
export const notFoundText = {
  seoTitle: 'Page not found',
  seoDescription: 'This page could not be found.',
  heading: '404',
  message: "This page doesn't exist — it may have been moved or never built.",
  backHome: 'Back to home',
};
