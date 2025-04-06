import { useState, useEffect } from "react";

const PaintingFilters = ({ setFilters, getStoredResponse, fetchApi }) => {
  const [artists, setArtists] = useState(getStoredResponse("artists") || []);
  const [genres, setGenres] = useState(getStoredResponse("genres") || []);
  const [galleries, setGalleries] = useState(
    getStoredResponse("galleries") || []
  );
  const [filterType, setFilterType] = useState(null);
  const [filterContent, setFilterContent] = useState(null);
  const [minYear, setMinYear] = useState("");
  const [maxYear, setMaxYear] = useState("");

  useEffect(() => {
    if (!artists.length) fetchApi("artists").then(setArtists);
    if (!galleries.length) fetchApi("galleries").then(setGalleries);
    if (!genres.length) fetchApi("genres").then(setGenres);
  }, []);

  const handleFilterTypeChange = (type) => {
    setFilterType(type);
    setFilterContent("");
    setMinYear("");
    setMaxYear("");
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
    console.log(filterContent, filterType);
    switch (filterType) {
      case "title":
      case "artist":
      case "gallery":
      case "genre":
        setFilters([filterType, filterContent]);
        break;
      case "year":
        setFilters([
          "year",

          (minYear ? parseInt(minYear) : null) +
            "/" +
            (maxYear ? parseInt(maxYear) : null),
        ]);
        break;
      default:
        setFilters(null);
    }
  };

  return (
    <div className="border p-4 w-80 rounded shadow max-h-fit">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Painting Filters
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div className="flex items-center space-x-2">
          <input
            type="radio"
            name="filterType"
            checked={filterType === "title"}
            onChange={() => handleFilterTypeChange("title")}
            className="accent-gray-500"
          />
          <label htmlFor="title" className="w-16">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            disabled={filterType !== "title"}
            value={filterType === "title" ? filterContent : ""}
            onChange={(e) => setFilterContent(e.target.value)}
            className="flex-1 border px-2 py-1 rounded disabled:bg-gray-100"
          />
        </div>

        {/* Artist */}
        <div className="flex items-center space-x-2">
          <input
            type="radio"
            name="filterType"
            checked={filterType === "artist"}
            onChange={() => handleFilterTypeChange("artist")}
            className="accent-gray-500"
          />
          <label htmlFor="artist" className="w-16">
            Artist
          </label>
          <select
            id="artist"
            disabled={filterType !== "artist"}
            value={filterType === "artist" ? filterContent : ""}
            onChange={(e) => setFilterContent(e.target.value)}
            className="flex-1 border w-full px-2 py-1 rounded disabled:bg-gray-100"
          >
            <option value="">Select</option>
            {artists.map((a, i) => (
              <option key={i} value={a.artistId}>
                {a.firstName} {a.lastName}
              </option>
            ))}
          </select>
        </div>

        {/* Gallery */}
        <div className="flex items-center space-x-2">
          <input
            type="radio"
            name="filterType"
            checked={filterType === "gallery"}
            onChange={() => handleFilterTypeChange("gallery")}
            className="accent-gray-500"
          />
          <label htmlFor="gallery" className="w-16">
            Gallery
          </label>
          <select
            id="gallery"
            disabled={filterType !== "gallery"}
            value={filterType === "gallery" ? filterContent : ""}
            onChange={(e) => setFilterContent(e.target.value)}
            className="flex-1 border w-full px-2 py-1 rounded disabled:bg-gray-100"
          >
            <option value="">Select</option>
            {galleries.map((g, i) => (
              <option key={i} value={g.galleryId}>
                {g.galleryName}
              </option>
            ))}
          </select>
        </div>

        {/* Genre */}
        <div className="flex items-center space-x-2">
          <input
            type="radio"
            name="filterType"
            checked={filterType === "genre"}
            onChange={() => handleFilterTypeChange("genre")}
            className="accent-gray-500"
          />
          <label htmlFor="genre" className="w-16">
            Genre
          </label>
          <select
            id="genre"
            disabled={filterType !== "genre"}
            value={filterType === "genre" ? filterContent : ""}
            onChange={(e) => setFilterContent(e.target.value)}
            className="flex-1 border w-full px-2 py-1 rounded disabled:bg-gray-100"
          >
            <option value="">Select</option>
            {genres.map((g, i) => (
              <option key={i} value={g.genreId}>
                {g.genreName}
              </option>
            ))}
          </select>
        </div>

        {/* Year */}
        <div>
          <div className="flex items-center space-x-2">
            <input
              type="radio"
              name="filterType"
              checked={filterType === "year"}
              onChange={() => handleFilterTypeChange("year")}
              className="accent-gray-500"
            />
            <label className="w-16">Year</label>
          </div>
          <div className="flex justify-between mt-2 space-x-2">
            <div className="flex flex-col">
              <label htmlFor="yearMin">Less</label>
              <input
                type="text"
                id="yearMin"
                name="yearMin"
                disabled={filterType !== "year"}
                value={minYear}
                onChange={(e) => setMinYear(e.target.value)}
                className="border px-2 py-1 rounded w-full disabled:bg-gray-100"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="yearMax">Greater</label>
              <input
                type="text"
                id="yearMax"
                name="yearMax"
                disabled={filterType !== "year"}
                value={maxYear}
                onChange={(e) => setMaxYear(e.target.value)}
                className="border px-2 py-1 rounded w-full disabled:bg-gray-100"
              />
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-around">
          <button
            type="submit"
            className="mt-2 px-4 py-2 bg-gray-500 rounded hover:bg-gray-600"
          >
            Filter
          </button>
          <button
            className="mt-2 px-4 py-2 bg-gray-500 rounded hover:bg-gray-600"
            type="button"
            onClick={() => {
              setFilterType(null);
              setFilterContent("");
              setMinYear("");
              setMaxYear("");
              setFilters([]);
            }}
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaintingFilters;
