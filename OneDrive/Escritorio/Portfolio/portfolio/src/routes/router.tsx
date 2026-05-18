import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
} from "@tanstack/react-router";
import { NavBar, AboutMe} from "../components";
import { ExperiencePage, SkillsPage, ContactPage } from "../pages";

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
