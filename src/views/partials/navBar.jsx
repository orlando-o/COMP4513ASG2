const NavBar = ({ redirect, openFavouritesModal, favouritesEmpty }) => {
  const handleClick = (e) => {
    switch (e.target.id) {
      case "favouritesNav":
        openFavouritesModal();
        break;
      default:
        redirect(e.target.id.slice(0, -3));
        break;
    }
  };
  return (
    <div className="navContainer">
      <button
        className="navItem mt-2 px-4 py-2 bg-gray-500 rounded hover:bg-gray-600"
        id="artistNav"
        onClick={handleClick}
      >
        Artists
      </button>
      <button
        className="navItem mt-2 px-4 py-2 bg-gray-500 rounded hover:bg-gray-600"
        id="paintingNav"
        onClick={handleClick}
      >
        Paintings
      </button>
      <button
        className="navItem mt-2 px-4 py-2 bg-gray-500 rounded hover:bg-gray-600"
        id="galleryNav"
        onClick={handleClick}
      >
        Galleries
      </button>
      <button
        className="navItem mt-2 px-4 py-2 bg-gray-500 rounded hover:bg-gray-600"
        id="genreNav"
        onClick={handleClick}
      >
        Genres
      </button>
      <button
        className={`navItem mt-2 px-4 py-2 rounded hover:bg-gray-600 ${
          favouritesEmpty() ? "cursor-not-allowed bg-gray-200" : "bg-gray-500"
        }`}
        id="favouritesNav"
        onClick={handleClick}
        disabled={favouritesEmpty()}
      >
        Favourites
      </button>
      <button
        className="navItem mt-2 px-4 py-2 bg-gray-500 rounded hover:bg-gray-600"
        onClick={handleClick}
      >
        {/* add id="aboutNav" eventually when we make the about page */}
        About
      </button>
    </div>
  );
};

export default NavBar;
