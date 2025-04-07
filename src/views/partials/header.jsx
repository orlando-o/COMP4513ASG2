import NavBar from "./navBar";

const Header = ({ redirect, openFavouritesModal, favouritesEmpty }) => {
  function formatString(s) {
    return s.charAt(1).toUpperCase() + s.substring(2);
  }
  return (
    <div className="header flex flex-row justify-between fixed top-2 right-2 left-2 z-2">
      <div className="icon"></div>
      <div className="pageTitle text-2xl font-semibold text-green-700">
        PaintingsPlus: {formatString(window.location.pathname)}
      </div>
      <NavBar
        redirect={redirect}
        openFavouritesModal={openFavouritesModal}
        favouritesEmpty={favouritesEmpty}
      />
    </div>
  );
};

export default Header;
