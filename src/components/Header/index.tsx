// CSS
import styles from "./style.module.css";

// Components
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h2>
          <span>Davi</span> Fernandes
        </h2>
        <nav>
          <NavLink to="#">Inicio</NavLink>
          <NavLink to="#">Habilidades</NavLink>
          <NavLink to="#">Projetos</NavLink>
          <NavLink to="#">Contato</NavLink>
        </nav>
      </header>
    </>
  );
};

export default Header;
