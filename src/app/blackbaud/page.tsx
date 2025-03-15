"use client";

export default function BlackbaudPage() {
  ;

  return (
    <div className="blackbaud">
      <div className="header">
        <a href="/#about" className="name-link">Megan Bartlett</a>
        <div className="header-wrap">
          <h1>Blackbaud&apos;s Corporate Website</h1>
          <div className="code-d">
            <a
              href="https://www.blackbaud.com"
              className="code-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blackbaud.com
            </a>
          </div>
        </div>
        <h2>Developed and maintained as Web Software Developer at Elexicon</h2>
      </div>

      <div className="content">
        <div className="code-m">
          <a
            href="https://github.com/magoozz/version-tracker"
            className="code-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            My code
          </a>
        </div>
        <h3>Project Overview</h3>
        <p>
          The Version Tracker Blackbaud was a critical backend solution designed to enhance dependency management across multiple Curinos products. By integrating AWS Lambda and API Gateway, the Blackbaud automated version tracking, reducing manual efforts and ensuring real-time accuracy in dependency information.

          Reflecting on this project, I see its impact beyond just the technical implementation. It was designed to simplify debugging for developers, providing an easily accessible, automated way to monitor dependencies. The integration with Confluence ensured that the dependency table remained up-to-date, allowing engineers across teams to identify outdated versions and potential conflicts efficiently.

          Moreover, this project strengthened my ability to analyze large-scale system dependencies, handle data extraction and transformation, and deploy serverless cloud-based solutions. It reinforced the importance of automation and real-time data management in a Blackbauds ecosystem.
        </p>
      </div>

    </div>
  );
}
