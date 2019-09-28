import React from "react";
import { connect } from "react-redux";
import { selectExhibition, deselectExhibition } from "../store/reducer";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";
import AddBoxIcon from "@material-ui/icons/AddBox";

class MapItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const exh = this.props.exh;
    if (this.props.selected.includes(exh)) {
      this.props.deselectExhibition(exh);
    } else {
      this.props.selectExhibition(exh);
    }
  }

  render() {
    const exh = this.props.exh;

    return (
      <div className="map-item">
        {this.props.selected.includes(exh) ? (
          <div className="map-deselect-icon" onClick={this.handleClick}>
            <IndeterminateCheckBoxIcon />
          </div>
        ) : (
          <div className="map-select-icon" onClick={this.handleClick}>
            <AddBoxIcon />
          </div>
        )}
        <p>
          <i>{exh.title}</i>
        </p>
        <p>{exh.gallery}</p>
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
