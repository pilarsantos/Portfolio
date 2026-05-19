import {
  Toolbar,
  AppBar,
  Button,
  Box,
  useMediaQuery,
  useTheme,
  List,
  Drawer,
  ListItemButton,
} from "@mui/material";
import type { Theme } from "@mui/material";
import {
  useLocation,
  useNavigate,
  type NavigateOptions,
} from "@tanstack/react-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import MenuIcon from "@mui/icons-material/Menu";
import { ButtonGroup } from "../ui/ButtonGroup";
import { LanguageComponent } from "../ui/LanguageComponent";

type AppPath = "/" | "/experience" | "/skills" | "/contact";

export const NavBar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState(false);

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
      {isMobile ? (
        <Toolbar
          sx={{
            display: "flex",
            gap: "12px",
            alignItems: "stretch",
          }}
        >
          <Button
            onClick={() => setOpen(true)}
            sx={{ minWidth: 0, mr: "auto" }}
          >
            <MenuIcon />
          </Button>
          <LanguageComponent isMobile={isMobile} />
          <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
            <Box
              sx={{
                width: 250,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              <List>
                {navItems.map(({ label, path }) => {
                  const isActive = pathname === path;
                  return (
                    <ListItemButton
                      key={path}
                      onClick={() => {
                        navigate({ to: path as NavigateOptions["to"] });
                        setOpen(false);
                      }}
                      disableRipple
                      sx={navButtonSx(isActive, "15px")}
                    >
                      {label}
                    </ListItemButton>
                  );
                })}
              </List>
              <Box
                sx={{
                  mt: "auto",
                  py: "16px",
                  display: "flex",
                  gap: "16px",
                  borderTop: "1px solid rgba(217, 70, 239, 0.2)",
                  justifyContent: "center",
                }}
              >
                <ButtonGroup />
              </Box>
            </Box>
          </Drawer>
        </Toolbar>
      ) : (
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
                sx={navButtonSx(isActive, "15px")}
              >
                {label}
              </Button>
            );
          })}

          <LanguageComponent isMobile={isMobile} />
        </Toolbar>
      )}
    </AppBar>
  );
};

const navButtonSx = (isActive: boolean, fontSize: string) => ({
  position: "relative",
  minWidth: 0,
  textTransform: "none",
  fontSize,
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
    "&::after": { transform: "scaleX(1)" },
  },
});
