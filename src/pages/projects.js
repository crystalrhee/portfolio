import React, { Component } from "react";
import GalleryItem from "../components/gallery-item";
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

class ProjectsPage extends Component {
  render() {
    return (
      <section id="projects">
        <div className="icon-key">
          <div className="tooltip">
            <i className="fa fa-github"></i>
            <span className="tooltiptext">codebase</span>
          </div>
          <div className="tooltip">
            <i className="fa fa-laptop"></i>
            <span className="tooltiptext">demo</span>
          </div>
          <div className="tooltip">
            <i className="fa fa-link"></i>
            <span className="tooltiptext">press</span>
          </div>
        </div>
        <ul className="gallery">
          <GalleryItem
            img={SeeingHome}
            title="Seeing Home"
            client="WayFair & Scholarjet"
            demoLink="https://seeing-home.firebaseapp.com/"
            projectLink="https://github.com/crystalrhee/seeing-home"
            pressLink="https://www.linkedin.com/feed/update/urn:li:activity:6559575611378065409/"
          />
          <GalleryItem
            img={HackUmass}
            title="AirKeys"
            client="HackUmassVI"
            projectLink="https://github.com/crystalrhee/hackumassvi"
          />
          <GalleryItem
            img={Ulta}
            title="Hair Inspiration"
            client="Ulta Beauty"
            demoLink="https://www.ulta.com/quiz/hair-inspiration"
          />
          <GalleryItem
            img={PieInSky}
            title="Pie in the Sky"
            client="JetBlue"
            demoLink="https://jetblue.pizza"
          />
          <GalleryItem
            img={Byob}
            title="Be Your Own Baby"
            client="Upstream USA"
            demoLink="https://https://www.beyourownbaby.org/"
          />
          <GalleryItem
            img={WhenWeBake}
            title="When We Bake"
            client="Country Crock"
            demoLink="https://www.countrycrock.com/"
          />
          <GalleryItem
            img={Alz}
            title="Pure Imagination"
            client="Alzheimer's Association"
            pressLink="https://shortyawards.com/10th/pure-imagination-project"
          />
          <GalleryItem img={USC} title="Tech Tour" client="US Cellular" />
          <GalleryItem
            img={BostonCares}
            title="Visualize Boston"
            client="Boston Cares"
            demoLink="https://pages.github.ccs.neu.edu/ethmarch/VisualizeBoston/"
            projectLink="https://github.ccs.neu.edu/ethmarch/VisualizeBoston.git"
          />
          <GalleryItem
            img={HuskyHacks}
            title="GoQueue"
            client="HuskyHacks"
            projectLink="https://github.com/crystalrhee/goqueue"
          />
          <GalleryItem
            img={StudentAlexa}
            title="Student Alexa"
            client="YaleHacks"
            demoLink="https://devpost.com/software/teacher-s-pet-cnpv2z"
            projectLink="https://github.com/crystalrhee/studentAlexa"
          />
        </ul>
      </section>
    );
  }
}

export default ProjectsPage;
