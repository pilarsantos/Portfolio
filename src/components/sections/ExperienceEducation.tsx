import { motion, type Variants } from "framer-motion";
import { ExperienceCard } from "../ui/ExperienceCard";
import { Box, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

const MotionBox = motion.create(Box);

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (col:number) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      delay: col * 0.3,
      stiffness: 50,
    },
  }),
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
      <Box sx={{ display: "flex", alignItems: "center", mx: 4, gap: "2px" }}>
        <Typography
          sx={{
            fontSize: { xs: "18px", md: "21px", lg: "23px" },
            color: theme.palette.text.secondary,
          }}
        >
          {t("experience.title.experience")}
        </Typography>
        <Box
          sx={{
            width: "100%",
            height: "2px",
            background:
              "linear-gradient(90deg, transparent 0%, #b163ff 10%, #ec4899 90%, transparent 100%)",
            ml: 2,
          }}
        />
      </Box>
      <motion.div variants={cardVariants} custom={0}>
        <ExperienceCard
          gradient="linear-gradient(180deg, #ec4899, #b163ff)"
          title={t("experience.job.title")}
          role={t("experience.job.role")}
          description={t("experience.job.description")}
          date={t("experience.job.date")}
          roleColor={theme.palette.primary.main}
          href="https://github.com/pilarsantos/inventory_app"
          hrefLabel={t("experience.job.href")}
        />
      </motion.div>
      <motion.div variants={cardVariants} custom={1}>
        <ExperienceCard
          gradient="linear-gradient(180deg, #b163ff, #22d3ee)"
          title={t("experience.burofreeAiInternship.title")}
          role={t("experience.burofreeAiInternship.role")}
          description={t("experience.burofreeAiInternship.description")}
          date={t("experience.burofreeAiInternship.date")}
          roleColor={theme.palette.custom.cyan}
        />
      </motion.div>
      <Box sx={{ display: "flex", alignItems: "center", mx: 4, gap: "2px" }}>
        <Typography
          sx={{
            fontSize: { xs: "18px", md: "21px", lg: "23px" },
            color: theme.palette.text.secondary,
          }}
        >
          {t("experience.title.education")}
        </Typography>
        <Box
          sx={{
            width: "100%",
            height: "2px",
            background:
              "linear-gradient(90deg, transparent 0%, #22d3ee 10%, #4ADE80 90%, transparent 100%)",
            ml: 2,
          }}
        />
      </Box>
      <motion.div variants={cardVariants} custom={0}>
        <ExperienceCard
          gradient="linear-gradient(180deg, #22d3ee, #4ADE80)"
          title={t("experience.education.title")}
          role={t("experience.education.role")}
          description={t("experience.education.description")}
          date={t("experience.education.date")}
          roleColor="#4ADE80"
          href="https://github.com/GuillermoPrograma/BLOCKEX_1.0"
          hrefLabel={t("experience.education.href")}
        />
      </motion.div>
      <motion.div variants={cardVariants} custom={1}>
        <ExperienceCard
          gradient="linear-gradient(180deg, #4ADE80, #e4ff6bff)"
          title={t("experience.springCourse.title")}
          role={t("experience.springCourse.role")}
          description={t("experience.springCourse.description")}
          date={t("experience.springCourse.date")}
          roleColor="#e4ff6bff"
          href="https://www.udemy.com/course/spring-hibernate-tutorial/?utm_campaign=Search_DSA_Prof_Beta_la.EN_cc.GB_Subs_Test&utm_source=google&utm_medium=paid-search&portfolio=GreatBritain&utm_audience=mx&utm_tactic=nb&utm_term=_._ag_194667944789_._ad_803418411793_._kw_&utm_content=g&funnel=&test=search-partners-test&gad_source=1&gad_campaignid=23719347325&gbraid=0AAAAADROdO3XC_DX8_T6_Zf-KKR6cDAuj&gclid=Cj0KCQjwlLDQBhDjARIsAPlIefFDPoyRtnn5GlmeUXvhhJOZwadA8HhTF1pkXFZQ3GiUKFx3lvHco0UaAk6VEALw_wcB&couponCode=CP260518SUMXLD"
          hrefLabel={t("experience.springCourse.href")}
        />
      </motion.div>
    </MotionBox>
  );
};
