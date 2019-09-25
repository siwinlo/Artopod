import React from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
import Form from "./Form";

class MapComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      center: {
        lat: 40.7485,
        lng: -73.9857
      },
      zoom: 12
    };
  }

  render() {
    return (
      <div className="map-container">
        <Form />
        <div id="map" style={{ height: "70vh", width: "70vh" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyCTILRbtZ7JJi2hgtJkL5SoCSJ0Tq9mwPA"
            }}
            defaultCenter={this.state.center}
            defaultZoom={this.state.zoom}
          >
            <Marker lat={40.7485} lng={-73.9857} text="My Marker" />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default MapComponent;
