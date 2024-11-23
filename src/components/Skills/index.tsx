// Components
import { Dir } from "fs";
import CardSkills from "../CardSkills";
// Icons

import { FaCode, FaComputer } from "react-icons/fa6";
import { MdLaptopChromebook } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { CiMobile1 } from "react-icons/ci";

const Skills = () => {
  return (
    <section className="s-skills">
      <div className="d-title">
        <div className="">
          <p>Services</p>
          <h2>Skill-Set</h2>
        </div>

        <div className="d-skills">
          <CardSkills icon={<CiMobile1 />} skill="Responsivo" />
          <CardSkills icon={<FaCode />} skill="Code" />
          <CardSkills icon={<MdLaptopChromebook />} skill="Otimização" />
          <CardSkills icon={<FaReact />} skill="Frameworks" />
          <CardSkills icon={<CiMobile1 />} skill="" />
          <CardSkills icon={<FaComputer />} skill="" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
