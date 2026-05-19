import { alpha, Box, Typography } from "@mui/material";
import type { ReactNode } from "react";

interface SkillChipProps {
  label: string;
  subLabel: string;
  color: string;
  borderColor: string;
  backgroundColor: string;
  icon: ReactNode;
}

export const SkillChip = ({ label, subLabel, color, borderColor, backgroundColor, icon }: SkillChipProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        border: `1px solid ${borderColor}`,
        backgroundColor: backgroundColor,
        borderRadius: "12px",
        px: "16px",
        py: "14px",
        height: "88px",
        boxSizing: "border-box",
        boxShadow: `0px 0px 6px ${color}22`,
        transition: "all 0.3s ease",
        cursor: "default",
        "&:hover": {
          backgroundColor: alpha(color, 0.15),
          transform: "translateY(-4px)",
        },
      }}
    >
      <Box sx={{ color: color, display: "flex", fontSize: "20px" }}>
        {icon}
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "2px" }}>
        <Typography sx={{ color: color, fontSize: { xs: "15px", md: "18px", lg: "20px" }, fontWeight: 500, lineHeight: 1 }}>
          {label}
        </Typography>
        <Typography sx={{ color: alpha(color, 0.6), fontSize: { xs: "12px", md: "15px", lg: "17px" }, lineHeight: 1 }}>
          {subLabel}
        </Typography>
      </Box>
    </Box>
  );
};