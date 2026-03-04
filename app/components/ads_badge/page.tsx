import React from "react";
import Image from "next/image";
import style from "./ads_badge.module.css";

interface AdsBadgeProps {
  className?: string;
}

function AdsBadge({className} : AdsBadgeProps) {
  return (
    <div className={`${style.adsBadge} ${className || ""}`}>
      <div className={style.adsBadgeBackGround}>
        <Image
        className={style.adsBadgeBackGround_Img}
          src="/images/icon/star-image.png"
          width={400}
          height={400}
          alt=""
        />
      </div>
      <h1>
        Don&apos;t forget to eat
        <br /> healthy food
      </h1>
      <Image
        className={style.adsBadge_Img}
        src="/images/food/salmonsalad-image.png"
        width={400}
        height={400}
        alt=""
      />
      <p>www.foodieland.com</p>
    </div>
  );
}

export default AdsBadge;
