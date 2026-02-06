import React from "react";
import style from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  const currentDate = new Date().getFullYear();
  return (
    <footer className={style.footerMain}>
      <div className={style.navContainer}>
        <nav className={style.nav}>
          <Image
            src="/images/image.png"
            width={1000}
            height={500}
            alt="Foodieland Logo"
            style={{ width: "100px", height: "30" }}
          />
          <ul className={style.navMenuList}>
            <li>
              <Link href={"../"}>Recipes</Link>
            </li>
            <li>
              <Link href={"../"}>Blog</Link>
            </li>
            <li>
              <Link href={"../"}>Contact</Link>
            </li>
            <li>
              <Link href={"../"}>About Us</Link>
            </li>
          </ul>
        </nav>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
      <div className={style.copyRightContainer}>
        <p className={style.footerDetail}>&copy; {currentDate} Flowbase. Powered by <span>Webflow</span> </p>
      </div>
    </footer>
  );
}

export default Footer;
