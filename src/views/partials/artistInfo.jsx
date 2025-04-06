import { useEffect } from "react";
const ArtistInfo = (props) => {
  useEffect(() => {}, [props.selectedArtist]);
  if (!props.selectedArtist) {
    return null;
  }
  return (
    <div
      className="content ArtistInfo border border-gray-300 p-4 m-4 rounded-lg shadow-md"
      id="ArtistInfo"
    >
      <h2 className="text-xl font-semibold">
        {props.selectedArtist.firstName} {props.selectedArtist.lastName}
      </h2>
      <p className="text-sm text-gray-700">
        {props.selectedArtist.nationality}
      </p>
      <p className="text-sm text-gray-700">{props.selectedArtist.gender}</p>
      <p className="text-sm text-gray-700">{props.selectedArtist.years}</p>
      <p className="text-sm text-gray-700">{props.selectedArtist.details}</p>
      <p>
        <a
          href={props.selectedArtist.wikiLink}
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
          props.addToFavourites(props.selectedArtist);
        }}
      >
        Add To Favourites
      </button>
    </div>
  );
};

export default ArtistInfo;
