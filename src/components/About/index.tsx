import styles from "./styles.module.css";

const About = () => {
  return (
    <section className={styles.about}>
        
      <div className={styles.left}>
        <span>
          <img src="arrow.png" className={styles.arrow} />
          Olá, eu sou <strong>Davi Fernandes</strong>
        </span>
        <h1>
          Desenvolvedor Front-end, Com uma paixão por criar experiências web
          interativas e responsivas, meu foco é transformar ideias em interfaces
          funcionais e visualmente atraentes.
        </h1>
        <button>Fale Comigo</button>
      </div>

      <div className={styles.right}>
        <img src="/bg.png" alt="um gif ilustrativo de um progamador" />
      </div>
    </section>
  );
};

export default About;
