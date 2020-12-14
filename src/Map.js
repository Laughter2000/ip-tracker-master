import React from "react";
import L from "leaflet";
import { MapContainer, Marker, TileLayer } from "react-leaflet"; //eslint-disable-line

//eslint-disable-next-line
const locationIcon = L.icon({
  iconUrl: require("./images/icon-location.svg"),
  iconRetinaUrl: require("./images/icon-location.svg"),
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [35, 35],
  className: "leaflet-icon",
});

const Maps = ({ lat, lng }) => {
  return (
    <MapContainer center={[lat, lng]} zoom={13}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker key={lat} position={[lat, lng]} icon={locationIcon}></Marker>
    </MapContainer>
  );
};

export default Maps;
