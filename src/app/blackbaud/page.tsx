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
            <div className="block-item h-160">
              <Link href="https://www.yourcause.com/blog" target="_blank" rel="noopener noreferrer">
                <h4>Search Results Template ↗</h4>
                <p>The Search Results Template rnhances the users experience by dynamically displaying relevant content across multiple sections of the website.
                  This flexible template is designed to work with various content types (CPT), ensuring users quickly find the information
                  they need.
                </p>
                <h5>Key Features:</h5>
                <ul className="ps-3" style={{ listStyleType: "disc", lineHeight: "1.8" }}>
                  <li><strong>Hero Textual Component</strong> - Displays a heading with the format &quot;Search Results for [term]&quot; to provide clear user feedback.</li>
                  <li><strong>Card Grid Medium Layout</strong> - Organizes results in an easy-to-scan grid format for improved readability.</li>
                  <li><strong>Content Pull Mechanism</strong> - Retrieves and displays relevant posts or pages dynamically. Including fetured image.</li>
                  <li><strong>EF Author Taxonomy Selection (for Blog Posts)</strong> - Displays the author&apos;s taxonomy for additional context.</li>
                  <li><strong>Post/Page Details</strong> - Includes the title, excerpt, and permalink, ensuring quick access to full content.</li>
                </ul>
                <p>This template improves search functionality by offering a structured, intuitive, and visually appealing results page while maintaining
                  flexibility across content types.
                </p>
              </Link>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="block-item h-160">
              <Link href="https://dev-blackbaud-csr.pantheonsite.io/esg-metrics-and-reports/2023-esg-metrics/" target="_blank" rel="noopener noreferrer">
                <h4>Sticky Sidebar Nav ↗</h4>
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
              </Link>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="block-item h-157">
              <Link href="https://www.blackbaud.com/solutions/fundraising#:~:text=at%20your%20side%3F-,Major,-Giving" target="_blank" rel="noopener noreferrer">
                <h4>Multi-Tab Block ↗</h4>
                <p>The Multi-Tab Block is a custom WordPress Gutenberg block designed for organizing content into a user-friendly tabbed interface. It allows for dynamic content structuring,
                  enabling users to toggle between different sections efficiently.</p>
                  <h5>Key Features:</h5>
                <ul className="ps-3" style={{ listStyleType: "disc", lineHeight: "1.8" }}>
                  <li><strong>Dynamic Tab Creation</strong> - Content editors can add multiple panes, each with a custom title and associated content.</li>
                  <li><strong>Bootstrap-Powered Navigation</strong> - Uses Bootstrap&apos;s tab components for smooth switching between content sections.</li>
                  <li><strong>Flexible Content Display</strong> - Supports WYSIWYG content editing and an alternating layout with images and text.</li>
                  <li><strong>Collapsible Mobile Experience</strong> - Tabs convert into collapsible sections on smaller screens for better accessibility and usability.</li>
                </ul>
                <p>This block is ideal for structuring FAQs, product details, or segmented informational content in a clean, interactive format.
                </p>
              </Link>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="block-item h-157">
              <Link href="https://www.blackbaud.com/solutions/fundraising#:~:text=Data%20health-,A,-significant%20amount%20of" target="_blank" rel="noopener noreferrer">
                <h4>Quote Image Logo Stat Block ↗</h4>
                <p>The Quote Image Logo Stat Block is a highly flexible and customizable content component designed to showcase customer testimonials, key statistics, and
                  branding elements in a visually engaging layout.</p>
                <h5>Key Features:</h5>
                <ul className="ps-3" style={{ listStyleType: "disc", lineHeight: "1.8" }}>
                  <li><strong>Customizable Layout</strong> - Users can reposition the image, quote, CTA, icon, and stat block for an optimized design.</li>
                  <li><strong>Quote Component</strong> - Displays a customer quote with author details and an optional brand logo.</li>
                  <li><strong>CTA Options</strong> - Supports a button linking to a customer story page instead of a static PDF download.</li>
                  <li><strong>Stat Block & Icon</strong> - Showcases a key stat with a customizable icon, both of which can be repositioned.</li>
                  <li><strong>Branding & Imagery</strong> - Adjustable image placement and optional organization logos for consistency.</li>
                </ul>
                <p>This adaptable block enhances storytelling while giving users full control over layout and content.
                </p>
              </Link>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="block-item hover-effect h-235">
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
              <h6>Event Display Logic:</h6>
              <ul className="ps-3" style={{ listStyleType: "disc", lineHeight: "1.8" }}>
                <li><strong>In-Person Events</strong> - Prioritized, ordered by end date & time.</li>
                <li><strong>Webinars</strong> - Shown in future or past states as needed.</li>
                <li><strong>Multi-Day Events</strong> - Ensures visibility through the final event day to maintain relevance.</li>
                <li><strong>On-Demand Events</strong> - Displayed last, organized by end date & time.</li>
              </ul>
              <h6>User Experience Enhancements:</h6>
              <ul className="ps-3" style={{ listStyleType: "disc", lineHeight: "1.8" }}>
                <li><strong>Regional Filtering</strong> - Default view can be set to US or Global, with additional filtering options.</li>
                <li><strong>Suppression & Prioritization</strong> - Accounts for in-person events, product-related tags, and future development considerations.</li>
              </ul>
              <p>By integrating these features, the Tabs + Events system creates an organized, engaging way to navigate event content while allowing for deep linking and enhanced filtering.
              </p>

            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="block-item hover-effect h-235">
              <h4>Video Single & Series Player · Yet to be deployed</h4>
              <p>Template provides a structured way to display video content, supporting both standalone videos and multi-part series. This template ensures intuitive navigation
                for users while maintaining flexibility for various content needs.
              </p>
              <h5>Key Features:</h5>
              <h6>Single Video View</h6>
              <ul className="ps-3" style={{ listStyleType: "disc", lineHeight: "1.8" }}>
                <li>Displays the video player with an embedded video using the oEmbed field.</li>
                <li>Title Block pulls from the entry Title.</li>
                <li>Duration is retrieved from the Event Duration field.</li>
                <li>Tags are populated from the Event Topics Taxonomy selections.</li>
                <li>Includes a text area for the video description to provide context.</li>
              </ul>

              <h6>Series Support</h6>
              <ul className="ps-3" style={{ listStyleType: "disc", lineHeight: "1.8" }}>
                <li>If a video is part of a series, the Series Eyebrow displays the Parent Page Title.</li>
                <li>The sidebar is dynamically populated with siblings (other videos in the series).</li>
                <li>Entries are sorted alphabetically (with numbers) for clear sequencing.</li>
              </ul>

              <h6>Sidebar Display Logic</h6>
              <ul className="ps-3" style={{ listStyleType: "disc", lineHeight: "1.8" }}>
                <li><strong>No Parent?</strong> - The sidebar is hidden to prevent unrelated sibling links.</li>
                <li><strong>Series Toggle Enabled?</strong> - The sidebar includes the parent (landing page) and all children.</li>
                <li><strong>Single Event Entries in Root?</strong> - Ensures no unrelated siblings are pulled.</li>
              </ul>
              <p>This template provides a seamless viewing experience while maintaining logical content relationships for both
                standalone and series-based video content.
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


