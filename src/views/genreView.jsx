import Header from "./partials/header";

const GenreView = (props) => {
  return (
    <div>
      <Header redirect={props.redirect} />
      <div className="contentContainer">
        <div className="genreList"></div>
        <div>
          <div className="genreInfo"></div>
          <div className="genrePaintings"></div>
        </div>
      </div>
    </div>
  );
};

export default GenreView;
