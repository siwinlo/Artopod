import React from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";

import { connect } from "react-redux";
import { getExhibitions, getSelected, setLocation } from "../store/reducer";

class MapComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      center: {
        lat: 40.7485,
        lng: -73.9857
      },
      location: {},
      zoom: 14
    };
  }
  async componentDidMount() {
    await this.props.getExhibitions();
    await this.props.getSelected();
    this.setState({
      center: {
        lat: this.props.location.lat,
        lng: this.props.location.long
      }
    });
  }

  render() {
    return (
      <div className="map-container">
        <div id="map">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyCTILRbtZ7JJi2hgtJkL5SoCSJ0Tq9mwPA"
            }}
            center={this.state.center}
            defaultZoom={this.state.zoom}
          >
            {this.props.exhibitions.map(exh => (
              <Marker
                key={exh.id}
                lat={exh.latitude}
                lng={exh.longitude}
                exh={exh}
                selected={this.props.selected.includes(exh) ? true : false}
              />
            ))}
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  exhibitions: state.exhibitions,
  selected: state.selected,
  location: state.location
});

const mapDispatchToProps = dispatch => ({
  getExhibitions: () => dispatch(getExhibitions()),
  getSelected: () => dispatch(getSelected())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapComponent);
