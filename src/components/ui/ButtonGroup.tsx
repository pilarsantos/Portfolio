import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

import { IconButton, type Theme } from "@mui/material";

export const ButtonGroup = () => {
  return (
    <>
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
      <IconButton
        href="mailto:pilarsantos03@gmail.com"
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
        <AlternateEmailIcon />
      </IconButton>
    </>
  );
};
