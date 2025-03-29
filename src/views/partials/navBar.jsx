const NavBar = (props) => {
  const handleClick = (e) => {
    props.redirect(e.target.id);
  };
  return (
    <div class="navContainer">
      <div class="navItem" id="artist" onClick={handleClick}>
        Artists
      </div>
      <div class="navItem" id="painting" onClick={handleClick}>
        Paintings
      </div>
      <div class="navItem" id="gallery" onClick={handleClick}>
        Galleries
      </div>
      <div class="navItem" id="genre" onClick={handleClick}>
        Genres
      </div>
      <div class="navItem" onClick={handleClick}>
        Favourites
      </div>
      <div class="navItem" onClick={handleClick}>
        About
      </div>
    </div>
  );
};

export default NavBar;
