import type { Metadata } from "next";
import Grid from "@/components/Grid";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Deehan Paul — Full-stack developer & designer based in Bhubaneshwar, India. Building modern web experiences with Next.js, TypeScript, Framer Motion, and more.",
  openGraph: {
    title: "Deehan Paul — Portfolio",
    description:
      "Deehan Paul — Full-stack developer & designer based in Bhubaneshwar, India. Building modern web experiences with Next.js, TypeScript, and Framer Motion.",
    images: ["/assets/deehan.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deehan Paul — Portfolio",
    description:
      "Deehan Paul — Full-stack developer & designer based in Bhubaneshwar, India.",
    images: ["/assets/deehan.jpg"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function Page() {
  return (
    <Grid />
  );
}
