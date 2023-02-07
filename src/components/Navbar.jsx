import { useState } from "react";
import { baseUrl } from "../App";
import styles from "./Navbar.module.css";
import Cart from "./UI/Cart";
import ImageButton from "./UI/ImageButton";
import Link from "./UI/Link";
import LinkContainer from "./UI/LinkContainer";
import MobileMenu from "./UI/MobileMenu";

const links = [
  { id: 1, text: "Collections", href: "#" },
  { id: 2, text: "Men", href: "#" },
  { id: 3, text: "Women", href: "#" },
  { id: 4, text: "About", href: "#" },
  { id: 5, text: "Contact", href: "#" },
];

function Navbar({ product, setProduct }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      {isMenuOpen && (
        <MobileMenu links={links} handleClick={() => setIsMenuOpen(false)} />
      )}
      <nav className={styles.navbar}>
        <div className={styles.wrapper}>
          <div className={styles.side}>
            <ImageButton
              src={`${baseUrl}/icon-menu.svg`}
              alt={"Menu"}
              onClick={() => setIsMenuOpen(true)}
            />
            <img
              src={`${baseUrl}/logo.svg`}
              alt="Logo"
              className={styles.logo}
            />
            <LinkContainer className={"linkContainer"}>
              {links.map((link) => (
                <Link key={link.id} href={link.href} className={"link"}>
                  {link.text}
                </Link>
              ))}
            </LinkContainer>
          </div>
          <div className={styles.side}>
            <ImageButton
              src={`${baseUrl}/icon-cart.svg`}
              alt={"Cart"}
              onClick={() => setIsCartOpen((prevState) => !prevState)}
              numberOfProduct={product?.number_of_product || 0}
            />
            <img
              src={`${baseUrl}/image-avatar.png`}
              alt="Profile Picture"
              className={styles.profileImage}
            />
            {isCartOpen && <Cart product={product} setProduct={setProduct} />}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
