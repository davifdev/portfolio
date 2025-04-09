import styles from "./style.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.navigation}>
          <h1>Davi Fernandes</h1>

          <ul className={styles.infos}>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
