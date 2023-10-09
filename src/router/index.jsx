import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ColorButton from "../colorButton";
import Posts from "../posts";

export default function MyRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/colorButton" element={<ColorButton />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </Router>
  );
}
