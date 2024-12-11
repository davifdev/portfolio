import Subtitle from "../Subtitle";
import styles from "./styles.module.css";

import { IoSend } from "react-icons/io5";

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <Subtitle title="Contato" />

      <form className={styles.form}>
        <div className={styles.row}>
          <label>
            <span>Seu nome:</span>
            <input type="text" placeholder="Digite seu nome" />
          </label>
          <label>
            <span>Seu e-mail:</span>
            <input type="email" placeholder="Digite seu e-mail" />
          </label>
        </div>
        <label>
          <span>Sua mensagem:</span>
          <textarea placeholder="Digite sua mensagem"></textarea>
        </label>
        <button className={styles.btn}>
          Enviar Mensagem <IoSend />
        </button>
      </form>
    </section>
  );
};

export default Contact;
