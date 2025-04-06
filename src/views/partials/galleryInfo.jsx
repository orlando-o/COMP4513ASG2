import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import ChangeMapView from "./changeMapView";

const GalleryInfo = ({ selectedGallery, addToFavourites }) => {
  if (!selectedGallery) {
    return null;
  }
  return (
    <div
      className="content galleryInfo w-2/5 border border-gray-300 p-4 m-4 rounded-lg shadow-md"
      id="galleryInfo"
    >
      <h2 className="text-xl font-semibold">{selectedGallery.galleryName}</h2>
      <p className="text-sm text-gray-700">
        Native Name: {selectedGallery.galleryNativeName}
      </p>
      <p className="text-sm text-gray-700">
        Address: {selectedGallery.galleryAddress}
      </p>
      <p className="text-sm text-gray-700">
        City: {selectedGallery.galleryCity}
      </p>
      <p className="text-sm text-gray-700">
        Country: {selectedGallery.galleryCountry}
      </p>
      <p>
        <a
          href={selectedGallery.galleryWebSite}
          target="_blank"
          className="text-gray-500 hover:text-gray-700"
        >
          Visit Gallery
        </a>
      </p>
      <button
        className="mt-2 px-4 py-2 bg-gray-500 rounded hover:bg-gray-600"
        onClick={() => {
          addToFavourites(selectedGallery);
        }}
      >
        Add To Favourites
      </button>

      <MapContainer // https://react-leaflet.js.org/docs/start-setup/
        center={[selectedGallery.latitude, selectedGallery.longitude]}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[selectedGallery.latitude, selectedGallery.longitude]}
        >
          <Popup>
            <a
              href={selectedGallery.galleryWebSite}
              target="_blank"
              className="text-gray-500 hover:text-gray-700"
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
