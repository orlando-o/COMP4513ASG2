const GalleryList = ({
  galleryList,
  setGallery,
  displayPaintings,
  selectedGallery,
}) => {
  return (
    <div className="content galleryList min-w-fit border border-green-300 bg-white p-4 m-4 rounded-xl shadow-lg">
  <table className="min-w-full border border-green-200">
    <thead>
      <tr className="bg-green-100 text-green-900">
        <th className="text-left px-4 py-2">Gallery Name</th>
      </tr>
    </thead>
    <tbody>
      {galleryList.map((g) => (
        <tr
          key={g.galleryId}
          className="cursor-pointer hover:bg-green-50 transition"
          onClick={() => {
            setGallery(g);
            displayPaintings(selectedGallery);
          }}
        >
          <td className="px-4 py-2 border-b border-green-200">{g.galleryName}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

  );
};

export default GalleryList;
