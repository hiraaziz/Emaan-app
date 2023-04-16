import React, { useRef } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
const Map = () => {
  const myRef = useRef();
  return (
    <div className="w-full h-[300px]">
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
        styles={{ width: "100vw", height: "100vh" }}
        ref={myRef}
      >
        <TileLayer url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=v7ImGX8aDYAtx3sIJQc2" />
      </MapContainer>
    </div>
  );
};

export default Map;
