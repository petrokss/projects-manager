import ThunkableBeaver from "../../assets/ThunkableBeaver.png";
import styles from "./header.module.css";

type HeaderProps = {
  onClick: () => void;
};

const Header = ({ onClick }: HeaderProps) => {
  return (
    <div className={styles["header-container"]}>
      <div className={styles.header}>
        <div className={styles["header-logo"]}>
          <img src={ThunkableBeaver} className={styles.logo} alt="logo" />
        </div>
        <p className={styles.title}>My projects</p>
        <button className={styles["btn-create-project"]} onClick={onClick} />
      </div>
    </div>
  );
};

export default Header;
