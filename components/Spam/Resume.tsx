"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Resume = () => {
  return (
    <>
      <Link
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="sm:col-start-4 sm:col-end-6 sm:row-start-1 sm:row-end-4 relative border border-zinc-700/20 rounded-3xl max-sm:h-[400px] block overflow-hidden group transition-all duration-300 hover:opacity-90"
      >
        <Image
          src="/assets/resume.png"
          alt="Resume"
          width={1024}
          height={1024}
          className="object-cover size-full rounded-3xl"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-3xl flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-mono text-sm bg-black/50 px-4 py-2 rounded-xl backdrop-blur-sm">
            View Resume
          </span>
        </div>
      </Link>

      <div className="sm:col-start-4 sm:col-end-6 sm:row-start-4 sm:row-end-5">
        <div className="p-0 flex flex-col justify-start h-full px-1 items-end overflow-hidden">
          <p className="font-mono text-xs line-clamp-1 text-zinc-200 dark:text-dark-4">
            <span className="text-zinc-500 dark:text-zinc-600">
              click to open:
            </span>{" "}
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline decoration-1 underline-offset-2"
            >
              resume.pdf
            </Link>
          </p>
          <p className="font-mono text-[0.6rem] text-end line-clamp-1 text-wrap text-zinc-300 dark:text-dark-4">
            Deehan Paul | Last updated 2026
          </p>
        </div>
      </div>
    </>
  );
};

export default Resume;
