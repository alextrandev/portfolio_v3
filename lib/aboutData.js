// icons
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaWordpress,
  FaFigma,
  FaPython,
  FaMarkdown,
  FaAws,
  FaBootstrap
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiFramer,
  SiPhp,
  SiTypescript,
  SiLatex,
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
  SiNodedotjs
} from "react-icons/si";

//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Programming languages',
        icons: [
          <SiJavascript />,
          <SiTypescript />,
          <SiPhp />,
          <FaPython />,
        ],
      },
      {
        title: 'Libraries & frameworks',
        icons: [
          <FaReact />,
          <SiNextdotjs />,
          <SiNodedotjs />,
          <SiSymfony />,
          <SiDrupal />,
          <SiLaravel />,
        ],
      },
      {
        title: 'Front End',
        icons: [
          <FaBootstrap />, 
          <SiTailwindcss />, 
          <SiMui />, 
          <SiFramer />,
        ],
      },
      {
        title: 'DevOps',
        icons: [
          <SiGit />,
          <SiGithubactions />,
          <FaAws />, 
          <SiJenkins />, 
          <SiJest />,
          <SiSonarqube />,
        ],
      },
      {
        title: 'Web design',
        icons: [
          <FaWordpress />, 
          <SiWebflow />,
          <FaFigma />, 
        ],
      },
      {
        title: 'Markup languages',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <SiLatex />,
          <FaMarkdown />,
        ],
      },
    ],
  },
  {
    title: 'education',
    info: [
      {
        title: 'Business College Helsinki:',
        bold: 'Fullstack programming',
        year: '2023 - 2024',
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
    title: 'awards',
    info: [
      {
        title: 'Telia Finland:',
        bold: 'Service design challenge 1st place',
        year: '2021',
      },
    ],
  },
];

export default aboutData;