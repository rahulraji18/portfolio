import React from "react";

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Projects</h2>
        
        <div className="project">
          <h3>Two Stay (Accommodation Booking System)</h3>
          <ul>
            <li>
              Online platform for overseas accommodation booking with transportation.
            </li>
            <li>
              Roles for Admins, Clients, Accommodation Providers, Invoice system.
            </li>
            <li>
              Tech Stack: NodeJS, PostgreSQL, Sequelize, Jira, ClickUp, Git.
            </li>
          </ul>
        </div>
        
        <div className="project">
          <h3>ERP - Clickup</h3>
          <ul>
            <li>
              ERP web app with project management features similar to ClickUp.
            </li>
            <li>
              Tech Stack: NodeJS, MongoDB, Mongoose, Clickup, Git.
            </li>
          </ul>
        </div>
        
        <div className="project">
          <h3>Student Management System</h3>
          <ul>
            <li>
              Admins can manage students, courses; students register and track academic info.
            </li>
            <li>
              Tech Stack: NodeJS, EJS, MongoDB, Mongoose, Git.
            </li>
            <li>
              <a href="https://github.com/rahulraji18/Student-Management-v1" target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            </li>
          </ul>
        </div>
        
        <div className="project">
          <h3>Other NodeJS Projects</h3>
          <a href="https://github.com/stars/rahulraji18/lists/nodejs" target="_blank" rel="noopener noreferrer">
            NodeJS Project List
          </a>
        </div>
        
      </div>
    </section>
  );
}

export default Projects;
