import React from "react";
import { connect } from "react-redux";
import ListRow from "./ListRow";
import { getExhibitions, getSelected } from "../store/reducer";
import About from "./About";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      about: false,
      loading: true,
      message: "Finding exhibitions near you"
    };
    this.toggleAbout = this.toggleAbout.bind(this);
    this.isLoading = this.isLoading.bind(this);
  }
  async componentDidMount() {
    await this.props.getSelected();
  }

  toggleAbout(event) {
    this.setState({
      about: !this.state.about
    });
  }

  isLoading() {
    if (this.props.exhibitions.length > 0) {
      this.setState({
        loading: false,
        message: "Select exhibitions from the map"
      });
    }
  }

  render() {
    return (
      <div>
        <div className="banner">
          <h1 onClick={this.toggleAbout}>Artopod</h1>
          <div className="about" onClick={this.toggleAbout}>
            {this.state.about ? <About /> : null}
          </div>
        </div>
        <div className="list-container">
          {this.props.selected.length > 0 ? (
            this.props.selected.map(row => <ListRow key={row.id} row={row} />)
          ) : (
            <h3 className="loading">{this.state.message}</h3>
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
