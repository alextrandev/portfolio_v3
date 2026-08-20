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
  SiSonarqubeserver,
  SiGithubactions,
  // SiGit,
  SiJest,
  SiWebflow,
  SiNodedotjs,
  SiDocker,
  SiCypress,
  SiKubernetes,
  SiShadcnui,
  SiClaude,
  SiModelcontextprotocol,
  SiCursor,
  SiGooglegemini,
  SiExpo,
  SiDjango,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiPrisma,
  SiArgo,
  SiNginx,
  SiGraphql,
  SiStripe,
  SiVitest
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { RiOpenaiFill } from "react-icons/ri";

import { VscAzure } from "react-icons/vsc";

//  data
export const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'AI engineering',
        icons: [
          { icon: <SiClaude />, text: "Claude Code & Claude API" },
          { icon: <SiModelcontextprotocol />, text: "MCP servers" },
          { icon: <SiCursor />, text: "Cursor" },
          { icon: <RiOpenaiFill />, text: "OpenAI Codex" },
          { icon: <SiGooglegemini />, text: "Google Antigravity" },
        ],
      },
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
        title: 'Libraries, frameworks',
        icons: [
          { icon: <FaReact />, text: "React" },
          { icon: <FaReact />, text: "React Native" },
          { icon: <SiExpo />, text: "Expo" },
          { icon: <SiNextdotjs />, text: "Next.js" },
          { icon: <SiNodedotjs />, text: "Node.js" },
          { icon: <SiDjango />, text: "Django" },
          { icon: <SiLaravel />, text: "Laravel" },
          { icon: <SiSymfony />, text: "Symfony" },
          { icon: <SiDrupal />, text: "Drupal" },
        ],
      },
      {
        title: 'APIs & databases',
        icons: [
          { icon: <SiPostgresql />, text: "PostgreSQL" },
          { icon: <SiMysql />, text: "MySQL" },
          { icon: <SiMongodb />, text: "MongoDB" },
          { icon: <SiPrisma />, text: "Prisma ORM" },
          { icon: <SiGraphql />, text: "REST & GraphQL APIs" },
          { icon: <SiStripe />, text: "Stripe integrations" },
        ],
      },
      {
        title: 'Cloud & DevOps',
        icons: [
          { icon: <SiDocker />, text: "Docker" },
          { icon: <SiKubernetes />, text: "Kubernetes" },
          { icon: <SiArgo />, text: "Argo CD" },
          { icon: <SiNginx />, text: "Nginx & load balancing" },
          { icon: <SiGithubactions />, text: "GitHub Actions CI/CD" },
          { icon: <SiJenkins />, text: "Jenkins" },
          { icon: <FaAws />, text: "Amazon Web Services (AWS)" },
          { icon: <VscAzure />, text: "Microsoft Azure" },
        ],
      },
      {
        title: 'Testing & quality',
        icons: [
          { icon: <SiVitest />, text: "Vitest" },
          { icon: <SiJest />, text: "Jest unit testing" },
          { icon: <SiCypress />, text: "Cypress frontend testing" },
          { icon: <SiSonarqubeserver />, text: "SonarQube & SonarCloud" },
        ],
      },
      {
        title: 'Front end & design',
        icons: [
          { icon: <FaBootstrap />, text: "Bootstrap" },
          { icon: <SiTailwindcss />, text: "Tailwind CSS" },
          { icon: <SiMui />, text: "Material-UI (MUI)" },
          { icon: <SiShadcnui />, text: "shadcn/ui" },
          { icon: <TbBrandFramerMotion />, text: "Framer Motion" },
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
        bold: 'Fullstack programming, Degree in ICT',
        year: '2023 - 2025',
      },
      {
        title: 'Laurea University of Applied Sciences, Laurea UAS:',
        bold: 'Business Information Technology, BBA',
        year: '2016 - 2021',
      },
      {
        title: 'Hanoi University of Science and Technology, HUST:',
        bold: 'Information Technology',
        year: '2015 - 2016',
      },
      {
        title: 'Hanoi–Amsterdam High School for the Gifted:',
        bold: 'Physics',
        year: '2012 - 2015',
      }
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'One Lion Company',
        bold: 'Software Engineer',
        year: '2026 - current',
      },
      {
        title: 'Hobbly Technologies Oy',
        bold: 'Software Developer',
        year: '2025 - 2026',
      },
      {
        title: 'Glimps',
        bold: 'Software Engineer',
        year: '2024 - 2025',
      },
      {
        title: 'Carwash Suomi (carwash.fi):',
        bold: 'Web developer',
        year: '2022 - 2023',
      },
      {
        title: 'Carwash Suomi (carwash.fi):',
        bold: 'Digital Marketing',
        year: '2021 - 2022',
      },
      {
        title: 'West Helsinki Oy:',
        bold: 'WordPress Developer',
        year: '2021 - 5 months',
      },
      {
        title: 'BKIT:',
        bold: 'Web developer intern',
        year: '2019 - 4 months',
      },
    ],
  },
  {
    title: 'awards & certificates',
    info: [
      {
        title: 'Junction hackathon:',
        bold: 'Junction',
        year: '2024',
      },
      {
        title: 'Partner side event volunteer:',
        bold: 'Slush',
        year: '2024',
      },
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
  { number: 29, plusSign: false, text: 'years old' },
  { number: 6, plusSign: true, text: 'years experience' },
  { number: 80, plusSign: true, text: 'projects completed' }
];