import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Collabs | Brian Vitualla",
  description: "Collaborations page of Brian Vitulla's portfolio website",
};

export default function CollaborationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
