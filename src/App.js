import { BrowserRouter, Routes, Route } from "react-router-dom";

import Page1 from "./pages/page1";
import Page2 from "./pages/page2";

import "./App.css";
import "./my_styles.css";

function App() {
  /*
<BrowserRouter>
  <Routes>
    <Route exact path="/" element={<Page1 />} />
    <Route exact path="/page1" element={<Page1 />} />
    <Route exact path="/page2" element={<Page2 />} />
  </Routes>
</BrowserRouter>
  */

  return (
    <>
      <header className="header"></header>
      <main className="main">Через некоторое время тут должен быть сайт</main>
      <footer className="footer"></footer>
    </>
  );
}

export default App;
