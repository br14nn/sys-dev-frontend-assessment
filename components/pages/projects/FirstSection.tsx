"use client";

import * as m from "motion/react-m";
import { LazyMotion, domAnimation } from "motion/react";
import { Container } from "@/components/ui/container";

const FirstSection = () => {
  return (
    <LazyMotion features={domAnimation}>
      <section className="flex min-h-screen w-full items-center justify-center py-9 lg:py-12">
        <Container>
          <m.h1
            className="text-3xl font-bold tracking-wider md:text-4xl lg:py-16 lg:text-5xl xl:text-6xl 2xl:text-7xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            MY PROJECTS
          </m.h1>
        </Container>
      </section>
    </LazyMotion>
  );
};

export default FirstSection;
