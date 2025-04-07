import Header from "./partials/header";
import GenreList from "./partials/genreList";
import GenreInfo from "./partials/genreInfo";
import PaintingsTable from "./partials/paintingTables";
import { useState, useEffect } from "react";
import "ldrs/bouncy";

const GenreView = ({
  redirect,
  addToFavourites,
  fetchApi,
  openFavouritesModal,
  favouritesEmpty,
}) => {
  const [genreList, setGenreList] = useState([]);
  const [selectedGenre, setGenre] = useState(null);
  const [paintingList, setPaintings] = useState([]);
  const [loading, setLoading] = useState(true);

  async function displayPaintings(genre) {
    if (!genre) return;
    setPaintings(await fetchApi("paintings/genre/" + genre.genreId));
  }

  useEffect(() => {
    async function fetchGenres() {
      const genres = await fetchApi("genres");
      const sortedGenres = genres.sort((a, b) => {
        return a.genreName.localeCompare(b.genreName);
      });
      setGenreList(sortedGenres);
    }
    fetchGenres();
  }, []);

  useEffect(() => {
    displayPaintings(selectedGenre);
  }, [selectedGenre]);

  useEffect(() => {
    if (genreList.length > 0) {
      setGenre(genreList[0]);
      displayPaintings(genreList[0]);
      setLoading(false);
    }
  }, [genreList]);

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
        {genreList.length > 0 && (
          <GenreList
            setGenre={setGenre}
            genreList={genreList}
            displayPaintings={displayPaintings}
          />
        )}
        <div>
          {selectedGenre && <GenreInfo selectedGenre={selectedGenre} />}
          {paintingList.length > 0 && (
            <PaintingsTable
              selectedOption={selectedGenre}
              paintingList={paintingList}
              addToFavourites={addToFavourites}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default GenreView;
