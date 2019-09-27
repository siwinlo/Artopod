import React from "react";
import { connect } from "react-redux";
import { selectExhibition, deselectExhibition } from "../store/reducer";
import CancelIcon from "@material-ui/icons/Cancel";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

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
        <div className="map-deselect-icon" onClick={this.handleClick}>
          {this.props.selected.includes(exh) ? (
            <CancelIcon />
          ) : (
            <CheckCircleIcon />
          )}
        </div>

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
