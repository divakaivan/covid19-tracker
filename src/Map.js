import React from "react";
import Leaflet from "leaflet";
import { Map as LeafletMap, TileLayer } from "react-leaflet";

import { showDataOnMap } from "./util";
import "./Map.css";

function Map({ countries, casesType, center, zoom }) {
  const corner1 = Leaflet.latLng(-120, -240);
  const corner2 = Leaflet.latLng(120, 240);
  const bounds = Leaflet.latLngBounds(corner1, corner2);
  return (
    <div className="map">
      <LeafletMap
        minZoom={1.5}
        maxBounds={bounds}
        maxBoundsViscosity={1.0}
        center={center}
        zoom={zoom}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {showDataOnMap(countries, casesType)}
      </LeafletMap>
    </div>
  );
}

export default Map;
