import Header from "./partials/header";

const ArtistView = (props) => {
  return (
    <div>
      <Header redirect={props.redirect} />
      <div className="contentContainer">
        <div className="content artistList">
          <div className="artistItem"></div>
        </div>
        <div className="content artistInfo">
          <div></div>
        </div>
        <div className="content artistPaintings"></div>
      </div>
    </div>
  );
};

export default ArtistView;
