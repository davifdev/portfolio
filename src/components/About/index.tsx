import styles from "./style.module.css";
import perfilImage from "../../assets/perfil.png";

export const About = () => {
  return (
    <section className={styles["s-about"]}>
      <div className="container">
        <div className={styles.aboutMe}>
          <h1>Sobre mim</h1>
          <div className={styles.aboutContent}>
            <div className="left">
              <img src={perfilImage} alt="Foto de Perfil" />
            </div>
            <div className={styles.right}>
              <h3>Olá prazer em conhecê-lo 👋</h3>
              <div className={styles.aboutInfo}>
                <p>👨‍💻 Me chamo Davi fernandes e sou Desenvolvedor Front-end</p>
                <p>🎓 Graduando em Análise e Desenvolvimento de Sistemas</p>
                <p>
                  👨‍💻 Há mais de 1,5 anos desenvolvendo interfaces com
                  Javascript, ReactJS e Typescript
                </p>
                <p>
                  💡 Interesses em desenvolvimento Front-end e Back-end com
                  React, React Native, NextJS, NodeJS
                </p>
                <p>🚀 Tentando ser um pouco melhor do que ontem todos dias.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
