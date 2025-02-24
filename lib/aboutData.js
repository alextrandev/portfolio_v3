// icons
import {
  FaReact,
  FaWordpress,
  FaFigma,
  FaPython,
  FaAws,
  FaBootstrap
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiPhp,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiMui,
  SiSymfony,
  SiDrupal,
  SiLaravel,
  SiJenkins,
  SiSonarqube,
  SiGithubactions,
  SiGit,
  SiJest,
  SiWebflow,
  SiNodedotjs,
  SiDocker,
  SiCypress,
  SiKubernetes,
  SiShadcnui
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

import { VscAzure } from "react-icons/vsc";

//  data
export const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Programming languages',
        icons: [
          { icon: <SiJavascript />, text: "JavaScript" },
          { icon: <SiTypescript />, text: "TypeScript" },
          { icon: <SiPhp />, text: "PHP" },
          { icon: <FaPython />, text: "Python" },
        ],
      },
      {
        title: 'Libraries & frameworks',
        icons: [
          { icon: <FaReact />, text: "React" },
          { icon: <SiNextdotjs />, text: "Next.js" },
          { icon: <SiNodedotjs />, text: "Node.js" },
          { icon: <SiSymfony />, text: "Symfony" },
          { icon: <SiDrupal />, text: "Drupal" },
          { icon: <SiLaravel />, text: "Laravel" },
        ],
      },
      {
        title: 'Front End',
        icons: [
          { icon: <FaBootstrap />, text: "Bootstrap" },
          { icon: <SiTailwindcss />, text: "Tailwind CSS" },
          { icon: <SiMui />, text: "Material-UI (MUI)" },
          { icon: <SiShadcnui />, text: "shadcn/ui" },
          { icon: <TbBrandFramerMotion />, text: "Framer Motion" },
        ],
      },
      {
        title: 'DevOps',
        icons: [
          { icon: <SiDocker />, text: "Docker" },
          { icon: <SiKubernetes />, text: "Kubernetes" },
          { icon: <SiGit />, text: "Git version control" },
          { icon: <SiGithubactions />, text: "GitHub Actions" },
          { icon: <FaAws />, text: "Amazon Web Services (AWS)" },
          { icon: <VscAzure />, text: "Microsoft Azure" },
          { icon: <SiJenkins />, text: "Jenkins" },
          { icon: <SiJest />, text: "Jest unit testing" },
          { icon: <SiCypress />, text: "Cypress frontend testing" },
          { icon: <SiSonarqube />, text: "SonarQube & SonarCloud" },
        ],
      },
      {
        title: 'Web design',
        icons: [
          { icon: <FaWordpress />, text: "WordPress" },
          { icon: <SiWebflow />, text: "Webflow" },
          { icon: <FaFigma />, text: "Figma" },
        ],
      },
      // {
      //   title: 'Markup languages',
      //   icons: [
      //     { icon: <FaHtml5 />, text: "HTML5" },
      //     { icon: <FaCss3 />, text: "CSS3" },
      //     { icon: <SiLatex />, text: "LaTeX" },
      //     { icon: <FaMarkdown />, text: "Markdown" },
      //   ],
      // },
    ]
  },
  {
    title: 'education',
    info: [
      {
        title: 'Business College Helsinki:',
        bold: 'Fullstack programming',
        year: '2023 - 2025',
      },
      {
        title: 'BBA, Laurea-ammattikorkeakoulu:',
        bold: 'Web design',
        year: '2016 - 2021',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Carwash Suomi (carwash.fi):',
        bold: 'Web developer',
        year: '2021 - 2022',
      },
      {
        title: 'BKIT:',
        bold: 'Web developer intern',
        year: '2020',
      },
    ],
  },
  {
    title: 'awards & certificates',
    info: [
      {
        title: 'Stanford University:',
        bold: 'Code in Place',
        year: '2024',
      },
      {
        title: 'GMAT:',
        bold: '650',
        year: '2023',
      },
      {
        title: 'Telia Finland:',
        bold: 'Service design challenge 1st place',
        year: '2021',
      },
    ],
  },
];

export const statistic = [
  {number: 27, plusSign: false, text: ' years old'},
  {number: 2, plusSign: false, text: ' years experience'},
  {number: 50, plusSign: true, text: ' projects completed'},
  {number: 1700, plusSign:true, text: 'code commits'},
];