import Link from "next/link";
import { ReactNode } from "react";

interface ExperienceItemProps {
    company: string;
    title: string;
    duration: string;
    description: string;
    link: string;
    stack: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
    company,
    title,
    duration,
    description,
    link,
    stack,
}) => {
    return (
        <Link href={link} className="experience-item hover-effect" target="_blank">
            <div className="timeline">
                <p>{duration}</p>
            </div>
            <div className="description">
                <h3>{title} · <span className="company">{company}</span></h3>
                <p>{description}</p>
                <div className="stack">
                    {stack.map((tech) => (
                        <span key={tech}>{tech}</span>
                    ))}
                </div>
            </div>
        </Link>
    );
};

export default ExperienceItem;
