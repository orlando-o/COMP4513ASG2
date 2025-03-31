import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import LoginPage from "./views/loginPage";
import GalleryView from "./views/galleryView";
import GenreView from "./views/genreView";
import PaintingView from "./views/paintingView";
import ArtistView from "./views/artistView";

function App() {
  const navigate = useNavigate(); // https://www.geeksforgeeks.org/reactjs-usenavigate-hook/
  const [favouriteGalleries, setFavouriteGalleries] = useState([]);
  const [favouriteArtists, setFavouriteArtists] = useState([]);
  const [favouritePaintings, setFavouritePaintings] = useState([]);
  function addToFavourites(item) {
    if (item.galleryId) {
      if (
        !favouriteGalleries.some(
          (gallery) => gallery.galleryId === item.galleryId
        )
      ) {
        setFavouriteGalleries([...favouriteGalleries, item]);
      }
    } else if (item.artistId) {
      if (
        !favouriteArtists.some((artist) => artist.artistId === item.artistId)
      ) {
        setFavouriteArtists([...favouriteArtists, item]);
      }
    } else if (item.paintingId) {
      if (
        !favouritePaintings.some(
          (painting) => painting.paintingId === item.paintingId
        )
      ) {
        setFavouritePaintings([...favouritePaintings, item]);
      }
    }
  }
  function redirect(target) {
    navigate(`/${target}`);
  }

  async function fetchApi(endpoint) {
    const url =
      "https://comp4513-a1-orlando-ormon.onrender.com/api/" + endpoint;
    console.log("Fetching from:", url);

    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching:", error);
    }
  }

  return (
    <main>
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
            />
          }
        />
        <Route
          path="genre"
          element={
            <GenreView
              redirect={redirect}
              addToFavourites={addToFavourites}
              fetchApi={fetchApi}
            />
          }
        />
        <Route path="painting" element={<PaintingView redirect={redirect} />} />
      </Routes>
    </main>
  );
}

export default App;
