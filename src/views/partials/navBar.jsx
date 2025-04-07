import { Home, UserPen, Drama, GalleryVerticalEnd, Palette, Star, Info, Landmark } from "lucide-react";

const NavBar = ({ redirect, openFavouritesModal, favouritesEmpty }) => {
  const handleClick = (e) => {
    switch (e.currentTarget.id) {
      case "favouritesNav":
        openFavouritesModal();
        break;
      default:
        redirect(e.currentTarget.id.slice(0, -3));
        break;
    }
  };

  const navButtonClasses = (disabled = false) =>
    `navItem flex items-center justify-center w-12 h-12 mx-2 rounded-2xl shadow-md transition-colors duration-200 ${
      disabled
        ? "cursor-not-allowed bg-gray-200 text-gray-400"
        : "bg-green-100 text-green-700 hover:bg-orange-100 hover:text-orange-600"
    }`;

  return (
    <div className="navContainer flex items-center justify-center bg-white p-4 rounded-2xl shadow-lg mb-6">
      <button className={navButtonClasses()} id="artistNav" onClick={handleClick}>
        <UserPen size={20} />
      </button>
      <button className={navButtonClasses()} id="paintingNav" onClick={handleClick}>
        <Palette size={20} />
      </button>
      <button className={navButtonClasses()} id="galleryNav" onClick={handleClick}>
        <Landmark size={20} />
      </button>
      <button className={navButtonClasses()} id="genreNav" onClick={handleClick}>
        <Drama size={20} />
      </button>
      <button
        className={navButtonClasses(favouritesEmpty())}
        id="favouritesNav"
        onClick={handleClick}
        disabled={favouritesEmpty()}
      >
        <Star size={20} />
      </button>
      <button
        className={navButtonClasses()}
        onClick={handleClick}
        id="aboutNav"
      >
        <Info size={20} />
      </button>
    </div>
  );
};

export default NavBar;
