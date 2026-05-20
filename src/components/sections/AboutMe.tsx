import { Chip, Typography, Grid, Box, type Theme } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import { AnimatedPortrait } from "../ui/AnimatedPortrait";
import { motion, type Variants } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ButtonGroup } from "../ui/ButtonGroup";
import { GradientButton } from "../ui/GradientButton";
import DownloadIcon from "@mui/icons-material/Download";

const MotionGrid = motion.create(Grid);

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const otherVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 60,
    },
  },
};

export const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <MotionGrid
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      container
      sx={{
        minHeight: "75vh",
        alignItems: "center",
      }}
    >
      <Grid
        size={{ xs: 12, md: 7 }}
        sx={{ textAlign: { xs: "center", md: "left" } }}
      >
        <motion.div variants={otherVariants}>
          <Chip
            sx={{
              my: "12px",
              color: (theme: Theme) => theme.palette.primary.main,
              borderColor: "#bf26d368",
              backgroundColor: "#bf26d319",
              "& .MuiChip-icon": {
                color: (theme: Theme) => theme.palette.secondary.main,
                filter: "drop-shadow(0 0 3px #ec4899)",
                animation: "pulse 2s infinite alternate",
              },
            }}
            icon={<CircleIcon sx={{ fontSize: "8px" }} />}
            variant="outlined"
            label={t("about.chip")}
          />
        </motion.div>
        <motion.div variants={otherVariants}>
          <Typography
            sx={{
              fontFamily: 'Athene',
              fontWeight: 800,
              fontSize: "60px",
              pr: "20px",
              lineHeight: 1,
              letterSpacing: "2px",
              color: (theme: Theme) => theme.palette.primary.light,
            }}
          >
            Pilar
          </Typography>
          <Typography
            sx={{
              display: "inline-block",
              fontFamily: 'Athene',
              fontWeight: 800,
              fontStyle: "italic",
              fontSize: "60px",
              pr: "20px",
              lineHeight: 1,
              letterSpacing: "2px",
              background: "linear-gradient(135deg, #b163ff, #ec4899, #f472b6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Santos
          </Typography>
        </motion.div>

        <motion.div variants={otherVariants}>
          <Typography
            sx={{
              my: "12px",
              color: (theme: Theme) => theme.palette.text.secondary,
              maxWidth: "600px",
              mx: { xs: "auto", md: 0 },
              fontSize: { xs: "15px", md: "18px", lg: "20px" },
            }}
          >
            {t("about.description")}
          </Typography>
        </motion.div>
        <motion.div variants={otherVariants}>
          <Box
            sx={{
              display: "flex",
              gap: "16px",
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <GradientButton
              href={t("about.cvPath")}
              download={t("about.cvFilename")}
              startIcon={<DownloadIcon />}
            >
              {t("about.downloadCv")}
            </GradientButton>
            <ButtonGroup />
          </Box>
        </motion.div>
      </Grid>
      <Grid
        size={{ xs: 12, md: 5 }}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Box
          sx={{
            width: { xs: "70%", sm: "50%", md: "100%" },
            maxWidth: "450px",
          }}
        >
          <AnimatedPortrait />
        </Box>
      </Grid>
    </MotionGrid>
  );
};
