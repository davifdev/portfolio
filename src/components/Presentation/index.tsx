import styles from "./style.module.css";

import doodleRound from "../../assets/doodles-round.png";
import vector from "../../assets/vector-h.png";

export const Presentation = () => {
  return (
    <section className={styles.sectionPresentation}>
      <div className="container">
        <div className={styles.presentation}>
          <div className={styles.left}>
            <img src={vector} alt="vector" className={styles.vector} />
            <h2>Olá, eu sou Davi Fernandes 👋</h2>
            <h1>Desenvolvedor Front-end</h1>
            <p>
              Desenvolvedor Front-end especializado em React, HTML, CSS,
              JavaScript e TypeScript. Ajudo pequenos negócios e designers a
              transformarem suas ideias em realidade. Vamos criar algo juntos?
            </p>
            <button>Vamos criar algo juntos</button>
          </div>
          <div className={styles.right}>
            <img src={doodleRound} alt="Imagem de Perfil" />
          </div>
        </div>
      </div>
    </section>
  );
};
