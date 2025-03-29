import NavBar from "./navBar";

const Header = (props) => {
  return (
    <div class="header">
      <div class="icon"></div>
      <div class="pageTitle"></div>
      <NavBar redirect={props.redirect} />
    </div>
  );
};

export default Header;
