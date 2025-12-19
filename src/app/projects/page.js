"use client";
import useRevealAnimation from "../../hooks/useAnimation";

export default function Projects() {
    useRevealAnimation();

    const projects = [
        {
            title: "Coinpedia (Professional Project)",
            description:
                "Crypto news and market data platform where I worked as a Frontend Developer. I built reusable UI components, integrated real-time APIs, optimized performance, and ensured responsive layouts across devices.",
            tech: "HTML, CSS, Javascript, Tailwind Css ,NextJs, React.js, Redux, REST APIs, Bootstrap, Performance Optimization",
            live: "https://markets.coinpedia.org/",
            github: null,
        },
        {
            title: "Personal Portfolio",
            description:
                "My personal portfolio website showcasing my skills, professional experience, and projects with a modern UI and responsive design.",
            tech: "HTML, CSS, Javascript,NextJs, React.js,  Bootstrap, Performance Optimization",
            live: "https://your-vercel-url.vercel.app",
            github: "https://github.com/arifali-dev/my-new-portfolio",
        },
    ];

    return (
        <section className="projects-section py-5 text-white">
            <div className="container mt-5">

                {/* HEADER */}
                <div className="text-center mb-5  reveal">
                    <h1 className="section-title">Projects</h1>
                    <p className="projects-subtitle mt-2">
                        Professional and personal projects I’ve worked on during my 3.5 years of experience.
                    </p>
                </div>

                {/* PROJECT CARDS */}
                <div className="row justify-content-center g-4 reveal">
                    {projects.map((project, index) => (
                        <div className="col-md-6 col-lg-5" key={index}>
                            <div className="project-card h-100">
                                <h4 className="project-title">{project.title}</h4>

                                <p className="project-description mt-2">
                                    {project.description}
                                </p>

                                <p className="project-tech mt-3">
                                    <strong>Tech Stack:</strong> {project.tech}
                                </p>

                                <div className="project-links mt-4">
                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-primary me-3"
                                        >
                                            Live Website
                                        </a>
                                    )}

                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-outline-light"
                                        >
                                            GitHub Repo
                                        </a>
                                    )}
                                </div>

                                {!project.github && (
                                    <p className="private-note mt-3">
                                        🔒 Source code is private due to company policy.
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
