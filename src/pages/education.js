import React from "react";
import "../styles/education.scss";
import { Neu, Tsinghua, Yonsei } from "../images/education";

const Education = () => (
  <section id="education">
    <div className="award">
      <img className="trophy" src={Neu} alt="reward" />
      <span className="title">Northeastern University</span>
      <p>2020</p>
      <p>Bachelor of Science in Computer Science and Finance</p>
    </div>
    <div className="award">
      <img
        className="trophy"
        src={Yonsei}
        alt="reward"
      />
      <span className="title">Yonsei University</span>
      <p>2019</p>
      <p>Exchange Program</p>
      <p>Yonsei International Summer School</p>
    </div>
    <div className="award">
      <img
        className="trophy"
        src={Tsinghua}
        alt="reward"
      />
      <span className="title">Tsinghua University</span>
      <p>2018</p>
      <p>Exchange Program</p>
      <p>
        Human Computer Interaction, Computer Systems Architecture, Web
        Information Retrieval, Chinese
      </p>
    </div>
  </section>
);

export default Education;
