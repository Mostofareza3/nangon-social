import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light
        py-3 px-6 shadow-dark cursor-pointer absolute
        "
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light
        p-8 shadow-dark cursor-pointer
        "
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="HTML" x="-20vw" y="2vw" />
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="Javascript" x="20vw" y="6vw" />
        <Skill name="React JS" x="0vw" y="12vw" />
        <Skill name="Next JS" x="-20vw" y="-15vw" />
        <Skill name="Node Js" x="15vw" y="-12vw" />
        <Skill name="Express JS" x="32vw" y="-5vw" />
        <Skill name="MongoDB" x="0vw" y="-20vw" />
        <Skill name="Firebase" x="25vw" y="18vw" />
        <Skill name="Tailwind" x="12vw" y="24vw" />
        <Skill name="Bootstrap" x="-7vw" y="24vw" />
        <Skill name="Github" x="-23vw" y="18vw" />
        <Skill name="Material UI" x="-5vw" y="-10vw" />
        <Skill name="Web Design" x="-31vw" y="-5vw" />
        <Skill name="HTML" x="-33vw" y="10vw" />
      </div>
    </>
  );
};

export default Skills;
