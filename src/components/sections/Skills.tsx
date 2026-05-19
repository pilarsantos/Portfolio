import { Box } from "@mui/material";
import { SkillChip } from "../ui/SkillChip";
import {
  SiSpringboot,
  SiReact,
  SiTypescript,
  SiMysql,
  SiKotlin,
  SiDocker,
  SiHtml5,
  SiPostman,
  SiSpring,
} from "react-icons/si";
import { FaGitAlt, FaJava } from "react-icons/fa";
import { motion,  type Variants } from "framer-motion";

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
    progress: 80
  },
  {
    label: "Spring Boot",
    subLabel: "Backend",
    color: "#38BDF8",
    borderColor: "#0C3E57",
    backgroundColor: "#081E29",
    icon: <SiSpringboot />,
    progress: 70
  },
  {
    label: "React",
    subLabel: "Frontend",
    color: "#F472B6",
    borderColor: "#4E1A39",
    backgroundColor: "#260E1C",
    icon: <SiReact />,
    progress: 75
  },
  {
    label: "Typescript",
    subLabel: "Frontend",
    color: "#FACC15",
    borderColor: "#4A3E14",
    backgroundColor: "#221D0A",
    icon: <SiTypescript />,
    progress: 75
  },
  {
    label: "JavaFX",
    subLabel: "Desktop",
    color: "#f838eb",
    borderColor: "#570c57",
    backgroundColor: "#210829",
    icon: <FaJava />,
    progress: 90
  },
  {
    label: "MySQL",
    subLabel: "Database",
    color: "#FB923C",
    borderColor: "#4E2413",
    backgroundColor: "#24120B",
    icon: <SiMysql />,
    progress: 75
  },
  {
    label: "Kotlin",
    subLabel: "Mobile",
    color: "#b163ff",
    borderColor: "#361A5E",
    backgroundColor: "#180D2B",
    icon: <SiKotlin />,
    progress: 70
  },
  {
    label: "Docker",
    subLabel: "DevOps",
    color: "#4adec8",
    borderColor: "#1b433e",
    backgroundColor: "#0e2221",
    icon: <SiDocker />,
    progress: 60
  },
  {
    label: "HTML/CSS",
    subLabel: "Frontend",
    color: "#ff6e55ff",
    borderColor: "#4a290aff",
    backgroundColor: "#241106ff",
    icon: <SiHtml5 />,
    progress: 90
  },
  {
    label: "Microservices",
    subLabel: "Architecture",
    color: "#c6ff6bff",
    borderColor: "#314a0aff",
    backgroundColor: "#182406ff",
    icon: <SiSpring />,
    progress: 70
  },
  {
    label: "REST APIs",
    subLabel: "Backend",
    color: "#60A5FA",
    borderColor: "#1E3A5F",
    backgroundColor: "#0C1A2B",
    icon: <SiPostman />,
    progress: 75
  },
  {
    label: "Git",
    subLabel: "DevOps",
    color: "#e871f8ff",
    borderColor: "#481e4aff",
    backgroundColor: "#220f22ff",
    icon: <FaGitAlt />,
    progress: 80
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
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
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
            progress={skill.progress}
          />
        </motion.div>
      ))}
    </MotionBox>
  );
};
