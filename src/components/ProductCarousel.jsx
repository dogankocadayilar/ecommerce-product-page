import { useState } from "react";
import { baseUrl } from "../App";
import styles from "./ProductCarousel.module.css";

const images = [1, 2, 3, 4];

function ImageCarousel() {
  const [index, setIndex] = useState(0);

  function handleClick(x) {
    setIndex((prevState) => {
      const newIndex = prevState + x;
      if (newIndex > images.length - 1) {
        return 0;
      } else if (newIndex < 0) {
        return images.length - 1;
      } else {
        return newIndex;
      }
    });
  }

  return (
    <section className={styles.carousel}>
      <button className={styles.button} onClick={() => handleClick(-1)}>
        <i className="fa-solid fa-angle-left"></i>
      </button>
      <img
        src={`${baseUrl}/image-product-${images[index]}.jpg`}
        alt="Product Image"
      />
      <button className={styles.button} onClick={() => handleClick(1)}>
        <i className="fa-solid fa-angle-right"></i>
      </button>
      <div className={styles.thumbnail_container}>
        {images.map((image) => {
          return (
            <img
              key={image}
              src={`${baseUrl}/image-product-${image}-thumbnail.jpg`}
              alt="Sneaker Picture"
              className={`${styles.thumbnail_image} ${
                index == image - 1 ? styles.selected : ""
              }`}
              onClick={() => setIndex(image - 1)}
            />
          );
        })}
      </div>
    </section>
  );
}

export default ImageCarousel;
