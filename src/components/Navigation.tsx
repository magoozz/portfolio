"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaBook, FaEnvelope } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    // Reset the active section when the component mounts
    setActiveSection("");

    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [pathname]); // Reset observer when pathname changes

  const isMicroservice = pathname.startsWith("/microservice");
  const isBlackbaud = pathname.startsWith("/blackbaud");
  const isChristman = pathname.startsWith("/christman");

  if (isMicroservice || isBlackbaud || isChristman) return null;

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
          {["about", "experience", "projects"].map((section) => (
            <li key={section}>
              <Link
                href={`#${section}`}
                className={activeSection === section ? "active" : ""}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          ))}
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
            aria-label="Linkedin"
          >
            <span className="link-text">Linkedin</span>
            <FaLinkedin size={30} />
          </Link>
          <Link href="mailto:meganbartlett73@u.boisestate.edu">
            <span className="link-text">Email</span>
            <FaEnvelope size={30} />
          </Link>
          <Link
            href="https://github.com/magoozz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
          >
            <span className="link-text">Github</span>
            <FaGithub size={30} />
          </Link>
          <Link
            href="https://www.goodreads.com/user/show/164080752-megan-bartlett"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Good Reads"
          >
            <span className="link-text">Good Reads</span>
            <FaBook size={30} />
          </Link>
        </div>
      </div>
    </nav>
  );
}
