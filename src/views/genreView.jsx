import Header from "./partials/header";
import GenreList from "./partials/genreList";
import GenreInfo from "./partials/genreInfo";
import { GenrePaintingsTable } from "./partials/paintingTables";
import { useState, useEffect } from "react";

const GenreView = ({ redirect, addToFavourites, fetchApi }) => {
  const [genreList, setGenreList] = useState([]);
  const [selectedGenre, setGenre] = useState(null);
  const [paintingList, setPaintings] = useState([]);

  async function displayPaintings(genre) {
    if (!genre) return;
    setPaintings(await fetchApi(`paintings/genre/` + genre.genreId));
  }

  useEffect(() => {
    async function fetchGenres() {
      setGenreList(await fetchApi("genres"));
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
    }
  }, [genreList]);

  return (
    <div className="w-full h-full overflow-auto max-h-100">
      <Header redirect={redirect} />
      <div className="contentContainer flex flex-row">
        <GenreList
          setGenre={setGenre}
          genreList={genreList}
          displayPaintings={displayPaintings}
        />
        <div>
          <GenreInfo
            addToFavourites={addToFavourites}
            selectedGenre={selectedGenre}
          />
          <GenrePaintingsTable
            selectedGenre={selectedGenre}
            paintingList={paintingList}
          />
        </div>
      </div>
    </div>
  );
};

export default GenreView;
