import React from 'react'
import GoogleMaps from 'simple-react-google-maps'

const Map = () => (
  <GoogleMaps
    apiKey={'AIzaSyBRLnip2mG17LJD6fW57rRjsN7XW5gHztY'}
    style={{height: "400px", width: "100%"}}
    zoom={15}
    center={{lat: 49.1964, lng: -123.0047002}}
    markers={{lat: 49.1964, lng: -123.0047002}}
  />
)

export default Map
