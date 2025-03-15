import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaBook, FaEnvelope } from "react-icons/fa";
import CursorGlow from "../components/CursorGlow";
import Navigation from "../components/Navigation"; // Move client logic here

export const metadata: Metadata = {
  title: "Megan Bartlett",
  description: "Developed by Megan Bartlett",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Developed, coded in Visual Studio Code by yours truly. Built with Next.js and Tailwind CSS, deployed with Vercel."
        />
        <title>Megan Bartlett</title>
      </head>
      <body>
        <CursorGlow />
        <Navigation /> {/* This handles pathname-based logic */}
        <main>{children}</main>
      </body>
    </html>
  );
}
