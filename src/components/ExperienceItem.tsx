import Link from "next/link";

interface ExperienceItemProps {
  dateRange: string;
  title: string;
  company: string;
  companyUrl: string;
  description: string;
  skills: string[];
}

export default function ExperienceItem({
  dateRange,
  title,
  company,
  companyUrl,
  description,
  skills,
}: ExperienceItemProps) {
  return (
    <div className="experience-item">
      {/* Left: Timeline */}
      <div className="timeline">{dateRange}</div>

      {/* Right: Job Description */}
      <div className="description">
        <h3>
          {title} ·{" "}
          <Link href={companyUrl} target="_blank" rel="noopener noreferrer">
            {company} ↗
          </Link>
        </h3>
        <p>{description}</p>

        {/* Skills */}
        <div className="stack">
          {skills.map((skill, index) => (
            <span key={index}>{skill}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
