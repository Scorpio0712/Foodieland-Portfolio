"use client"
import React from "react";
import Image from "next/image";
import style from "./card_thumbnail.module.css";

interface CardThumbnailProps {
    imageCard : string,
    imageNameCard: string,
    topicCard : string,
    authorCard : string,
}

function CardThumbnail({imageCard, imageNameCard, topicCard, authorCard} : CardThumbnailProps) {
  return (
    <div className={style.cardThumbnail_Container}>
      <Image
        className={style.cardThumbnail_Image}
        src={imageCard}
        alt={imageNameCard}
        width={400}
        height={300}
      />
      <div className={style.cardThumbnail_Detail}>
        <h2 className={style.cardThumbnail_Topic}>{topicCard}</h2>
        <p className={style.cardThumbnail_Author}>{authorCard}</p>
      </div>
    </div>
  );
}

export default CardThumbnail;
