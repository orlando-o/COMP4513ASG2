const GalleryList = ({
  galleryList,
  setGallery,
  displayPaintings,
  selectedGallery,
}) => {
  return (
    <div
      className="content galleryList min-w-fit border border-gray-300 p-4 m-4 rounded-lg shadow-md"
      id="galleryList"
    >
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="text-left px-4 py-2">Gallery Name</th>
          </tr>
        </thead>
        <tbody>
          {galleryList.map((g) => (
            <tr
              key={g.galleryId}
              className="cursor-pointer hover:bg-gray-50 transition"
              onClick={() => {
                setGallery(g);
                displayPaintings(selectedGallery);
              }}
            >
              <td className="px-4 py-2 border-b">{g.galleryName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GalleryList;
