import { useEffect } from "react";
const GenreInfo = (props) => {
  useEffect(() => {}, [props.selectedGenre]);
  if (!props.selectedGenre) {
    return null;
  }
  return (
    <div
      className="content genreInfo border border-gray-300 p-4 m-4 rounded-lg shadow-md"
      id="genreInfo"
    >
      <h2 className="text-xl font-semibold">{props.selectedGenre.genreName}</h2>
      <p className="text-sm text-gray-700">{props.selectedGenre.description}</p>
      <p className="text-sm text-gray-700">
        Era: {props.selectedGenre.eras.eraName} (
        {props.selectedGenre.eras.eraYears})
      </p>
      <p>
        <a
          href={props.selectedGenre.wikiLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700"
        >
          Learn More on Wikipedia
        </a>
      </p>
    </div>
  );
};

export default GenreInfo;
