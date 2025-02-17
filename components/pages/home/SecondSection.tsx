"use client";

import * as m from "motion/react-m";
import { LazyMotion, domAnimation, useInView, useAnimate } from "motion/react";
import { Container } from "@/components/ui/container";
import { useEffect, useRef } from "react";

const SecondSection = () => {
  const [h2Scope, h2Animate] = useAnimate();
  const h2IsInView = useInView(h2Scope, {
    once: true,
  });

  useEffect(() => {
    if (h2IsInView) {
      h2Animate(h2Scope.current, { opacity: 1, y: 0 }, { duration: 0.3 });
    }
  }, [h2IsInView]);

  return (
    <section className="flex h-fit w-full items-start justify-center bg-sky-200">
      <LazyMotion features={domAnimation}>
        <Container className="justify-start px-4 py-8">
          <m.h2
            ref={h2Scope}
            initial={{ opacity: 0.5, y: 50 }}
            className="text-xl font-bold tracking-wider sm:text-2xl md:text-3xl"
          >
            TECH SKILLS
          </m.h2>
        </Container>
      </LazyMotion>
    </section>
  );
};

export default SecondSection;
