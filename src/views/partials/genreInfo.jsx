import { useEffect } from "react";
const GenreInfo = ({ selectedGenre }) => {
  useEffect(() => {}, [selectedGenre]);
  if (!selectedGenre) {
    return null;
  }
  return (
    <div
      className="content genreInfo border border-green-200 bg-white p-6 m-6 rounded-2xl shadow-lg"
      id="genreInfo"
    >
      <img
        src={"/images/genres/" + selectedGenre.genreId + ".jpg"}
        alt={selectedGenre.firstName + " " + selectedGenre.lastName}
        className="rounded shadow-md w-50 mb-4"
      ></img>
      <h2 className="text-xl font-semibold text-green-700 mb-2">
        {selectedGenre.genreName}
      </h2>
      <p className="text-sm text-gray-700 mb-1">{selectedGenre.description}</p>
      <p className="text-sm text-gray-700 mb-2">
        Era: {selectedGenre.eras.eraName} ({selectedGenre.eras.eraYears})
      </p>
      <p>
        <a
          href={selectedGenre.wikiLink}
          target="_blank"
          className="text-gray-500 hover:text-orange-500 transition-colors duration-200"
        >
          Learn More on Wikipedia
        </a>
      </p>
    </div>
  );
};

export default GenreInfo;
