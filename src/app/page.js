import Image from "next/image";
import styles from "./page.module.css";

// export default function Home() {
//   return (
//     <div className="main_div">
//       <div className="row">
//         <div className="col-md-12">
//           <h1 className="text-white text-center mt-5 font-bold">I'm a Frontend Developer</h1>
//           <p className="text-white text-center">I specialize in building exceptional digital experiences.
//             Currently, I'm focused on creating responsive front-end web applications using modern technologies.</p>
//           <button className="btn btn-primary text-white justify-center">Get In Touch</button>
//         </div>
//       </div>

//     </div>
//   );
// }

export default function Home() {
  const skills = [
    { name: "HTML", img: "/skills/html-icon.svg" },
    { name: "CSS", img: "/skills/css-icon.svg" },
    { name: "JavaScript", img: "/skills/javascript-icon.svg" },
    { name: "React.js", img: "/skills/react-js-icon.svg" },
    { name: "Next.js", img: "/skills/nextjs-icon.svg" },
    { name: "Bootstrap", img: "/skills/bootstrap-5-logo-icon.svg" },
    { name: "Tailwind CSS", img: "/skills/tailwind-css-icon.svg" },
    { name: "TypeScript", img: "/skills/typescript-icon.svg" },
    // { name: "Git", img: "/skills/git.png" },
  ];


  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h1 className="hero-title">
                I’m a <span>Frontend Developer</span>
              </h1>

              <p className="hero-text mt-3">
                I specialize in building exceptional digital experiences.
                Currently focused on creating responsive front-end web
                applications using modern technologies.
              </p>

              <div className="mt-4">
                <a href="/contact" className="btn btn-primary btn-lg me-3">
                  Get In Touch
                </a>
                <a
                  href="/resume/Arif-Ali-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light btn-lg  text-white resume-btn"
                >
                  Download Resume
                  {/* <Image
                    src="/resume/download-icon.png"
                    alt="Arif Ali"
                    width={24}
                    height={24}
                    className=""
                  /> */}
                </a>

                {/* <a
                  href="/resume/Arif-Ali-Resume.pdf"
                  download
                  className="btn btn-outline-light btn-lg"
                >
                  Download Resume
                </a> */}

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="skills-section">
        <div className="container">
          <h2 className="section-title text-center mb-5">Skills</h2>

          <div className="row g-4">
            {skills.map((skill) => (
              <div className="col-6 col-md-4 col-lg-3" key={skill.name}>
                <div className="skill-card">
                  <img
                    src={skill.img}
                    alt={skill.name}
                    className="skill-icon"
                  />
                  <p className="skill-name mt-3">{skill.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
