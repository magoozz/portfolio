"use client";

import Link from "next/link";
import ExperienceItem from "../components/ExperienceItem";
import ProjectItem from "../components/ProjectItem";
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import { useEffect, useState } from "react";

const StickyHeader = () => {
  const [currentSection, setCurrentSection] = useState("About");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const updateHeader = () => {
      let newSection = ""; // Keep empty until a section is reached

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          newSection = section.getAttribute("data-title") || section.id;
        }
      });

      setCurrentSection(newSection); // Updates only when a section is detected
    };

    window.addEventListener("scroll", updateHeader);
    updateHeader(); // Run on mount

    return () => {
      window.removeEventListener("scroll", updateHeader);
    };
  }, []);




  return (
    <div className="home">
      <div className="sticky-header">
        <p>{currentSection}</p></div>
      {/* About Section */}
      <section id="about" data-title="About">
        <div className="about">
          <div className="about-content">
            <p>
              I&apos;m a Software Engineer passionate about building dynamic, scalable, and accessible web experiences.
              Specializing in full-stack development, I create custom WordPress solutions, microservices, and intuitive
              front-end interfaces with React and JavaScript. My expertise includes PHP, Java, AWS serverless architectures,
              and web accessibility.
            </p>

            <p className="mt-6">
              At <Link href="https://elexicon.com/">Elexicon</Link>, I develop custom WordPress themes and full-stack applications for
              enterprise clients like <Link href="https://www.blackbaud.com/">Blackbaud</Link> and <Link href="https://www.christmanco.com/">Christman Co</Link>.
              As part of an agile team, I help implement a design system and build flexible, ACF-based components.
            </p>

            <p className="mt-6">
              Beyond WordPress, I develop Java-based microservices with AWS Lambda, API Gateway, and DynamoDB.
              At <Link href="https://curinos.com/">Curinos</Link>, I built a backend service for automating software dependency tracking.
              At <Link href="https://www.boisestate.edu/">Boise State University</Link>, I ensured WCAG AA compliance and educated content creators on accessibility best practices.
            </p>

            <p className="mt-6">
              When I&apos;m not coding, you&apos;ll find me practicing hot yoga, reading, or exploring a new tech stack.
              I thrive on tackling complex problems—whether it&apos;s optimizing a web experience or designing a scalable
              backend solution. Let&apos;s connect!
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" data-title="Experience">
        <div className="experience">
          <ExperienceItem
            dateRange="2023 — Present"
            title="Web & Software Developer"
            company="Elexicon"
            companyUrl="https://elexicon.com/"
            description="Collaborate with a team to build, rebuild, and maintain custom WordPress themes and full-stack applications for enterprise clients. 
            My work focuses on optimizing these solutions for performance, scalability, and seamless integration with existing content management workflows. 
            I contribute to creating tailored functionality using PHP and JavaScript, enhancing both site performance and user experience. 
            And develop responsive and dynamic front-end interfaces with React and modern JavaScript frameworks to ensure a consistentcy."
            skills={[
              "JavaScript",
              "PHP",
              "HTML & SCSS",
              "Bootstrap",
              "MySQL",
              "React",
              "WordPress (ACF)",
              "Docker",
            ]}
          />

          <ExperienceItem
            dateRange="2022 — 2023"
            title="Web Accessibility Specialist"
            company="Boise State University"
            companyUrl="https://www.boisestate.edu/webguide/accessibility/"
            description="Evaluated Boise State University&apos;s web pages for accessibility compliance using Monsido. 
            I addressed accessibility errors through WordPress and worked closely with Idaho site creators to educate them on best practices for ensuring web pages met AA standards. 
            Additionally, I contributed to the Idaho Web Content Accessibility Badge, promoting accessible digital content across the state."
            skills={["WordPress", "HTML & CSS", "Monsido"]}
          />

          <ExperienceItem
            dateRange="May — Aug 2022"
            title="Software Engineering Intern"
            company="Curinos"
            companyUrl="https://www.curinos.com/"
            description="Developed the backend of a microservice designed to track dependencies and their data across nine products. 
            A Java function that leverages AWS Lambda and API Gateway to create a tracker that consolidates foundation dependencies (product, environment, component name, version, and timestamp) into a single table on a Confluence page. 
            The service processes payloads from various products, compared new data with existing entries, and updates the page in real-time."
            skills={["AWS Lambda", "API Gateway", "Java", "DynamoDB", "Confluence"]}
          />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" data-title="Projects">
        <div className="projects">
          <ProjectItem
            title="Blackbaud Site Rebuild and Maintnence"
            url="/blackbaud"
            description="Collaborated with team to rebuild and maintain Blackbaud&apos;s
            corportate website, enhancing content management with a more dynamic, flexible platform. Utilized Wordpress to implement a design system based off the block-based 
            (ACF) components, enabling greater adaptability for content creators."
            skills={["WordPress (ACF)", "HTML & CSS", "JavaScript", "PHP",]}
          />

          <ProjectItem
            title="Christmanco Site Rebuild and Maintence"
            url="/christman"
            description="Worked with team to rebuild and maintain ChristmanCo&apos;s website, enhancing its content management capabilities with a more flexible and dynamic 
            platform. Utilized WordPress and Advanced Custom Fields (ACF) to develop a block-based design system, making it easier for content creators to manage and adapt site 
            content efficiently."
            skills={["WordPress (ACF)", "HTML & CSS", "JavaScript", "PHP",]}
          />

          <ProjectItem
            title="Version Tracker Microservice"
            url="/microservice"
            description="Designed and built a serverless microservice to track software dependencies across Curinos&apos; nine products. Developed the backend in Java,
             leveraging AWS Lambda and API Gateway for real-time updates. Integrated with Confluence to automate version tracking, reducing manual effort. 
             Developers use the service to query and update dependency versions seamlessly, ensuring accurate and up-to-date information across projects."
            skills={["Java", "AWS Lambda", "API Gateway"]}
          />

          <ProjectItem
            title="Memory Hole"
            url="https://github.com/magoozz/Memory-Hole/tree/main"
            description="Implements a memory allocator based on the budy system designed to replace
            &apos;malloc&apos;. It is able to do this through the use of freeList, bitMap and other utils (found in util.c) that help to calcualte the buddies address."
            skills={["C"]}
          />

          <ProjectItem
            title="Converting a Regular Expression to an NFA"
            url="https://github.com/magoozz/RE-to-NFA"
            description="By taking in a string of symbols (a, b, *, (, ), |) that represents a regular expression, input strings can be supplied to see whether or not they are 
            contained within the language of the regular expression. Doing so by converting the regular expression into a Nondeterministic Finite Automata, then using the 
            functionality of that class, checking to see if the strings are accepted or not."
            skills={["Java",]}
          />
        </div>
      </section>
    </div>
  );
}

export default StickyHeader;


