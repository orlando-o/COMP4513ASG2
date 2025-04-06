const ArtistList = ({ artistList, setArtist }) => {
  return (
    <div
      className="content artistList min-w-fit border border-gray-300 p-4 m-4 rounded-lg shadow-md"
      id="artistList"
    >
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="text-left px-4 py-2">Artist Name</th>
          </tr>
        </thead>
        <tbody>
          {artistList.map((a) => (
            <tr
              key={a.artistId}
              className="cursor-pointer hover:bg-gray-50 transition"
              onClick={() => setArtist(a)}
            >
              <td className="px-4 py-2 border-b">{`${a.lastName}, ${a.firstName}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ArtistList;
