"use client";

import * as m from "motion/react-m";
import { LazyMotion, domAnimation, useInView, useAnimate } from "motion/react";
import { Container } from "@/components/ui/container";
import { useEffect } from "react";
import TechSkillCard from "@/components/custom/TechSkillCard";
import {
  typescript_logo,
  nextjs_logo,
  tailwindcss_logo,
  nestjs_logo,
  prisma_logo,
  supabase_logo,
} from "@/images";

const SecondSection = () => {
  const [h2Scope, h2Animate] = useAnimate();
  const h2IsInView = useInView(h2Scope, {
    once: true,
  });

  useEffect(() => {
    if (h2IsInView) {
      h2Animate(h2Scope.current, { opacity: 1, y: 0 }, { duration: 0.3 });
    }
  }, [h2IsInView, h2Scope, h2Animate]);

  return (
    <section className="flex h-fit w-full items-start justify-center bg-sky-200">
      <LazyMotion features={domAnimation}>
        <Container className="justify-start px-4 pb-8 md:pb-16">
          <m.h2
            ref={h2Scope}
            initial={{ opacity: 0, y: 50 }}
            className="py-8 text-xl font-bold tracking-wider sm:text-2xl md:py-16 md:text-3xl"
          >
            TECH SKILLS
          </m.h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
            <TechSkillCard
              title="Typescript"
              description="TypeScript is a statically typed superset of JavaScript that improves code quality and maintainability."
              imageSrc={typescript_logo}
              imageAlt="Typescript Logo"
            />
            <TechSkillCard
              title="NextJS"
              description="Next.js is a React framework for fast, scalable web apps with SSR and static generation."
              imageSrc={nextjs_logo}
              imageAlt="NextJS Logo"
            />
            <TechSkillCard
              title="TailwindCSS"
              description="Tailwind CSS is a utility-first framework for quick, customizable styling using pre-built classes."
              imageSrc={tailwindcss_logo}
              imageAlt="TailwindCSS Logo"
            />
            <TechSkillCard
              title="NestJS"
              description="NestJS is a TypeScript-based framework for building scalable, efficient Node.js server applications."
              imageSrc={nestjs_logo}
              imageAlt="NestJS Logo"
            />
            <TechSkillCard
              title="Prisma"
              description="Prisma ORM is a TypeScript and Node.js toolkit for easy database access and schema management."
              imageSrc={prisma_logo}
              imageAlt="Prisma Logo"
            />
            <TechSkillCard
              title="Supabase"
              description="Supabase is an open-source backend service offering real-time databases, authentication, and storage."
              imageSrc={supabase_logo}
              imageAlt="Supabase Logo"
            />
          </div>
        </Container>
      </LazyMotion>
    </section>
  );
};

export default SecondSection;
