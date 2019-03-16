import React from 'react'
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = () => (
  <div style={{ height: '400px', width: '100%' }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: 'AIzaSyBRLnip2mG17LJD6fW57rRjsN7XW5gHztY' }}
      defaultCenter={{
        lat: 49.1964138,
        lng: -123.0047447
      }}
      defaultZoom={16}>
      <AnyReactComponent
        lat={49.1964138}
        lng={-123.0047447}
        text="My Marker"
      />
    </GoogleMapReact>
  </div>
)


export default Map
