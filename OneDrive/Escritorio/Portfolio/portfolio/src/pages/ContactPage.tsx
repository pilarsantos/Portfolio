import { Box } from "@mui/material";
import { Contact } from "../components";

export const ContactPage = () => (
  <Box sx={{ px: { xs: 2, md: 6 }, py: 6, maxWidth: "800px", margin: "0 auto" }}>
    <Contact />
  </Box>
);