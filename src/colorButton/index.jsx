import { useState } from "react";

export default function ColorButton() {
  const [disable, setDisable] = useState(false);
  return (
    <div>
      <div>
        <button
          onClick={() => setDisable(!disable)}
          style={{ backgroundColor: disable ? "#00f" : "#f00", color: "#fff" }}
        >
          {disable ? "활성화" : "비활성화"} 하기
        </button>
      </div>

      <input id="check-box" type={"checkbox"} disabled={disable} />
      <label htmlFor="check-box">체크박스</label>
    </div>
  );
}
