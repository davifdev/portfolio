import styles from "./styles.module.css";


const Header = () => {
  return (
    <header className={styles.header}>
        <h2>Davi Fernandes</h2>
        <nav>
          <ul className={styles.infos}>
            <li>
              <a href="#about">Sobre</a>
            </li>
            <li>
              <a href="#skills">Habilidades</a>
            </li>
            <li>
              <a href="#projects">Projetos</a>
            </li>
            <li>
              <a href="#contact">Contato</a>
            </li>
          </ul>
        </nav>
    </header>
  );
};

export default Header;
