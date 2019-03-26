import React from 'react'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap
} from "react-google-maps";

const Map = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    defaultZoom={17}
    defaultCenter={{ lat: 49.196439, lng: -123.002486 }}>
  </GoogleMap>
));

export default Map
