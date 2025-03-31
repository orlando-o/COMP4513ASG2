const GenreList = (props) => {
  return (
    <div className="content genreList min-w-fit" id="genreList">
      {props.genreList.map((g) => {
        return (
          <div
            key={g.genreId}
            className="genreItem"
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
