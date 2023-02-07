import styles from "./Link.module.css";

function Link({ href, children, className }) {
  return (
    <li>
      <a className={styles[className]} href={href}>
        {children}
      </a>
    </li>
  );
}

export default Link;
