import ImageButton from "./ImageButton";
import Link from "./Link";
import LinkContainer from "./LinkContainer";
import styles from "./MobileMenu.module.css";

function MobileMenu({ handleClick, links }) {
  return (
    <div className={styles.menuContainer}>
      <div className={styles.menuWrapper}>
        <ImageButton
          src={"src\\assets\\images\\icon-close.svg"}
          alt={"Close"}
          className={"button"}
          onClick={handleClick}
        />
        <LinkContainer className={"menuLinkContainer"}>
          {links.map((link) => (
            <Link key={link.id} href={link.href} className={"menuLink"}>
              {link.text}
            </Link>
          ))}
        </LinkContainer>
      </div>
    </div>
  );
}

export default MobileMenu;
