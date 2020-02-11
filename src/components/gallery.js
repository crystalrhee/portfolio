import React from "react";
import Tiles from "./tiles";

const images = [
  {
    id: 9,
    name: "Sumo Logic",
    location: "Redwood City, CA",
    time: "September 2019 - December 2019",
    role: "Software Engineering Co-op | UI Architecture Team",
    url: "sumo-logic.jpg"
  },
  {
    id: 8,
    name: "Yonsei University",
    location: "Seoul, South Korea",
    time: "June 2019 - August 2019",
    role: "Exchange Student Program",
    url: "yonsei.jpg"
  },
  {
    id: 7,
    name: "Catalant Technologies",
    location: "Boston, MA",
    time: "July 2018 - December 2018",
    role: "Software Engineering Co-op | Full-Stack",
    url: "catalant.png"
  },
  {
    id: 6,
    name: "Tsinghua University",
    location: "Beijing, China",
    time: "February 2018 - July 2018",
    role: "Exchange Student",
    url: "tsinghua.png"
  },
  {
    id: 5,
    name: "ScholarJet",
    location: "Boston, MA",
    time: "November 2017 - December 2018",
    role: "Software Developer",
    url: "scholarjet.png"
  },
  {
    id: 4,
    name: "MullenLowe Group",
    location: "Boston, MA",
    time: "July 2017 - December 2017",
    role: "Development Co-op | Frontend",
    url: "mullenlowe.png"
  },
  {
    id: 3,
    name: "Office of Provost",
    location: "Boston, MA",
    time: "February 2016 - May 2017",
    role: "Digital Content Specialist | Full-Stack",
    url: "neu.png"
  },
  {
    id: 2,
    name: "Northeastern University",
    location: "Boston, MA",
    time: "September 2015",
    role: "Candidate for B.S. in Computer Science and Finance",
    url: "neu.png"
  },
  {
    id: 1,
    name: "Qalya Labs Incorporated",
    location: "Boston, MA",
    time: "June 2014 - August 2014",
    role: "Start-up Intern",
    url: "harvard.jpg"
  }
];

const Gallery = () => <Tiles data={images} />;

export default Gallery;
