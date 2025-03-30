const GalleryList = (props) => {
  return (
    <div
      className="content galleryList w-1/5 overflow-auto max-h-100"
      id="galleryList"
    >
      {props.galleryList.map((g) => {
        return (
          <div
            key={g.galleryId}
            className="galleryItem"
            onClick={() => {
              props.setGallery(g);
              props.displayPaintings(props.selectedGallery);
            }}
          >
            {g.galleryName}
          </div>
        );
      })}
    </div>
  );
};

export default GalleryList;
