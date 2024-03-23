import { BrowserRouter, Routes, Route } from "react-router-dom";

import Page1 from "./pages/page1";
import Page2 from "./pages/page2";

import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Page1 />} />
        <Route exact path="/page1" element={<Page1 />} />
        <Route exact path="/page2" element={<Page2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
