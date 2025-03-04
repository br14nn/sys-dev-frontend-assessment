"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { Menu, X, CodeXml } from "lucide-react/icons";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen((oldVal) => !oldVal);
  };

  return (
    <nav className="fixed z-50 flex w-full items-center justify-center bg-amber-100 shadow-lg">
      <div className="flex w-full items-center justify-between px-4 lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
        <div className="flex w-full items-center sm:justify-between lg:grid lg:grid-cols-4 lg:justify-normal">
          <p className="font-bold">Brian Vitualla</p>
          <div className="hidden grid-cols-3 justify-self-center lg:col-span-2 lg:grid">
            <NavLink className="px-6 py-3 text-center hover:px-6" href="/">
              Home
            </NavLink>
            <NavLink
              className="px-6 py-3 text-center hover:px-6"
              href="/projects"
            >
              Projects
            </NavLink>
            <NavLink
              className="px-6 py-3 text-center hover:px-6"
              href="/collaborations"
            >
              Collaborations
            </NavLink>
          </div>
          <p className="hidden select-none justify-self-end font-bold lg:block">
            <CodeXml />
          </p>
        </div>
        <Button
          className="w-fit p-0 hover:bg-transparent lg:hidden [&_svg]:size-6"
          id="menuOpenButton"
          variant="ghost"
          onClick={handleClick}
        >
          <Menu color="#d97706" />
        </Button>
        {isOpen && (
          <div
            className={
              "fixed inset-0 z-10 h-full max-h-screen w-full bg-neutral-950/50 lg:hidden"
            }
            id="menuBackgroundCloser"
            onClick={handleClick}
          />
        )}
        <div
          className={`fixed right-0 top-0 z-20 flex h-full max-h-screen w-44 flex-col gap-8 bg-amber-100 pt-4 transition-transform duration-300 ease-in-out sm:w-60 lg:hidden ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <Button
            className="mr-3 h-fit w-fit self-end p-0 hover:bg-transparent [&_svg]:size-6"
            id="menuCloseButton"
            variant="ghost"
            onClick={handleClick}
          >
            <X color="#d97706" />
          </Button>
          <div className="flex h-fit w-full flex-col">
            <NavLink href="/" onClick={handleClick}>
              Home
            </NavLink>
            <NavLink href="/projects" onClick={handleClick}>
              Projects
            </NavLink>
            <NavLink href="/collaborations" onClick={handleClick}>
              Collaborations
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ children, className, href = "#", ...props }, ref) => {
    return (
      <Link
        ref={ref}
        className={cn(
          "px-3 py-2 font-bold transition-[colors,_padding,_background-color] duration-300 ease-in-out hover:bg-amber-200 hover:pl-5",
          className,
        )}
        href={href}
        {...props}
      >
        {children}
      </Link>
    );
  },
);

NavLink.displayName = "NavLink";
