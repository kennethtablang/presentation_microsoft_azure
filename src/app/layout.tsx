import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { themeBootScript } from "@/lib/theme-boot";
import "./globals.css";
import "./review.css";

// SF Pro (Apple's system font) is used first on Apple devices via -apple-system;
// Inter is the closest open fallback for Windows, Android and Linux.
const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const mono = JetBrains_Mono({ variable: "--font-mono", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: { default: "Course presentations", template: "%s" },
  description: "Presentations, practice tests and flashcards for Microsoft Azure AI-901 and CompTIA Data Analysis Essentials.",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#eef3fb" },
    { media: "(prefers-color-scheme: dark)", color: "#05070f" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`} data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
