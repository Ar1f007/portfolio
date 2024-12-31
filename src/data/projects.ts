import { css, scss, react, js, firebase, tailwindcss, nodejs, bootstrap, nextjs, nextui, typescript, shadcn, mongodb, ProjectStack, clerk } from './stack';

export interface Project {
  id: string;
  projectTitle: string;
  stack: ProjectStack[];
  briefDesc: string;
  img: string;
  previewUrl: string;
  detailsUrl: string;
  sort: number;
}

export const projectList: Project[] = [

  {
    id: 'gari_chai',
    projectTitle: 'garichai',
    stack: [typescript, nextjs, nextui, shadcn, nodejs, mongodb],
    briefDesc: 'A platform for discovering and purchasing cars with curated selections',
    // img: 'https://res.cloudinary.com/dv3wezqsc/image/upload/v1728937920/Gari-Chai-10-15-2024_02_28_AM_1_fbwgxb.png',
    img: 'https://res.cloudinary.com/dv3wezqsc/image/upload/v1735626134/Portfolio/garichai_sratyb.png',
    previewUrl: 'https://www.garichaibd.com',
    detailsUrl: "garichai",
    sort: 0,
  },

  {
    id: 'xen_furniture_1',
    projectTitle: 'xenFurniture',
    stack: [react, tailwindcss, nodejs, firebase],
    briefDesc: 'A full-stack B2B manufacturer website to purchase furnitures',
    // img: 'https://res.cloudinary.com/dv3wezqsc/image/upload/v1728939278/xenFurniture-10-15-2024_02_53_AM-min.png',
    img: 'https://res.cloudinary.com/dv3wezqsc/image/upload/v1735626824/Portfolio/xen-furniture_vcjdxt.png',
    previewUrl: 'https://xen-furni.vercel.app/',
    detailsUrl: "",
    sort: 0,
  },

  {
    id: 'urban_nest_1',
    projectTitle: 'urban_nest',
    stack: [typescript, nextjs, shadcn, clerk, nodejs, mongodb],
    briefDesc: 'Discover, list, and bid on real estate. Connect with buyers and sellers effortlessly',
    img: 'https://res.cloudinary.com/dv3wezqsc/image/upload/v1735626279/Portfolio/urban-nest_asxagm.png',
    previewUrl: 'https://www.garichaibd.com',
    detailsUrl: "",
    sort: 0,
  },

  {
    id: 'zenFitness_2',
    projectTitle: 'zenFitness',
    stack: [react, tailwindcss, nodejs, firebase],
    briefDesc: 'An inventory management website where user can manage products, view details, update stock and do lot more',
    img: 'https://res.cloudinary.com/dv3wezqsc/image/upload/v1656271493/Portfolio/zenFitness_s7dck1.png',
    previewUrl: 'https://zenfitness-46154.web.app/',
    detailsUrl: "https://github.com/Ar1f007/zenFitness-client?tab=readme-ov-file#zen-fitness",
    sort: 0,
  },

  {
    id: 'phoneFinder_3',
    projectTitle: 'phoneFinder',
    stack: [js],
    briefDesc: 'An API project about finding phone by searching and reading details',
    img: 'https://res.cloudinary.com/dv3wezqsc/image/upload/v1656452286/Portfolio/phoneFinder_iemce6.png',
    previewUrl: 'https://phone-finder-007.netlify.app/',
    detailsUrl: "https://github.com/Ar1f007/phone-finder?tab=readme-ov-file#phone-finder",
    sort: 0,
  },

  {
    id: 'fm_4',
    projectTitle: 'frontend_mentor_challenges',
    stack: [css, scss],
    briefDesc: 'List of frontend mentor challenges I have solved.',
    img: 'https://res.cloudinary.com/dv3wezqsc/image/upload/v1656453956/Portfolio/Frontend-Mentor-Challenges_gamqh7.png',
    previewUrl: 'https://frontend-mentor-challanges.netlify.app/',
    detailsUrl: "https://github.com/Ar1f007/frontend-mentor-challenges?tab=readme-ov-file#frontend-mentor-challenges",
    sort: 0,
  },

  {
    id: 'fm_tips-calculator_5',
    projectTitle: 'splitter',
    stack: [js],
    briefDesc: 'Calculate the correct tip and total cost of the bill per person',
    img: 'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/hxkpctp6cd1meeytfdl2.jpg',
    previewUrl: 'https://fmentor-tip-calculator-app.vercel.app/',
    detailsUrl: "",
    sort: 0,
  },

  {
    id: 'fm_foyla_6',
    projectTitle: 'fylo_dark_theme_landing_page',
    stack: [scss],
    briefDesc: 'A landing page made using flexbox and scss',
    img: 'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/mhwyzwfgaii3cw5s6jco.jpg',
    previewUrl: 'https://fmentor-fylo-dark-theme-landing-page.vercel.app/',
    detailsUrl: "",
    sort: 0,
  },

  {
    id: 'eurasia_7',
    projectTitle: 'eurasia',
    stack: [css],
    briefDesc: 'A figma to html conversion design',
    img: 'https://res.cloudinary.com/dv3wezqsc/image/upload/v1656456024/Portfolio/Eurasia_iqx0wd.png',
    previewUrl: 'https://eurasia.netlify.app/',
    detailsUrl: "",
    sort: 0,
  },

  {
    id: 'unlens_8',
    projectTitle: 'unLens',
    stack: [react, firebase, tailwindcss],
    briefDesc: 'Photography as a service website. Practice project for implementing protected routing and authentication',
    img: 'https://res.cloudinary.com/dv3wezqsc/image/upload/v1656456328/Portfolio/Unlens_ofg2a6.png',
    previewUrl: 'https://unlens.web.app/',
    detailsUrl: "https://github.com/Ar1f007/unLens?tab=readme-ov-file#unlens",
    sort: 0,
  },

  {
    id: 'budgetCheck_9',
    projectTitle: 'budgetCheck',
    stack: [js],
    briefDesc: 'JS practice project about income/expense calculation focusing on DOM manipulation, error handling.',
    img: 'https://res.cloudinary.com/dv3wezqsc/image/upload/v1656483781/Portfolio/BudgetCheck_zoqhta.png',
    previewUrl: 'https://budget-check.netlify.app/',
    detailsUrl: "https://github.com/Ar1f007/Budget-checker?tab=readme-ov-file#money-master-assignment",
    sort: 0,
  },

  {
    id: 'plantastic_10',
    projectTitle: 'plantastic_event_agency',
    stack: [css, bootstrap],
    briefDesc: 'Landing page for event management organization',
    img: 'https://res.cloudinary.com/dv3wezqsc/image/upload/v1656484151/Portfolio/plantastic-event-agency_qzv5du.png',
    previewUrl: 'https://plantastic-event-agency.netlify.app/',
    detailsUrl: "https://github.com/Ar1f007/plantastic-event-agency?tab=readme-ov-file#convention-center-assignment",
    sort: 0,
  },

  {
    id: 'influencer_11',
    projectTitle: 'influencer_products',
    stack: [css],
    briefDesc: 'A product landing page',
    img: 'https://res.cloudinary.com/dv3wezqsc/image/upload/v1656484285/Portfolio/influencer-gear_ynaim5.png',
    previewUrl: 'https://ar1f007.github.io/influencer-gear-landing-page/',
    detailsUrl: "",
    sort: 0,
  },
];
