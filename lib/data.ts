import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import corpcommentImg from '@/public/corpcomment.png';
import rmtdevImg from '@/public/rmtdev.png';
import wordanalyticsImg from '@/public/wordanalytics.png';

export const links = [
    {
        name: 'Home',
        hash: '#home',
    },
    {
        name: 'About',
        hash: '#about',
    },
    {
        name: 'Projects',
        hash: '#projects',
    },
    {
        name: 'Skills',
        hash: '#skills',
    },
    {
        name: 'Experience',
        hash: '#experience',
    },
    {
        name: 'Contact',
        hash: '#contact',
    },
] as const;

export const experiencesData = [
    {
        title: 'Full Stack Software Programmer',
        location: 'Hyperion',
        description:
            'Contributing to a digital services platform for social media content and publishing. Leading frontend architecture refactoring initiatives and implementing key features while collaborating with QA to maintain quality standards.',
        icon: React.createElement(CgWorkAlt),
        date: 'Sept 2025 - present',
    },
    {
        title: 'Fullstack Developer',
        location: 'FullStackHQ',
        description:
            'Led the architecture and development of a monolithic email client using DDD, Hexagonal Architecture, CQRS, and Event-Driven principles. Delivered full-stack features with React (Atomic Design, Redux) and Node.js. Set up scalable DevOps environments using Docker, Linux, and Coolify while handling code reviews and R&D for third-party integrations.',
        icon: React.createElement(CgWorkAlt),
        date: 'Sept 2024 - Sept 2025',
    },
    {
        title: 'System Developer',
        location: 'Sta Mesa Manila',
        description:
            'I worked as a System Developer for 2 years. I also upskilled to the full stack.',
        icon: React.createElement(CgWorkAlt),
        date: 'Nov 2023 - Sept 2024',
    },
    {
        title: 'Graduated KodeGo Bootcamp',
        location: 'Philippines',
        description: 'I graduated after 3 months of studying full-stack web development',
        icon: React.createElement(LuGraduationCap),
        date: '2023',
    },
    {
        title: 'Graduated Bachelors Degree',
        location: 'Ama Computer College',
        description: 'I graduated after 4 years of studying..',
        icon: React.createElement(LuGraduationCap),
        date: '2020 - 2022',
    },
] as const;

export const projectsData = [
    {
        title: 'CorpComment',
        description:
            'I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.',
        tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
        imageUrl: corpcommentImg,
    },
    {
        title: 'rmtDev',
        description:
            'Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.',
        tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
        imageUrl: rmtdevImg,
    },
    {
        title: 'Word Analytics',
        description:
            'A public web app for quick analytics on text. It shows word count, character count and social media post limits.',
        tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
        imageUrl: wordanalyticsImg,
    },
] as const;

export const skillsData = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Angular',
    'Redux',
    'RxJS',
    'Tailwind CSS',
    'Material UI',
    'Node.js',
    'Express',
    'NestJS',
    'PHP',
    'Laravel',
    'PostgreSQL',
    'MySQL',
    'MongoDB',
    'Prisma',
    'Docker',
    'Linux',
    'Git',
    'CI/CD',
    'Jest',
    'DDD',
    'CQRS',
    'Hexagonal Architecture',
] as const;
