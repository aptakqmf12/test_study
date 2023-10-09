import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import ColorButton from "./colorButton";

function App() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await res.json();

    console.log(json);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="App">
      <ColorButton />
    </div>
  );
}

export default App;
