import React from "react";
import PropTypes from "prop-types";
import Leaflet from "leaflet";
import { Map as LeafletMap, TileLayer } from "react-leaflet";

import { showDataOnMap } from "./util";
import "./styles/Map.css";

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

Map.propTypes = {
  /**
   * Data that comes from the api about all countries including - country name,
   * cases, deaths and recovered(all needed for the map).
   */
  countries: PropTypes.array.isRequired,
  /**
   * Depending on the caseType, the circles on the map represent the maount of {caseType} in that country.
   */
  casesType: PropTypes.oneOf(["cases", "deaths", "recovered"]),
  /**
   * The coordinates where the map will be centered.
   */
  center: PropTypes.shape({ lat: PropTypes.number, lng: PropTypes.number }),
  /**
   * How zoomed the map will be.
   */
  zoom: PropTypes.number.isRequired,
};

export default Map;
