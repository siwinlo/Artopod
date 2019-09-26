import React from "react";
import About from "./About";
import MapComponent from "./MapComponent";
import List from "./List";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      about: false
    };
    this.toggleAbout = this.toggleAbout.bind(this);
  }

  toggleAbout(event) {
    this.setState({
      about: !this.state.about
    });
  }

  render() {
    return (
      <div className="main">
        <h1>Artopod</h1>
        <div className="about">
          <button className="button" type="button" onClick={this.toggleAbout}>
            About
          </button>
          {this.state.about ? <About /> : null}
        </div>
        <div className="map">
          <MapComponent />
        </div>
        <div>
          <List />
        </div>
      </div>
    );
  }
}

export default Main;
