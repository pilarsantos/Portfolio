import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Box, Typography, type Theme } from "@mui/material";
import { GradientButton } from "../ui/GradientButton";
import SendIcon from "@mui/icons-material/Send";
import { motion, type Variants } from "framer-motion";
import { useTranslation } from "react-i18next";
import { StyledTextField } from "../ui/StyledTextField";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 60 },
  },
};

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">(
    "idle",
  );
  const { t } = useTranslation();

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current!,
        PUBLIC_KEY,
      );
      setStatus("ok");
      formRef.current?.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      <Box
        component="form"
        ref={formRef}
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          maxWidth: "600px",
          margin: "0 auto",
          px: 2,
          py: 6,
        }}
      >
        <motion.div variants={itemVariants}>
          <Typography
            sx={{
              display: "inline-block",
              fontFamily: 'Athene',
              fontWeight: 800,
              fontSize: "60px",
              pr: "20px",
              lineHeight: 1,
              letterSpacing: "2px",
              background: "linear-gradient(135deg, #b163ff, #ec4899, #f472b6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {t("contact.title")}
          </Typography>
          <Typography
            sx={{ color: (theme: Theme) => theme.palette.text.secondary }}
          >
            {t("contact.subtitle")}
          </Typography>
        </motion.div>

        <motion.div variants={itemVariants}>
          <StyledTextField
            fullWidth
            label={t("contact.name")}
            name="from_name"
            required
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <StyledTextField
            fullWidth
            label={t("contact.email")}
            name="reply_to"
            type="email"
            required
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <StyledTextField
            fullWidth
            label={t("contact.message")}
            name="message"
            multiline
            rows={5}
            required
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <GradientButton
            type="submit"
            disabled={status === "loading"}
            endIcon={<SendIcon />}
          >
            {status === "loading" ? t("contact.sending") : t("contact.send")}
          </GradientButton>
        </motion.div>

        {status === "ok" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Typography sx={{ color: (theme: Theme) => theme.palette.custom.cyan }}>
              {t("contact.success")}
            </Typography>
          </motion.div>
        )}
        {status === "error" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Typography sx={{ color: (theme: Theme) => theme.palette.secondary.light }}>
              {t("contact.error")}
            </Typography>
          </motion.div>
        )}
      </Box>
    </motion.div>
  );
};
