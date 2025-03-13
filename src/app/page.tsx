import Link from "next/link";
import ExperienceItem from "../components/ExperienceItem";

export default function Home() {
  return (
    <div>
      {/* About Section */}
      <section id="about">
        <div className="about">
          <div className="about-content">
            <p>
              I&apos;m a Software Engineer passionate about crafting{" "}
              dynamic, scalable, and accessible web experiences. With a strong background in{" "}
              full-stack development, I specialize in building{" "}
              custom WordPress solutions, developing microservices, and
              creating intuitive front-end interfaces with React and JavaScript.
            </p>

            <p className="mt-6">
              Currently, I work at <Link href="https://elexicon.com/">Elexicon</Link>, where I develop custom WordPress themes
              and full-stack applications, ensuring seamless content management experiences for{" "}
              enterprise clients such as <Link href="https://www.blackbaud.com/">Blackbaud.com</Link> and <Link href="https://www.christmanco.com/">Christmanco.com</Link>. As part of a small, agile team, I played a key role in implementing a{" "}
              design system and building flexible, ACF-based components to
              enhance content adaptability.
            </p>

            <p className="mt-6">
              Beyond web development, I have experience with AWS serverless architectures, writing{" "}
              efficient Java microservices, and improving web accessibility standards.
              While at Boise State University, I worked as a Web Accessibility Specialist,
              ensuring university web pages met WCAG AA compliance and educating content creators on{" "}
              accessibility best practices.
            </p>

            <p className="mt-6">
              When I&apos;m not coding, you’ll find me practicing hot yoga, reading, or exploring{" "}
              new tech stacks.
              I love tackling complex problems —whether it&apos;s optimizing a web experience or designing a{" "}
              scalable backend solution. Let&apos;s connect!
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience">
        <div className="experience">
          <ExperienceItem
            company="Elexicon"
            title="Web & Software Developer"
            duration="2023 — Present"
            description="Builds and maintains digital experiences using modern web technologies."
            link="https://elexicon.com/"
            stack={["JavaScript", "PHP", "HTML & SCSS", "Bootstrap", "React", "WordPress (ACF)"]}
          />

          <ExperienceItem
            company="Boise State University"
            title="Web Accessibility Specialist"
            duration="2022 — 2023"
            description="Ensured accessibility compliance and improved website usability."
            link="https://www.boisestate.edu/webguide/accessibility/"
            stack={["WordPress", "HTML & CSS", "Monsido"]}
          />

          <ExperienceItem
            company="Curinos"
            title="Software Engineering Intern"
            duration="May — Aug 2022"
            description="Worked on cloud-based solutions with AWS services and Java."
            link="https://www.curinos.com/"
            stack={["AWS Lambda", "API Gateway", "Java", "DynamoDB", "Confluence"]}
          />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <h2>Projects</h2>
        <p>Some of the things I&apos;ve built...</p>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h2>Contact</h2>
        <p>Ways to get in touch with me...</p>
      </section>
    </div>
  );
}
