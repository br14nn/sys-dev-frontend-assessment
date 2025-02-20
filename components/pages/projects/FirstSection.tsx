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
      <section className="flex min-h-screen w-full items-start justify-center py-9 lg:py-12">
        <Container>
          <m.h1
            ref={scope}
            className="py-8 text-xl font-bold tracking-wider sm:text-2xl md:text-3xl lg:py-16"
            initial={{ opacity: 0, y: 50 }}
          >
            PROJECTS PAGE
          </m.h1>
          <div className="grid w-full max-w-[300px] grid-cols-1 gap-8 sm:max-w-none sm:grid-cols-2">
            <ProjectCard
              projectImage={fruitopia_project}
              imageAlt="Fruitopia project"
              projectTitle="Fruitopia"
              projectWebsite="https://fruitopia-bvv.vercel.app/"
              projectCode="https://github.com/br14nn/fruitopia-frontend.git"
            />
            <ProjectCard
              projectImage={rps_project}
              imageAlt="Rock Paper Scissors project"
              projectTitle="Rock Paper Scissors Game (Frontend Mentor)"
              projectWebsite="https://bvv-rock-paper-scissors-six.vercel.app/"
              projectCode="https://github.com/br14nn/rock-paper-scissors.git"
            />
            <ProjectCard
              projectImage={clothing_store_project}
              imageAlt="Clothing store project"
              projectTitle="Clothing Shop (Frontend Only)"
              projectWebsite="https://citrus-clothing.netlify.app/"
              projectCode="https://github.com/br14nn/citrus-clothing-website.git"
            />
            <ProjectCard
              projectImage={room_homepage_project}
              imageAlt="Room Homepage Project"
              projectTitle="Room Homepage (Frontend Mentor)"
              projectWebsite="https://room-homepage-frontend-mentor-bvv.vercel.app/"
              projectCode="https://github.com/br14nn/room-homepage.git"
            />
          </div>
        </Container>
      </section>
    </LazyMotion>
  );
};

export default FirstSection;
