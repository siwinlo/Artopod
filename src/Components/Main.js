import React from "react";

import MapComponent from "./MapComponent";
import List from "./List";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      about: false
    };
  }

  render() {
    return (
      <div className="main">
        <div className="main-container">
          <div>
            <MapComponent />
          </div>
          <div>
            <List />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
