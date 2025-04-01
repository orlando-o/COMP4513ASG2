import { useEffect, useState } from "react";
import Header from "./partials/header";
import { PaintingsTable } from "./partials/paintingTables";

const PaintingView = ({ redirect, addToFavourites, fetchApi }) => {
  const [paintingList, setPaintings] = useState([]);
  const [selectedFilters, setFilters] = useState([]);

  useEffect(() => {
    async function fetchPaintings() {
      setPaintings(await fetchApi("paintings")); // will cause paintingsTable to re-render because of the dependancy
    }
    fetchPaintings();
  }, []);

  useEffect(() => {
    filterPaintings();
  }, [selectedFilters]);

  function filterPaintings() {
    const filteredPaintings = paintingList.filter(); //implement filtering logic here
    // /api/paintings	Returns all paintings
    // /api/paintings/sort/titleORyear	Returns all paintings, sorted by either title or yearOfWork
    // /api/paintings/ref	Returns the specified painting
    // /api/paintings/search/substring	Returns paintings whose title contains the provided substring
    // /api/paintings/years/start/end	Returns paintings between two years, ordered by yearOfWork
    // /api/paintings/galleries/ref	Returns all paintings in a given gallery
    // /api/paintings/artist/ref	Returns all paintings by a given artist
    return filteredPaintings;
  }

  return (
    <div>
      <Header redirect={redirect} />
      <div className="contentContainer">
        <PaintingFilters setFilters={setFilters} />
        <PaintingsTable
          selectedFilters={selectedFilters}
          paintingList={paintingList}
        />
      </div>
    </div>
  );
};
export default PaintingView;
