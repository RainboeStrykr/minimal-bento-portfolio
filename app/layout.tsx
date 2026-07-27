
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { cn } from "@/lib/utils";
import { Space_Grotesk } from "next/font/google";
import GridPattern from "@/components/magicui/animated-grid-pattern";
import { Analytics } from "@vercel/analytics/next";
import Clouds from "@/components/ui/Clouds";

const Glancyr = localFont({
  src: "./fonts/glancyr.ttf",
  variable: "--font-glancyr",
  weight: "100 900",
});

const Glancyr700 = localFont({
  src: "./fonts/glancyr700.ttf",
  variable: "--font-glancyr700",
  weight: "100 900",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spaceGrotesk",
});

export const metadata: Metadata = {
  title: {
    default: "Deehan Paul — Portfolio",
    template: "%s | Deehan Paul",
  },
  description: "Deehan Paul — Full-stack developer building modern and end-to-end experiences.",
  metadataBase: new URL('https://deehan.vercel.app/'),
  authors: [{ name: "Deehan Paul" }],
  keywords: [
    "Deehan Paul",
    "Deehan Paul portfolio",
    "portfolio",
    "portfolio website",
    "minimal portfolio",
    "animated portfolio",
    "Framer Motion portfolio",
    "minimalist web portfolio",
    "animated portfolio website",
    "modern web design portfolio",
    "clean and minimal portfolio",
    "smooth animations portfolio",
    "portfolio with animations",
    "minimal design portfolio",
    "modern portfolio website",
    "Framer Motion animations",
    "elegant portfolio design",
    "interactive portfolio website",
    "minimal interactive portfolio",
    "Next.js developer",
    "TypeScript developer India",
  ],
  creator: "Deehan Paul",
  publisher: "Deehan Paul",
  category: "Creative Portfolio",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://deehan.vercel.app/",
    title: "Deehan Paul — Portfolio",
    description: "Deehan Paul — Full-stack developer building modern and end-to-end experiences.",
    siteName: "Deehan Paul",
    images: [
      {
        url: "/assets/deehan.jpg",
        width: 1200,
        height: 630,
        alt: "Deehan Paul — Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deehan Paul — Portfolio",
    description: "Deehan Paul — Full-stack developer & designer building modern, animated web experiences with Next.js, TypeScript, and Framer Motion.",
    images: ["/assets/deehan.jpg"],
    creator: "@DeehanPaul123",
    site: "@DeehanPaul123",
  },
  alternates: {
    canonical: "https://deehan.vercel.app/",
  },
  icons: [
    { rel: "icon", url: "/favicon/favicon.ico" },
    {
      rel: "icon",
      url: "/favicon/favicon-16x16.png",
      sizes: "16x16",
      type: "image/png",
    },
    {
      rel: "icon",
      url: "/favicon/favicon-32x32.png",
      sizes: "32x32",
      type: "image/png",
    },
    { rel: "apple-touch-icon", url: "/favicon/apple-touch-icon.png" },
  ],
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        cz-shortcut-listen="true"
        className={cn(
          Glancyr.variable,
          Glancyr700.variable,
          spaceGrotesk.variable,
          "bg-dark-1 dark:bg-white"
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
          <Analytics />
          <div className="absolute inset-0 size-full overflow-hidden dark:hidden ">
            <GridPattern
              numSquares={45}
              maxOpacity={0.1}
              duration={5}
              repeatDelay={0}
              className={cn(
                "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)] w-full",
                "inset-x-0 inset-y-[-0%] h-[105%] max-sm:h-[90%] skew-y-12"
              )}
            />
          </div>
          <Clouds />
        </ThemeProvider>
      </body>
    </html>
  );
}
