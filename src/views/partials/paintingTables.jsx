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
    <div className="content border border-green-200 bg-white p-6 m-6 rounded-2xl shadow-lg">
    <table className="table-auto border-collapse w-full">
      <thead>
        <tr className="bg-green-50">
          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">
            Thumbnail
          </th>
          <th
            className={`px-4 py-3 text-left text-sm font-semibold cursor-pointer transition-colors duration-200 ${
              sortOrder[0] === "artist" ? "text-green-700" : "text-gray-500 hover:text-orange-500"
            }`}
            onClick={() => handleSortChange("artist")}
          >
            Artist
          </th>
          <th
            className={`px-4 py-3 text-left text-sm font-semibold cursor-pointer transition-colors duration-200 ${
              sortOrder[0] === "title" ? "text-green-700" : "text-gray-500 hover:text-orange-500"
            }`}
            onClick={() => handleSortChange("title")}
          >
            Title
          </th>
          <th
            className={`px-4 py-3 text-left text-sm font-semibold cursor-pointer transition-colors duration-200 ${
              sortOrder[0] === "year" ? "text-green-700" : "text-gray-500 hover:text-orange-500"
            }`}
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
