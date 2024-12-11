import styles from "./styles.module.css";

import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.icons}>
        <a target="_blank" href="https://www.instagram.com/fernandes.236/">
          <FaInstagram />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/davi-fernandes-05a737226/"
        >
          <FaLinkedin />
        </a>
        <a target="_blank" href="https://github.com/davifdev">
          <FaGithub />
        </a>
      </div>
      
      <div className={styles.copyright}>
        <h2>Davi Fernandes</h2>
        <p>Copyright 2024 - Todos os direitos reservados a Davi Fernandes</p>
      </div>
    </footer>
  );
};

export default Footer;
