// CSS
import styles from "./style.module.css";

// Components
import About from "../../components/About";
import Skills from "../../components/Skills";


const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <About />
        <Skills />
      </div>
    </>
  );
};

export default Home;
