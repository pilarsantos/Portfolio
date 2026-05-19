import { Box, Typography, Switch, type Theme } from "@mui/material";
import { useTranslation } from "react-i18next";

interface LanguageProps {
  isMobile: boolean;
}

export const LanguageComponent = ({ isMobile }: LanguageProps) => {
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === "en";
  return (
    <Box sx={{ ml: "12px", display: "flex", alignItems: "center" }}>
      <Typography
        variant="body2"
        sx={{
          fontSize: isMobile ? "13px" : "15px",
          fontWeight: 600,
          color: isEnglish
            ? (theme: Theme) => theme.palette.primary.light
            : (theme: Theme) => theme.palette.text.secondary,
          transition: "color 0.3s ease",
        }}
      >
        ENG
      </Typography>
      <Switch
        checked={!isEnglish}
        onChange={(e) => i18n.changeLanguage(e.target.checked ? "es" : "en")}
        sx={{
          "& .MuiSwitch-switchBase": {
            color: (theme: Theme) => theme.palette.custom.cyanDark,
          },
          "& .MuiSwitch-track": {
            backgroundColor: (theme: Theme) => theme.palette.custom.cyanDark,
            opacity: "60%",
          },
          "& .MuiSwitch-switchBase.Mui-checked": {
            color: (theme: Theme) => theme.palette.custom.magenta,
          },

          "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
            backgroundColor: (theme: Theme) => theme.palette.custom.magenta,
            opacity: "60%",
          },
        }}
      ></Switch>
      <Typography
        variant="body2"
        sx={{
          fontSize: isMobile ? "13px" : "15px",
          fontWeight: 600,
          color: !isEnglish
            ? (theme: Theme) => theme.palette.primary.light
            : (theme: Theme) => theme.palette.text.secondary,
          transition: "color 0.3s ease",
        }}
      >
        ES
      </Typography>
    </Box>
  );
};
