import React from 'react'
import GoogleMapReact from 'google-map-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

const Marker = ({ icon }) => <FontAwesomeIcon icon={icon} />;

const Map = () => (
  <div style={{ height: '400px', width: '100%' }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: 'AIzaSyBRLnip2mG17LJD6fW57rRjsN7XW5gHztY' }}
      defaultCenter={{
        lat: 49.1964138,
        lng: -123.0047447
      }}
      defaultZoom={16}>
      <Marker
        lat={49.1964138}
        lng={-123.0047447}
        icon={faMapMarkerAlt}
      />
    </GoogleMapReact>
  </div>
)


export default Map
