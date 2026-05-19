import { alpha, Box, Card, Typography, type Theme } from "@mui/material";

interface ExperienceCardProps {
  gradient: string
  title: string
  role: string
  description: string
  date: string
  roleColor: string
  href?: string
  hrefLabel?: string
}

export const ExperienceCard = ({
  gradient,
  title,
  role,
  description,
  date,
  roleColor,
  href,
  hrefLabel,
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
              fontSize: {md: "18px", lg: "20px" },
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              color: roleColor,
              fontWeight: "bold",
            fontSize: {md: "15px", lg: "17px" },
            }}
          >
            {role}
          </Typography>
          {description.split("\n").map((line, i) => (
            <Typography
              sx={{
                color: (theme: Theme) => theme.palette.text.secondary,
            fontSize: {md: "15px", lg: "17px" },
              }}
              key={i}
            >
              {line}
              
            </Typography>
          ))}
          {href && (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#06b6d4", textDecoration: "underline", fontFamily: "'Space Grotesk', sans-serif"}}
                >
                  <br />
                  {hrefLabel}
                </a>
              )}
        </Box>
        <Typography
          sx={{
            color: (theme: Theme) => theme.palette.text.secondary,
            fontSize: { xs: "12px", lg: "15px"},
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
