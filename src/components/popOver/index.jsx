import { useState } from "react";

export default function PopOver() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onMouseOver={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        클릭하여 팝오버하기
      </button>

      {open && <div className="popOver">popOver</div>}
    </div>
  );
}
