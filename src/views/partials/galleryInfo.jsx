import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import ChangeMapView from "./changeMapView";

const GalleryInfo = ({ selectedGallery, addToFavourites }) => {
  if (!selectedGallery) {
    return null;
  }
  return (
    <div className="content galleryInfo w-2/5 border border-green-300 bg-white p-6 m-4 rounded-xl shadow-lg space-y-2">
  <h2 className="text-2xl font-bold text-green-700">{selectedGallery.galleryName}</h2>
  <p className="text-sm text-green-800">
    Native Name: {selectedGallery.galleryNativeName}
  </p>
  <p className="text-sm text-green-800">
    Address: {selectedGallery.galleryAddress}
  </p>
  <p className="text-sm text-green-800">
    City: {selectedGallery.galleryCity}
  </p>
  <p className="text-sm text-green-800">
    Country: {selectedGallery.galleryCountry}
  </p>
  <p>
    <a
      href={selectedGallery.galleryWebSite}
      target="_blank"
      className="text-orange-500 hover:text-orange-700 transition"
    >
      Visit Gallery
    </a>
  </p>
  <button
    className="mt-3 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
    onClick={() => {
      addToFavourites(selectedGallery);
    }}
  >
    Add To Favourites
  </button>

  <MapContainer
    className="rounded-lg overflow-hidden mt-4"
    center={[selectedGallery.latitude, selectedGallery.longitude]}
    zoom={13}
    scrollWheelZoom={true}
  >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[selectedGallery.latitude, selectedGallery.longitude]}>
      <Popup>
        <a
          href={selectedGallery.galleryWebSite}
          target="_blank"
          className="text-orange-500 hover:text-orange-700"
        >
          {selectedGallery.galleryNativeName}
        </a>
        <br /> {selectedGallery.galleryAddress} <br />
        {selectedGallery.galleryCity}, {selectedGallery.galleryCountry}
      </Popup>
    </Marker>
    <ChangeMapView
      center={[selectedGallery.latitude, selectedGallery.longitude]}
      zoom={13}
    />
  </MapContainer>
</div>

  );
};

export default GalleryInfo;
