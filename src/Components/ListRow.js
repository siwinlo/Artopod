import React from "react";
import { connect } from "react-redux";
import { deselectExhibition } from "../store/reducer";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";
import SingleExhibition from "./SingleExhibition";

class ListRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      singleView: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.toggleSingleView = this.toggleSingleView.bind(this);
  }

  handleClick(event) {
    this.props.deselectExhibition(this.props.row);
  }

  toggleSingleView(event) {
    this.setState({ singleView: !this.state.singleView });
  }

  render() {
    return (
      <div className="list-row">
        <div className="deselect-icon" onClick={this.handleClick}>
          <IndeterminateCheckBoxIcon />
        </div>
        <div className="list-row-info" onClick={this.toggleSingleView}>
          {!this.state.singleView ? (
            <div>
              <p>
                <em>{this.props.row.title}</em> at {this.props.row.gallery}
              </p>

              <p>{this.props.row.hours}</p>
              <p>{this.props.row.distance.toFixed(2)}mi away</p>
              <div className="expand">
                <ExpandMoreIcon />
              </div>
            </div>
          ) : (
            <SingleExhibition exh={this.props.row} />
          )}
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
