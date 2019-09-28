import React from "react";
import { connect } from "react-redux";
import ListRow from "./ListRow";
import { getExhibitions, getSelected } from "../store/reducer";
//import Form from "./Form";
import About from "./About";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      about: false
    };
    this.toggleAbout = this.toggleAbout.bind(this);
  }
  async componentDidMount() {
    await this.props.getSelected();
  }

  toggleAbout(event) {
    this.setState({
      about: !this.state.about
    });
  }

  render() {
    return (
      <div>
        <div className="banner">
          <h1 onClick={this.toggleAbout}>Artopod</h1>
          <div className="about">{this.state.about ? <About /> : null}</div>

          {/* <Form /> */}
        </div>
        <div className="list-container">
          {this.props.selected.length > 0 ? (
            this.props.selected.map(row => (
              <ListRow key={row.id * Math.random()} row={row} />
            ))
          ) : (
            <h3>Select some exhibitions to begin</h3>
          )}
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
