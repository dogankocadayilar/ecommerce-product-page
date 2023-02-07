import { useState } from "react";
import styles from "./ProductInfo.module.css";

function ProductInfo({ setProduct }) {
  const [number, setNumber] = useState(0);

  function handleNumber(x) {
    let newNumber = number + x;
    if (newNumber < 0) newNumber = 0;
    setNumber(newNumber);
  }

  function handleProduct() {
    if (number <= 0) return;
    setProduct({
      number_of_product: number,
      title: "Fall Limited Edition Sneakers",
      price_of_one: 125,
      price_full: 125 * number,
    });
    setNumber(0);
  }

  return (
    <section className={styles.info}>
      <h3 className={styles.title_small}>Sneaker Company</h3>
      <h1 className={styles.title}>Fall Limited Edition Sneakers</h1>
      <p className={styles.desc}>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole. they'll withstand everything the
        weather can offer.
      </p>
      <div className={styles.price_container}>
        <div className={styles.price}>
          <span className={styles.current_price}>$125.00</span>
          <span className={styles.discount}>50%</span>
        </div>
        <span className={styles.full_price}>$250.00</span>
      </div>
      <div className={styles.counter_container}>
        <div className={styles.counter}>
          <button className={styles.button} onClick={() => handleNumber(-1)}>
            <i className="fa-solid fa-minus"></i>
          </button>
          <span className={styles.number}>{number}</span>
          <button className={styles.button} onClick={() => handleNumber(1)}>
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
        <button className={styles.button_add} onClick={handleProduct}>
          <i className="fa-solid fa-cart-shopping"></i>
          Add to cart
        </button>
      </div>
    </section>
  );
}

export default ProductInfo;
