import Header from "./partials/header";
import { useState, useEffect } from "react";
import PaintingsTable from "./partials/paintingTables";
import ArtistList from "./partials/artistList";
import ArtistInfo from "./partials/artistInfo";
import "ldrs/ring";

const ArtistView = ({
  redirect,
  addToFavourites,
  fetchApi,
  openFavouritesModal,
  favouritesEmpty,
}) => {
  const [artistList, setArtistList] = useState([]);
  const [selectedArtist, setArtist] = useState(null);
  const [paintingList, setPaintings] = useState([]);
  const [loading, setLoading] = useState(true);

  async function displayPaintings(artist) {
    if (!artist) return;

    setPaintings(await fetchApi(`paintings/artist/${artist.artistId}`));
  }

  useEffect(() => {
    displayPaintings(selectedArtist);
  }, [selectedArtist]);

  useEffect(() => {
    async function fetchArtists() {
      const artists = await fetchApi("artists");
      const sortedArtists = artists.sort((a, b) => {
        return a.lastName.localeCompare(b.lastName);
      });
      setArtistList(sortedArtists);
    }
    fetchArtists();
  }, []);

  useEffect(() => {
    if (artistList.length > 0) {
      setArtist(artistList[0]);
      displayPaintings(artistList[0]);
      setLoading(false);
    }
  }, [artistList]);
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
        {artistList.length > 0 && (
          <ArtistList
            setArtist={setArtist}
            displayPaintings={displayPaintings}
            artistList={artistList}
          />
        )}
        {selectedArtist && (
          <ArtistInfo
            selectedArtist={selectedArtist}
            addToFavourites={addToFavourites}
          />
        )}
        {paintingList.length > 0 && (
          <PaintingsTable
            selectedOption={selectedArtist}
            paintingList={paintingList}
            addToFavourites={addToFavourites}
          />
        )}
      </div>
    </div>
  );
};

export default ArtistView;
