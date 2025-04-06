import React from "react";
import { useMap } from "react-leaflet";
// this code was copied word for word from: https://medium.com/@ewelina14/my-first-react-application-using-a-leaflet-library-e376a852be85
function ChangeMapView({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

export default ChangeMapView;
