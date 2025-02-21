"use client";

import Image from "next/image";
import { useEffect } from "react";
import * as m from "motion/react-m";
import { domAnimation, LazyMotion, useAnimate, useInView } from "motion/react";
import { Card, CardContent } from "../ui/card";

import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface TechSkillCardProps {
  title: string;
  description: string;
  imageSrc: string | StaticImport;
  imageAlt: string;
}

const TechSkillCard = ({
  title,
  description,
  imageSrc,
  imageAlt,
}: TechSkillCardProps) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, {
    once: true,
    margin: "0px 0px -80px 0px",
  });

  useEffect(() => {
    if (isInView) {
      animate(scope.current, { opacity: 1, y: 0 }, { duration: 0.3 });
    }
  }, [isInView, animate, scope]);

  return (
    <LazyMotion features={domAnimation}>
      <m.div ref={scope} initial={{ opacity: 0, y: 50 }}>
        <Card className="min-h-[15rem] max-w-[18.75rem] border-none bg-amber-100 shadow-lg xl:max-w-[21.875rem]">
          <CardContent className="flex flex-col gap-4 p-6">
            <div className="mx-auto flex aspect-square w-16 items-center justify-center overflow-hidden rounded-full bg-amber-200">
              <Image src={imageSrc} width={32} height={32} alt={imageAlt} />
            </div>
            <p className="text-md text-center font-bold tracking-wider sm:text-lg md:text-xl">
              {title}
            </p>
            <p className="line-clamp-3 text-justify">{description}</p>
          </CardContent>
        </Card>
      </m.div>
    </LazyMotion>
  );
};

export default TechSkillCard;
