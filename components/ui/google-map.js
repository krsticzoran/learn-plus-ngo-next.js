"use client";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "600px",
};

const center = {
  lat: 45.5637967907211,
  lng: 18.669181629740997,
};

export default function GoogleMapComponent() {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (loadError) {
    return (
      <div
        className="bg-red-100 text-red-500 text-center p-4"
        style={{ height: "600px" }}
      >
        Failed to load Google Maps
      </div>
    );
  }

  if (!isLoaded || typeof google === "undefined") {
    return (
      <div
        className="bg-white flex justify-center items-center"
        style={{
          height: "600px",
        }}
      >
        <p className="text-gray-500">Loading Map...</p>
      </div>
    );
  }

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
      <Marker position={center} />
    </GoogleMap>
  );
}
