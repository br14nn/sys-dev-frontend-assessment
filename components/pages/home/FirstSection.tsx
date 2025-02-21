"use client";

import Image from "next/image";
import * as m from "motion/react-m";
import { domAnimation, LazyMotion } from "motion/react";
import { Github, Facebook } from "lucide-react";
import Link from "next/link";
import { pfp } from "@/images";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

const FirstSection = () => {
  const MImage = m.create(Image);
  const MButton = m.create(Button);

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="top"
        className="flex min-h-screen w-full items-center justify-center"
      >
        <Container className="min-h-[37.5rem] gap-10 sm:flex-row sm:justify-between sm:gap-0">
          <MImage
            className="w-[15.625rem] select-none sm:w-[15.625rem] md:w-[340px] lg:w-[25rem] xl:w-[450px] 2xl:w-[31.25rem]"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            src={pfp}
            alt="pfp"
            priority
          />
          <div className="flex w-full flex-col items-center gap-2 text-center sm:items-end sm:text-end">
            <m.p
              className="text-xl font-bold text-amber-500 lg:text-2xl xl:text-3xl"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Hello Everyone.
            </m.p>
            <m.h1
              className="text-3xl font-bold sm:text-4xl lg:text-5xl xl:text-6xl"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              I&#39;M BRIAN VITUALLA
            </m.h1>
            <m.p
              className="text-center sm:max-w-[20.625rem] sm:text-justify md:max-w-[20.625rem] lg:max-w-[27.5rem] xl:max-w-[34.375rem]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Aspiring web developer passionate about creating responsive,
              user-friendly websites with clean code and modern design.
            </m.p>
            <div className="mt-4 flex w-full items-center justify-center gap-4 sm:justify-end">
              <MButton
                className="w-[7.5rem] rounded-lg border-white bg-neutral-800 font-bold tracking-wider hover:bg-neutral-700"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                <Link
                  className="flex items-center gap-2"
                  href="https://github.com/br14nn"
                  target="_blank"
                >
                  <Github />
                  Github
                </Link>
              </MButton>
              <MButton
                className="w-[7.5rem] rounded-lg border-white bg-blue-800 font-bold tracking-wider hover:bg-blue-700"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                <Link
                  className="flex items-center gap-2"
                  href="https://www.facebook.com/brianVVitualla/"
                  target="_blank"
                >
                  <Facebook />
                  Facebook
                </Link>
              </MButton>
            </div>
          </div>
        </Container>
      </section>
    </LazyMotion>
  );
};

export default FirstSection;
