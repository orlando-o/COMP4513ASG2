/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const PaintingsTable = ({ selectedGallery, paintingList }) => {
  const [sortOrder, setSortOrder] = useState("artist");
  const [sortedPaintings, setSortedPaintings] = useState([]);
  const [selectedPainting, setSelectedPainting] = useState(null);

  useEffect(() => {
    if (paintingList && paintingList.length > 0) {
      const sortedList = [...paintingList].sort((a, b) => {
        switch (sortOrder) {
          case "artist":
            return `${a.artists?.lastName || ""} ${
              a.artists?.firstName || ""
            }`.localeCompare(
              `${b.artists?.lastName || ""} ${b.artists?.firstName || ""}`
            );
          case "title":
            return a.title.localeCompare(b.title);
          case "year":
            return a.yearOfWork - b.yearOfWork;
          default:
            return 0;
        }
      });
      setSortedPaintings(sortedList);
    }
  }, [paintingList, sortOrder]);

  if (!selectedGallery) {
    return null;
  }

  if (!paintingList || paintingList.length === 0) {
    return <p>No paintings available</p>;
  }

  const handleSortChange = (newSortOrder) => {
    setSortOrder(newSortOrder);
  };

  return (
    <div className="content galleryPaintings border border-gray-300 p-4 m-4 rounded-lg shadow-md">
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
              Thumbnail
            </th>
            <th
              className="px-4 py-2 text-left text-sm font-semibold text-gray-700 cursor-pointer"
              onClick={() => handleSortChange("artist")}
            >
              Artist
            </th>
            <th
              className="px-4 py-2 text-left text-sm font-semibold text-gray-700 cursor-pointer"
              onClick={() => handleSortChange("title")}
            >
              Title
            </th>
            <th
              className="px-4 py-2 text-left text-sm font-semibold text-gray-700 cursor-pointer"
              onClick={() => handleSortChange("year")}
            >
              Year
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedPaintings.map((painting) => (
            <tr
              key={painting.paintingId}
              onClick={() => setSelectedPainting(painting)}
              className="hover:bg-gray-50 cursor-pointer"
            >
              <td className="px-4 py-2">
                <img
                  src={`https://res.cloudinary.com/funwebdev/image/upload/w_250/art/paintings/${painting.imageFileName}.jpg`}
                  alt={painting.title}
                  className="rounded"
                  width={50}
                  height={50}
                />
              </td>
              <td className="px-4 py-2 text-sm text-gray-700">
                {painting.artists
                  ? `${painting.artists.firstName} ${painting.artists.lastName}`
                  : "Unknown Artist"}
              </td>
              <td className="px-4 py-2 text-sm text-gray-700">
                {painting.title}
              </td>
              <td className="px-4 py-2 text-sm text-gray-700">
                {painting.yearOfWork}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaintingsTable;
