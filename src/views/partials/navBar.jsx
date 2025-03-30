const NavBar = (props) => {
  const handleClick = (e) => {
    props.redirect(e.target.id);
  };
  return (
    <div className="navContainer">
      <button className="navItem" id="artist" onClick={handleClick}>
        Artists
      </button>
      <button className="navItem" id="painting" onClick={handleClick}>
        Paintings
      </button>
      <button className="navItem" id="gallery" onClick={handleClick}>
        Galleries
      </button>
      <button className="navItem" id="genre" onClick={handleClick}>
        Genres
      </button>
      <button className="navItem" onClick={handleClick}>
        Favourites
      </button>
      <button className="navItem" onClick={handleClick}>
        About
      </button>
    </div>
  );
};

export default NavBar;
