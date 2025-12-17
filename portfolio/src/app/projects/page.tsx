//src/app/projects/page.tsx
import "../../../styles/app.css";
import Projects from "../components/projects/Projects";
import { getProjects } from "../../lib/queries/projects";

export const metadata = {
  title: "Projects - Dylan Hawke",
  description:
    "A showcase of Dylan’s personal, academic, and game development projects.",
};

export default function ProjectsPage() {
  const projects = getProjects();
  return <Projects projects={projects}/>;
}
