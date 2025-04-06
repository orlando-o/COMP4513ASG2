/* eslint-disable no-unused-vars */
import Header from "./partials/header";
import { useEffect, useState } from "react";
import GalleryInfo from "./partials/galleryInfo";
import PaintingsTable from "./partials/paintingTables";
import GalleryList from "./partials/galleryList";
import "ldrs/bouncy";

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
          <div className="flex justify-center items-center h-100 w-full">
            <l-Bouncy size="60" color="black" />{" "}
            {/* https://uiball.com/ldrs/ */}
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
