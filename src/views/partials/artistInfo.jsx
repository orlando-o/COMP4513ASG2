import { useEffect } from "react";
const ArtistInfo = ({ selectedArtist, addToFavourites }) => {
  useEffect(() => {}, [selectedArtist]);
  if (!selectedArtist) {
    return null;
  }
  return (
    <div
      className="content ArtistInfo border border-gray-300 p-4 m-4 rounded-lg shadow-md"
      id="ArtistInfo"
    >
      <img
        src={"/images/artists/full/" + selectedArtist.artistId + ".jpg"}
        alt={selectedArtist.firstName + " " + selectedArtist.lastName}
        className="rounded shadow-md"
      ></img>
      <h2 className="text-xl font-semibold">
        {selectedArtist.firstName} {selectedArtist.lastName}
      </h2>
      <p className="text-sm text-gray-700">{selectedArtist.nationality}</p>
      <p className="text-sm text-gray-700">{selectedArtist.gender}</p>
      <p className="text-sm text-gray-700">{selectedArtist.years}</p>
      <p className="text-sm text-gray-700">{selectedArtist.details}</p>
      <p>
        <a
          href={selectedArtist.wikiLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-gray-700"
        >
          Learn More on Wikipedia
        </a>
      </p>
      <button
        className="mt-2 px-4 py-2 bg-gray-500 rounded hover:bg-gray-600"
        onClick={() => {
          addToFavourites(selectedArtist);
        }}
      >
        Add To Favourites
      </button>
    </div>
  );
};

export default ArtistInfo;
