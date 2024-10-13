// this array hold the projects
const projects = [
  // sample project data
  // {
  //   title: 'Project name here',
  //   description: 'Short description about the project here',
  //   techStack: 'React, NextJS, Javascript',
  //   image: '/thumb1.jpg',
  //   links: [
  //     {title: 'Live website', url: 'https://#'},
  //     {title: 'GitHub repo', url: 'https://#'},
  //   ]
  // },
  {
    title: 'Countries App',
    description: 'Full-stack countries info app feature authentication and AI integration',
    techStack: ['React', 'Redux', 'Express.js','Bootstrap', 'Firebase', 'OpenAI' ],
    image: '/thumbnails/countries-app-thumbnail.webp',
    links: [
      {title: 'Live website', url: 'https://countries.alextran.dev'},
      {title: 'GitHub repo', url: 'https://github.com/alextrandev/countries_app_react_bootstrap'},
    ]
  },
  {
    title: 'Portfolio v3',
    description: 'Version 3 of my personal portfolio',
    techStack: ['React', 'NextJS', 'Tailwind', 'Framer Motion'],
    image: '/thumbnails/portfolio-v3-thumbnail.webp',
    links: [
      {title: 'GitHub repo', url: 'https://github.com/alextrandev/portfolio_v3'},
    ]
  },
  {
    title: 'Carwash.fi',
    description: 'Carwash Suomi franchise business website',
    techStack: ['Webflow', 'Javascript', 'Html', 'CSS'],
    image: '/thumbnails/carwash.fi-thumbnail.webp',
    links: [
      {title: 'Live website', url: 'https://carwash.fi'},
    ]
  },
  {
    title: 'Travel buddy',
    description: 'Decoupled app providing destinations tinerary, weather, map, etc.',
    techStack: ['React', 'Javascript', 'Symfony', 'PHP'],
    image: '/thumbnails/travel-buddy-thumbnail.webp',
    links: [
      {title: 'Live website', url: 'http://foremap.alextran.dev'},
      {title: 'GitHub repo', url: 'https://github.com/alextrandev/fullstack_travel_buddy'},
    ]
  },
  {
    title: 'Symfony Social media',
    description: 'Self hosted, fullstack social media page built with Symfony',
    techStack: ['Symfony', 'PHP', 'Webpack', 'Tailwind'],
    image: '/thumb3.jpg',
    links: [
      {title: 'Live website', url: 'https://social-media.alextran.cloud'},
      {title: 'GitHub repo', url: 'https://github.com/alextrandev/social_media_platform'},
    ]
  },
  {
    title: 'AI powered quiz app',
    description: 'Choose a topic, test and recieve score',
    techStack: ['NextJS', 'Typescript', 'Tailwind', 'OpenAI'],
    image: '/thumbnails/AI-quiz-thumbnail.webp',
    links: [
      {title: 'Live website', url: 'https://ai-quiz.alextran.dev/'},
      {title: 'GitHub repo', url: 'https://github.com/alextrandev/AI-quiz-app'},
    ]
  },
  {
    title: 'URL Shortener',
    description: 'Provide users with a shortened URL',
    techStack: ['React', 'Vite', 'Javascript', 'Material UI'],
    image: '/thumbnails/URL-shortener-thumbnail.webp',
    links: [
      {title: 'Live website', url: 'https://shorturl.alextran.dev'},
      {title: 'GitHub repo', url: 'https://github.com/alextrandev/fullstack_url_shortener'},
    ]
  },
    {
    title: 'Portfolio v2',
    description: 'The second version of my personal portfolio',
    techStack: ['Javascript', 'Html', 'CSS'],
    image: '/thumbnails/portfolio-v2-thumbnail.webp',
    links: [
      {title: 'Live website', url: 'https://alextrandev.github.io/portfolio_v1_and_v2/'},
      {title: 'GitHub repo', url: 'https://github.com/alextrandev/portfolio_v1_and_v2'},
    ]
  },
  {
    title: 'Pokedex',
    description: 'Browse, search and view infos of over 500 pokemons',
    techStack: ['Javascript', 'Html', 'CSS'],
    image: '/thumbnails/pokedex-thumbnail.webp',
    links: [
      {title: 'Live website', url: 'https://alextrandev.github.io/pokedex/'},
      {title: 'GitHub repo', url: 'https://github.com/alextrandev/pokedex'},
    ]
  },
  {
    title: 'PHP Bookstore',
    description: 'A bookstore site build with vanilla PHP',
    techStack: ['PHP', 'Html', 'CSS'],
    image: '/thumbnails/PHP-bookstore-thumbnail.webp',
    links: [
      {title: 'Live website', url: 'http://alextrandev.infinityfreeapp.com/bookstore_v2'},
      {title: 'GitHub repo', url: 'https://github.com/alextrandev/php_bookstore_v2'},
    ]
  },
  {
    title: 'Starshop',
    description: 'E-commerce site for starships and starships repair',
    techStack: ['Symfony', 'PHP', 'Tailwind'],
    image: '/thumbnails/starshop-thumbnail.webp',
    links: [
      {title: 'Live website', url: 'https://alextrandev.infinityfreeapp.com/starshop/public'},
      {title: 'GitHub repo', url: 'https://github.com/alextrandev/starshop'},
    ]
  },
  {
    title: 'Animals app',
    description: 'Visitor can search, show animals info, mark favourites, give likes, etc.',
    techStack: ['React', 'Vite', 'Tailwind', 'RestAPIs'],
    image: '/thumbnails/animals-app-thumbnail.webp',
    links: [
      {title: 'Live website', url: 'https://animals.alextran.dev/'},
      {title: 'GitHub repo', url: 'https://github.com/alextrandev/react_animals'},
    ]
  },
  {
    title: 'Message encryption',
    description: 'A message encryption/description program',
    techStack: ['Python', 'PyScript'],
    image: '/thumbnails/message-encryption-thumbnail.webp',
    links: [
      {title: 'Live website', url: 'https://alextran.pyscriptapps.com/message-encryption/'},
      {title: 'GitHub repo', url: 'https://github.com/alextrandev/python_message_encryption'},
    ]
  },
  {
    title: 'PHP Authentication system',
    description: 'An authenticator app feature account activation and password reset using email link verification',
    techStack: ['PHP', 'Html', 'CSS'],
    image: '/thumbnails/PHP-authentication-system-thumbnail.webp',
    links: [
      {title: 'Live website', url: 'http://alextrandev.infinityfreeapp.com/PHP_authentication_system'},
      {title: 'GitHub repo', url: 'https://github.com/alextrandev/php_authentication_system'},
    ]
  },
  {
    title: 'Symfony link page',
    description: 'Symfony practice project includes a palindrome check, calculator app and some sample pages',
    techStack: ['Symfony', 'PHP'],
    image: '/thumbnails/symfony-link-page-thumbnail.webp',
    links: [
      {title: 'Live website', url: 'http://alextrandev.infinityfreeapp.com/symfony_link_page/public'},
      {title: 'GitHub repo', url: 'https://github.com/alextrandev/symfony_link_page'},
    ]
  },
  {
    title: 'Country info',
    description: 'Display various infos about all countries in the world using restcountry API',
    techStack: ['Javascript', 'Html', 'CSS'],
    image: '/thumbnails/countries-info-thumbnail.webp',
    links: [
      {title: 'Live website', url: 'https://alextrandev.github.io/country_info'},
      {title: 'GitHub repo', url: 'https://github.com/alextrandev/country_info'},
    ]
  },
]

// this function will split the projects array into groups of given number of elements
const projectsSlides = (numberOfProject) => {
// this array hold the slides
const slides = [];
// this loop break the projects array into groups of x items and add to the slide
for (let i = 0; i < Math.ceil(projects.length/numberOfProject); i++) {
 slides.push(projects.slice(i * numberOfProject, i * numberOfProject + numberOfProject));
}
return slides;
};

export default projectsSlides;