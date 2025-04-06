import React from "react";
import { useState, useEffect } from "react";

const PaintingModal = ({ addToFavourites, painting, showModalView }) => {
  const [dominantColours, setDominantColours] = useState([]);
  function closeModal() {
    showModalView(false);
  }
  useEffect(() => {
    try {
      const parsedAnnotations = JSON.parse(painting.jsonAnnotations);
      const colours =
        parsedAnnotations?.dominantColors?.map((colourObj) => [
          colourObj.web,
          colourObj.name,
        ]) || [];
      setDominantColours(colours);
      console.log(colours);
    } catch (error) {
      console.error("Failed to parse dominant colours:", error);
      setDominantColours([]);
    }
  }, [painting]);

  return (
    <div className="bg-gray-100 p-6 rounded shadow max-w-5xl mx-auto w-200 h-100 overflow-auto">
      <div className="modalHeader flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Painting Details</h2>
        <div className="buttonContainer space-x-2">
          <button
            className="navItem mt-2 px-4 py-2 bg-gray-500 rounded hover:bg-gray-600"
            onClick={closeModal}
          >
            Close
          </button>
          <button
            className="navItem mt-2 px-4 py-2 bg-gray-500 rounded hover:bg-gray-600"
            onClick={() => addToFavourites(painting)}
          >
            Add to Favorites
          </button>
        </div>
      </div>
      <div className="modalContent flex gap-6 mb-6">
        <div className="border bg-white rounded p-2 flex items-center justify-center w-1/2 min-h-[250px]">
          <img
            src={`https://res.cloudinary.com/funwebdev/image/upload/w_250/art/paintings/${painting.imageFileName}.jpg`}
            alt={painting.title}
            className="max-h-50 object-contain"
          />
        </div>

        <div className="paintingInfoContainer w-1/2 space-y-2 text-sm">
          <div className="text-lg font-semibold">{painting.title}</div>
          <div className="text-gray-700">
            {painting.artists.firstName + " " + painting.artists.lastName}
          </div>

          <div>Year of work: {painting.yearOfWork}</div>
          <div>Medium: {painting.medium}</div>
          <div>Dimensions: {painting.width + " x " + painting.height}</div>
          <div>Copyright: {painting.copyrightText}</div>
          <div>
            Gallery:{" "}
            {painting.galleries ? painting.galleries.galleryName : "N/A"},{" "}
            {painting.galleries ? painting.galleries.galleryCity : "N/A"}
          </div>
          <div>
            Museum Link:{" "}
            {painting.museumLink ? (
              <a href={painting.museumLink} target="_blank">
                View
              </a>
            ) : (
              "N/A"
            )}
          </div>
          <div>
            Wiki Link:{" "}
            {painting.wikiLink ? (
              <a href={painting.wikiLink} target="_blank">
                View
              </a>
            ) : (
              "N/A"
            )}
          </div>
          <div>Description: {painting.description}</div>
        </div>
      </div>

      <div className="coloursContainer">
        <h3 className="text-lg font-semibold mb-2">Dominant Colours </h3>
        <div className="flex space-x-2">
          {dominantColours.length > 0 ? (
            dominantColours.map((colourObj, index) => (
              <div
                key={index}
                className="w-8 h-8 rounded border"
                title={colourObj[1]}
                style={{ backgroundColor: colourObj[0] }}
              />
            ))
          ) : (
            <div className="text-sm text-gray-500">
              No dominant colours available
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaintingModal;
