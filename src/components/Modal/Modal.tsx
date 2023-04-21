import React from "react";
import Question from "../../assets/Question.svg";
import styles from "./modal.module.css";

type ModalProps = {
  onClose: () => void;
  onConfirm: () => void;
};

const Modal = ({ onClose, onConfirm }: ModalProps) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>
        <div className={styles["content--text-group"]}>
          <img
            className={styles["question-icon"]}
            src={Question}
            alt="Question"
          />
          <div>
            <p className={`${styles.text} ${styles["text--primary"]}`}>
              Are you sure you want to delete this project?
            </p>
            <p className={`${styles.text} ${styles["text--secondary"]}`}>
              This action can't be undone.
            </p>
          </div>
        </div>
        <div className={styles.buttons}>
          <button
            className={`${styles.button} ${styles["button-no"]}`}
            onClick={onClose}
          >
            No
          </button>
          <button
            className={`${styles.button} ${styles["button-yes"]}`}
            onClick={onConfirm}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
