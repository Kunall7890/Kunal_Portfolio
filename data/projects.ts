export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
}

export const projects: Project[] = [
  {
    title: 'Resumind AI Resume Analyzer',
    description:
      'An AI-powered resume analysis platform providing ATS scoring, job matching, and real-time feedback using Puter.js for cloud storage.',
    logo: '/logos/resumind.svg',
    link: 'https://github.com/Kunall7890/Resumind-AI',
    slug: 'resumind-ai',
  },
  {
    title: 'Figma Clone - Collaborative Design Tool',
    description:
      'A real-time collaborative design canvas with live multiplayer capabilities, shape creation, drawing tools, and Liveblocks integration.',
    logo: '/logos/figma-clone.svg',
    link: 'https://github.com/Kunall7890/figma-clone',
    slug: 'figma-clone',
  },
  {
    title: 'GSAP Cocktail Website',
    description:
      'An interactive, animation-rich cocktail website featuring scroll-driven animations, parallax effects, and custom animated carousel.',
    logo: '/logos/gsap-cocktail.svg',
    link: 'https://github.com/Kunall7890/gsap-cocktail',
    slug: 'gsap-cocktail',
  },
  {
    title: 'Bill Generator',
    description:
      'A custom bill generator web application for streamlining invoice creation with automated features and PDF export functionality.',
    logo: '/logos/bill-generator.svg',
    link: 'https://github.com/Kunall7890/bill-generator',
    slug: 'bill-generator',
  },
];
