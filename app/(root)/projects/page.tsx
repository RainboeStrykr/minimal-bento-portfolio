"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function ProjectDisplay() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  const router = useRouter();

  const navigate = () => {
    router.push("/"); // Replace '/your-page' with the route you want to navigate to
  };

  return (
    <div className="w-full  relative z-50 ">
      <Button
        onClick={() => navigate()}
        className="mx-3 bg-white dark:bg-white hover:bg-white/70"
      >
        <ArrowLeft className="text-zinc-700 dark:text-dark-1 " />
      </Button>
      {/* <h2 className="pl-4 mx-auto text-xl md:text-5xl font-bold dark:text-neutral-800 text-neutral-200 font-sans">
        Take a look at my Work
      </h2> */}
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: "SaaS Platform",
    title: "TaskFlow Pro",
    src: "/assets/nxttp.webp",
    link: "https://example.com/taskflow",
    github: "https://github.com/demo/taskflow-pro",
    tags: ["Next.js", "PostgreSQL", "Prisma", "Tailwindcss", "Shadcn/ui"],
    content: <></>,
  },
  {
    category: "Marketing Website",
    title: "Aurora Studio",
    src: "/assets/project1.png",
    link: "https://example.com/aurora",
    github: "https://github.com/demo/aurora-studio",
    tags: ["Next.js", "Framer-Motion", "Shadcn/ui", "Tailwindcss"],
    content: <></>,
  },
  {
    category: "AI Image Generator",
    title: "PixelForge AI",
    src: "/assets/griddyy.png",
    link: "https://example.com/pixelforge",
    github: "https://github.com/demo/pixelforge-ai",
    tags: ["Turborepo", "Cloudflare Workers", "Hono", "TanstackQuery", "Supabase", "Next.js"],
    content: <></>,
  },
  {
    category: "Social Photo Sharing",
    title: "SnapCircle",
    src: "/assets/socialzz.png",
    link: "https://example.com/snapcircle",
    github: "https://github.com/demo/snapcircle",
    tags: ["Vite", "Tailwindcss", "Shadcn/ui", "TanstackQuery", "Appwrite"],
    content: <></>,
  },
  {
    category: "Survey & Analytics",
    title: "FormPulse",
    src: "/assets/project2.png",
    link: "https://example.com/formpulse",
    github: "https://github.com/demo/formpulse",
    tags: ["Next.js", "MongoDB", "Tailwindcss", "Shadcn/ui", "Clerk"],
    content: <></>,
  },
];
