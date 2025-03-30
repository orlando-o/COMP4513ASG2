/* eslint-disable no-unused-vars */
import Header from "./partials/header";
import { useEffect, useState } from "react";
import GalleryInfo from "./partials/galleryInfo";
import PaintingsTable from "./partials/paintingsTable";
import GalleryList from "./partials/galleryList";

const GalleryView = (props) => {
  const [galleryList, setGalleryList] = useState([]);
  const [selectedGallery, setGallery] = useState(null);
  const [paintingList, setPaintings] = useState([]);

  function displayPaintings(gallery) {
    if (!gallery) return;

    async function fetchPaintings() {
      const url = `https://comp4513-a1-orlando-ormon.onrender.com/api/paintings/galleries/${gallery.galleryId}`;
      console.log("Fetching paintings from:", url);

      try {
        const response = await fetch(url);
        const data = await response.json();
        setPaintings(data);
      } catch (error) {
        console.error("Error fetching paintings:", error);
      }
    }

    fetchPaintings();
  }

  useEffect(() => {
    displayPaintings(selectedGallery);
  }, [selectedGallery]);

  useEffect(() => {
    async function fetchGalleries() {
      const url =
        "https://comp4513-a1-orlando-ormon.onrender.com/api/galleries";
      console.log("Fetching galleries from:", url);

      try {
        const response = await fetch(url);
        const data = await response.json();
        setGalleryList(data);
      } catch (error) {
        console.error("Error fetching galleries:", error);
      }
    }

    fetchGalleries();
  }, []);

  useEffect(() => {
    if (galleryList.length > 0) {
      setGallery(galleryList[0]);
      displayPaintings(galleryList[0]);
    }
  }, [galleryList]);

  return (
    <div className="w-full h-full">
      <Header redirect={props.redirect} />
      <div className="contentContainer flex flex-row">
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
            addToFavourites={props.addToFavourites}
          />
        )}
        {paintingList.length > 0 && (
          <PaintingsTable
            selectedGallery={selectedGallery}
            addToFavourites={props.addToFavourites}
            paintingList={paintingList}
          />
        )}
      </div>
    </div>
  );
};

export default GalleryView;
