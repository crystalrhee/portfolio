import React, { Component } from "react";
import "../styles/projects.scss";

class GalleryItem extends Component {
  constructor() {
    super();

    this.state = {
      active: false,
    };
  }

  toggle(e) {
    this.setState({ active: !this.state.active });
  }

  render() {
    return (
      <div class="pic-container">
        <div class="parent">
          <div
            className={"wrapper " + (this.state.active ? "active" : "")}
            onClick={(e) => this.toggle(e)}
          >
            <div class="content">
              <img src={this.props.img}></img>
              <div class="text">
                <h2 class="title">{this.props.title}</h2>
                <p class="line subtitle">{this.props.client}</p>
                {this.props.projectLink ? (
                  <a href={this.props.projectLink} class="line subtitle" target="_blank">
                    Github
                  </a>
                ) : null}
                {this.props.demoLink ? (
                  <a href={this.props.demoLink} class="line subtitle" target="_blank">
                    Demo
                  </a>
                ) : null}
                {this.props.pressLink ? (
                  <a href={this.props.pressLink} class="line subtitle" target="_blank">
                    Press
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GalleryItem;

{
  /* <div
  className={("red green blue", this.state.active ? "active" : "")}
  onClick={(e) => this.toggle(e)}
>
  {this.props.text}
</div>; */
}
