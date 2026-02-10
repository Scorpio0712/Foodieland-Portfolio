'use client'
import React from "react";
import Image from "next/image"
import style from "./card.module.css";

interface CardProps {
  title: string;
  image: string;
  typeOne: string;
  typeTwo: string;
}

function Card({title, image, typeOne, typeTwo} : CardProps) {
  return (
    <div className={style.card}>
      <div className={style.cardImage}>
        <Image src={image} alt={`${title} Image`} width={300} height={200} sizes='(max-width: 300px)' priority/>
      </div>
      <div className={style.cardContent}>
        <p>{title}</p>
      </div>
      <div className={style.cardInfo}>
        <div className={style.cardInfoTypeOne}>{typeOne}</div>
        <div className={style.cardInfoTypeTwo}>{typeTwo}</div>
      </div>
    </div>
  );
}

export default Card;
