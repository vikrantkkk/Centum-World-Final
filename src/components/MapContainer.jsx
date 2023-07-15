import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
const MapContainer = (props) => {
    console.log(props.data.lat);
    const location = {
        lat: props.data.lat,
        lng: props.data.lng
      };
      console.log(location)
  return (
    <Map
      google={props.google}
      zoom={14}
      style={{ width: '100%', height: '100%' }}
      initialCenter={location}
    >
    <Marker position={location} />
    </Map>   
  );
};
export default GoogleApiWrapper({
  apiKey: 'AIzaSyA6di8EVDPAl72ukc1H8DRkWG2QIHz2joY'
})(MapContainer);
