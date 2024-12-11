import styles from "./styles.module.css";

interface Props {
  title: string;
}

const Subtitle = ({ title }: Props) => {
  return (
    <div className={styles.subtitle}>
      <h2>{title}</h2>
      <div className={styles.separator}></div>
    </div>
  );
};

export default Subtitle;
