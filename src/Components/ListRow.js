import React from "react";
import { connect } from "react-redux";
import { deselectExhibition } from "../store/reducer";

import CancelIcon from "@material-ui/icons/Cancel";

class ListRow extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.deselectExhibition(this.props.row);
  }
  render() {
    return (
      <div className="list-row">
        <div className="list-row-info">
          <p>
            <i>{this.props.row.title}</i> at {this.props.row.gallery};{" "}
          </p>

          <p>{this.props.row.hours}</p>
        </div>

        <div className="deselect-icon" onClick={this.handleClick}>
          <CancelIcon />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  deselectExhibition: exh => dispatch(deselectExhibition(exh))
});

export default connect(
  null,
  mapDispatchToProps
)(ListRow);
