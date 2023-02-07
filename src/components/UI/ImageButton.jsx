import styles from "./ImageButton.module.css";

function ImageButton({
  src,
  alt = "Picture",
  className = "button",
  onClick,
  numberOfProduct,
}) {
  return (
    <button className={styles[className]} onClick={onClick}>
      {numberOfProduct > 0 && (
        <span className={styles.number}>{numberOfProduct}</span>
      )}
      <img src={src} alt={alt} className={styles.buttonImage} />
    </button>
  );
}

export default ImageButton;
