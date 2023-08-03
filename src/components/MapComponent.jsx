import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const MapContainer = (props) => {
  const mapStyles = {
    width: '50%',
    // position:,
    height: '400px',
  };

  const defaultCenter = {
    lat: 40.7128,
    lng: -74.006,
  };

  return (
    <Map
      google={props.google}
      zoom={14}
      style={mapStyles}
      initialCenter={defaultCenter}
    >
      <Marker position={defaultCenter} />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyD59YY6PcR25dpkpXmyJ-0y_cCkUJYWamI',
})(MapContainer);
