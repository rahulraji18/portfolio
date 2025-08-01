import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        &copy; {new Date().getFullYear()} Rahul R. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
