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
      <ul>
        {posts.map((post, i) => (
          <li key={i}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
