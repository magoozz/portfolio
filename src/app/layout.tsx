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
        <meta name="description" content="Developed by Megan Bartlett" />
        <title>Create Next App</title>
      </head>
      <body>
        <nav>
          <ul>
            <li><Link href="#about">About</Link></li>
            <li><Link href="#education">Education</Link></li>
            <li><Link href="#projects">Projects</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}



