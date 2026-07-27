import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected work and projects by Deehan Paul — web apps, AI tools, and full-stack platforms built with Next.js, TypeScript, and modern design systems.",
  openGraph: {
    title: "Projects | Deehan Paul",
    description:
      "Selected work and projects by Deehan Paul — web apps, AI tools, and full-stack platforms.",
    images: ["/assets/deehan.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Deehan Paul",
    description:
      "Selected work and projects by Deehan Paul — web apps, AI tools, and full-stack platforms.",
    images: ["/assets/deehan.jpg"],
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
