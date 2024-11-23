import styles from "./style.module.css";

const About = () => {
  return (
    <>
      <section className={styles.about}>
        <div className={styles.aboutContent}>
          <h2>Olá! Eu sou Davi Fernandes, Desenvolvedor Frontend</h2>
          <p>
            Com uma paixão por criar experiências web interativas e responsivas,
            meu foco é transformar ideias em interfaces funcionais e visualmente
            atraentes. Ao longo da minha jornada, tive a oportunidade de
            trabalhar com diversas tecnologias, como HTML, CSS, JavaScript,
            React e outras, sempre buscando as melhores práticas para entregar
            resultados de alta qualidade.
          </p>
          <button>Vamos construir algo incrível juntos!</button>
        </div>
      </section>
    </>
  );
};

export default About;
