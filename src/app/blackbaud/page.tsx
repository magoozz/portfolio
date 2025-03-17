"use client";
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap-grid.min.css';

export default function BlackbaudPage() {
  return (
    <div className="blackbaud">
      <div className="header">
        <Link href="/#about" className="name-link">Megan Bartlett</Link>
        <div className="header-wrap">
          <h1>Blackbaud&apos;s Corporate Websites</h1>
          <div className="buttons">
            <div className="code-d">
              <Link
                href="https://www.blackbaud.com"
                className="code-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blackbaud.com
              </Link>
            </div>
            <div className="code-d">
              <Link
                href="https://www.yourcause.com"
                className="code-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Yourcause.com
              </Link>
            </div>
          </div>
        </div>
        <h2>Developed and maintained as Web Software Developer at Elexicon</h2>
      </div>

      <div className="block-content">
        <h3>Examples of Specific Blocks I&apos;ve Built</h3>
        <h3>Blackbaud.com:</h3>

        <div className="code-m">
          <Link href="https://www.blackbaud.com" className="code-button" target="_blank" rel="noopener noreferrer">Blackbaud.com</Link>
        </div>
        <div className="code-m">
          <Link href="https://www.yourcause.com" className="code-button" target="_blank" rel="noopener noreferrer">Yourcause.com</Link>
        </div>

        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="block-item">
              <Link href="" target="_blank" rel="noopener noreferrer">
                <h4>Portfolio Filter ↗</h4>
                <p>test</p>
              </Link>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="block-item">
              <Link href="https://www.christmanco.com/company/leadership" target="_blank" rel="noopener noreferrer">
                <h4>Leadership Filtering System ↗</h4>
                <p></p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
