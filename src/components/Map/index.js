import React from 'react'
import GoogleMapReact from 'google-map-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

const Marker = ({ icon }) => <FontAwesomeIcon icon={icon} className="icon" />;

const Map = () => (
  <div className="map">
    <GoogleMapReact
      bootstrapURLKeys={{ key: 'AIzaSyA4abwXM9G_iVwESpU_QprIKOkRAgwGgbU' }}
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
