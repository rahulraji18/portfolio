import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_EMAILJS_SERVICE_ID",
        "YOUR_EMAILJS_TEMPLATE_ID",
        form.current,
        "YOUR_EMAILJS_USER_ID"
      )
      .then(
        (result) => {
          setStatus("Message sent!");
          form.current.reset();
        },
        (error) => {
          setStatus("Failed. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2>Contact</h2>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Message" required />
          <button type="submit">Send</button>
        </form>
        {status && <p>{status}</p>}
        <div className="contact-details">
          <p>Email: <a href="mailto:rahulrajesh474@gmail.com">rahulrajesh474@gmail.com</a></p>
          <p>GitHub: <a href="https://github.com/rahulraji18" target="_blank" rel="noopener noreferrer">rahulraji18</a></p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
