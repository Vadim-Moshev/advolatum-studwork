import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import Page2 from "./pages/page2";

import "./App.css";
import "./my_styles.css";

function App() {
  return (
    <>
      <header className="header"></header>

      <BrowserRouter>
        <main className="main">
          <Routes>
            <Route exact path="/" element={<MainPage />} />
            <Route exact path="/page2" element={<Page2 />} />
          </Routes>
        </main>
      </BrowserRouter>

      <footer className="footer"></footer>
    </>
  );
}

export default App;
