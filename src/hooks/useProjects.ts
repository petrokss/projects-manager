import { useState } from "react";
import type { Project } from "../types";

type UseProjectsReturn = {
  projects: Project[];
  activeProject: Project | null;
  createProject: () => void;
  deleteProject: (id: number) => void;
  updateProjectName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleProjectFocus: (project: Project) => void;
  handleProjectBlur: () => void;
};

const useProjects = (): UseProjectsReturn => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const createProject = () => {
    const newProject = {
      name: "",
      date: new Date().toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      }),
      id: Math.floor(Math.random() * 100000),
    };
    setProjects((prevProjects) => [...prevProjects, newProject]);
    setActiveProject(newProject);
  };

  const updateProjectName = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (activeProject) {
      const newName = e.target.value;
      const updatedProjects = projects.map((project) => {
        if (project.id === activeProject?.id) {
          return { ...project, name: newName };
        }
        return project;
      });
      setProjects(updatedProjects);
    }
  };

  const handleProjectFocus = (project: Project) => {
    setActiveProject(project);
  };

  const handleProjectBlur = () => {
    setActiveProject(null);
  };

  const deleteProject = (id: number) => {
    setProjects((prevProjects) =>
      prevProjects.filter((project) => project.id !== id)
    );
  };

  return {
    projects,
    activeProject,
    createProject,
    deleteProject,
    updateProjectName,
    handleProjectFocus,
    handleProjectBlur,
  };
};

export default useProjects;
