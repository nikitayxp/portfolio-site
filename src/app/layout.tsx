import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, JetBrains_Mono, Playfair_Display } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { SmoothScrollProvider } from "@/components/ui/smooth-scroll-provider";
import { MouseFollower } from "@/components/ui/mouse-follower";
import "./globals.css";

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const displayFont = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const monoFont = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Nikita Slobodeniuc | Portfolio",
    template: "%s | Nikita Slobodeniuc",
  },
  description:
    "Junior IT Technician and Full-Stack Developer portfolio focused on modern web solutions.",
  metadataBase: new URL("https://portfolio-site-gamma-six.vercel.app"),
  alternates: {
    languages: {
      pt: "/pt",
      en: "/en",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${displayFont.variable} ${monoFont.variable} h-full antialiased dark`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <SmoothScrollProvider>
            <MouseFollower />
            {children}
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
