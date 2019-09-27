import React from "react";
import { connect } from "react-redux";
import { selectExhibition, deselectExhibition } from "../store/reducer";

class MapItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const exh = this.props.exh;
    if (this.props.selected.includes(exh)) {
      deselectExhibition(exh);
      console.log("deselected");
    } else {
      selectExhibition(exh);
      console.log("selected");
    }
  }

  render() {
    const exh = this.props.exh;
    const message = this.props.selected.includes(exh) ? "Deselect" : "Select";

    return (
      <div className="map-item">
        <p>{exh.title}</p>
        <p>{exh.gallery}</p>
        <p onClick={this.handleClick}>{message}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selected: state.selected
});

const mapDispatchToProps = dispatch => ({
  selectExhibition: exh => dispatch(selectExhibition(exh)),
  deselectExhibition: exh => dispatch(deselectExhibition(exh))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapItem);
