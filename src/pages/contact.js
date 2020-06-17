import React, { Component } from "react";

import "../styles/contact.scss";

class ContactPage extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  handleSubmit(e) {
    e.preventDefault();
    const { name, email, subject, message } = this.state;
    let templateParams = {
      from_name: name,
      from_email: email,
      subject: subject,
      message_html: message,
    };
    // send data
    this.resetForm();
  }

  resetForm() {
    this.setState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }

  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value });
  };

  render() {
    return (
      <section id="contact">
        <p>Hi! The form is currently under construction (T⌓T) Please contact me by directly e-mailing me!</p>
        <form id="contact-me" method="post" action="#">
          <div className="form-left">
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange.bind(this, "name")}
              id="name"
              required="required"
              className="form"
              placeholder="Name"
            />
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange.bind(this, "email")}
              id="email"
              required="required"
              className="form"
              placeholder="Email"
            />
            <input
              type="text"
              name="subject"
              value={this.state.subject}
              onChange={this.handleChange.bind(this, "subject")}
              id="subject"
              required="required"
              className="form"
              placeholder="Subject"
            />
          </div>
          <div className="form-right">
            <textarea
              name="message"
              value={this.state.message}
              onChange={this.handleChange.bind(this, "message")}
              id="message"
              className="form"
              placeholder="Message"
            ></textarea>
          </div>

          <button type="submit" id="submit" name="submit" disabled>
            Send Message
          </button>
        </form>
      </section>
    );
  }
}

export default ContactPage;
