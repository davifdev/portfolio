import styles from "./style.module.css";
import imgContact from "../../assets/img-contact.png";
import arrowDown from "../../assets/arrow-down.png";

export const Contact = () => {
  return (
    <section className={styles.contact}>
      <div className="container">
        <div className={styles.contactContent}>
          <h1>Contato</h1>
          <div className={styles.formContent}>
            <div className={styles.left}>
              <div className={styles.project}>
                <h2>
                  Tem algum projeto em <span>mente?</span>
                </h2>
                <img
                  src={imgContact}
                  alt="Imagem de Contato"
                />
                <img className={styles.arrowDown} src={arrowDown} alt="Arrow Down" />
              </div>
            </div>
            <div className={styles.right}>
              <form>
                <div className={styles.info}>
                  <label>
                    <span>Seu nome</span>
                    <input type="text" placeholder="Seu nome" />
                  </label>
                  <label>
                    <span>Seu e-mail</span>
                    <input type="text" placeholder="Seu e-mail" />
                  </label>
                </div>

                <label>
                  <span>Sua mensagem</span>
                  <textarea placeholder="Mensagem"></textarea>
                </label>

                <button type="submit">Enviar Mensagem</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
