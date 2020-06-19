import React from "react";
import "../styles/certifications.scss";
import {
  Neu,
  Tsinghua,
  Yonsei,
  Bloomberg,
  Tips,
} from "../images/certifications";

const Certifications = () => (
  <section id="education">
    <div className="award">
      <img className="trophy" src={Neu} alt="reward" />
      <span className="title">Northeastern University</span>
      <p>2020</p>
      <p>Bachelor of Science in Computer Science and Finance</p>
    </div>
    <div className="award">
      <img className="trophy" src={Yonsei} alt="reward" />
      <span className="title">Yonsei University</span>
      <p>2019</p>
      <p>Exchange Program</p>
      <p>Yonsei International Summer School</p>
    </div>
    <div className="award">
      <img className="trophy" src={Tsinghua} alt="reward" />
      <span className="title">Tsinghua University</span>
      <p>2018</p>
      <p>Exchange Program</p>
      <p>
        Human Computer Interaction, Computer Systems Architecture, Web
        Information Retrieval, Chinese
      </p>
    </div>
    <div className="award">
      <img className="trophy" src={Bloomberg} alt="reward" />
      <span className="title">BMC Certification</span>
      <p>2020</p>
      <p>Bloomberg LP</p>
      <p>Bloomberg Market Concepts Core Concepts Certification</p>
    </div>
    <div className="award">
      <img className="trophy" src={Tips} alt="reward" />
      <span className="title">TIPS Certification</span>
      <p>2020</p>
      <p>Massachusetts Alcoholic Beverages Control Commission</p>
    </div>
  </section>
);

export default Certifications;
