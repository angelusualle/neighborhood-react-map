import React from 'react';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    InfoWindow
  } from "react-google-maps";
  
  const Map = withScriptjs(withGoogleMap(props =>
    <GoogleMap
      defaultZoom={16}
      defaultCenter={{ lat: 28.05, lng: -82.504 }}
      defaultOptions={{styles: require("./MapStyle.json")}}
    >
    {props.locations.map((l, i) => 
      <Marker
        position={{ lat: l.location.lat, lng: l.location.lng }}
        title= {l.title}
        key = {i}
        onClick={(e) => props.selectRestaurant(l)}
      >
            {l === props.selectedLocation && <InfoWindow onCloseClick={props.onToggleOpen}>
        <span>test</span>
      </InfoWindow>}
      </Marker>
    )}
    </GoogleMap>
  ));
  
  export default Map;