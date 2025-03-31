const ArtistList = (props) => {
  return (
    <div className="content galleryList w-1/5" id="galleryList">
      {props.artistList.map((a) => {
        return (
          <div
            key={a.artistId}
            className="artistItem min-w-fit"
            onClick={() => {
              props.setArtist(a);
            }}
          >
            {a.firstName + " " + a.lastName}
          </div>
        );
      })}
    </div>
  );
};

export default ArtistList;
