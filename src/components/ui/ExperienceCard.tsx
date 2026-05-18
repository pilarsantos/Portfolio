import { alpha, Box, Card, Typography, type Theme } from "@mui/material";

interface ExperienceCardProps {
  gradient: string;
  title: string;
  role: string;
  description: string;
  date: string;
  roleColor: string;
}

export const ExperienceCard = ({
  gradient,
  title,
  role,
  description,
  date,
  roleColor,
}: ExperienceCardProps) => {
  return (
    <Card
      sx={{
        borderRadius: "12px",
        position: "relative",
        border: "1px solid #9999bb37",
        borderLeft: "0px solid transparent",
        backgroundColor: "#9999bb0d",
        minWidth: "0px",
        px: "24px",
        py: "24px",
        boxSizing: "border-box",
        "&::before": {
          content: '""',
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "4px",
          background: gradient,
        },
        transition: "all 0.3s ease",
        "&:hover": {
          backgroundColor: alpha(roleColor, 0.09),
          transform: "translateY(-4px)",
        },
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            sx={{
              color: (theme: Theme) => theme.palette.primary.light,
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              color: roleColor,
              fontWeight: "bold",
              fontSize: "small",
            }}
          >
            {role}
          </Typography>
          <Typography
            sx={{
              color: (theme: Theme) => theme.palette.text.secondary,
              fontSize: "small",
            }}
          >
            {description}
          </Typography>
        </Box>
        <Typography
          sx={{
            color: (theme: Theme) => theme.palette.text.secondary,
            fontSize: "12px",
            ml: "auto",
            flexShrink: 0,
            whiteSpace: "nowrap",
          }}
        >
          {date}
        </Typography>
      </Box>
    </Card>
  );
};
