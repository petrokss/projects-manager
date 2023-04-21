import ProjectItem from "../ProjectItem";
import type { Project } from "../../types";
import styles from "./projects-list.module.css";

interface ProjectsListProps {
  projects: Project[];
  activeProject: Project | null;
  onProjectNameChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    project: Project
  ) => void;
  onProjectFocus: (project: Project) => void;
  onProjectBlur: () => void;
  onProjectDelete: (id: number) => void;
}

const ProjectsList = ({
  projects,
  activeProject,
  onProjectNameChange,
  onProjectFocus,
  onProjectBlur,
  onProjectDelete,
}: ProjectsListProps) => {
  return (
    <table className={styles.list}>
      {projects.map((project, index) => (
        <tr className={styles["project-item"]} key={`${project.name}-${index}`}>
          <ProjectItem
            project={project}
            onProjectChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              onProjectNameChange(event, project)
            }
            onProjectFocus={() => onProjectFocus(project)}
            onProjectBlur={onProjectBlur}
            activeProject={activeProject}
            onDeleteProject={onProjectDelete}
          />
        </tr>
      ))}
    </table>
  );
};

export default ProjectsList;
