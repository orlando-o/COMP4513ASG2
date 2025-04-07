import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import LoginPage from "./views/loginPage";
import GalleryView from "./views/galleryView";
import GenreView from "./views/genreView";
import PaintingView from "./views/paintingView";
import ArtistView from "./views/artistView";
import FavoritesModal from "./views/partials/modals/favouritesModal";
import { ToastContainer, toast } from "react-toastify";
import AboutView from "./views/aboutView";

function App() {
  const navigate = useNavigate(); // https://www.geeksforgeeks.org/reactjs-usenavigate-hook/
  const [favouriteGalleries, setFavouriteGalleries] = useState([]);
  const [favouriteArtists, setFavouriteArtists] = useState([]);
  const [favouritePaintings, setFavouritePaintings] = useState([]);
  const [showFavourites, setFavouritesModal] = useState(false);
  function favouritesEmpty() {
    if (
      favouriteArtists.length ||
      favouriteGalleries.length ||
      favouritePaintings.length
    ) {
      return false;
    } else {
      return true;
    }
  }
  function deleteSingleFavourite(item) {
    if (item.artistId) {
      setFavouriteArtists(favouriteArtists.filter((fav) => fav !== item));
    } else if (item.galleryId) {
      setFavouriteGalleries(favouriteGalleries.filter((fav) => fav !== item));
    } else if (item.paintingId) {
      setFavouritePaintings(favouritePaintings.filter((fav) => fav !== item));
    }
  }
  function closeFavouritesModal() {
    setFavouritesModal(false);
  }
  function openFavouritesModal() {
    setFavouritesModal(true);
  }
  function emptyFavourites() {
    setFavouriteArtists([]);
    setFavouriteGalleries([]);
    setFavouritePaintings([]);
  }
  function addToFavourites(item) {
    let itemAdded = false;
    if (item.galleryId) {
      if (
        !favouriteGalleries.some(
          (gallery) => gallery.galleryId === item.galleryId
        )
      ) {
        setFavouriteGalleries([...favouriteGalleries, item]);
        itemAdded = true;
      }
    } else if (item.artistId) {
      if (
        !favouriteArtists.some((artist) => artist.artistId === item.artistId)
      ) {
        setFavouriteArtists([...favouriteArtists, item]);
        itemAdded = true;
      }
    } else if (item.paintingId) {
      if (
        !favouritePaintings.some(
          (painting) => painting.paintingId === item.paintingId
        )
      ) {
        setFavouritePaintings([...favouritePaintings, item]);
        itemAdded = true;
      }
    }
    if (itemAdded) {
      toast("Added to Favourites!", { type: "success" }); // https://fkhadra.github.io/react-toastify/api/toast
    } else if (!itemAdded) {
      toast("Item already in favourites.", { type: "error" }); // https://fkhadra.github.io/react-toastify/api/toast
    }
  }
  function redirect(target) {
    navigate(`/${target}`);
  }
  async function fetchApi(endpoint) {
    const response = getStoredResponse(endpoint);
    if (!response) {
      const url =
        "https://comp4513-a1-orlando-ormon.onrender.com/api/" + endpoint;
      console.log("Fetching from:", url);
      try {
        const response = await fetch(url);
        const data = await response.json();
        storeResponse(JSON.stringify(data), endpoint); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
        return data;
      } catch (error) {
        console.error("Error fetching:", error);
      }
    } else {
      console.log("Fetched from localStorage: " + endpoint);
      return response;
    }
  }
  function storeResponse(resp, endpoint) {
    localStorage.setItem(endpoint, resp); // https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
  }
  function getStoredResponse(endpoint) {
    return JSON.parse(localStorage.getItem(endpoint)); // https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage && https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
  }

  useEffect(() => {
    async () => {
      await fetchApi("");
    };
  }, []); // waking up the api because it has a wait time of like 50 seconds on startup, just incase user is browsing content that is stored in localStorage and wants to get new information later

  return (
    <main>
      <div>
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          theme="light"
        />
        {/* https://github.com/fkhadra/react-toastify/tree/main */}
      </div>
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-gray-500/30 ${
          showFavourites ? "" : "hidden"
        }`}
      >
        <FavoritesModal
          favouriteArtists={favouriteArtists}
          favouriteGalleries={favouriteGalleries}
          favouritePaintings={favouritePaintings}
          closeModal={closeFavouritesModal}
          emptyFavourites={emptyFavourites}
          deleteSingleFavourite={deleteSingleFavourite}
        />
      </div>
      <Routes>
        {/* https://www.w3schools.com/react/react_router.asp */}
        <Route index element={<LoginPage redirect={redirect} />} />
        <Route
          path="gallery"
          element={
            <GalleryView
              redirect={redirect}
              addToFavourites={addToFavourites}
              fetchApi={fetchApi}
              openFavouritesModal={openFavouritesModal}
              favouritesEmpty={favouritesEmpty}
            />
          }
        />
        <Route
          path="artist"
          element={
            <ArtistView
              redirect={redirect}
              addToFavourites={addToFavourites}
              fetchApi={fetchApi}
              favouritesEmpty={favouritesEmpty}
              openFavouritesModal={openFavouritesModal}
            />
          }
        />
        <Route
          path="genre"
          element={
            <GenreView
              redirect={redirect}
              addToFavourites={addToFavourites}
              favouritesEmpty={favouritesEmpty}
              fetchApi={fetchApi}
              openFavouritesModal={openFavouritesModal}
            />
          }
        />
        <Route
          path="painting"
          element={
            <PaintingView
              redirect={redirect}
              addToFavourites={addToFavourites}
              fetchApi={fetchApi}
              storeResponse={storeResponse}
              favouritesEmpty={favouritesEmpty}
              getStoredResponse={getStoredResponse}
              openFavouritesModal={openFavouritesModal}
            />
          }
        />
        <Route
          path="about"
          element={
            <AboutView
              redirect={redirect}
              favouritesEmpty={favouritesEmpty}
              openFavouritesModal={openFavouritesModal}
            />
          }
        />
      </Routes>
    </main>
  );
}

export default App;
