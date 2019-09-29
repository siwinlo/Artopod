import React from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
import { PersonPin } from "./PersonPin";
import { Loading } from "./Loading";
import { connect } from "react-redux";
import {
  getExhibitions,
  getSelected,
  setClosest,
  setLocation
} from "../store/reducer";

class MapComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      userLocation: {
        lat: 0,
        lng: 0
      },
      zoom: 14,
      loading: true
    };
    this.loadExhibitions = this.loadExhibitions.bind(this);
  }
  async componentDidMount() {
    await navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
      this.setState({
        userLocation: { lat: latitude, lng: longitude },
        loading: false
      });
      if (this.state.loading === false) {
        this.loadExhibitions();
      }
    });
  }

  async loadExhibitions() {
    await this.props.setLocation(this.state.userLocation);
    await this.props.getExhibitions(this.state.userLocation);
    await this.props.setClosest(this.state.userLocation);
    await this.props.getSelected();
  }

  render() {
    if (this.state.loading) {
      return <Loading />;
    }
    return (
      <div className="map-container">
        <div id="map">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: process.env.REACT_APP_GoogleMapsKey
            }}
            center={this.state.userLocation}
            defaultZoom={this.state.zoom}
          >
            <PersonPin
              lat={this.props.location.lat}
              lng={this.props.location.lng}
            />

            {this.props.exhibitions.map(exh => (
              <Marker
                key={exh.id}
                lat={exh.lat}
                lng={exh.lng}
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
  getExhibitions: location => dispatch(getExhibitions(location)),
  getSelected: () => dispatch(getSelected()),
  setClosest: location => dispatch(setClosest(location)),
  setLocation: location => dispatch(setLocation(location))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapComponent);
