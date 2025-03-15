"use client";
import { useEffect, useState } from "react";
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
    const [isExternal, setIsExternal] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setIsExternal(url.startsWith("http") && !url.includes(window.location.origin));
        }
    }, [url]);
    return (
        <div className="project-item">
            <Link href={url} target={isExternal ? "_blank" : "_self"} rel={isExternal ? "noopener noreferrer" : undefined}>
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
