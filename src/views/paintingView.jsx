import { useEffect, useState } from "react";
import Header from "./partials/header";
import PaintingsTable from "./partials/paintingTables";
import PaintingFilters from "./partials/paintingFilters";
import "ldrs/bouncy";

const PaintingView = ({
  redirect,
  addToFavourites,
  fetchApi,
  storeResponse,
  getStoredResponse,
  openFavouritesModal,
  favouritesEmpty,
}) => {
  const [paintingList, setPaintings] = useState([]);
  const [selectedFilter, setFilters] = useState([]); // ["year", "2017/2024"]
  const [loading, setLoading] = useState(true);

  const endpoint = "paintings";
  useEffect(() => {
    async function fetchPaintings() {
      const paintings = await fetchApi(endpoint);
      setPaintings(paintings);
    }
    fetchPaintings();
  }, []);

  useEffect(() => {
    if (paintingList.length > 0) {
      setLoading(false);
    }
  }, [paintingList]);

  useEffect(() => {
    filterPaintings();
  }, [selectedFilter]);

  async function filterPaintings() {
    switch (selectedFilter[0]) {
      case "year":
        setPaintings(await fetchApi("paintings/years/" + selectedFilter[1]));
        break;

      case "artist":
        console.log(selectedFilter[1]);
        setPaintings(await fetchApi("paintings/artist/" + selectedFilter[1]));
        break;

      case "gallery":
        setPaintings(
          await fetchApi("paintings/galleries/" + selectedFilter[1])
        );
        break;

      case "title":
        setPaintings(await fetchApi("paintings/search/" + selectedFilter[1]));
        break;

      case "genre":
        setPaintings(await fetchApi("paintings/genre/" + selectedFilter[1]));
        break;

      default:
        setPaintings(await fetchApi(endpoint));
        break;
    }
  }

  return (
    <div>
      <Header
        redirect={redirect}
        openFavouritesModal={openFavouritesModal}
        favouritesEmpty={favouritesEmpty}
      />
      <div className="contentContainer flex flex-row">
        <PaintingFilters
          setFilters={setFilters}
          getStoredResponse={getStoredResponse}
          fetchApi={fetchApi}
        />
        {loading && (
          <div className="flex justify-center items-center h-100 w-full">
            <l-Bouncy size="60" color="black" />{" "}
            {/* https://uiball.com/ldrs/ */}
          </div>
        )}
        {paintingList.length > 0 && (
          <PaintingsTable
            paintingList={paintingList}
            addToFavourites={addToFavourites}
          />
        )}
      </div>
    </div>
  );
};
export default PaintingView;
