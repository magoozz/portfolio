import Link from "next/link";

interface ProjectItemProps {
    title: string;
    url: string;
    description: string;
    skills: string[];
}

export default function ProjectItem({
    title,
    url,
    description,
    skills,
}: ProjectItemProps) {
    return (
        <div className="project-item">
            <Link href={url} target="_blank" rel="noopener noreferrer">
                <div className="description">
                    <h3>
                        {title} ↗
                    </h3>
                    <p>{description}</p>
                    <div className="stack">
                        {skills.map((skill, index) => (
                            <span key={index}>{skill}</span>
                        ))}
                    </div>
                </div>
            </Link>
        </div>
    );
}
