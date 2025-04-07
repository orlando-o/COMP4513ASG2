const GenreList = ({ genreList, setGenre }) => {
  return (
    <div
      className="content genreList min-w-fit border border-green-200 bg-white p-6 m-6 rounded-2xl shadow-lg"
      id="genreList"
    >
      <table className="min-w-full border-collapse w-full">
        <thead>
          <tr className="bg-green-50">
            <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">
              Genre Name
            </th>
          </tr>
        </thead>
        <tbody>
          {genreList.map((g) => (
            <tr
              key={g.genreId}
              className="cursor-pointer hover:bg-orange-100 transition-colors duration-200"
              onClick={() => setGenre(g)}
            >
              <td className="px-4 py-3 border-b border-green-100 text-gray-700">
                {g.genreName}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GenreList;
