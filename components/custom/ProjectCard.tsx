"use client";

import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";
import { Globe, Code } from "lucide-react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import * as m from "motion/react-m";
import { LazyMotion, domAnimation, useInView, useAnimate } from "motion/react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";

interface ProjectCardProps {
  projectImage: string | StaticImport;
  imageAlt: string;
  projectTitle: string;
  projectWebsite: string;
  projectCode: string;
}

const ProjectCard = ({
  projectImage,
  imageAlt,
  projectTitle,
  projectWebsite,
  projectCode,
}: ProjectCardProps) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, {
    once: true,
    margin: "0px 0px -80px 0px",
  });

  useEffect(() => {
    if (isInView) {
      animate(scope.current, { opacity: 1, y: 0 }, { duration: 0.3 });
    }
  }, [isInView]);

  return (
    <LazyMotion features={domAnimation}>
      <m.div ref={scope} initial={{ opacity: 0, y: 50 }}>
        <Card className="flex flex-col overflow-hidden border-none bg-sky-200 shadow-lg">
          <CardContent className="flex flex-col gap-4 p-6">
            <Image
              className="aspect-[2/1] w-full rounded-md bg-neutral-50 object-cover"
              src={projectImage}
              alt={imageAlt}
            />
            <p
              className="sm line-clamp-1 text-center text-lg font-bold tracking-wider md:text-xl"
              title={projectTitle}
            >
              {projectTitle}
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Button
                className="bg-amber-200 text-neutral-950 hover:bg-amber-300"
                asChild
              >
                <Link
                  className="flex items-center gap-2"
                  href={projectWebsite}
                  target="_blank"
                >
                  <Globe />
                  Website
                </Link>
              </Button>
              <Button
                className="bg-amber-200 text-neutral-950 hover:bg-amber-300"
                asChild
              >
                <Link
                  className="flex items-center gap-2"
                  href={projectCode}
                  target="_blank"
                >
                  <Code />
                  Source
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </m.div>
    </LazyMotion>
  );
};

export default ProjectCard;
