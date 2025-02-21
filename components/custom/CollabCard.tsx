"use client";

import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import Link from "next/link";
import { Mail } from "lucide-react";
import { Button } from "../ui/button";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { domAnimation, LazyMotion, useInView, useAnimate } from "motion/react";
import * as m from "motion/react-m";
import { useEffect } from "react";

interface CollabCardProps {
  collaberPFP: string | StaticImport;
  imageAlt: string;
  collaberID: string | number;
  collaberFirstname: string;
  collaberLastname: string;
  collaberEmail: string;
}

const CollabCard = ({
  collaberPFP,
  imageAlt,
  collaberID,
  collaberFirstname,
  collaberLastname,
  collaberEmail,
}: CollabCardProps) => {
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
        <Card className="w-full border-none bg-amber-100 shadow-lg">
          <CardContent className="flex items-start gap-4 p-6">
            <Image
              className="aspect-square rounded-md"
              src={collaberPFP}
              width={64}
              height={64}
              alt={imageAlt}
            />
            <div className="flex flex-grow flex-col gap-2 overflow-hidden">
              <div className="grid w-full grid-cols-3 gap-4">
                <p className="w-full font-bold">ID: {collaberID}</p>
                <p className="col-span-2 w-full truncate text-end font-bold">
                  {collaberFirstname} {collaberLastname}
                </p>
              </div>
              <p className="line-clamp-2 text-justify">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad,
                corporis.
              </p>
              <Button
                className="mt-auto w-full max-w-full flex-initial overflow-hidden bg-amber-400 font-bold text-neutral-950 hover:bg-amber-500"
                asChild
              >
                <Link
                  className="flex w-full items-center justify-center gap-2"
                  href={`mailto:${collaberEmail}`}
                  title={collaberEmail}
                >
                  <Mail />
                  <p className="truncate">{collaberEmail}</p>
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </m.div>
    </LazyMotion>
  );
};

export default CollabCard;
