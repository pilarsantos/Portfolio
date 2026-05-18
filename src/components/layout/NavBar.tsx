import {
  Toolbar,
  AppBar,
  Button,
  Switch,
  Box,
  Typography,
} from "@mui/material";
import type { Theme } from "@mui/material";
import {
  useLocation,
  useNavigate,
  type NavigateOptions,
} from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

type AppPath = "/" | "/experience" | "/skills" | "/contact";

export const NavBar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const navItems: { label: string; path: AppPath }[] = [
    { label: t("nav.about"), path: "/" },
    { label: t("nav.experience"), path: "/experience" },
    { label: t("nav.skills"), path: "/skills" },
    { label: t("nav.contact"), path: "/contact" },
  ];

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: "rgba(244, 17, 218, 0.09)",
        backdropFilter: "blur(10px)",
        boxShadow: "0px 4px 20px rgba(217, 70, 239, 0.15)",
        borderBottom: "1px solid rgba(217, 70, 239, 0.2)",
        px: { xs: 2, md: 6 },
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          marginLeft: "auto",
          gap: "12px",
          alignItems: "stretch",
        }}
      >
        {navItems.map(({ label, path }) => {
          const isActive = pathname === path;
          return (
            <Button
              key={path}
              onClick={() => navigate({ to: path as NavigateOptions["to"] })}
              disableRipple
              sx={{
                position: "relative",
                minWidth: 0,
                textTransform: "none",
                fontSize: "13px",
                color: isActive
                  ? (theme: Theme) => theme.palette.text.primary
                  : (theme: Theme) => theme.palette.text.secondary,
                transition: "color 0.2s ease",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "2px",
                  background:
                    "linear-gradient(90deg, transparent, #b163ff, #ec4899, transparent)",
                  transform: isActive ? "scaleX(1)" : "scaleX(0)",
                  transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                },

                "&:hover": {
                  background: "transparent",
                  color: "#f0eaffd7",
                  "&::after": {
                    transform: "scaleX(1)",
                  },
                },
              }}
            >
              {label}
            </Button>
          );
        })}
        <Language />
      </Toolbar>
    </AppBar>
  );
};

const Language = () => {
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === "en";
  return (
    <Box sx={{ ml: "12px", display: "flex", alignItems: "center" }}>
      <Typography
        variant="body2"
        sx={{
          fontSize: "13px",
          fontWeight: 600,
          color: !isEnglish
            ? (theme: Theme) => theme.palette.primary.light
            : (theme: Theme) => theme.palette.text.secondary,
          transition: "color 0.3s ease",
        }}
      >
        ENG
      </Typography>
      <Switch
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
          fontSize: "13px",
          fontWeight: 600,
          color: isEnglish
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
