import { ReactNode } from 'react';
import { DiReact, DiJavascript1, DiCss3, DiSass } from 'react-icons/di';
import { FaNodeJs } from 'react-icons/fa';
import { RiNextjsFill } from "react-icons/ri";
import { SiFirebase, SiTailwindcss, SiBootstrap, SiNextui, SiTypescript, SiShadcnui, SiMongodb } from "react-icons/si";

export interface ProjectStack {
  icon: ReactNode;
  title: string;
  sort: number;
}

export const js = {
  icon: <DiJavascript1 color="#F7DF1E" />,
  title: 'js',
  sort: 0
};

export const css = { icon: <DiCss3 color="#009BDD" />, title: 'css', sort: 0 };
export const scss = { icon: <DiSass color="#C76395" />, title: 'scss', sort: 0 };
export const bootstrap = { icon: <SiBootstrap color="#7211F5" />, title: 'bootstrap', sort: 0 };
export const react = { icon: <DiReact color="#56D2F3" />, title: 'react', sort: 0 };
export const firebase = { icon: <SiFirebase color="F58511" />, title: 'firebase', sort: 0 };
export const tailwindcss = { icon: <SiTailwindcss color="#36B7F0" />, title: 'tailwindcss', sort: 0 };
export const nodejs = { icon: <FaNodeJs color="#588560" />, title: 'nodejs', sort: 0 };
export const nextjs = { icon: <RiNextjsFill color="#fff" />, title: 'nextjs', sort: 0 }
export const nextui = { icon: <SiNextui color="#0072F5" />, title: 'nextui', sort: 0 }
export const typescript = { icon: <SiTypescript color="#007ACC" />, title: 'typescript', sort: 0 }
export const shadcn = { icon: <SiShadcnui color="#ddd" />, title: 'shadcnui', sort: 0 }
export const mongodb = { icon: <SiMongodb color="#4DB33D" />, title: 'mongodb', sort: 0 };


export const stackList: ProjectStack[] = [typescript, react, nextjs, nodejs, mongodb, tailwindcss, firebase, nextui, shadcn, scss, css, js, bootstrap];
