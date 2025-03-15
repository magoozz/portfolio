import Link from "next/link";
import ExperienceItem from "../components/ExperienceItem";
import ProjectItem from "../components/ProjectItem";

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
              When I&apos;m not coding, you&apos;ll find me practicing hot yoga, reading, or exploring{" "}
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
            dateRange="2023 — Present"
            title="Web & Software Developer"
            company="Elexicon"
            companyUrl="https://elexicon.com/"
            description="Collaborate with a team to build, rebuild, and maintain custom WordPress themes and full-stack applications for enterprise clients. 
            My work focuses on optimizing these solutions for performance, scalability, and seamless integration with existing content management workflows. 
            I contribute to creating tailored functionality using PHP and JavaScript, enhancing both site performance and user experience. 
            I also develop responsive and dynamic front-end interfaces with React and modern JavaScript frameworks to ensure a consistent, engaging experience across all devices."
            skills={[
              "JavaScript",
              "PHP",
              "HTML & SCSS",
              "Bootstrap",
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
            description="Developed the backend of a microservice designed to track dependencies and their versions across nine different products. 
            I wrote a function in Java and leveraged AWS Lambda and API Gateway to create a tracker that consolidated foundation dependencies (product, environment, component name, version, and timestamp) into a single table on a Confluence page. 
            The service processed payloads from various products, compared new data with existing entries, and updated the Confluence page in real-time."
            skills={["AWS Lambda", "API Gateway", "Java", "DynamoDB", "Confluence"]}
          />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <div className="projects">
          <ProjectItem
            title="Blackbaud Site Rebuild and Maintnence"
            url="/blackbaud"
            description="Worked with team to rebuild and maintain, maybe talk about searching filter?? Collaborated with a team to rebuild and maintain Blackbaud&apos;s
            corportate website, enhancing content management with a more dynamic, flexible platform. Utilized Wordpress to implement a design system based off the block-based 
            (ACF) components, enabling greater adaptability for content creators."
            skills={["WordPress (ACF)", "HTML & CSS", "JavaScript", "PHP",]}
          />

          <ProjectItem
            title="Christmanco Site Rebuild and Maintence"
            url="/christman"
            description="Again work with team to rebuild and maintain, think of something unique i personally built to add in here."
            skills={["WordPress", "HTML & CSS", "Monsido"]}
          />

          <ProjectItem
            title="Version Tracker Microservice"
            url="/microservice"
            description="Built a serverless microservice to track software dependencies across Curinos' nine products. Developed the backend in Java,
            using AWS Lambda and API Gateway for real-time updates. Intergrated with Conflucne to automate dependency version tracking, reducing manual effort.
            Write more/ add link to video and documentation??"
            skills={["Java", "AWS Lambda", "API Gateway"]}
          />

          <ProjectItem
            title="Memory Hole"
            url="https://github.com/magoozz/Memory-Hole/tree/main"
            description="Implements a memory allocator based on the budy system designed to replace
            'malloc'. It is able to do this through the use of freeList, bitMap and other utils (found in util.c) that help to calcualte the buddies address."
            skills={["C"]}
          />

          <ProjectItem
            title="Converting a Regular Expression to an NFA"
            url="https://github.com/magoozz/RE-to-NFA"
            description="By taking in a string of symbols (a, b, *, (, ), |) that represents a regular expression, we are able to give input strings and see whether or not they are 
            contained within the language of the regular expression. It does this by converting the regular expression into a Nondeterministic Finite Automata, then using the 
            functionality of that class, checking to see if the strings are accepted or not."
            skills={["Java",] }
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h2>Contact</h2>
        <p>Ways to get in touch with me...</p>
      </section>
    </div>
  );
}
