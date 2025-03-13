import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";


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
        <meta name="description" content="Developed coded in Visual Studio Code by yours truly. Built with Next.js and Tailwind CSS, deployed with Vercel. " />
        <title>Megan Bartlett</title>
      </head>
      <body>
        <nav>
          <div className="header">
            <div className="name">
              <h1><Link href="#about">Megan Bartlett</Link></h1>
            </div>
            <div className="title">
              <h2>Full-Stack Software Developer</h2>
            </div>
            <div className="info">
              <p>I build accessible, dynamic, and scalable web experiences.</p>
            </div>
          </div>
          <ul>
            <li><Link href="#about">About Me</Link></li>
            <li><Link href="#experience">Experience</Link></li>
            <li><Link href="#projects">Projects</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>
          <div className="resume">
            <a
              href="/resume/MeganBartlett_Resume.pdf"
              download="MeganBartlett_Resume.pdf"
              className="resume-button"
            >
              My Resume
            </a>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}



