import Header from "./partials/header";

const PaintingView = (props) => {
  return (
    <div>
      <Header redirect={props.redirect} />
      <div className="contentContainer">
        <div className="paintingFilters"></div>
        <div className="matchingPaintings"></div>
      </div>
    </div>
  );
};
export default PaintingView;
