import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <span className="logo">Rahul R</span>
        <ul>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact">Contact</a></li>
          <li>
            <a href="https://github.com/rahulraji18" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href="/RAHUL-R.pdf" download>
              Download CV
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
