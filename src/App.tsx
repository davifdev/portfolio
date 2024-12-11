// CSS
import "./App.css";

// Components
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <About />
        <Skills />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
