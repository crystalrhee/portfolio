// contact form
// social media
// get involved (partners, donors, volunteers)
// FAQ

// import React from "react"

// import Layout from "../components/layout"
// import SEO from "../components/seo"

// const ContactPage = () => (
//   <Layout>
//     <SEO title="Contact" />
//     <h1>Contact Us</h1>
//   </Layout>
// )

// export default ContactPage

import React, { Component } from "react";

import Layout from "../components/layout";
import "../styles/modal.scss"

class ContactPage extends Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <Layout>
        <div
          style={{
            marginTop: `100px`
          }}
        >
          <h1>React Modal</h1>
          <Modal show={this.state.show} handleClose={this.hideModal}>
            <p>Modal</p>
            <p>Data</p>
          </Modal>
          <button type="button" onClick={this.showModal}>
            open
          </button>
        </div>
      </Layout>
    );
  }
}

const Modal = ({ handleClose, show, children }) => {
  return (
    <div className={show ? "modal display-block" : "modal display-none"}>
      <section className="modal-main">
        {children}
        <button onClick={handleClose}>close</button>
      </section>
    </div>
  );
};

export default ContactPage;
