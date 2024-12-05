// CSS
import "./App.css";

// Components
import About from "./components/About";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <About />
      </div>
    </>
  );
}

export default App;
