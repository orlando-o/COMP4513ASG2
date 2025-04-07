const ArtistList = ({ artistList, setArtist }) => {
  return (
    <div
      className="content artistList min-w-fit border border-green-200 bg-white p-6 m-6 rounded-2xl shadow-lg"
      id="artistList"
    >
      <table className="min-w-full border-collapse w-full">
        <thead>
          <tr className="bg-green-50">
            <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">
              Artist Name
            </th>
          </tr>
        </thead>
        <tbody>
          {artistList.map((a) => (
            <tr
              key={a.artistId}
              className="cursor-pointer transition-colors duration-200 hover:bg-orange-100"
              onClick={() => setArtist(a)}
            >
              <td className="px-4 py-3 border-b border-green-100 text-gray-700">
                {`${a.lastName}, ${a.firstName}`}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ArtistList;
