"use client";
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap-grid.min.css';

export default function MicroservicePage() {

  return (
    <div className="microservice">
      <div className="header">
        <Link href="/#about" className="name-link">Megan Bartlett</Link>
        <div className="header-wrap">
          <h1>Version Tracker Micro-service</h1>
          <div className="code-d">
            <Link
              href="https://github.com/magoozz/version-tracker"
              className="code-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              My code
            </Link>
          </div>
        </div>
        <h2>Developed as Software Engineering Intern at Curinos</h2>
      </div>

      <div className="content col-md-12">
        <div className="code-m">
          <Link
            href="https://github.com/magoozz/version-tracker"
            className="code-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            My code
          </Link>
        </div>
        <h3>Project Overview</h3>
        <p>
          The Version Tracker Microservice was a critical backend solution designed to enhance dependency management across multiple Curinos products. By integrating AWS Lambda and API Gateway, the microservice automated version tracking, reducing manual efforts and ensuring real-time accuracy in dependency information.

          Reflecting on this project, I see its impact beyond just the technical implementation. It was designed to simplify debugging for developers, providing an easily accessible, automated way to monitor dependencies. The integration with Confluence ensured that the dependency table remained up-to-date, allowing engineers across teams to identify outdated versions and potential conflicts efficiently.

          Moreover, this project strengthened my ability to analyze large-scale system dependencies, handle data extraction and transformation, and deploy serverless cloud-based solutions. It reinforced the importance of automation and real-time data management in a microservices ecosystem. Below is an indepth demonstration video!
        </p>
      </div>

      <div className="video-container">
        <video controls className="video">
          <source src="/video/VersionTrackerDemo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
