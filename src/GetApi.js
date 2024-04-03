import React, { useState, useEffect } from "react";

function GetApi() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "http://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        setPosts(data);
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
      <h2>Data API</h2>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Body</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td className="border px-4 py-2">{post.id}</td>
              <td className="border px-4 py-2">{post.title}</td>
              <td className="border px-4 py-2">{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GetApi;
