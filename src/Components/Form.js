import React from "react";
import { connect } from "react-redux";
import { setLocation } from "../store/reducer";

// add radio button for "open now"
//drop down menu for neighborhood doesn't work
class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      location: {
        lat: 40.7485,
        lng: -73.9857
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let locationString = event.target.value;
    let lat = locationString.split("/")[0];
    let lng = locationString.split("/")[1];
    this.setState({
      location: {
        lat: lat,
        lng: lng
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.setLocation(this.state.location);
    console.log("LOCATION SUBMITTED", this.state.location);
  }
  render() {
    return (
      <div className="map-input">
        <form onSubmit={this.handleSubmit}>
          <label>Where are you? </label>
          <input type="text" name="place" />
          <div id="dropdown-menu">
            <b>Neighborhood: </b>
            <select
              id="location"
              onChange={this.handleChange}
              value={this.state.location}
            >
              <option value="40.746848474087/-74.006419898148">Chelsea</option>
              <option value="40.720099685062/-73.990330953373">Downtown</option>
              <option value="40.782991884098/-73.958968179099">Uptown</option>
            </select>
          </div>
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  location: state.location
});
const mapDispatchToProps = dispatch => ({
  setLocation: location => dispatch(setLocation(location))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
