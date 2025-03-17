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
                <h4>Filler ↗</h4>
                <p>test</p>
              </Link>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="block-item">
              <Link href="https://www.christmanco.com/company/leadership" target="_blank" rel="noopener noreferrer">
                <h4>Filler ↗</h4>
                <p></p>
              </Link>
            </div>
          </div>
        </div>

        <h3>Yourcause.com:</h3>
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="block-item">
              <Link href="" target="_blank" rel="noopener noreferrer">
                <h4>Filler ↗</h4>
                <p>test</p>
              </Link>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="block-item">
              <Link href="https://www.christmanco.com/company/leadership" target="_blank" rel="noopener noreferrer">
                <h4>Filler ↗</h4>
                <p></p>
              </Link>
            </div>
          </div>
        </div>

        <h3>Yet to be released sites:</h3>
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="block-item">
              <Link href="" target="_blank" rel="noopener noreferrer">
                <h4>Tabs + Events Cards</h4>
                <p>The Tabs + Events component provides an intuitive way to explore upcoming, past, and on-demand events through
                  a structured, tabbed interface. Designed to dynamically pull event content from the Events CPT, this system ensures
                  a seamless, filterable experience while maintaining content governance alignment with the Event Topics Taxonomy.
                </p>
                <h5>Key Features:</h5>
                <ul className="ps-3" style={{ listStyleType: "disc", lineHeight: "1.8" }}>
                  <li><strong>Event Content Management</strong> - Each tab is populated with up to eight curated events, selected from
                    the Events CPT, allowing for easy organization and discovery.</li>
                  <li><strong>Deep Linking & Filtering</strong> - Enables direct linking to filtered event views based on topics, event
                    types, and product categories. Supports a refined filtering system that integrates pagination improvements.</li>
                </ul>
                <h5>Event Display Logic:</h5>
                <ul className="ps-3" style={{ listStyleType: "disc", lineHeight: "1.8" }}>
                  <li><strong>In-Person Events</strong> - Prioritized, ordered by end date & time.</li>
                  <li><strong>Webinars</strong> - Shown in future or past states as needed.</li>
                  <li><strong>Multi-Day Events</strong> - Ensures visibility through the final event day to maintain relevance.</li>
                  <li><strong>On-Demand Events</strong> - Displayed last, organized by end date & time.</li>
                </ul>
                <h5>User Experience Enhancements:</h5>
                <ul className="ps-3" style={{ listStyleType: "disc", lineHeight: "1.8" }}>
                  <li><strong>Regional Filtering</strong> - Default view can be set to US or Global, with additional filtering options.</li>
                  <li><strong>Suppression & Prioritization</strong> - Accounts for in-person events, product-related tags, and future development considerations.</li>
                </ul>
                <p>By integrating these features, the Tabs + Events system creates an organized, engaging way to navigate event content while allowing for deep linking and enhanced filtering.
                </p>
              </Link>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="block-item">
              <Link href="https://www.christmanco.com/company/leadership" target="_blank" rel="noopener noreferrer">
                <h4>Filler</h4>
                <p></p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
