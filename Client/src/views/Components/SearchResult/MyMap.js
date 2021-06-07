import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
  useLoadScript,
} from "@react-google-maps/api";
import Skeleton from "@material-ui/lab/Skeleton";

import ComponentItem from "./ComponentItem";

import MarkLogo from "../../../assets/img/homeicon.png";
const containerStyle = {
  height: "700px",
};

function MyMap(props) {
  const [center, setCenter] = useState({
    lat: 34.050202067856326,
    lng: -6.8127510558162125,
  });
  const [zoom, setZoom] = useState(5);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDKjkINKsGV9eXt7lmhpc9mE2vF_yZaou0",
  });

  const [map, setMap] = React.useState(null);
  const [mapRef, setMapRef] = useState(null);
  const [selected, setselected] = React.useState();

  const fitBounds = (map) => {
    const bounds = new window.google.maps.LatLngBounds();
    props.markers.map((place, index) => {
      bounds.extend(place);
      return index;
    });
    map.fitBounds(bounds);
  };

  useEffect(() => {
    // Met à jour le titre du document via l’API du navigateur
    if (map) fitBounds(map);
  }, [props.markers]);

  const onLoad = (map) => {
    // Store a reference to the google map instance in state
    setMap(map);
    // Fit map bounds to contain all markers
    fitBounds(map);
  };

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const [selectedCenter, setSelectedCenter] = useState(null);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={zoom}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {props.markers.map((pos, index) => (
        <Marker
          key={index}
          position={pos}
          clickable
          onClick={() => {
            setSelectedCenter({ ...pos, index: index });
          }}
          icon={MarkLogo}
        ></Marker>
      ))}
      {selectedCenter && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedCenter(null);
          }}
          position={{
            lat: selectedCenter.lat,
            lng: selectedCenter.lng,
          }}
        >
          <ComponentItem
            titre={props.datas[selectedCenter.index].titre}
            prix={props.datas[selectedCenter.index].prix}
            idL={props.datas[selectedCenter.index].id_loc}
            desc={props.datas[selectedCenter.index].description}
            img={props.datas[selectedCenter.index].image}
          />
        </InfoWindow>
      )}
    </GoogleMap>
  ) : (
    <Skeleton variant="rect" animation="wave" />
  );
}
export default MyMap;
