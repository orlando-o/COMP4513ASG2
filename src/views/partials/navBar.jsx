const NavBar = (props) => {
  const handleClick = (e) => {
    props.redirect(e.target.id);
  };
  return (
    <div class="navContainer">
      <button class="navItem" id="artist" onClick={handleClick}>
        Artists
      </button>
      <button class="navItem" id="painting" onClick={handleClick}>
        Paintings
      </button>
      <button class="navItem" id="gallery" onClick={handleClick}>
        Galleries
      </button>
      <button class="navItem" id="genre" onClick={handleClick}>
        Genres
      </button>
      <button class="navItem" onClick={handleClick}>
        Favourites
      </button>
      <button class="navItem" onClick={handleClick}>
        About
      </button>
    </div>
  );
};

export default NavBar;
