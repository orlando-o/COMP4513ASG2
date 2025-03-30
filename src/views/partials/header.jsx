import NavBar from "./navBar";

const Header = (props) => {
  function formatString(s) {
    return s.charAt(1).toUpperCase() + s.substring(2);
  }
  return (
    <div class="header flex flex-row justify-between fixed top-2 right-2 left-2">
      <div class="icon"></div>
      <div class="pageTitle">
        Art Dashboard Project {formatString(window.location.pathname)} View
      </div>
      <NavBar redirect={props.redirect} />
    </div>
  );
};

export default Header;
