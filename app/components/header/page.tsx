import React from "react";
import style from "./header.module.css";
import Link from "next/link";
import Image from "next/image";

function HeaderPage() {
  return (
    <header className={style.headerMain}>
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
            <Link href={"../"}>Home</Link>
          </li>
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
        <ul className={style.navSocialList}>
          <li>
            <link rel="icon" href="/app/favicon.ico" sizes="any" />
          </li>
          <li>
            <Link href={"../"}>X</Link>
          </li>
          <li>
            <Link href={"../"}>Instagram</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderPage;
