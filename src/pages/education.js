import React from "react";
import "../styles/education.scss";
import { Neu, Tsinghua, Yonsei } from "../images/education";

const Education = () => (
  <section id="education">
    <div class="award">
      <img class="trophy" src={Neu} alt="reward" />
      <span class="title">Northeastern University</span>
      <p>2020</p>
      <p>Bachelor of Science in Computer Science and Finance</p>
    </div>
    <div class="award">
      <img
        class="trophy"
        src={Yonsei}
        alt="reward"
      />
      <span class="title">Yonsei University</span>
      <p>2019</p>
      <p>Exchange Program</p>
      <p>Yonsei International Summer School</p>
    </div>
    <div class="award">
      <img
        class="trophy"
        src={Tsinghua}
        alt="reward"
      />
      <span class="title">Tsinghua University</span>
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
