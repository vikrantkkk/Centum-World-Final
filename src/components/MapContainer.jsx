import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
const MapContainer = (props) => {
  const { location } = props;

  const locationOptions = {
    Kolkata: {
        lat: 22.621105,
        lng: 88.464406,
    },
    Bangalore: {
        lat: 12.910055,
        lng: 77.652024,
    },
    Jharkhand: {
      lat: 22.534754,
      lng: 85.820367
    }
  };

  const selectedLocation = locationOptions[location];
  return (
    <Map
      google={props.google}
      zoom={16}
      className="w-[100%] h-[100%]"
      initialCenter={{
        lat: selectedLocation.lat,
        lng: selectedLocation.lng
      }}
      center={selectedLocation}
    >
    <Marker position={{ lat: selectedLocation.lat, lng: selectedLocation.lng }} />
    </Map>   
  );
};
export default GoogleApiWrapper({
  apiKey: 'AIzaSyA6di8EVDPAl72ukc1H8DRkWG2QIHz2joY'
})(MapContainer);
