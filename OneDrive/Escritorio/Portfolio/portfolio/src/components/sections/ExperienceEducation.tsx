import { motion, type Variants } from "framer-motion";
import { ExperienceCard } from "../ui/ExperienceCard";
import { Box, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

const MotionBox = motion.create(Box);

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
    },
  },
};

export const Experience = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <MotionBox
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
      }}
    >
      <motion.div variants={cardVariants}>
        <ExperienceCard
          gradient="linear-gradient(180deg, #ec4899, #b163ff)"
          title={t("experience.job.title")}
          role={t("experience.job.role")}
          description={t("experience.job.description")}
          date={t("experience.job.date")}
          roleColor={theme.palette.primary.main}
        />
      </motion.div>
      <motion.div variants={cardVariants}>
        <ExperienceCard
          gradient="linear-gradient(180deg, #b163ff, #22d3ee)"
          title={t("experience.education.title")}
          role={t("experience.education.role")}
          description={t("experience.education.description")}
          date={t("experience.education.date")}
          roleColor={theme.palette.custom.cyan}
        />
      </motion.div>
    </MotionBox>
  );
};
