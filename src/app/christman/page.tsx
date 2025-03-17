"use client";
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap-grid.min.css';

export default function ChristmanPage() {
  return (
    <div className="christman">
      <div className="header">
        <Link href="/#about" className="name-link">Megan Bartlett</Link>
        <div className="header-wrap">
          <h1>Christman Co&apos;s Corporate Website</h1>
          <div className="code-d">
            <Link
              href="https://www.Christmanco.com"
              className="code-button"
              onClick={(e) => {
                e.preventDefault();
                window.open("https://www.Christmanco.com", "_blank", "noopener,noreferrer");
              }}
            >
              Christmanco.com
            </Link>
          </div>
        </div>
        <h2>Developed and maintained as Web Software Developer at Elexicon</h2>
      </div>

      <div className="block-content">
        <h3>Examples of Specific Blocks I&apos;ve Built</h3>

        <div className="code-m">
          <Link
            href="https://github.com/magoozz/version-tracker"
            className="code-button"
            onClick={(e) => {
              e.preventDefault();
              window.open("https://github.com/magoozz/version-tracker", "_blank", "noopener,noreferrer");
            }}
          >
            My code
          </Link>
        </div>

        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="block-item">
              <Link
                href="https://www.christmanco.com/portfolio"
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://www.christmanco.com/portfolio", "_blank", "noopener,noreferrer");
                }}
              >
                <h4>Portfolio Filter ↗</h4>
                <p>
                  Designed to enhance the usability of the Portfolio page, this filtering system provides an intuitive way for users to search and refine projects dynamically.
                </p>
                <h5>Key Features:</h5>
                <ul className="ps-3" style={{ listStyleType: "disc", lineHeight: "1.8" }}>
                  <li><strong>Portfolio Taxonomies</strong> - Allows users to filter projects based on predefined categories.</li>
                  <li><strong>Page Tiles</strong> - Displays projects in an organized, visually appealing format.</li>
                  <li><strong>Custom Post Type (CPT) Integration</strong> - &quot;PROJECT&quot; is mapped to the Portfolio CPT for structured content management.</li>
                  <li><strong>Search Queries</strong> - Routed to the Search Results Template, ensuring a seamless and relevant browsing experience.</li>
                </ul>
              </Link>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="block-item">
              <Link
                href="https://www.christmanco.com/company/leadership"
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://www.christmanco.com/company/leadership", "_blank", "noopener,noreferrer");
                }}
              >
                <h4>Leadership Filtering System ↗</h4>
                <p>
                  Designed to enhance the usability of the Leadership page. This system provides an intuitive way for users to search and filter leadership profiles dynamically.
                </p>
                <h5>Key Features:</h5>
                <ul className="ps-3" style={{ listStyleType: "disc", lineHeight: "1.8" }}>
                  <li><strong>Leadership Taxonomy</strong> - Allows users to filter leadership profiles based on predefined categories.</li>
                  <li><strong>Locations Taxonomy</strong> - Enables filtering by geographical location.</li>
                  <li><strong>Leadership Grid Component</strong> - Displays filtered results in an organized, visually appealing layout.</li>
                  <li><strong>Search Queries</strong> - Directed to the Search Results Template, ensuring a seamless user experience with a focus on the Leadership Custom Post Type.</li>
                </ul>
              </Link>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="block-item">
              <Link
                href="https://www.christmanco.com/markets/higher-education#:~:text=Portfolio-,Our%20blog,-How%20geothermal%20energy"
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://www.christmanco.com/markets/higher-education#:~:text=Portfolio-,Our%20blog,-How%20geothermal%20energy", "_blank", "noopener,noreferrer");
                }}
              >
                <h4>Spotlight Cards ↗</h4>
                <p>This block will be left-aligned if it&apos;s alone.</p>
              </Link>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="block-item">
              <Link
                href="https://www.christmanco.com/company/by-the-numbers"
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://www.christmanco.com/company/by-the-numbers", "_blank", "noopener,noreferrer");
                }}
              >
                <h4>By The Numbers ↗</h4>
                <p>A dynamic, structured block system that presents key company metrics with clarity and visual appeal:</p>
                <ul className="ps-3" style={{ listStyleType: "disc", lineHeight: "1.8" }}>
                  <li><strong>Full-Width Blocks (Blue, White)</strong> - Designed for high-impact statistics, featuring a Number (Text Field) and Context (WYSIWYG). The white block includes a two-column list format for detailed breakdowns.</li>
                  <li><strong>3-Block Layouts (Green, White, Orange)</strong> - Each section showcases a Number (Text Field) and Context (WYSIWYG), with select blocks incorporating an Icon (Image Field) for visual reinforcement.</li>
                  <li><strong>2-Block Layouts (Bronze, Grey, Green, Blue, Orange)</strong> - Optimized for comparative stats, combining Number (Text Field), Context (WYSIWYG), and Icon (Image Field) where applicable.</li>
                </ul>
                <p>
                  This modular design ensures flexibility while maintaining a cohesive, structured narrative for company insights.
                </p>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
