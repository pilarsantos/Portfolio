import { Box } from "@mui/material";
import { Experience } from "../components";

export const ExperiencePage = () => (
  <Box sx={{ px: { xs: 2, md: 6 }, py: 6, maxWidth: { xs: "800px", md: "800px", lg: "1200px" }, margin: "0 auto" }}>
    <Experience />
  </Box>
);