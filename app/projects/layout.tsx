import { Metadata } from "next";

export const metada: Metadata = {
  title: "Projects | Brian Vitualla",
  description: "Projects page of Brian Vitualla's portfolio website",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
