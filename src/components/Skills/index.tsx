import Subtitle from "../Subtitle";
import styles from "./styles.module.css";

import { SiTypescript, SiJavascript } from "react-icons/si";
import { RiTailwindCssFill, RiReactjsFill, RiNextjsFill } from "react-icons/ri";
import { IoGitBranchOutline } from "react-icons/io5";

const Skills = () => {
  return (
    <section id="skills" className={styles.skills}>
      <Subtitle title="Habilidades" />

      <div className={styles.info}>
        <div className={styles.left}>
          <div className={styles.tools}>
            <SiJavascript />
            <span>Javascript</span>
          </div>
          <div className={styles.tools}>
            <SiTypescript />
            <span>Typescript</span>
          </div>
          <div className={styles.tools}>
            <RiReactjsFill />
            <span>ReactJS</span>
          </div>
          <div className={styles.tools}>
            <RiNextjsFill />
            <span>NextJS</span>
          </div>
          <div className={styles.tools}>
            <RiTailwindCssFill />
            <span>TailwindCSS</span>
          </div>
          <div className={styles.tools}>
            <IoGitBranchOutline />
            <span>Git e Github</span>
          </div>
        </div>

        <div className={styles.rigth}>
          <img src="bg-skills.png" />
          <img src="dev.png" className={styles.dev} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
