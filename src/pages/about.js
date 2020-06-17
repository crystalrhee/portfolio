import React from "react";
import Avatar from "../images/avatar-crop.png";
import "../styles/about.scss";

const AboutPage = () => (
  <section id="about">
    <div className="about-left">
      <div className="avatar">
        <img src={Avatar}></img>
      </div>
      <p>name</p>
      <h3>Crystal Rhee</h3>
      <p>email</p>
      <h3>crystal.rhee@gmail.com</h3>
      <p>phone number</p>
      <h3>857-202-0428</h3>
      <p>website</p>
      <h3>crystalrhee.github.io</h3>
    </div>
    <div className="about-right">
      <p className="uppercase bold">Hello, there</p>
      <h1>I'm Crystal Rhee</h1>
      <p>
        I'm a 23 year old software engineer from Boston, MA, specializing in
        frontend development.
      </p>
      <p>
        I am passionate about the the ability to create and improve and hope to
        apply what I learned in classrooms to real world problems. Through my
        experience at previous co-ops and through my involvement in various
        projects and roles at Northeastern University, I have developed key
        organizational skills when working with interdisciplinary teams.
      </p>
      <p>
        I am constantly working on new projects and exploring new technologies
        and skills. I am confident that I have the right combination of skills
        and motivation to quickly acquire the necessary knowledge to thrive in
        any setting.
      </p>
    </div>
  </section>
);

export default AboutPage;
