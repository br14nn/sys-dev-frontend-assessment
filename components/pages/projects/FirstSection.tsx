"use client";

import { useEffect } from "react";
import * as m from "motion/react-m";
import { LazyMotion, domAnimation, useAnimate, useInView } from "motion/react";
import ProjectCard from "@/components/custom/ProjectCard";
import { Container } from "@/components/ui/container";
import {
  fruitopia_project,
  rps_project,
  clothing_store_project,
  room_homepage_project,
} from "@/images";

const FirstSection = () => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });

  useEffect(() => {
    if (isInView) {
      animate(scope.current, { opacity: 1, y: 0 }, { duration: 0.3 });
    }
  }, [isInView]);

  return (
    <LazyMotion features={domAnimation}>
      <section className="flex min-h-screen w-full items-center justify-center py-9 lg:py-12">
        <Container>
          <m.h1
            ref={scope}
            className="text-3xl font-bold tracking-wider md:text-4xl lg:py-16 lg:text-5xl xl:text-6xl 2xl:text-7xl"
            initial={{ opacity: 0, y: 50 }}
          >
            MY PROJECTS
          </m.h1>
        </Container>
      </section>
    </LazyMotion>
  );
};

export default FirstSection;
