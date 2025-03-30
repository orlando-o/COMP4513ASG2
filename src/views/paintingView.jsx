import Header from "./partials/header";

const PaintingView = (props) => {
  return (
    <div>
      <Header redirect={props.redirect} />
      <div class="contentContainer">
        <div class="paintingFilters"></div>
        <div class="matchingPaintings"></div>
      </div>
    </div>
  );
};
export default PaintingView;
