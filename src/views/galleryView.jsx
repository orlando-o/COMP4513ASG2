/* eslint-disable no-unused-vars */
import Header from "./partials/header";
import { useEffect, useState } from "react";
import GalleryInfo from "./partials/galleryInfo";
import PaintingsTable from "./partials/paintingTables";
import GalleryList from "./partials/galleryList";
import "ldrs/ring";

const GalleryView = ({
  redirect,
  addToFavourites,
  fetchApi,
  openFavouritesModal,
  favouritesEmpty,
}) => {
  const [galleryList, setGalleryList] = useState([]);
  const [selectedGallery, setGallery] = useState(null);
  const [paintingList, setPaintings] = useState([]);
  const [loading, setLoading] = useState(true);

  async function displayPaintings(gallery) {
    if (!gallery) return;

    setPaintings(await fetchApi(`paintings/galleries/${gallery.galleryId}`));
  }

  useEffect(() => {
    displayPaintings(selectedGallery);
  }, [selectedGallery]);

  useEffect(() => {
    async function fetchGalleries() {
      const galleries = await fetchApi("galleries");
      const sortedGalleries = galleries.sort((a, b) => {
        return a.galleryName.localeCompare(b.galleryName);
      });
      setGalleryList(sortedGalleries);
    }
    fetchGalleries();
  }, []);

  useEffect(() => {
    if (galleryList.length > 0) {
      setGallery(galleryList[0]);
      displayPaintings(galleryList[0]);
      setLoading(false);
    }
  }, [galleryList]);

  return (
    <div>
      <Header
        redirect={redirect}
        openFavouritesModal={openFavouritesModal}
        favouritesEmpty={favouritesEmpty}
      />
      <div className="contentContainer flex flex-row">
        {loading && (
          <div className="flex flex-col justify-center items-center h-screen w-full bg-[#f0fdf4] text-[#065f46] text-center px-4">
            <p className="text-xl font-semibold mb-2 animate-pulse">
              Loading...
            </p>
            <p className="text-sm">
              Please allow for up to 1 min upon startup due to API warmup.
            </p>
          </div>
        )}
        {galleryList.length > 0 && (
          <GalleryList
            setGallery={setGallery}
            displayPaintings={displayPaintings}
            galleryList={galleryList}
          />
        )}
        {selectedGallery && (
          <GalleryInfo
            selectedGallery={selectedGallery}
            addToFavourites={addToFavourites}
          />
        )}
        {paintingList.length > 0 && (
          <PaintingsTable
            selectedOption={selectedGallery}
            paintingList={paintingList}
            addToFavourites={addToFavourites}
          />
        )}
      </div>
    </div>
  );
};

export default GalleryView;
