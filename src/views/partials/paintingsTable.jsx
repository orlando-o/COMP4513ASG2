/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const PaintingsTable = (props) => {
  const [sortOrder, setSortOrder] = useState("artist");
  const [selectedPainting, setSelectedPainting] = useState([]);
  if (props.selectedGallery) {
    return null;
  }
  const sortPaintingList = (sortOrder) => {
    return props.paintingList.sort((a, b) => {
      switch (sortOrder) {
        case "artist":
          return `${a.artists.lastName} ${a.artists.firstName}`.localeCompare(
            `${b.artists.lastName} ${b.artists.firstName}`
          );
        case "title":
          return a.title.localeCompare(b.title);
        case "year":
          return a.yearOfWork - b.yearOfWork;
        default:
          return 0;
      }
    });
  };

  const handlePaintingClick = (painting) => {
    setSelectedPainting(painting);
  };

  const handleSortChange = (newSortOrder) => {
    setSortOrder(newSortOrder);
  };

  return (
    <div className="border border-gray-300 p-4 m-4 rounded-lg shadow-md">
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
              Thumbnail
            </th>
            <th
              className="px-4 py-2 text-left text-sm font-semibold text-gray-700"
              onClick={() => handleSortChange("artist")}
            >
              Artist
            </th>
            <th
              className="px-4 py-2 text-left text-sm font-semibold text-gray-700"
              onClick={() => handleSortChange("title")}
            >
              Title
            </th>
            <th
              className="px-4 py-2 text-left text-sm font-semibold text-gray-700"
              onClick={() => handleSortChange("year")}
            >
              Year
            </th>
          </tr>
        </thead>
        <tbody>
          {sortPaintingList(sortOrder).map((painting) => (
            <tr
              key={painting.paintingId}
              onClick={() => handlePaintingClick(painting)}
              className="hover:bg-gray-50 cursor-pointer"
            >
              <td className="px-4 py-2">
                <img
                  src={`http://res.cloudinary.com/funwebdev/image/upload/w_250/art/props.paintingList/${painting.imageFileName}.jpg`}
                  alt={painting.title}
                  className="rounded"
                  width={50}
                  height={50}
                />
              </td>
              <td className="px-4 py-2 text-sm text-gray-700">
                {`${painting.artists.firstName} ${painting.artists.lastName}`}
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
