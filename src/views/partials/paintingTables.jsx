/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import SinglePainting from "./singlePainting";

const PaintingsTable = ({ paintingList, addToFavourites }) => {
  const [sortOrder, setSortOrder] = useState(["title", true]);
  const [sortedPaintings, setSortedPaintings] = useState([]);

  useEffect(() => {
    if (paintingList && paintingList.length > 0) {
      const sortedList = [...paintingList].sort((a, b) => {
        switch (sortOrder[0]) {
          case "artist":
            switch (sortOrder[1]) {
              case true:
                return `${a.artists?.lastName || ""} ${
                  a.artists?.firstName || ""
                }`.localeCompare(
                  `${b.artists?.lastName || ""} ${b.artists?.firstName || ""}`
                );

              default:
                return `${b.artists?.lastName || ""} ${
                  b.artists?.firstName || ""
                }`.localeCompare(
                  `${a.artists?.lastName || ""} ${a.artists?.firstName || ""}`
                );
            }

          case "title":
            switch (sortOrder[1]) {
              case true:
                return a.title.localeCompare(b.title);

              default:
                return b.title.localeCompare(a.title);
            }

          case "year":
            switch (sortOrder[1]) {
              case true:
                return a.yearOfWork - b.yearOfWork;

              default:
                return b.yearOfWork - a.yearOfWork;
            }
          default:
            return;
        }
      });
      setSortedPaintings(sortedList);
    }
  }, [paintingList, sortOrder]);

  if (!paintingList || paintingList.length === 0) {
    return <p>No paintings available</p>;
  }

  const handleSortChange = (newSortOrder) => {
    if (newSortOrder == sortOrder[0]) {
      setSortOrder([newSortOrder, !sortOrder[1]]);
    } else {
      setSortOrder([newSortOrder, true]);
    }
  };

  return (
    <div className="content border border-gray-300 p-4 m-4 rounded-lg shadow-md">
      <table className="table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-500">
              Thumbnail
            </th>
            <th
              className={`px-4 py-2 text-left text-sm ${
                sortOrder[0] == "artist" ? "text-gray-900" : "text-gray-500"
              } font-semibold cursor-pointer`}
              onClick={() => handleSortChange("artist")}
            >
              Artist
            </th>
            <th
              className={`px-4 py-2 text-left text-sm ${
                sortOrder[0] == "title" ? "text-gray-900" : "text-gray-500"
              } font-semibold cursor-pointer`}
              onClick={() => handleSortChange("title")}
            >
              Title
            </th>
            <th
              className={`px-4 py-2 text-left text-sm ${
                sortOrder[0] == "year" ? "text-gray-900" : "text-gray-500"
              } font-semibold cursor-pointer`}
              onClick={() => handleSortChange("year")}
            >
              Year
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedPaintings.map((painting) => (
            <SinglePainting
              key={painting.paintingId}
              painting={painting}
              addToFavourites={addToFavourites}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaintingsTable;
