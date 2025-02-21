import { domAnimation, LazyMotion } from "motion/react";
import * as m from "motion/react-m";

const FirstSection = () => {
  return (
    <LazyMotion features={domAnimation}>
      <section className="flex min-h-screen w-full items-center justify-center">
        <m.h1
          className="text-3xl font-bold tracking-wider md:text-4xl lg:py-16 lg:text-5xl xl:text-6xl 2xl:text-7xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          MY COLLABORATIONS
        </m.h1>
      </section>
    </LazyMotion>
  );
};

export default FirstSection;
