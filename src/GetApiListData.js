import React, { useState, useEffect } from "react";

function GetApiListData() {
  const [listData, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://5fbc07c3c09c200016d41656.mockapi.io/api/v1/games');
        const data = await response.json();
        setData(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>List of Games</h2>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Genre</th>
            <th className="px-4 py-2">Platform</th>
            <th className="px-4 py-2">Editor's Choice</th>
            <th className="px-4 py-2">Avatar</th>
          </tr>
        </thead>
        <tbody>
          {listData.map((game) => (
            <tr key={game.id}>
              <td className="border px-4 py-2">{game.name}</td>
              <td className="border px-4 py-2">{game.id}</td>
              <td className="border px-4 py-2">{game.genre}</td>
              <td className="border px-4 py-2">{game.platform}</td>
              <td className="border px-4 py-2">{game.editor_choice ? 'Yes' : 'No'}</td>
              <td className="border px-4 py-2">
                <img src={game.avatar} alt={game.name} className="h-10 w-10 rounded-full" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GetApiListData;
