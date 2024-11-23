import "./App.css";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Home from "./pages/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
