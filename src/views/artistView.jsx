import Header from "./partials/header";
import { useState, useEffect } from "react";
import PaintingsTable from "./partials/paintingTables";
import ArtistList from "./partials/artistList";
import ArtistInfo from "./partials/artistInfo";

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
        <ArtistList
          setArtist={setArtist}
          displayPaintings={displayPaintings}
          artistList={artistList}
        />
        <ArtistInfo
          selectedArtist={selectedArtist}
          addToFavourites={addToFavourites}
        />
        <PaintingsTable
          selectedOption={selectedArtist}
          paintingList={paintingList}
          addToFavourites={addToFavourites}
        />
      </div>
    </div>
  );
};

export default ArtistView;
