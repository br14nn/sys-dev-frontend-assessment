import { Button } from "@/components/ui/button";
import pfp from "@/images/pfp.png";
import Image from "next/image";
import { Github, Facebook } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="flex min-h-screen w-full snap-center items-center justify-center">
        <div className="flex min-h-[37.5rem] w-full max-w-screen-sm flex-col items-center justify-center gap-10 p-2 sm:flex-row sm:justify-between sm:gap-0 sm:p-4 md:max-w-screen-md md:p-8 lg:max-w-screen-lg lg:p-10 xl:max-w-screen-xl xl:p-20 2xl:max-w-screen-2xl 2xl:p-40">
          <Image
            className="w-[15.625rem] select-none sm:w-[15.625rem] md:w-[340px] lg:w-[28.125rem] xl:w-[31.25rem] 2xl:w-[34.375rem]"
            src={pfp}
            alt="pfp"
            priority
          />
          <div className="flex w-full flex-col items-center gap-2 text-center sm:items-end sm:text-end">
            <h2 className="text-xl font-bold text-amber-500 lg:text-2xl xl:text-3xl">
              Hello Everyone.
            </h2>
            <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl xl:text-6xl">
              I'M BRIAN VITUALLA
            </h1>
            <p className="text-center sm:max-w-[20.625rem] sm:text-justify md:max-w-[20.625rem] lg:max-w-[27.5rem] xl:max-w-[34.375rem]">
              Aspiring web developer passionate about creating responsive,
              user-friendly websites with clean code and modern design.
            </p>
            <div className="mt-4 flex w-full items-center justify-center gap-4 sm:justify-end">
              <Button className="w-[7.5rem] rounded-lg border-white bg-neutral-800 font-bold tracking-wider hover:bg-neutral-700">
                <Link
                  className="flex items-center gap-2"
                  href="https://github.com/br14nn"
                  target="_blank"
                >
                  <Github />
                  Github
                </Link>
              </Button>
              <Button className="w-[7.5rem] rounded-lg border-white bg-blue-800 font-bold tracking-wider hover:bg-blue-700">
                <Link
                  className="flex items-center gap-2"
                  href="https://www.facebook.com/brianVVitualla/"
                  target="_blank"
                >
                  <Facebook />
                  Facebook
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="flex min-h-screen w-full snap-center items-center justify-center bg-sky-200">
        <div className="flex min-h-[37.5rem] w-full max-w-screen-sm flex-col items-center justify-center p-2 sm:p-4 md:max-w-screen-md md:p-8 lg:max-w-screen-lg lg:p-10 xl:max-w-screen-xl xl:p-20 2xl:max-w-screen-2xl 2xl:p-40"></div>
      </section>
    </>
  );
}
