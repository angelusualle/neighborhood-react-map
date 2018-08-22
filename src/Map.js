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
        animation={(l === props.selectedLocation)? '1': '0'}
        onClick={(e) => props.selectRestaurant(l)}
      >
      {l === props.selectedLocation && <InfoWindow onCloseClick={props.onToggleOpen}>

      {l.yelpData ?  <div className="info-window">
          <h1>{l.title}</h1>
          <img src={l.yelpData.image_url} alt="Restaurant" className="thumbnail"/>
          <ul className="categories">
            {l.yelpData.categories.map((c, i) => <li key={i}>{c.title}</li>)}
          </ul>
          <h3>Phone:</h3>
          <span>{l.yelpData.display_phone}</span>
        </div>
        : <span>Loading...</span>
      }
      </InfoWindow>}
      </Marker>
    )}
    </GoogleMap>
  ));
  
  export default Map;