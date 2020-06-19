import React, { Component } from "react";
import "../styles/projects.scss";

class GalleryItem extends Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     active: false,
  //   };
  // }

  // toggle(e) {
  // this.setState({ active: !this.state.active });
  // }
  // <div className={"wrapper " + (this.state.active ? "active" : "")} onClick={(e) => this.toggle(e)}></div>

  render() {
    return (
      <li className="pic-container">
        <div className="wrapper">
          <div className="img-cover">
            <div className="overlay-content">{this.props.title}</div>
            <img src={this.props.img}></img>
          </div>
          <div className="info">
            <p className="client">{this.props.client}</p>
            <div className="links">
              {this.props.projectLink ? (
                <a href={this.props.projectLink} target="_blank">
                  <i className="fa fa-github"></i>
                </a>
              ) : null}
              {this.props.demoLink ? (
                <a href={this.props.demoLink} target="_blank">
                  <i className="fa fa-laptop"></i>
                </a>
              ) : null}
              {this.props.pressLink ? (
                <a href={this.props.pressLink} target="_blank">
                  <i className="fa fa-link"></i>
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default GalleryItem;