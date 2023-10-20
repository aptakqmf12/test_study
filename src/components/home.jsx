import React from "react";
import useInput from "../hook/useInput";
import useToggle from "../hook/useToggle";

export default function Home() {
  const [text, setText, onChangeText] = useInput();
  const [active, setActive, onChangeActive] = useToggle();

  return (
    <div>
      <input value={text} onChange={onChangeText} />

      <button onClick={onChangeActive}>toggle</button>
      <div>{active ? "active" : "no!"}</div>
    </div>
  );
}
