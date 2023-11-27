import { useState, useEffect } from "react";

export default function MockTest() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3030/todos")
      .then((res) => res.json())
      .then((json) => {
        setList(json);
      });
  }, []);

  return (
    <div>
      <h2>MockTest</h2>

      <ul role="listbox">
        {list?.map((leaf, i) => (
          <li key={i}>
            {leaf.name} / {leaf.old} 입니다
          </li>
        ))}
      </ul>
    </div>
  );
}
