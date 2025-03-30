import Header from "./partials/header";

const ArtistView = (props) => {
  return (
    <div>
      <Header redirect={props.redirect} />
      <div class="contentContainer">
        <div class="content artistList">
          <div class="artistItem"></div>
        </div>
        <div class="content artistInfo">
          <div></div>
        </div>
        <div class="content artistPaintings"></div>
      </div>
    </div>
  );
};

export default ArtistView;
