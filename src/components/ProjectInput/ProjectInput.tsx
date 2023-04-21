import { useRef, useEffect } from "react";
import EditIcon from "../../assets/EditIcon.svg";
import styles from "./project-input.module.css";

type ProjectInputProps = {
  isEditing: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  projectName?: string;
  onEditClick: () => void;
};

const ProjectInput = ({
  isEditing,
  onChange,
  onBlur,
  value,
  projectName = "",
  onEditClick,
}: ProjectInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  return isEditing ? (
    <input
      ref={inputRef}
      className={styles["project-item__input"]}
      type="text"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  ) : (
    <div className={styles["group-title-input"]}>
      <p className={styles["input-title"]}>{projectName}</p>
      <button className={styles.button} onClick={onEditClick}>
        <img src={EditIcon} alt="edit" className={styles["edit-icon"]} />
      </button>
    </div>
  );
};

export default ProjectInput;
