import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5tp0xoh",
        "template_930s8ne",
        form.current,
        "r7bKStIwYjjrS4Wfu"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message Sent!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="formBox">
      <div class="secHeader">
        <h2>Contact Me:</h2>
      </div>

      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}

export default Contact;
