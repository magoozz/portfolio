export default function Home() {
  return (
    <div>
      <section id="about">
        <div className="about">
          <div className="about-header">
        <h1 >Hi, I'm Megan Bartlett</h1>
          </div>
          <div className="about-content">
            <p>Full-Stack Web and Software developer. I am a passionate web and software developer with a strong foundation in computer science...</p>            
          </div>
        </div>
      </section>
      
      <section id="education">
        <div className="education">
          <div className="education-header">
            <h2>Education</h2>
          </div>
          <div className="education-content">
            <p>More about my background...</p>
          </div>
        </div>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <p>Some of the things I&apos;ve built...</p>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>Ways to get in touch with me...</p>
      </section>
    </div>
  );
}
