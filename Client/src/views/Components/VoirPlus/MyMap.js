import React, { useEffect, useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import Skeleton from "@material-ui/lab/Skeleton";
import MarkLogo from "../../../assets/img/homeicon.png";
const containerStyle = {
  height: "700px",
};

function MyMap(props) {
  const [zoom, setZoom] = useState(18);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDKjkINKsGV9eXt7lmhpc9mE2vF_yZaou0",
  });

  const [map, setMap] = React.useState(null);
  const [mapRef, setMapRef] = useState(null);
  const [selected, setselected] = React.useState();

  const onLoad = (map) => {
    // Store a reference to the google map instance in state
    setMap(map);
  };

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={props.markers}
      zoom={zoom}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker position={props.markers} clickable icon={MarkLogo}></Marker>
    </GoogleMap>
  ) : (
    <Skeleton variant="rect" animation="wave" />
  );
}
export default MyMap;
