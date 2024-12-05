import styles from "./styles.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h2>Davi Fernandes</h2>
      <nav>
        <ul className={styles.infos}>
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Sobre</a>
          </li>
          <li>
            <a href="#">Habilidades</a>
          </li>
          <li>
            <a href="#">Projetos</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
