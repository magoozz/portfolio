"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaBook, FaEnvelope } from "react-icons/fa";

export default function Navigation() {
  const pathname = usePathname();
  const isMicroservice = pathname.startsWith("/microservice");
  const isBlackbaud = pathname.startsWith("/blackbaud");
  const isChristman = pathname.startsWith("/christman");

  if (isMicroservice) return null;
  if (isBlackbaud) return null;
  if (isChristman) return null;

  return (
    <nav>
      <div className="header">
        <div className="name">
          <h1>
            <Link href="#about">Megan Bartlett</Link>
          </h1>
        </div>
        <div className="title">
          <h2>Full-Stack Software Developer</h2>
        </div>
        <div className="info">
          <p>I build accessible, dynamic, and scalable web experiences.</p>
        </div>
      </div>
      <div className="tabs">
        <ul>
          <li><Link href="#about">About Me</Link></li>
          <li><Link href="#experience">Experience</Link></li>
          <li><Link href="#projects">Projects</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>
      </div>
      <div className="bottom">
        <div className="resume">
          <Link
            href="/resume/MeganBartlett_Resume.pdf"
            download="MeganBartlett_Resume.pdf"
            className="resume-button"
          >
            My Resume
          </Link>
        </div>

        <div className="social-icons">
          <Link
            href="https://www.linkedin.com/in/megan-bartlett-77215a215"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} />
          </Link>
          <Link href="mailto:meganbartlett73@u.boisestate.edu">
            <FaEnvelope size={30} />
          </Link>
          <Link
            href="https://github.com/magoozz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} />
          </Link>
          <Link
            href="https://www.goodreads.com/user/show/164080752-megan-bartlett"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaBook size={30} />
          </Link>
        </div>
      </div>
    </nav>
  );
}
