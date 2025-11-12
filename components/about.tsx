'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
    const { ref } = useSectionInView('About');

    return (
        <motion.section
            ref={ref}
            className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <SectionHeading>About me</SectionHeading>

            <p className="mb-3">
                After graduating with a degree in{' '}
                <span className="font-medium">Information Technology</span>, I decided to further my
                programming skills by enrolling in a{' '}
                <span className="font-medium">3-month full-stack web development bootcamp</span>,
                where I graduated as the <span className="font-medium">top student</span>. My core
                stack includes{' '}
                <span className="font-medium">React, Express, Angular, and Nest</span>.{' '}
                <span className="italic">I am passionate about programming</span>, especially the
                problem-solving aspect, and I <span className="underline">enjoy</span> the
                satisfaction of finding solutions to challenging problems.
            </p>

            <p>
                <span className="italic">In my free time</span>, I love binge-watching{' '}
                <span className="font-medium">cybersecurity or networking content</span> and reading
                books about programming, such as <span className="font-medium">"Clean Code"</span>,{' '}
                <span className="font-medium">"Domain-Driven Design" by Eric Evans</span>,{' '}
                <span className="font-medium">"Design Patterns"</span>, and{' '}
                <span className="font-medium">"The Pragmatic Programmer"</span>. I also enjoy reading
                articles on <span className="font-medium">Medium and other tech sites</span> to stay
                updated with the latest trends and best practices. I am always eager to learn new
                technologies and expand my knowledge. Currently, I am seeking a{' '}
                <span className="font-medium">full-time position</span> as a software developer.
            </p>

            <p>
                <span className="italic">Outside of coding</span>, I enjoy watching movies and
                animes, reading manga. I also have a keen interest in{' '}
                <span className="font-medium">learning new things</span>, such as history and I'm
                currently teaching myself how to play the guitar.
            </p>
        </motion.section>
    );
}
