import styles from "./style.module.css";


import { Header } from "../../components/Header";
import { Presentation } from "../../components/Presentation";
import { About } from "../../components/About";

export const Home = () => {
  return (
    <main className={styles.mainContainer}>
      <Header />
      <Presentation />
      <About />
    </main>
  );
};
