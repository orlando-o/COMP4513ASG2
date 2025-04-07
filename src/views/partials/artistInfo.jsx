import { useEffect } from "react";

const ArtistInfo = ({ selectedArtist, addToFavourites }) => {
  useEffect(() => {}, [selectedArtist]);

  if (!selectedArtist) {
    return null;
  }

  return (
    <div className="content ArtistInfo border border-green-200 bg-white p-6 m-6 rounded-2xl shadow-lg text-center" id="ArtistInfo" >
      <img
         src={"/images/artists/full/" + selectedArtist.artistId + ".jpg"}
         alt={selectedArtist.firstName + " " + selectedArtist.lastName}
        className="rounded-2xl shadow-md mb-4 w-48 h-auto object-cover mx-auto"
      />
      <h2 className="text-2xl font-semibold text-green-700 mb-2">
        {selectedArtist.firstName} {selectedArtist.lastName}
      </h2>
      <p className="text-sm text-gray-700 mb-1">{selectedArtist.nationality}</p>
      <p className="text-sm text-gray-700 mb-1">{selectedArtist.gender}</p>
      <p className="text-sm text-gray-700 mb-1">{selectedArtist.years}</p>
      <p className="text-sm text-gray-700 mb-3">{selectedArtist.details}</p>
      <p className="mb-4">
        <a
          href={selectedArtist.wikiLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-700 hover:text-orange-500 transition-colors duration-200"
        >
          Learn More on Wikipedia
        </a>
      </p>
      <button
        className="px-6 py-2 bg-green-100 text-green-700 rounded-2xl shadow-md hover:bg-orange-100 hover:text-orange-500 transition-colors duration-200"
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
