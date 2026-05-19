import { Box } from "@mui/material";
import type { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
}

export const PageContainer = ({ children }: PageContainerProps) => (
  <Box
    sx={{
      px: { xs: 2, md: 6 },
      py: 6,
      maxWidth: { xs: "800px", md: "800px", lg: "1300px" },
      margin: "0 auto",
    }}
  >
    {children}
  </Box>
);