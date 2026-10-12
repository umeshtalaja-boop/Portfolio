import { createBrowserRouter } from "react-router"
import Layout from "./components/Layout.jsx"

const page = (load) => async () => {
  const module = await load()
  return { Component: module.default }
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, lazy: page(() => import("./pages/Home.jsx")) },
      { path: "about", lazy: page(() => import("./pages/About.jsx")) },
      { path: "projects", lazy: page(() => import("./pages/Projects.jsx")) },
      {
        path: "projects/:projectId",
        lazy: page(() => import("./pages/ProjectDetail.jsx")),
      },
      { path: "skills", lazy: page(() => import("./pages/Skills.jsx")) },
      {
        path: "experience",
        lazy: page(() => import("./pages/Experience.jsx")),
      },
      { path: "contact", lazy: page(() => import("./pages/Contact.jsx")) },
      { path: "*", lazy: page(() => import("./pages/NotFound.jsx")) },
    ],
  },
])
