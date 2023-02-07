import styles from "./Cart.module.css";
import ImageButton from "./ImageButton";

function Cart({ product, setProduct }) {
  return (
    <div className={styles.cart}>
      <h4 className={styles.cart_title}>Cart</h4>
      <div className={styles.cart_checkout}>
        {product ? (
          <>
            <div className={styles.info_container}>
              <img
                src={`${baseUrl}/image-product-1-thumbnail.jpg`}
                alt="Picture"
                className={styles.cart_image}
              />
              <div className={styles.cart_info}>
                <p>Fall Limited Edition Sneakers</p>
                <p>
                  ${product.price_of_one}.00 x {product.number_of_product}
                  <strong> ${product.price_full}.00</strong>
                </p>
              </div>
              <ImageButton
                src={`${baseUrl}/icon-delete.svg`}
                onClick={() => setProduct(null)}
              />
            </div>
            <button className={styles.button}>Checkout</button>
          </>
        ) : (
          <h4>Your cart is empty.</h4>
        )}
      </div>
    </div>
  );
}

export default Cart;
