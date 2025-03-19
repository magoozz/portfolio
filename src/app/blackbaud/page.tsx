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

          <div className="col-md-6 mb-4">
            <div className="block-item">
              <Link href="https://www.yourcause.com/blog" target="_blank" rel="noopener noreferrer">
                <h4>Search Results Template ↗</h4>
                <p>Enhances the users experience by dynamically displaying relevant content across multiple sections of the website.
                  This flexible template is designed to work with various content types (CPT), ensuring users quickly find the information
                  they need.
                </p>
                <h5>Key Features:</h5>
                <ul className="ps-3" style={{ listStyleType: "disc", lineHeight: "1.8" }}>
                  <li><strong>Hero Textual Component</strong> - Displays a heading with the format "Search Results for [term]" to provide clear user feedback.</li>
                  <li><strong>Card Grid Medium Layout</strong> - Organizes results in an easy-to-scan grid format for improved readability.</li>
                  <li><strong>Content Pull Mechanism</strong> - Retrieves and displays relevant posts or pages dynamically. Including fetured image.</li>
                  <li><strong>EF Author Taxonomy Selection (for Blog Posts)</strong> - Displays the author's taxonomy for additional context.</li>
                  <li><strong>Post/Page Details</strong> - Includes the title, excerpt, and permalink, ensuring quick access to full content.</li>
                </ul>
                <p>This template improves search functionality by offering a structured, intuitive, and visually appealing results page while maintaining 
                  flexibility across content types.
                </p>
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

          <div className="col-md-6 mb-4">
            <div className="block-item hover-effect">
                <h4>Tabs + Events Cards · Yet to be deployed</h4>
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

            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="block-item hover-effect">
                <h4>Sticky Sidebar Nav · Yet to be deployed</h4>
                <p>The Sticky Nav Template enhances content navigation by providing a fixed sidebar menu that allows users to quickly jump to different sections of a page. Built with a structured 
                  fieldset, this template ensures consistency while giving users control over content organization.
                </p>
                <h5>Key Features:</h5>
                <ul className="ps-3" style={{ listStyleType: "disc", lineHeight: "1.8" }}>
                  <li><strong>Hero Section</strong> - Uses the Hero - Textual fieldset to maintain visual consistency across pages.</li>
                  <li><strong>Sticky Navigation</strong> - Configured through a Navigation repeater field. Users input a Link Label and a corresponding Link ID (with or without #).
                  Ensures a structured and user-friendly sidebar experience.</li>
                  <li><strong>Content Management</strong> - A WYSIWYG editor provides flexibility for adding formatted text, paragraphs, and rich content.
                  Users assign id= attributes to headers, ensuring seamless anchor link functionality.</li>
                  <li><strong>Anchor Link Scroll Offset</strong> - Provides smooth scrolling with an offset to prevent header overlap.</li>
                </ul>
                <p>This template streamlines navigation for long-form content while keeping the page structure intuitive and user-controlled.
                </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


