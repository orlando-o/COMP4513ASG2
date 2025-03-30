import Header from "./partials/header";

const GenreView = (props) => {
  return (
    <div>
      <Header redirect={props.redirect} />
      <div class="contentContainer">
        <div class="genreList"></div>
        <div>
          <div class="genreInfo"></div>
          <div class="genrePaintings"></div>
        </div>
      </div>
    </div>
  );
};

export default GenreView;
