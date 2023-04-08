import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { useState } from "react";
import { sanityClient } from "./sanityClient";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const { name, email, phone, subject, message } = formData;

  const contactDetail = {
    textAlign: "center",
  };
  const submitForm = (e) => {
    e.preventDefault();
    setLoading(true);
    const contactInformation = {
      _type: "contact",
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
    };

    sanityClient
      .create(contactInformation)
      .then(() => {
        setLoading(false);
        clearInputField();
      })
      .catch((err) => console.log(err));
  };

  const clearInputField = () => {
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };
  return (
    <div>
      <Header />
      <div className="">
        <h1 style={contactDetail}>Please fill out the form correctly!</h1>
        <form className="form_____data" onSubmit={submitForm}>
          <div className="form__data">
            <label htmlFor="name">Name</label>
            <input
              value={name}
              name="name"
              type="text"
              id="name"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Please enter your name"
            />
          </div>
          <div className="form__data">
            <label htmlFor="name">Email</label>

            <input
              value={email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              type="email"
              name="email"
              id="name"
              placeholder="Please enter your email"
            />
          </div>
          <div className="form__data">
            <label htmlFor="phone">Phone</label>

            <input
              value={phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              type="text"
              id="phone"
              name="phone"
              placeholder="Please enter your Phone Number"
            />
          </div>
          <div className="form__data">
            <label htmlFor="subject">Subject</label>

            <input
              value={subject}
              type="text"
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
              id="subject"
              name="subject"
              placeholder="Please enter your subject"
            />
          </div>
          <div className="form__data">
            <label htmlFor="message">Message</label>

            <textarea
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              name="message"
              id="message"
              cols="30"
              rows="10"
              value={message}
            ></textarea>
          </div>
          <button className="contact__button" type="submit">
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
