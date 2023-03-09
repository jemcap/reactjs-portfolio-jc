import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className="contact-section">
      <h2>Contact me!</h2>
      <div className="contact-info">
        <a href="">
          <i className="fa-regular fa-envelope"></i>
        </a>
        <a href="">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="">
          <i className="fa-brands fa-instagram"></i>
        </a>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <h3>Contact Form</h3>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
        />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
