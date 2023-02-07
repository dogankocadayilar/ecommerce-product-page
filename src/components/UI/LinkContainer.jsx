import styles from "./LinkContainer.module.css";

function LinkContainer({ children, className }) {
  return <ul className={styles[className]}>{children}</ul>;
}

export default LinkContainer;
