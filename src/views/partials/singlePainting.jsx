import { useState } from "react";
import PaintingModal from "./modals/paintingModal";

const SinglePainting = ({ painting, addToFavourites }) => {
  const [selectedPainting, setSelectedPainting] = useState(null);
  const [showModal, showModalView] = useState(false);
  return (
    <>
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-gray-500/30 ${
          showModal ? "" : "hidden"
        }`}
      >
        <PaintingModal
          painting={painting}
          showModalView={showModalView}
          addToFavourites={addToFavourites}
        />
      </div>
      <tr
        key={painting.paintingId}
        onClick={() => {
          setSelectedPainting(painting);
          showModalView(true);
        }}
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
        <td className="px-4 py-2 text-sm text-gray-700">{painting.title}</td>
        <td className="px-4 py-2 text-sm text-gray-700">
          {painting.yearOfWork}
        </td>
      </tr>
    </>
  );
};

export default SinglePainting;
