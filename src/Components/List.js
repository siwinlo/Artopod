import React from "react";
import { connect } from "react-redux";
import ListRow from "./ListRow";
import { getExhibitions, getSelected } from "../store/reducer";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: []
    };
  }
  async componentDidMount() {
    await this.props.getExhibitions();
    await this.props.getSelected();
  }

  render() {
    return (
      <div>
        <div className="list-container">
          {this.props.selected.map(row => (
            <ListRow key={row.id * Math.random()} row={row} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  exhibitions: state.exhibitions,
  selected: state.selected
});

const mapDispatchToProps = dispatch => ({
  getExhibitions: () => dispatch(getExhibitions()),
  getSelected: () => dispatch(getSelected())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
