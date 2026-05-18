import {
  Chip,
  Typography,
  Grid,
  Box,
  IconButton,
  type Theme,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import { AnimatedPortrait } from "../ui/AnimatedPortrait";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DownloadIcon from "@mui/icons-material/Download";
import { GradientButton } from "../ui/GradientButton";
import { motion, type Variants } from "framer-motion";
import { useTranslation } from "react-i18next";

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
      spacing={4}
      sx={{ px: { xs: 2, md: 6 }, py: 6, maxWidth: "90%", margin: "0 auto" }}
    >
      <Grid
        size={{ xs: 12, md: 6 }}
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
              fontFamily: "'Playfair Display', serif",
              fontWeight: 800,
              fontSize: "58px",
              lineHeight: 1,
              color: (theme: Theme) => theme.palette.primary.light,
            }}
          >
            Pilar
          </Typography>
          <Typography
            sx={{
              display: "inline-block",
              fontFamily: "'Playfair Display', serif",
              fontWeight: 800,
              fontStyle: "italic",
              fontSize: "58px",
              lineHeight: 1,
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
              maxWidth: "500px",
              mx: { xs: "auto", md: 0 },
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
            <IconButton
              href="https://www.linkedin.com/in/pilar-santos-69b890256"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: (theme: Theme) => theme.palette.primary.main,
                border: "1px solid #bf26d368",
                backgroundColor: "#bf26d319",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#bf26d333",
                  color: (theme: Theme) => theme.palette.secondary.main,
                  transform: "translateY(-2px)",
                },
              }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              href="https://github.com/pilarsantos"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: (theme: Theme) => theme.palette.primary.main,
                border: "1px solid #bf26d368",
                backgroundColor: "#bf26d319",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#bf26d333",
                  color: (theme: Theme) => theme.palette.secondary.main,
                  transform: "translateY(-2px)",
                },
              }}
            >
              <GitHubIcon />
            </IconButton>
          </Box>
        </motion.div>
      </Grid>
      <Grid
        size={{ xs: 12, md: 6 }}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Box sx={{ width: { xs: "60%", sm: "45%", md: "100%", lg: "55%" } }}>
          <AnimatedPortrait />
        </Box>
      </Grid>
    </MotionGrid>
  );
};
