import { useEffect } from "react";
const GenreInfo = ({ selectedGenre }) => {
  useEffect(() => {}, [selectedGenre]);
  if (!selectedGenre) {
    return null;
  }
  return (
    <div
      className="content genreInfo border border-gray-300 p-4 m-4 rounded-lg shadow-md"
      id="genreInfo"
    >
      <img
        src={"/images/genres/" + selectedGenre.genreId + ".jpg"}
        alt={selectedGenre.firstName + " " + selectedGenre.lastName}
        className="rounded shadow-md w-50"
      ></img>
      <h2 className="text-xl font-semibold">{selectedGenre.genreName}</h2>
      <p className="text-sm text-gray-700">{selectedGenre.description}</p>
      <p className="text-sm text-gray-700">
        Era: {selectedGenre.eras.eraName} ({selectedGenre.eras.eraYears})
      </p>
      <p>
        <a
          href={selectedGenre.wikiLink}
          target="_blank"
          className="text-gray-500 hover:text-gray-700"
        >
          Learn More on Wikipedia
        </a>
      </p>
    </div>
  );
};

export default GenreInfo;
