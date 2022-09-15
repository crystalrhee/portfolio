import React from "react";
import "../styles/career.scss";

const Career = () => (
  <section id="career">
    <ul className="timeline">
      <li>
        <div className="flag-l">
          <h3>January 2021 - Current</h3>
          <b>HubSpot</b>
          <code>Software Engineer Engineer</code>
          <small>Cambridge, MA</small>
          <p>
            Built features for upmarket admins to configure and manage users and assets
          </p>
        </div>
      </li>
      <li>
        <div className="flag-r">
          <h3>September 2019 - December 2019</h3>
          <b>Sumo Logic</b>
          <code>Frontend Engineer Co-op</code>
          <small>Redwood City, CA</small>
          <p>
            Designed and developed an internal tool for diagnosing and
            addressing front-end dependency issues. The tool was used to
            decouple dependencies to support future adaptation of microservice
            architecture.
          </p>
        </div>
      </li>
      <li>
        <div className="flag-l">
          <h3>July 2018 - December 2018</h3>
          <b>Catalant Technologies</b>
          <code>Software Engineer Co-op</code>
          <small>Boston, MA</small>
          <p>
            Worked with teams to develop, improve, and maintain client-facing
            web application.
          </p>
        </div>
      </li>
      <li>
        <div className="flag-r">
          <h3>November 2017 - December 2018</h3>
          <b>ScholarJet</b>
          <code>Software Developer</code>
          <small>Boston, MA</small>
          <p>
            Designed, implemented, deployed, debugged front-end application with
            team members for anticipated product launch.
          </p>
        </div>
      </li>
      <li>
        <div className="flag-l">
          <h3>July 2017 - December 2017</h3>
          <b>MullenLowe Group</b>
          <code>Development Co-op</code>
          <small>Boston, MA</small>
          <p>
            Developed digital products for clients based on design compositions.
          </p>
        </div>
      </li>
      <li>
        <div className="flag-r">
          <h3>February 2016 - May 2017</h3>
          <b>Northeastern University Office of Provost</b>
          <code>Digital Content Specialist</code>
          <small>Boston, MA</small>
          <p>Developed internal project management system.</p>
        </div>
      </li>
    </ul>
  </section>
);

export default Career;
