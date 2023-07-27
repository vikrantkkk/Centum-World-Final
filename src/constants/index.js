import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  manage,
  software
} from "../assets";

import project1 from "../assets/projects/project1.jpg";
import project2 from "../assets/projects/project2.jpg";
import project3 from "../assets/projects/project3.jpg";

export const navLinks = [
  {
    id: "",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "members",
    title: "White Paper",
  },
  {
    id: "Trade Now",
    title: "Trade Now",
  },
];

const services = [
  {
    title:"Advance AI Algorithm",
    icon: manage,
  },
  {
    title:"Quicker Safer With 80% Accuracy",
    icon: software,
  },
  {
    title:"Expert Team with 24/7 Support",
    icon: creator,
  },
  {
    title: "Research and Market Analysis",
    icon: web,
  },
  {
    title: "Trading Execution",
    icon: mobile,
  },
  {
    title: "Charting Analysis Tools",
    icon: backend,
  },
  // {
  //   title: "Risk Management Features",
  //   icon: creator,
  // },
  // {
  //   title:"User Friendly Platform",
  //   icon: web,
  // },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "SEP' 2021",
    company_name: "Tesla",
    // icon: tesla,
    iconBg: "#E6DEDD",
    date: "",
    points: ["CENTUM WORLD SaaS App key EcoSystem . 10+ Unique & Usefull AI Apps"],
  },
  {
    title: "OCT'2021",
    company_name: "Shopify",
    // icon: shopify,
    iconBg: "#383E56",
    date: "",
    points: ["Distribution Management EcoSystem (Knows as DMS)"],
  },
  {
    title: "OCT'21 TO JAN'2022 ",
    company_name: "Meta",
    // icon: meta,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Decentralized Peer to Peer BEP 20 Crypto Asset Known as 'CENTUMO' Token",
    ],
  },
  {
    title: "FEB'2022",
    company_name: "Meta",
    // icon: meta,
    iconBg: "#383E56",
    date: "",
    points: [
      "Begining of a New Era in Digital Crypto Asset. Launch of CENTUMO Token, Liquidity, Smart contracts & Listing on Pancake Swap, Binanace etc.",
    ],
  },
  {
    title: "Q1-Q3 2022",
    company_name: "Meta",
    // icon: meta,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Research & Development on Self Blockchain Technology Platform, Mining & Mint Infrastructure",
    ],
  },
  {
    title: "Q4 2022",
    company_name: "Meta",
    // icon: meta,
    iconBg: "#383E56",
    date: "",
    points: [
      "Launch of New Service, Know as 'SaaS'",
    ],
  },
  {
    title: "2023-2024",
    company_name: "Meta",
    // icon: meta,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Launching of JetTrade FX, NFT"
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Name",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Name",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Name",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Centum SaaS App Key",
    description: "User Friendly AI Apps",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
  },
  {
    name: "Centum Token",
    description: "",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
  },
  {
    name: "Centum Blockchain",
    description: "",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
  },
];

export { services, technologies, experiences, testimonials, projects };
