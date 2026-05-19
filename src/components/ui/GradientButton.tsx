import { Button } from "@mui/material";
import type { ReactNode } from "react";

interface GradientButtonProps {
  href?: string;
  download?: string;
  children: ReactNode;
  startIcon?: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  endIcon?: ReactNode;
  disabled?: boolean;
}

export const GradientButton = ({
  href = "",
  download,
  children,
  startIcon,
  endIcon,
  onClick,
  type = "button",
  disabled = false,
}: GradientButtonProps) => {
  return (
    <Button
      variant="contained"
      startIcon={startIcon}
      endIcon={endIcon}
      href={href}
      download={download}
      onClick={onClick}
      type={type}
      disabled={disabled}
      sx={{
        background: "linear-gradient(135deg, #b163ff, #ec4899)",
        textTransform: "none",
        fontWeight: 600,
        borderRadius: "8px",
        px: 3,
        py: 1,
        boxShadow: "0 4px 14px 0 rgba(236, 72, 153, 0.3)",
        "&:hover": {
          background: "linear-gradient(135deg, #7c3aed, #d93685)",
          boxShadow: "0 6px 20px 0 rgba(236, 72, 153, 0.5)",
        },
      }}
    >
      {children}
    </Button>
  );
};
