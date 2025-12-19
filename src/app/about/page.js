"use client";
import { useEffect } from "react";

export default function About() {

    useEffect(() => {
        const elements = document.querySelectorAll(".reveal");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                    }
                });
            },
            { threshold: 0.15 }
        );

        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="about-section py-5 text-white">
            <div className="container">
                <div className="row justify-content-center">

                    {/* HEADER */}
                    <div className="col-lg-8 text-center mb-5 reveal">
                        <h1 className="section-title">About Me</h1>
                        <p className="about-intro mt-3">
                            I’m <strong>Arif Ali</strong>, a Frontend Developer with 3.5 years of professional
                            experience building modern, scalable, and high-performance web applications.
                        </p>
                    </div>

                    {/* CONTENT */}
                    <div className="col-lg-10 reveal">

                        <h4 className="about-heading">Experience</h4>
                        <p className="about-text">
                            I worked at <strong>Coinpedia</strong> as a Frontend Developer, where I built reusable UI
                            components using React.js, integrated APIs to display real-time cryptocurrency data,
                            and ensured responsive layouts across devices.
                        </p>
                        <p className="about-text">
                            I also have basic backend experience using Node.js, Express.js, and MongoDB.
                        </p>

                        <h4 className="about-heading">Tech Stack</h4>
                        <p className="about-text">
                            HTML, CSS, JavaScript, React.js, Next.js, Bootstrap, Tailwind CSS,
                            TypeScript, Git, REST APIs, Performance Optimization, SEO, Testing
                        </p>

                        <h4 className="about-heading">Strengths</h4>
                        <ul className="about-list">
                            <li>Clean & reusable UI components</li>
                            <li>Performance-focused development</li>
                            <li>Responsive and mobile-first design</li>
                            <li>API integration & data handling</li>
                            <li>Strong problem-solving skills</li>
                            <li>Good UI/UX understanding</li>
                        </ul>

                        <h4 className="about-heading">Career Goal</h4>
                        <p className="about-text">
                            Seeking a Frontend Developer role where I can build scalable,
                            user-focused web applications and contribute to impactful digital products.
                        </p>

                        <h4 className="about-heading">Availability</h4>
                        <p className="about-text">
                            📍 Bangalore, Karnataka, India <br />
                            💼 Open to full-time, freelance, and remote opportunities
                        </p>

                    </div>
                </div>
            </div>
        </section>
    );
}
