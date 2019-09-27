import React from "react";
import RoomIcon from "@material-ui/icons/Room";
import MapItem from "./MapItem";

class Marker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mouse: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ mouse: !this.state.mouse });
  }

  render() {
    const selectedMarker = (
      <div className="marker-selected" onClick={() => this.handleClick()}>
        {this.state.mouse ? <MapItem exh={this.props.exh} /> : <RoomIcon />}{" "}
      </div>
    );

    const marker = (
      <div className="marker" onClick={() => this.handleClick()}>
        {this.state.mouse ? <MapItem exh={this.props.exh} /> : <RoomIcon />}
      </div>
    );

    return this.props.selected === true ? selectedMarker : marker;
  }
}

export default Marker;
