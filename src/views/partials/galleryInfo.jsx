import { useEffect } from "react";

const GalleryInfo = (props) => {
  useEffect(() => {}, [props.selectedGallery]);
  if (!props.selectedGallery) {
    return null;
  }
  return (
    // TODO Add map view
    <div className="border border-gray-300 p-4 m-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold">
        {props.selectedGallery.galleryName}
      </h2>
      <p className="text-sm text-gray-700">
        Native Name: {props.selectedGallery.galleryNativeName}
      </p>
      <p className="text-sm text-gray-700">
        City: {props.selectedGallery.galleryCity}
      </p>
      <p className="text-sm text-gray-700">
        Address: {props.selectedGallery.galleryAddress}
      </p>
      <p className="text-sm text-gray-700">
        Country: {props.selectedGallery.galleryCountry}
      </p>
      <p>
        <a
          href={props.selectedGallery.galleryWebSite}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700"
        >
          Visit Gallery
        </a>
      </p>
      <button
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => {
          props.addToFavourites(props.selectedGallery);
          props.displayPaintings(props.selectedGallery);
        }}
      >
        Add To Favourites
      </button>
    </div>
  );
};

export default GalleryInfo;
