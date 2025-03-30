const GenreList = (props) => {
  return (
    <div className="content galleryList w-1/5" id="galleryList">
      {props.genreList.map((g) => {
        return (
          <div
            key={g.genreId}
            className="galleryItem"
            onClick={() => {
              props.setGenre(g);
            }}
          >
            {g.genreName}
          </div>
        );
      })}
    </div>
  );
};

export default GenreList;
