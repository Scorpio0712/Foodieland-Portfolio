"use client";
import React, { useState } from "react";
import Image from "next/image";
import CircleCheckBoxComp from "../components/checkbox/page";
import CardThumbnailComp from "../components/card_thumbnail/page";
import CardComp from "../components/card/page";
import AdsBadgeComp from "../components/ads_badge/page";
import EmailInputComp from "../components/email_input/page";
import style from "../style/recipe.module.css";

function RecipeDetailPage() {
  const [ingredients, setIngredients] = useState({
    ingredientOne: false,
    ingredientTwo: false,
    ingredientThree: false,
    ingredientFour: false,
    ingredientFive: false,
  });

  const [sauces, setSauces] = useState({
    sauceOne: false,
    sauceTwo: false,
    sauceThree: false,
  });

  const [directions, setDirections] = useState({
    directionOne: false,
    directionTwo: false,
    directionThree: false,
  });

  const handleIngredientsChange =
    (name: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setIngredients((prev) => ({
        ...prev,
        [name]: e.target.checked,
      }));
    };

  const handleSaucesChange =
    (name: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setSauces((prev) => ({
        ...prev,
        [name]: e.target.checked,
      }));
    };

  const handleDirectionsChange =
    (name: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setDirections((prev) => ({
        ...prev,
        [name]: e.target.checked,
      }));
    };

  return (
    <main className={style.rd_Container}>
      <section className={style.rd_SectionOne}>
        <div className={style.rd_Header}>
          <div className={style.rd_Topic}>
            <h1>Health Japanese Fried Rice</h1>
            <div className={style.rd_Author}>
              <div className={style.rd_AuthorName}>
                <Image
                  src="/images/author/John-Smith.png"
                  width={400}
                  height={400}
                  style={{ width: "50px", height: "50px" }}
                  alt=""
                />
                <div className={style.rd_AuthorInfo}>
                  <h1>John Smith</h1>
                  <p>15 March 2022</p>
                </div>
              </div>
              <div className={style.rd_PrepTime}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                  <path d="M320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z" />
                </svg>
                <div className={style.rd_PrepTimeInfo}>
                  <h1>PREP TIME</h1>
                  <p>15 Minutes</p>
                </div>
              </div>
              <div className={style.rd_CookTime}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                  <path d="M320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z" />
                </svg>
                <div className={style.rd_CookTimeInfo}>
                  <h1>COOK TIME</h1>
                  <p>15 Minutes</p>
                </div>
              </div>
              <div className={style.rd_Category}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                  <path d="M127.9 78.4C127.1 70.2 120.2 64 112 64C103.8 64 96.9 70.2 96 78.3L81.9 213.7C80.6 219.7 80 225.8 80 231.9C80 277.8 115.1 315.5 160 319.6L160 544C160 561.7 174.3 576 192 576C209.7 576 224 561.7 224 544L224 319.6C268.9 315.5 304 277.8 304 231.9C304 225.8 303.4 219.7 302.1 213.7L287.9 78.3C287.1 70.2 280.2 64 272 64C263.8 64 256.9 70.2 256.1 78.4L242.5 213.9C241.9 219.6 237.1 224 231.4 224C225.6 224 220.8 219.6 220.2 213.8L207.9 78.6C207.2 70.3 200.3 64 192 64C183.7 64 176.8 70.3 176.1 78.6L163.8 213.8C163.3 219.6 158.4 224 152.6 224C146.8 224 142 219.6 141.5 213.9L127.9 78.4zM512 64C496 64 384 96 384 240L384 352C384 387.3 412.7 416 448 416L480 416L480 544C480 561.7 494.3 576 512 576C529.7 576 544 561.7 544 544L544 96C544 78.3 529.7 64 512 64z" />
                </svg>
                <p>Chicken</p>
              </div>
            </div>
          </div>
          <div className={style.rd_PrintShare}>
            <button className={style.rd_PrintBtn}>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                  <path d="M128 128C128 92.7 156.7 64 192 64L405.5 64C422.5 64 438.8 70.7 450.8 82.7L493.3 125.2C505.3 137.2 512 153.5 512 170.5L512 208L128 208L128 128zM64 320C64 284.7 92.7 256 128 256L512 256C547.3 256 576 284.7 576 320L576 416C576 433.7 561.7 448 544 448L512 448L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 448L96 448C78.3 448 64 433.7 64 416L64 320zM192 480L192 512L448 512L448 416L192 416L192 480zM520 336C520 322.7 509.3 312 496 312C482.7 312 472 322.7 472 336C472 349.3 482.7 360 496 360C509.3 360 520 349.3 520 336z" />
                </svg>
              </div>
              <p>PRINT</p>
            </button>
            <button className={style.rd_ShareBtn}>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                  <path d="M342.6 73.4C330.1 60.9 309.8 60.9 297.3 73.4L169.3 201.4C156.8 213.9 156.8 234.2 169.3 246.7C181.8 259.2 202.1 259.2 214.6 246.7L288 173.3L288 384C288 401.7 302.3 416 320 416C337.7 416 352 401.7 352 384L352 173.3L425.4 246.7C437.9 259.2 458.2 259.2 470.7 246.7C483.2 234.2 483.2 213.9 470.7 201.4L342.7 73.4zM160 416C160 398.3 145.7 384 128 384C110.3 384 96 398.3 96 416L96 480C96 533 139 576 192 576L448 576C501 576 544 533 544 480L544 416C544 398.3 529.7 384 512 384C494.3 384 480 398.3 480 416L480 480C480 497.7 465.7 512 448 512L192 512C174.3 512 160 497.7 160 480L160 416z" />
                </svg>
              </div>
              <p>SHARE</p>
            </button>
          </div>
        </div>
        <div className={style.rd_Body}>
          <div className={style.rd_BodyHeader}>
            <Image
              src="/images/food/japanesefiredrice-image.png"
              alt=""
              width={400}
              height={400}
            />
            <div className={style.nutritionInfo}>
              <h1>Nutrition Information</h1>
              <div className={style.nutritionInfo_Detail}>
                <div className={style.nutritionInfo_Calories}>
                  <p className={style.nutritionInfo_CaloriesTopic}>Calories</p>
                  <p className={style.nutritionInfo_CaloriesDetail}>
                    219.9 kcal
                  </p>
                </div>
                <div className={style.nutritionInfo_TotalFat}>
                  <p className={style.nutritionInfo_TotalFatTopic}>Total Fat</p>
                  <p className={style.nutritionInfo_TotalFatDetail}>10.7 g</p>
                </div>
                <div className={style.nutritionInfo_Protein}>
                  <p className={style.nutritionInfo_ProteinTopic}>Protein</p>
                  <p className={style.nutritionInfo_ProteinDetail}>7.9 g</p>
                </div>
                <div className={style.nutritionInfo_Carbohydrate}>
                  <p className={style.nutritionInfo_CarbohydrateTopic}>
                    Carbohydrate
                  </p>
                  <p className={style.nutritionInfo_CarbohydrateDetail}>
                    22.3 g
                  </p>
                </div>
                <div className={style.nutritionInfo_Cholesterol}>
                  <p className={style.nutritionInfo_CholesterolTopic}>
                    Cholesterol
                  </p>
                  <p className={style.nutritionInfo_CholesterolDetail}>
                    37.4 mg
                  </p>
                </div>
              </div>
              <p className={style.nutritionInfo_DetailDeScript}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Doloremque, alias!
              </p>
            </div>
          </div>
          <p className={style.rd_BodyDetail}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
            sunt neque vel saepe ipsam quidem ipsa minus dolore numquam? Nisi id
            laboriosam earum, aliquam tempora, corporis fuga officiis molestiae
            repudiandae necessitatibus eius mollitia eos asperiores eum eveniet
            alias itaque nemo iste velit dolores ipsa quibusdam blanditiis nam
            quae! Facilis, maiores? Distinctio quibusdam quidem, eaque unde ut
            voluptatibus voluptatum hic error illum, saepe maiores quaerat animi
            atque, sequi ipsa nesciunt! Velit, laudantium? Eveniet vero et quo?
          </p>
        </div>
      </section>
      <section className={style.rd_SectionTwo}>
        <div className={style.rd_Ingredients}>
          <h1>Ingredients</h1>
          <div className={style.rd_ForMainDish}>
            <h1>For main dish</h1>
            <div className={style.rd_ForMainDishDetail}>
              <CircleCheckBoxComp
                label="Lorem ipsum dolor sit amet."
                id="ingredientOne"
                checked={ingredients.ingredientOne}
                onChange={handleIngredientsChange("ingredientOne")}
              />

              <CircleCheckBoxComp
                label="Lorem ipsum dolor sit amet."
                id="ingredientTwo"
                checked={ingredients.ingredientTwo}
                onChange={handleIngredientsChange("ingredientTwo")}
              />

              <CircleCheckBoxComp
                label="Lorem ipsum dolor sit amet."
                id="ingredientThree"
                checked={ingredients.ingredientThree}
                onChange={handleIngredientsChange("ingredientThree")}
              />

              <CircleCheckBoxComp
                label="Lorem ipsum dolor sit amet."
                id="ingredientFour"
                checked={ingredients.ingredientFour}
                onChange={handleIngredientsChange("ingredientFour")}
              />

              <CircleCheckBoxComp
                label="Lorem ipsum dolor sit amet."
                id="ingredientFive"
                checked={ingredients.ingredientFive}
                onChange={handleIngredientsChange("ingredientFive")}
              />
            </div>
          </div>
          <div className={style.rd_ForTheSauce}>
            <h1>For the sauce</h1>
            <div className={style.rd_ForTheSauceDetail}>
              <CircleCheckBoxComp
                label="Lorem ipsum dolor sit amet."
                id="sauceOne"
                checked={sauces.sauceOne}
                onChange={handleSaucesChange("sauceOne")}
              />
              <CircleCheckBoxComp
                label="Lorem ipsum dolor sit amet."
                id="sauceTwo"
                checked={sauces.sauceTwo}
                onChange={handleSaucesChange("sauceTwo")}
              />
              <CircleCheckBoxComp
                label="Lorem ipsum dolor sit amet."
                id="sauceThree"
                checked={sauces.sauceThree}
                onChange={handleSaucesChange("sauceThree")}
              />
            </div>
          </div>
        </div>
        <div className={style.rd_OtherRecipe}>
          <h1>Other Recipe</h1>
          <div className={style.rd_OtherRecipeList}>
            <CardThumbnailComp
              imageCard="/images/food/meatball-image.png"
              imageNameCard="Chicken Meatball with Creamy Cheese"
              topicCard="Chicken Meatball with Creamy Cheese"
              authorCard="By Andreas Paula"
            />

            <CardThumbnailComp
              imageCard="/images/food/chickandbacpasta-image.png"
              imageNameCard="The Creamiest Creamy Chicken and Bacon Pasta"
              topicCard="The Creamiest Creamy Chicken and Bacon Pasta"
              authorCard="By Andreas Paula"
            />

            <CardThumbnailComp
              imageCard="/images/food/chickandrice-image.png"
              imageNameCard="The Best Easy One Pot Chicken and Rice"
              topicCard="The Best Easy One Pot Chicken and Rice"
              authorCard="By Andreas Paula"
            />
          </div>
          <AdsBadgeComp />
        </div>
      </section>
      <section className={style.rd_SectionThree}>
        <h1 className={style.rd_DirectionsTopic}>Directions</h1>
        <div className={style.rd_DirectionsList}>
          <div className={style.rd_DirectionsListOne}>
            <CircleCheckBoxComp
              className={style.checkBox_DirectionOne}
              label="1. Lorem ipsum dolor sit amet."
              id="directionOne"
              checked={directions.directionOne}
              onChange={handleDirectionsChange("directionOne")}
            />
            <div className={style.rd_DirectionsListOneDetail}>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
                debitis sit sed eius impedit quis esse omnis quasi illo, modi
                numquam dicta porro, rerum doloremque reiciendis cumque quidem
                praesentium perspiciatis architecto odit? Autem, maiores fugit
                optio distinctio ipsam officia incidunt mollitia aliquid tempore
                minima rerum totam, nobis, illo sequi? Enim.
              </p>
              <Image
                src="/images/design/checkBox_One.png"
                alt=""
                width={400}
                height={200}
              />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
                debitis sit sed eius impedit quis esse omnis quasi illo, modi
                numquam dicta porro, rerum doloremque reiciendis cumque quidem
                praesentium perspiciatis architecto odit? Autem, maiores fugit
                optio distinctio ipsam officia incidunt mollitia aliquid tempore
                minima rerum totam, nobis, illo sequi? Enim.
              </p>
            </div>
          </div>
          <div className={style.rd_DirectionsListTwo}>
            <CircleCheckBoxComp
              className={style.checkBox_DirectionTwo}
              label="2. Lorem ipsum dolor sit amet."
              id="directionTwo"
              checked={directions.directionTwo}
              onChange={handleDirectionsChange("directionTwo")}
            />
            <div className={style.rd_DirectionsListTwoDetail}>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
                debitis sit sed eius impedit quis esse omnis quasi illo, modi
                numquam dicta porro, rerum doloremque reiciendis cumque quidem
                praesentium perspiciatis architecto odit? Autem, maiores fugit
                optio distinctio ipsam officia incidunt mollitia aliquid tempore
                minima rerum totam, nobis, illo sequi? Enim.
              </p>
            </div>
          </div>
          <div className={style.rd_DirectionsListThree}>
            <CircleCheckBoxComp
              className={style.checkBox_DirectionThree}
              label="3. Lorem ipsum dolor sit amet."
              id="directionThree"
              checked={directions.directionThree}
              onChange={handleDirectionsChange("directionThree")}
            />
            <div className={style.rd_DirectionsListThreeDetail}>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
                debitis sit sed eius impedit quis esse omnis quasi illo, modi
                numquam dicta porro, rerum doloremque reiciendis cumque quidem
                praesentium perspiciatis architecto odit? Autem, maiores fugit
                optio distinctio ipsam officia incidunt mollitia aliquid tempore
                minima rerum totam, nobis, illo sequi? Enim.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={style.rd_SectionFour}>
        <EmailInputComp />
      </section>
      <section className={style.rd_SectionFive}>
        <h1 className={style.rd_SectionFiveTopic}>You may like these recipe too</h1>
        <div className={style.rd_RecipeTooDetail}>
          <CardComp
              title="Rainbow Chicken Salad with Almond Honey Mustard Dressing"
              image="/images/food/rainbowchick-image.png"
              typeOne="30 Minutes"
              typeTwo="Healthy"
              imageHeight="200px"
            />
            <CardComp
              title="Barbeque Spicy Sandwiches with Chips"
              image="/images/food/spicysandwiches-image.png"
              typeOne="30 Minutes"
              typeTwo="Snack"
              imageHeight="200px"
            />
            <CardComp
              title="Firecracker Vegan Lettuce Wraps - Spicy!"
              image="/images/food/spicysandwiches-image.png"
              typeOne="30 Minutes"
              typeTwo="Seafood"
              imageHeight="200px"
            />{" "}
            <CardComp
              title="Chicken Ramen Soup with Mushroom "
              image="/images/food/chick-ramen.png"
              typeOne="30 Minutes"
              imageHeight="200px"
              typeTwo="Noodles"
            />
        </div>
      </section>
    </main>
  );
}

export default RecipeDetailPage;
