import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex w-full max-w-screen-sm flex-col items-center justify-center px-2 sm:px-4 md:max-w-screen-md md:px-8 lg:max-w-screen-lg lg:px-10 xl:max-w-screen-xl xl:px-20 2xl:max-w-screen-2xl 2xl:px-40",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

export { Container };
