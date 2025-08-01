import React from "react";

function Skills() {
  const skills = [
    "NodeJS",
    "ReactJS",
    "ExpressJS",
    "NestJS",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "HTML",
    "CSS",
    "Bootstrap",
    "Tailwind CSS",
    "Git",
    "JavaScript",
    "TypeScript",
    "Jira",
    "Clickup",
    "Swagger API",
  ];
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-list">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
