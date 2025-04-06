import React from "react";

const FavoritesModal = ({
  favouriteArtists,
  favouriteGalleries,
  favouritePaintings,
  emptyFavourites,
  closeModal,
  deleteSingleFavourite,
}) => {
  return (
    <div className="bg-gray-100 p-6 rounded shadow max-w-5xl mx-auto w-full">
      <div className="modalHeader flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Favorites</h2>
        <div className="buttonContainer space-x-2">
          <button
            className="navItem mt-2 px-4 py-2 bg-gray-500 rounded hover:bg-gray-600"
            onClick={emptyFavourites}
          >
            Empty Favorites
          </button>
          <button
            className="navItem mt-2 px-4 py-2 bg-gray-500 rounded hover:bg-gray-600"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </div>

      <div className="columnsContainer grid grid-cols-3 gap-4">
        <div className="galleriesColumn border bg-white rounded p-2">
          <h3 className="text-center font-semibold mb-1">Galleries</h3>
          <div className="h-48 overflow-y-auto text-sm p-1">
            {favouriteGalleries.length > 0 ? (
              favouriteGalleries.map((g) => (
                <div onClick={() => deleteSingleFavourite(g)}>
                  {g.galleryName}
                </div>
              ))
            ) : (
              <div className="text-gray-400">No favorites</div>
            )}
          </div>
        </div>

        <div className="artistsColumn border bg-white rounded p-2">
          <h3 className="text-center font-semibold mb-1">Artists</h3>
          <div className="h-48 overflow-y-auto text-sm p-1">
            {favouriteArtists.length > 0 ? (
              favouriteArtists.map((a) => (
                <div onClick={() => deleteSingleFavourite(a)}>
                  {a.firstName + " " + a.lastName}
                </div>
              ))
            ) : (
              <div className="text-gray-400">No favorites</div>
            )}
          </div>
        </div>

        <div className="paintingsColumn border bg-white rounded p-2">
          <h3 className="text-center font-semibold mb-1">Paintings</h3>
          <div className="h-48 overflow-y-auto text-sm p-1">
            {favouritePaintings.length > 0 ? (
              favouritePaintings.map((p) => (
                <div onClick={() => deleteSingleFavourite(p)}>{p.title}</div>
              ))
            ) : (
              <div className="text-gray-400">No favorites</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoritesModal;
