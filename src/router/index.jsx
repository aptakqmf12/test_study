import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ColorButton from "../components/colorButton";
import Posts from "../components/posts";
import PopOver from "../components/popOver";
import Home from "../components/home";
import MockTest from "../components/mockTest";
export default function MyRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/colorButton" element={<ColorButton />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/popOver" element={<PopOver />} />
        <Route path="/mockTest" element={<MockTest />} />
      </Routes>
    </Router>
  );
}
