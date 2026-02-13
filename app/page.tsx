"use client";
import React, { useState, useEffect } from "react";
import style from "./home.module.css";
import Card from "./components/card/page";
import Image from "next/image";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const recipes = [
    {
      id: 1,
      recipeBadge: "/images/icon/badge.png",
      hotRecipesImage: "/images/icon/recipe-icon.png",
      title: "Spicy delicious chicken wings",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam est unde ut culpa modi iste.",
      cookTime: "30 minutes",
      category: "Chicken",
      authorImage: "/images/author/John-Smith.png",
      authorName: "John Smith",
      recipeImage: "/images/food/chick-dish.png",
    },
    {
      id: 2,
      recipeBadge: "/images/icon/badge.png",
      hotRecipesImage: "/images/icon/recipe-icon.png",
      title: "Chicken Ramen Soup with Mushroom",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam est unde ut culpa modi iste.",
      cookTime: "30 minutes",
      category: "Japanese",
      authorImage: "/images/author/John-Smith.png",
      authorName: "John Smith",
      recipeImage: "/images/food/chick-ramen.png",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % recipes.length);
    }, 5000);
  }, [recipes.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % recipes.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + recipes.length) % recipes.length);
  };

  return (
    <section className={style.homeContainer}>
      {/* Carousel Wrapper */}
      <section className={style.carouselWrapper}>
        {/* Carousel Container */}
        <div className={style.carouselContainer}>
          <div
            className={style.carouselTrack}
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {recipes.map((recipe, index) => (
              <div key={recipe.id} className={style.featureRecipeContainer}>
                {/* Recipes Badge */}
                <div className={style.recipesBadge}>
                  <Image
                    src={recipe.recipeBadge}
                    width={300}
                    height={500}
                    alt="Handpicked Recipes"
                    style={{ width: "150px", height: "150px" }}
                  />
                </div>
                <div className={style.featureRecipeFirstCol}>
                  <div className={style.hotRecipesTopic}>
                    <Image
                      src={recipe.hotRecipesImage}
                      width={300}
                      height={500}
                      alt="Foodieland Logo"
                      style={{ width: "24px", height: "24" }}
                    />
                    <p>Hot Recipes</p>
                  </div>
                  <h1 className={style.featureRecipeTopic}>{recipe.title}</h1>
                  <p className={style.featureRecipeDetail}>
                    {recipe.description}
                  </p>
                  <div className={style.featureRecipeType}>
                    <div className={style.firstTypeButton}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 640"
                      >
                        <path d="M320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z" />
                      </svg>
                      {recipe.cookTime}
                    </div>
                    <div className={style.secondTypeButton}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 640"
                      >
                        <path d="M127.9 78.4C127.1 70.2 120.2 64 112 64C103.8 64 96.9 70.2 96 78.3L81.9 213.7C80.6 219.7 80 225.8 80 231.9C80 277.8 115.1 315.5 160 319.6L160 544C160 561.7 174.3 576 192 576C209.7 576 224 561.7 224 544L224 319.6C268.9 315.5 304 277.8 304 231.9C304 225.8 303.4 219.7 302.1 213.7L287.9 78.3C287.1 70.2 280.2 64 272 64C263.8 64 256.9 70.2 256.1 78.4L242.5 213.9C241.9 219.6 237.1 224 231.4 224C225.6 224 220.8 219.6 220.2 213.8L207.9 78.6C207.2 70.3 200.3 64 192 64C183.7 64 176.8 70.3 176.1 78.6L163.8 213.8C163.3 219.6 158.4 224 152.6 224C146.8 224 142 219.6 141.5 213.9L127.9 78.4zM512 64C496 64 384 96 384 240L384 352C384 387.3 412.7 416 448 416L480 416L480 544C480 561.7 494.3 576 512 576C529.7 576 544 561.7 544 544L544 96C544 78.3 529.7 64 512 64z" />
                      </svg>
                      {recipe.category}
                    </div>
                  </div>
                  <div className={style.featureRecipeBlog}>
                    <div className={style.featureRecipeProfile}>
                      <Image
                        src={recipe.authorImage}
                        width={400}
                        height={400}
                        style={{ width: "50px", height: "50px" }}
                        alt={`${recipe.authorName} Profile`}
                      />
                      <div className={style.authorInfo}>
                        <h1 className={style.authorName}>
                          {recipe.authorName}
                        </h1>
                        <h2 className={style.recipeDate}>15 March 2022</h2>
                      </div>
                    </div>
                    <button className={style.viewRCButton}>
                      View Recipes
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 640"
                      >
                        <path d="M64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320zM305 441C295.6 450.4 280.4 450.4 271.1 441C261.8 431.6 261.7 416.4 271.1 407.1L358.1 320.1L271.1 233.1C261.7 223.7 261.7 208.5 271.1 199.2C280.5 189.9 295.7 189.8 305 199.2L409 303C418.4 312.4 418.4 327.6 409 336.9L305 441z" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className={style.featureRecipeSecCol}>
                  <div
                    className={style.recipeImageContainer}
                    style={{
                      backgroundImage: `url(${recipe.recipeImage})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      minHeight: "400px",
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Categories Container */}
      <section className={style.categoriesContainer}>
        <div className={style.categoriesTopic}>
          <h1>Categories</h1>
          <button>View All Categories</button>
        </div>
        <div className={style.categoriesList}>
          <ul>
            <li className={style.categoriesBreakfast}>
              <Image
                src="/images/icon/breakfast-image.png"
                width={300}
                height={500}
                alt="Breakfast Image"
                style={{ width: "150px", height: "150px" }}
              />
              Breakfast
            </li>
            <li className={style.categoriesVegan}>
              <Image
                src="/images/icon/vegan-image.png"
                width={300}
                height={500}
                alt="Vegan Image"
                style={{ width: "150px", height: "150px" }}
              />
              Vegan
            </li>
            <li className={style.categoriesMeat}>
              <Image
                src="/images/icon/meat-image.png"
                width={300}
                height={500}
                alt="Meat Image"
                style={{ width: "150px", height: "150px" }}
              />
              Meat
            </li>
            <li className={style.categoriesDessert}>
              <Image
                src="/images/icon/dessert-image.png"
                width={300}
                height={500}
                alt="Dessert Image"
                style={{ width: "150px", height: "150px" }}
              />
              Dessert
            </li>
            <li className={style.categoriesLunch}>
              <Image
                src="/images/icon/lunch-image.png"
                width={300}
                height={500}
                alt="Lunch Image"
                style={{ width: "150px", height: "150px" }}
              />
              Lunch
            </li>
            <li className={style.categoriesChocolate}>
              <Image
                src="/images/icon/chocolate-image.png"
                width={300}
                height={500}
                alt="Chocolate Image"
                style={{ width: "150px", height: "150px" }}
              />
              Chocolate
            </li>
          </ul>
        </div>
      </section>
      {/* Simple and tasty */}
      <section>
        <div className={style.simpleAndTastyHeader}>
          <h1>Simple and tasty recipes</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
            distinctio ut nam pariatur,
            <br /> quia sint animi molestiae officiis optio id!
          </p>
        </div>
        <div className={style.simpleAndTastyCardListOne}>
          <Card
            title="Big and Juicy Wagyu Beef Cheeseburger"
            image="/images/food/hamburger-image.png"
            typeOne="30 Minutes"
            typeTwo="Snack"
          />
          <Card
            title="Fresh Lime Roasted Salmon with Ginger Sauce"
            image="/images/food/roastsalmon-image.png"
            typeOne="30 Minutes"
            typeTwo="Fish"
          />
          <Card
            title="Strawberry Oatmeal Pancake with Honey Syrup"
            image="/images/food/oatmealpancake-image.png"
            typeOne="30 Minutes"
            typeTwo="Breakfast"
          />
        </div>
        <div className={style.simpleAndTastyCardListTwo}>
          <Card
            title="Fresh and Healthy Mixed Mayonnaise Salad"
            image="/images/food/mixedsalad-image.png"
            typeOne="30 Minutes"
            typeTwo="Healthy"
          />
          <Card
            title="Chicken Meatballs with Cream Cheese"
            image="/images/food/meatball-image.png"
            typeOne="30 Minutes"
            typeTwo="Meat"
          />
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
              alt="Salmon Salad"
            />
            <p>www.foodieland.com</p>
          </div>
        </div>
        <div className={style.simpleAndTastyCardListThree}>
          <Card
            title="Fruity Pancake with Orange & Blueberry"
            image="/images/food/orangepancake-image.png"
            typeOne="30 Minutes"
            typeTwo="Sweet"
          />
          <Card
            title="The Best Easy One Pot Chicken and Rice"
            image="/images/food/chickandrice-image.png"
            typeOne="30 Minutes"
            typeTwo="Snack"
          />
          <Card
            title="The Creamiest Creamy Chicken and Bacon Pasta"
            image="/images/food/orangepancake-image.png"
            typeOne="30 Minutes"
            typeTwo="Noodles"
          />
        </div>
      </section>
      {/* Learn More Container */}
      <section className={style.learnMoreContainer}>
        <div className={style.learnMoreFirstCol}>
          <h1>
            Everyone can be a<br /> chef in their own kitchen
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In eum
            alias architecto autem nobis mollitia, accusamus dignissimos
            repellat voluptatum ex.
          </p>
          <button>Learn More</button>
        </div>
        <div className={style.learnMoreSecCol}>
          <div className={style.learnMoreSecColBackGround}></div>
          <Image
            src="/images/design/chief-image.png"
            width={660}
            height={597}
            alt="Salmon Salad"
          />
        </div>
      </section>
      {/* Check Out Container */}
      <section className={style.checkOutContainer}>
        <h1>Check out @foodieland on Instagram</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel quaerat
          repudiandae libero veniam quia veritatis provident
          <br /> quisquam aliquid rerum nemo.
        </p>
        <div className={style.checkOutInstagram}>
          <Image
            src="/images/design/foodielandIG-1-image.png"
            width={300}
            height={500}
            alt="Foodieland IG 1"
          />
          <Image
            src="/images/design/foodielandIG-2-image.png"
            width={300}
            height={500}
            alt="Foodieland IG 2"
          />
          <Image
            src="/images/design/foodielandIG-3-image.png"
            width={300}
            height={500}
            alt="Foodieland IG 3"
          />
          <Image
            src="/images/design/foodielandIG-4-image.png"
            width={300}
            height={500}
            alt="Foodieland IG 4"
          />
        </div>
        <button className={style.visitInstagramBtn}>
          Visit Our Instagram
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
            <path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z" />
          </svg>
        </button>
      </section>
      {/* Delicious Recipe Container */}
      <section className={style.deliRecipeContainer}>
        <div className={style.deliRecipeTopic}></div>
        <div className={style.deliRecipeBody}></div>
      </section>
    </section>
  );
}
