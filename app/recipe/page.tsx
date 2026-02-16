"user client";
import React from "react";
import Image from "next/image";
import style from "../style/recipe.module.css";

function RecipeDetailPage() {
  return (
    <main className={style.recipeDetailContainer}>
      <section className={style.recipeDetailMain}>
        <div className={style.recipeDetailTopic}>
          <h1>Health Japanese Fried Rice</h1>
          <div className={style.recipeDetailAuthor}>
            <div className={style.recipeDetailAuthorName}>
              <Image
                src="/images/author/John-Smith.png"
                width={400}
                height={400}
                style={{ width: "50px", height: "50px" }}
                alt=""
              />
              <div className={style.recipeDetailAuthorInfo}>
                <h1>John Smith</h1>
                <p>15 March 2022</p>
              </div>
            </div>
            <div className={style.recipeDetailPrepTime}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                <path d="M320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z" />
              </svg>
              <div className={style.recipeDetailPrepTimeInfo}>
                <h1>PREP TIME</h1>
                <p>15 Minutes</p>
              </div>
            </div>
            <div className={style.recipeDetailCookTime}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                <path d="M320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z" />
              </svg>
              <div className={style.recipeDetailCookTimeInfo}>
                <h1>COOK TIME</h1>
                <p>15 Minutes</p>
              </div>
            </div>
            <div className={style.recipeDetailCategory}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                <path d="M127.9 78.4C127.1 70.2 120.2 64 112 64C103.8 64 96.9 70.2 96 78.3L81.9 213.7C80.6 219.7 80 225.8 80 231.9C80 277.8 115.1 315.5 160 319.6L160 544C160 561.7 174.3 576 192 576C209.7 576 224 561.7 224 544L224 319.6C268.9 315.5 304 277.8 304 231.9C304 225.8 303.4 219.7 302.1 213.7L287.9 78.3C287.1 70.2 280.2 64 272 64C263.8 64 256.9 70.2 256.1 78.4L242.5 213.9C241.9 219.6 237.1 224 231.4 224C225.6 224 220.8 219.6 220.2 213.8L207.9 78.6C207.2 70.3 200.3 64 192 64C183.7 64 176.8 70.3 176.1 78.6L163.8 213.8C163.3 219.6 158.4 224 152.6 224C146.8 224 142 219.6 141.5 213.9L127.9 78.4zM512 64C496 64 384 96 384 240L384 352C384 387.3 412.7 416 448 416L480 416L480 544C480 561.7 494.3 576 512 576C529.7 576 544 561.7 544 544L544 96C544 78.3 529.7 64 512 64z" />
              </svg>
              <p>Chicken</p>
            </div>
          </div>
        </div>
        <div className={style.recipeDetailPrintShare}></div>
      </section>
    </main>
  );
}

export default RecipeDetailPage;
