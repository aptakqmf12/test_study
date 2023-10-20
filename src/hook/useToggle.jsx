import { useState, useCallback } from "react";

export default function useToggle(initial = false) {
  const [active, setActive] = useState(initial);

  const onChange = useCallback(() => {
    setActive(!active);
  }, [active]);

  return [active, setActive, onChange];
}
