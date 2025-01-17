"use client";
import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "600px",
};

const center = {
  lat: 45.5637967907211,
  lng: 18.669181629740997,
};

export default function GoogleMapComponent() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div>
      {/* Placeholder */}
      {!isLoaded && (
        <div
          className="bg-white flex justify-center items-center"
          style={{
            height: "600px",
          }}
        >
          <p className="text-gray-500">Loading Map...</p>
        </div>
      )}

      {/* Google Map */}
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={12}
          onLoad={() => setIsLoaded(true)}
        >
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}
