import React from "react";
import RoomIcon from "@material-ui/icons/Room";
import MapItem from "./MapItem";
import MapComponent from "./MapComponent";

class Marker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mouse: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.unShow = this.unShow.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mouseup", this.unShow);
  }

  componentWillUnmount() {
    document.removeEventListener("mouseup", this.unShow);
  }

  unShow(e) {
    this.setState({ mouse: false });
  }
  handleClick(e) {
    this.setState({ mouse: !this.state.mouse });
  }

  render() {
    const markerClass = this.props.selected ? "marker-selected" : "marker";
    return (
      <div className={markerClass} onClick={() => this.handleClick()}>
        {this.state.mouse ? <MapItem exh={this.props.exh} /> : <RoomIcon />}
      </div>
    );
  }
}

export default Marker;
