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
    <div className="bg-white p-6 rounded-2xl shadow-lg max-w-5xl mx-auto w-full space-y-6">
    <div className="modalHeader flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold text-gray-800">Favorites</h2>
      <div className="buttonContainer space-x-3">
        <button
          className="navItem mt-0 px-4 py-2 bg-gray-500 text-white rounded-xl hover:bg-gray-600 transition-all shadow-sm"
          onClick={emptyFavourites}
        >
          Empty Favorites
        </button>
        <button
          className="navItem mt-0 px-4 py-2 bg-gray-500 text-white rounded-xl hover:bg-gray-600 transition-all shadow-sm"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </div>
  
    <div className="columnsContainer grid grid-cols-3 gap-6">
      <div className="galleriesColumn border bg-gray-50 rounded-2xl p-4 shadow-sm">
        <h3 className="text-center font-semibold mb-3 text-gray-700 text-lg">Galleries</h3>
        <div className="h-48 overflow-y-auto text-sm p-2 space-y-1">
          {favouriteGalleries.length > 0 ? (
            favouriteGalleries.map((g) => (
              <div
                className="cursor-pointer hover:bg-gray-200 rounded-md px-2 py-1 transition"
                onClick={() => deleteSingleFavourite(g)}
              >
                {g.galleryName}
              </div>
            ))
          ) : (
            <div className="text-gray-400 text-center">No favorites</div>
          )}
        </div>
      </div>
  
      <div className="artistsColumn border bg-gray-50 rounded-2xl p-4 shadow-sm">
        <h3 className="text-center font-semibold mb-3 text-gray-700 text-lg">Artists</h3>
        <div className="h-48 overflow-y-auto text-sm p-2 space-y-1">
          {favouriteArtists.length > 0 ? (
            favouriteArtists.map((a) => (
              <div
                className="cursor-pointer hover:bg-gray-200 rounded-md px-2 py-1 transition"
                onClick={() => deleteSingleFavourite(a)}
              >
                {a.firstName + " " + a.lastName}
              </div>
            ))
          ) : (
            <div className="text-gray-400 text-center">No favorites</div>
          )}
        </div>
      </div>
  
      <div className="paintingsColumn border bg-gray-50 rounded-2xl p-4 shadow-sm">
        <h3 className="text-center font-semibold mb-3 text-gray-700 text-lg">Paintings</h3>
        <div className="h-48 overflow-y-auto text-sm p-2 space-y-1">
          {favouritePaintings.length > 0 ? (
            favouritePaintings.map((p) => (
              <div
                className="cursor-pointer hover:bg-gray-200 rounded-md px-2 py-1 transition"
                onClick={() => deleteSingleFavourite(p)}
              >
                {p.title}
              </div>
            ))
          ) : (
            <div className="text-gray-400 text-center">No favorites</div>
          )}
        </div>
      </div>
    </div>
  </div>  
  );
};

export default FavoritesModal;
