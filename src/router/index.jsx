import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ColorButton from "../components/colorButton";
import Posts from "../components/posts";
import PopOver from "../components/popOver";
export default function MyRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/colorButton" element={<ColorButton />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/popOver" element={<PopOver />} />
      </Routes>
    </Router>
  );
}
