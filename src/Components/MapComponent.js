import React from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";

import { connect } from "react-redux";
import { getExhibitions, getSelected, setClosest } from "../store/reducer";

class MapComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      center: {
        lat: 0,
        lng: 0
      },
      zoom: 14
    };
  }
  async componentDidMount() {
    await this.props.getExhibitions(this.state.center);
    await this.props.getSelected();
    this.setState({
      center: this.props.location
    });
    await this.props.setClosest(this.state.center);
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
  getExhibitions: location => dispatch(getExhibitions(location)),
  getSelected: () => dispatch(getSelected()),
  setClosest: location => dispatch(setClosest(location))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapComponent);
