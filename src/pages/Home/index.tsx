import styles from "./style.module.css";


import { Header } from "../../components/Header";
import { Presentation } from "../../components/Presentation";
import { About } from "../../components/About";
import { Contact } from "../../components/Contact";
import { Footer } from "../../components/Footer";

export const Home = () => {
  return (
    <main className={styles.mainContainer}>
      <Header />
      <Presentation />
      <About />
      <Contact />
      <Footer />
    </main>
  );
};
