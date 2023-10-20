import { useState, useEffect } from "react";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await res.json();
    setPosts(json);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <ul className="flex flex-col gap-0.5 p-2 border-gray-300">
        {posts.map((post, i) => (
          <li
            className="py-2 px-4 mb-2 mx-2 bg-red-200  border-b-2 border-red-500 text-sm font-bold text-blue-400 hover:bg-blue-200 hover:text-white rounded-xl shadow-sm cursor-pointer "
            key={i}
          >
            {post.title}
          </li>
        ))}
      </ul>

      <button onClick={() => setPosts([])}>clear</button>
    </div>
  );
}
