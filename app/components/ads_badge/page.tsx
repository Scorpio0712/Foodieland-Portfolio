import React from "react";
import Image from "next/image";
import style from "./ads_badge.module.css";

function AdsBadge() {
  return (
    <div className={style.adsBadge}>
      <div className={style.adsBadgeBackGround}>
        <Image
          src="/images/icon/star-image.png"
          width={600}
          height={600}
          alt=""
        />
      </div>
      <h1>
        Don&apos;t forget to eat
        <br /> healthy food
      </h1>
      <Image
        src="/images/food/salmonsalad-image.png"
        width={600}
        height={600}
        alt=""
      />
      <p>www.foodieland.com</p>
    </div>
  );
}

export default AdsBadge;
