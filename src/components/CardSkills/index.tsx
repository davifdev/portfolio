import { ReactElement } from "react";
import styles from "./style.module.css";

interface PropsIcon {
  icon: ReactElement;
  skill: string;
  exp?: string;
}

const CardSkills = ({ icon, skill, exp }: PropsIcon) => {
  return (
    <>
      <div className={styles.chat}>
        {icon}
        <h3>{skill}</h3>
        <p>{exp}</p>
      </div>
    </>
  );
};

export default CardSkills;
