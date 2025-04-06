const GenreList = ({ genreList, setGenre }) => {
  return (
    <div
      className="content genreList min-w-fit border border-gray-300 p-4 m-4 rounded-lg shadow-md"
      id="genreList"
    >
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="text-left px-4 py-2">Genre Name</th>
          </tr>
        </thead>
        <tbody>
          {genreList.map((g) => (
            <tr
              key={g.genreId}
              className="cursor-pointer hover:bg-gray-50 transition"
              onClick={() => setGenre(g)}
            >
              <td className="px-4 py-2 border-b">{g.genreName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GenreList;
