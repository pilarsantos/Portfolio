import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
} from "@tanstack/react-router";
import { NavBar, AboutMe, Experience, Skills } from "../components";
import { Box } from "@mui/material";
import { Contact } from "../components/sections/Contact";

const ExperiencePage = () => (
  <Box
    sx={{
      px: { xs: 2, md: 6 },
      py: 6,

      maxWidth: "800px", 
      margin: "0 auto",
    }}
  >
    <Experience />
  </Box>
);
const SkillsPage = () => (
   <Box
    sx={{
      px: { xs: 2, md: 6 },
      py: 6,
      maxWidth: "800px", 
      margin: "0 auto",
    }}
  >
    <Skills />
  </Box>
);
const ContactPage = () => (
   <Box
    sx={{
      px: { xs: 2, md: 6 },
      py: 6,
      maxWidth: "800px", 
      margin: "0 auto",
    }}
  >
    <Contact />
  </Box>
);

const rootRoute = createRootRoute({
  component: () => (
    <>
      <NavBar />
      <Outlet />
    </>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => <AboutMe />,
});

const experienceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/experience",
  component: ExperiencePage,
});

const skillsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/skills",
  component: SkillsPage,
});

const ContactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});

export const router = createRouter({
  routeTree: rootRoute.addChildren([indexRoute, experienceRoute, skillsRoute, ContactRoute]),
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
