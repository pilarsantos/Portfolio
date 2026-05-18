import { Box } from "@mui/material";
import { SkillChip } from "../ui/SkillChip";
import {
  SiSpringboot,
  SiReact,
  SiTypescript,
  SiMysql,
  SiKotlin,
  SiDocker,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { motion, type Variants } from "framer-motion";

const MotionBox = motion.create(Box);

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const chipVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

const skillsData = [
  {
    label: "Java",
    subLabel: "Backend",
    color: "#4ADE80",
    borderColor: "#1B4325",
    backgroundColor: "#0E2213",
    icon: <FaJava />,
  },
  {
    label: "Spring Boot",
    subLabel: "Backend",
    color: "#38BDF8",
    borderColor: "#0C3E57",
    backgroundColor: "#081E29",
    icon: <SiSpringboot />,
  },
  {
    label: "React",
    subLabel: "Frontend",
    color: "#F472B6",
    borderColor: "#4E1A39",
    backgroundColor: "#260E1C",
    icon: <SiReact />,
  },
  {
    label: "Typescript",
    subLabel: "Frontend",
    color: "#FACC15",
    borderColor: "#4A3E14",
    backgroundColor: "#221D0A",
    icon: <SiTypescript />,
  },
  {
    label: "JavaFX",
    subLabel: "Desktop",
    color: "#f838eb",
    borderColor: "#570c57",
    backgroundColor: "#210829",
    icon: <FaJava />,
  },
  {
    label: "Mysql",
    subLabel: "Database",
    color: "#FB923C",
    borderColor: "#4E2413",
    backgroundColor: "#24120B",
    icon: <SiMysql />,
  },
  {
    label: "Kotlin",
    subLabel: "Mobile",
    color: "#b163ff",
    borderColor: "#361A5E",
    backgroundColor: "#180D2B",
    icon: <SiKotlin />,
  },
  {
    label: "Docker",
    subLabel: "DevOps",
    color: "#4adec8",
    borderColor: "#1b433e",
    backgroundColor: "#0e2221",
    icon: <SiDocker />,
  },
];

export const Skills = () => {
  return (
    <MotionBox
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "repeat(2, 1fr)",
          sm: "repeat(4, 1fr)",
        },
        gap: "24px",
        boxSizing: "border-box",
        margin: "0 auto",
      }}
    >
      {skillsData.map((skill, index) => (
        <motion.div variants={chipVariants} key={index}>
          <SkillChip
            key={index}
            label={skill.label}
            subLabel={skill.subLabel}
            color={skill.color}
            borderColor={skill.borderColor}
            backgroundColor={skill.backgroundColor}
            icon={skill.icon}
          />
        </motion.div>
      ))}
    </MotionBox>
  );
};
