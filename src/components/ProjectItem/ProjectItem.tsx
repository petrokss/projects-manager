import { useState, useEffect, useRef } from "react";
import Modal from "../Modal";
import Icon from "../../assets/defaultProjectIcon.png";
import DeleteIcon from "../../assets/DeleteIcon.svg";
import type { Project } from "../../types";
import styles from "./project.module.css";
import ProjectInput from "../ProjectInput";

type ProjectProps = {
  project: Project;
  onProjectChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onProjectFocus: (project: Project) => void;
  onProjectBlur: () => void;
  activeProject: Project | null;
  onDeleteProject: (id: number) => void;
};

const Project = ({
  project,
  onProjectChange,
  onProjectFocus,
  onProjectBlur,
  activeProject,
  onDeleteProject,
}: ProjectProps) => {
  const [isEditing, setIsEditing] = useState(activeProject?.id === project.id);
  const [title, setTitle] = useState(project.name);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleEditClick = () => {
    setIsEditing(true);
    onProjectFocus(project);
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleTitleBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsEditing(false);
    if (title !== project.name) {
      onProjectChange(event);
    }
    onProjectBlur();
  };

  const handleDeleteClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleDeleteConfirm = () => {
    onDeleteProject(project.id);
    setIsModalOpen(false);
  };

  return (
    <>
      <td className={styles["cell-icon"]}>
        <img src={Icon} alt="icon" className={styles["project-icon"]} />
      </td>
      <td className={styles.cell}>
        <ProjectInput
          isEditing={isEditing}
          onChange={handleTitleChange}
          onBlur={handleTitleBlur}
          value={title}
          projectName={project.name}
          onEditClick={handleEditClick}
        />
      </td>
      <td className={styles.cell}>
        <p className={styles.date}>{project.date}</p>
      </td>
      <td>
        <button className={styles.button} onClick={handleDeleteClick}>
          <img src={DeleteIcon} alt="delete" width="24" height="24" />
        </button>
      </td>
      {isModalOpen && (
        <Modal onClose={handleModalClose} onConfirm={handleDeleteConfirm} />
      )}
    </>
  );
};

export default Project;
