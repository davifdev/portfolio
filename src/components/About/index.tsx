import styles from "./style.module.css";
import perfilImage from "../../assets/perfil.png";

export const About = () => {
  return (
    <section className={styles["s-about"]}>
      <div className="container">
        <div className={styles.aboutMe}>
          <div className="left">
            <img src={perfilImage} alt="Foto de Perfil" />
          </div>

          <div className={styles.right}>
            
            <h3>Olá prazer em conhecê-lo 👋</h3>
            <h2>Davi Fernandes</h2>

            <div className={styles.aboutInfo}>
              <p>Desenvolvedor Front-end</p>
              <p>
                Atualmente estou cursando Análise e Desenvolvimento de Sistemas
                e tenho atuado em projetos como desenvolvedor front-end, onde
                adquiri experiências que contribuíram para a minha evolução
                profissional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
