import {
  ReactLogo,
  VSCodeLogo,
  WebstormLogo,
  TypeORMLogo,
  BSULogo,
  ReduxLogo,
  NodeLogo,
  RssLogo,
  NestLogo,
  PrismaLogo,
  PostmanLogo,
  MolcrbLogo,
  MongoLogo,
  PostgreLogo,
  TypescriptLogo,
  NextLogo,
  HTML5Logo,
  GodelLogo,
  GraphQLLogo,
  GitLogo,
  GithubLogo,
  ExpressLogo,
  DockerLogo,
  DashLogo,
  CSS3Logo,
  ChainLogo,
  BootstrapLogo,
  JavascriptLogo,
  MaterialUILogo,
  GodelHumanResources,
  MemberPilik,
  MemberPiotr,
  MemberVeranika,
  MemberKrzysztof,
  MemberTovstik,
  GodelVacationTracker1,
  DashFormBuilder,
  MemberKsenia,
  MemberSergey,
} from '../images';

export const Bio = {
  name: 'Alexander Razhechkin',
  roles: ['Front End Developer', 'Back End Developer', 'Full Stack Developer', 'Programmer'],
  description:
    'I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.',
  resume: 'https://drive.google.com/file/d/1IE-9isHy7PjmOn5y1BmIqYpDsGvUd1sd/view?usp=sharing',
  linkedin: 'https://www.linkedin.com/in/alexander-r-17a7bb198/',
  telegram: 'https://t.me/agent_sun',
};

export const skills = [
  {
    title: 'Frontend',
    skills: [
      {
        name: 'React Js',
        image: ReactLogo,
      },
      {
        name: 'Redux',
        image: ReduxLogo,
      },
      {
        name: 'Next Js',
        image: NextLogo,
      },
      {
        name: 'TypeScript',
        image: TypescriptLogo,
      },
      {
        name: 'HTML',
        image: HTML5Logo,
      },
      {
        name: 'CSS',
        image: CSS3Logo,
      },
      {
        name: 'JavaScript',
        image: JavascriptLogo,
      },
      {
        name: 'Material UI',
        image: MaterialUILogo,
      },

      {
        name: 'Bootstrap',
        image: BootstrapLogo,
      },
    ],
  },
  {
    title: 'Backend',
    skills: [
      {
        name: 'Node Js',
        image: NodeLogo,
      },
      {
        name: 'Nest Js',
        image: NestLogo,
      },
      {
        name: 'Graph Ql',
        image: GraphQLLogo,
      },
      {
        name: 'Express Js',
        image: ExpressLogo,
      },
      {
        name: 'Postgresql',
        image: PostgreLogo,
      },
      {
        name: 'MongoDB',
        image: MongoLogo,
      },
      {
        name: 'TypeORM',
        image: TypeORMLogo,
      },
      {
        name: 'Prisma',
        image: PrismaLogo,
      },
    ],
  },
  {
    title: 'Mobile',
    skills: [
      {
        name: 'React Native',
        image: ReactLogo,
      },
    ],
  },
  {
    title: 'Others',
    skills: [
      {
        name: 'Git',
        image: GitLogo,
      },
      {
        name: 'GitHub',
        image: GithubLogo,
      },
      {
        name: 'Docker',
        image: DockerLogo,
      },
      {
        name: 'VS Code',
        image: VSCodeLogo,
      },
      {
        name: 'Postman',
        image: PostmanLogo,
      },
      {
        name: 'WebStorm',
        image: WebstormLogo,
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: GodelLogo,
    role: 'Software Engineer',
    company: 'Godel Technologies Europe',
    date: 'Aug 2022 - Jul 2023',
    desc: 'Working on internal projects as Developer, managing Frontend team, and streamlining the process automation. I collaborated closely with cross-functional teams, including back-end developers and stakeholders, to ensure that functional requirements were meticulously met. My responsibilities encompassed gathering and translating client requirements into actionable product stories. I also took charge of developing and maintaining the front-end architecture, seamlessly integrating user interface elements in conjunction with back-end developers.',
    skills: [
      'React',
      'React Context',
      'react-hook-form',
      'rc-table',
      'react-use',
      'Sass',
      'Storybook',
      'Node.js',
      'TypeScript',
      'Docker',
      'GitLab',
    ],
  },
  {
    id: 1,
    img: DashLogo,
    role: 'Frontend Developer',
    company: 'Dashbouquet Development',
    date: 'Mar 2021 - Apr 2022',
    desc: 'During my one-year tenure, I contributed as a Front-end Developer on diverse projects, including a form builder for a desktop application, an international cryptocurrency exchange, and a betting strategies service. My role involved implementing features, optimizing UI, and transitioning to new technologies.',
    skills: [
      'React',
      'Redux-Saga',
      'Reactstrap',
      'Swagger',
      'Styled-components',
      'Sass',
      'Storybook',
      'Node.js',
      'Formik',
      'React-i18next',
      'Bootstrap',
    ],
  },
  {
    id: 2,
    img: ChainLogo,
    role: 'Frontend Web Developer',
    company: 'ChainArtSoft',
    date: 'Mar 2020 - Mar 2021',
    desc: ' My responsibilities ranged from creating tables, forms, and validation schemas to refactoring complex code, simplifying component hierarchies, and extending existing features. I also provided direct client support, participated in planning and review meetings, and seamlessly integrated third-party services.',
    skills: [
      'React',
      'Redux',
      'Shopify',
      'React-testing-library',
      'Graph QL',
      'Gatsby',
      'Scss',
      'React-transition-group',
      'Material UI',
    ],
  },
  {
    id: 3,
    img: MolcrbLogo,
    role: 'Software Engineer / System Administrator',
    company: 'Health institution "Molodechno Central District Hospital"',
    date: 'Dec 2017 - Jan 2020',
    desc: "In my dual role as a System Administrator and Software Engineer, I've excelled in configuring and troubleshooting systems, implementing upgrades, and ensuring security. As a Software Engineer, I streamlined code, enhanced user experiences, and integrated third-party services for added functionality.",
    skills: ['Javascript', 'CSS', 'Windows OS', 'Windows Server 2008'],
  },
];

export const educations = [
  {
    id: 0,
    img: BSULogo,
    school: 'Belarusian State University',
    date: 'Sep 2011 - June 2017',
    desc: "Received a Bachelor's degree in Computer Science and Engineering at Faculty of Radiophysics and Computer Technologies, Minsk. I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks.",
    degree: 'Bachelor of Science in Radiophysicist',
  },
  {
    id: 1,
    img: RssLogo,
    school: 'Rolling scopes school',
    date: 'Feb 2019 - Aug 2023',
    desc: 'I have successfully completed the JavaScript, React, and Node.js courses on Rolling Scopes, and from 2019 to 2023, I actively engaged in team projects, made valuable contributions to a large Discord community, and had the opportunity to mentor others.',
    degree: 'Successfully completed courses',
  },
];

export const projects = [
  {
    id: 0,
    title: 'Vacation Tracker Portal',
    date: 'Jan 2023- Jun 2023',
    description:
      'The client has an internal application for tracking employee vacations. As part of the task to optimize and improve the efficiency of using this application, the client expressed a desire to conduct an analysis to identify its current shortcomings with the help of our designers. The next step was to develop solutions to address the identified issues and design a new interface taking into account the obtained results.',
    image: GodelVacationTracker1,
    tags: ['React', 'Context', 'react-hook-form', 'react-testing-library', 'Data visualisation'],
    category: 'web app',
    github: null,
    webapp: null,
    members: [
      {
        name: 'Tatsiana Pilik',
        img: MemberPilik,
        linkedin: 'https://www.linkedin.com/in/tamore/',
        position: 'UX/UI | Product Designer',
      },
      {
        name: 'Piotr Lewandowski',
        img: MemberPiotr,
        linkedin: 'https://www.linkedin.com/in/piotrlewandowskiimmunodesign/',
        position: 'Agile Delivery Coordinator',
      },
      {
        name: 'Veranika Martsinovich',
        img: MemberVeranika,
        linkedin: 'https://www.linkedin.com/in/veranika-martsinovich-292902125/',
        position: 'React',
      },
      {
        name: 'Krzysztof Rykowski',
        img: MemberKrzysztof,
        linkedin: 'https://www.linkedin.com/in/krzysztof-rykowski/',
        position: 'Backend .NET',
      },
      {
        name: 'Tatsiana Tovstik',
        img: MemberTovstik,
        linkedin: 'https://www.linkedin.com/in/tatsiana-tovstik-8aa44876/',
        position: 'Backend .NET, CI/CD',
      },
    ],
  },
  {
    id: 1,
    title: 'Human Resources Portal',
    date: 'Aug 2022- Apr 2023',
    description:
      'The client approached us with a requirement to develop a new product for staffing people that would significantly improve the process and take it to a new level of efficiency. Prior to our development, the client managed all their staffing activities using Excel spreadsheets. The solution we were tasked with providing had to enable the client to effortlessly and effectively manage the entire staffing process, freeing them from mundane and labor-intensive tasks.',
    image: GodelHumanResources,
    tags: ['React', 'Context', 'react-hook-form', 'react-testing-library', 'Data visualisation'],
    category: 'web app',
    github: null,
    webapp: null,
    members: [
      {
        name: 'Tatsiana Pilik',
        img: MemberPilik,
        linkedin: 'https://www.linkedin.com/in/tamore/',
        position: 'UX/UI | Product Designer',
      },
      {
        name: 'Piotr Lewandowski',
        img: MemberPiotr,
        linkedin: 'https://www.linkedin.com/in/piotrlewandowskiimmunodesign/',
        position: 'Agile Delivery Coordinator',
      },
      {
        name: 'Veranika Martsinovich',
        img: MemberVeranika,
        linkedin: 'https://www.linkedin.com/in/veranika-martsinovich-292902125/',
        position: 'Software Engineer',
      },
      {
        name: 'Krzysztof Rykowski',
        img: MemberKrzysztof,
        linkedin: 'https://www.linkedin.com/in/krzysztof-rykowski/',
        position: 'Software Engineer',
      },
      {
        name: 'Tatsiana Tovstik',
        img: MemberTovstik,
        linkedin: 'https://www.linkedin.com/in/tatsiana-tovstik-8aa44876/',
        position: 'Software Engineer',
      },
    ],
  },
  {
    id: 2,
    title: 'Form builder for Emergency Desktop App',
    date: 'Sep 2021- Jan 2022',
    description:
      "The Form Builder App represents a comprehensive solution for creating and managing forms, with a focus on user-friendly design, customization options, distribution simplicity, robust analytics, and additional features. The involvement in various tasks, ranging from feature implementation to performance optimization and testing, demonstrates a commitment to enhancing the app's functionality and user experience.",
    image: DashFormBuilder,
    tags: ['React', 'Context', 'Swagger', 'Internationalization', 'Data visualisation'],
    category: 'web app',
    github: null,
    webapp: null,
    members: [
      {
        name: 'Ksenia Bobtsova',
        img: MemberKsenia,
        linkedin: 'https://www.linkedin.com/in/ksenia-bobtsova-124915185/',
        position: 'Software Engineer',
      },
      {
        name: 'Sergey Zhavoronkov',
        img: MemberSergey,
        linkedin: 'https://www.linkedin.com/in/sergey-zhavoronkov/',
        position: 'Project Manager',
      },
    ],
  },
];
