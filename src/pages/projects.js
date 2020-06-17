import React from "react";
import "../styles/projects.scss";
import {
  Alz,
  BostonCares,
  Byob,
  HackUmass,
  HuskyHacks,
  PieInSky,
  SeeingHome,
  StudentAlexa,
  Ulta,
  USC,
  WhenWeBake,
} from "../images/projects";

const ProjectsPage = () => (
  <section id="projects">
    <div class="gallery">
      <ul>
        <li>
          <a href="#">
            <img src={SeeingHome}></img>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={HackUmass}></img>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={Byob}></img>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={PieInSky}></img>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={Ulta}></img>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={Alz}></img>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={BostonCares}></img>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={WhenWeBake}></img>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={USC}></img>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={HuskyHacks}></img>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={StudentAlexa}></img>
          </a>
        </li>
      </ul>
    </div>
  </section>
);

export default ProjectsPage;
