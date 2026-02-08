import style from "./home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={style.homeContainer}>
      <div className={style.featureRecipeContainer}>
        <div className={style.featureRecipeFirstCol}>
          <div className={style.hotRecipesTopic}>
            <Image
              src="/images/image.png"
              width={300}
              height={500}
              alt="Foodieland Logo"
              style={{ width: "24px", height: "24" }}
            />
            <p>Hot Recipes</p>
          </div>
          <h1 className={style.featureRecipeTopic}>
            Spicy delicious chicken wings
          </h1>
          <p className={style.featureRecipeDetail}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam est
            unde ut culpa modi iste.
          </p>
          <div className={style.featureRecipeType}>
            <div className={style.firstTypeButton}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                <path d="M320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z" />
              </svg>
              30 minutes
            </div>
            <div className={style.secondTypeButton}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                <path d="M127.9 78.4C127.1 70.2 120.2 64 112 64C103.8 64 96.9 70.2 96 78.3L81.9 213.7C80.6 219.7 80 225.8 80 231.9C80 277.8 115.1 315.5 160 319.6L160 544C160 561.7 174.3 576 192 576C209.7 576 224 561.7 224 544L224 319.6C268.9 315.5 304 277.8 304 231.9C304 225.8 303.4 219.7 302.1 213.7L287.9 78.3C287.1 70.2 280.2 64 272 64C263.8 64 256.9 70.2 256.1 78.4L242.5 213.9C241.9 219.6 237.1 224 231.4 224C225.6 224 220.8 219.6 220.2 213.8L207.9 78.6C207.2 70.3 200.3 64 192 64C183.7 64 176.8 70.3 176.1 78.6L163.8 213.8C163.3 219.6 158.4 224 152.6 224C146.8 224 142 219.6 141.5 213.9L127.9 78.4zM512 64C496 64 384 96 384 240L384 352C384 387.3 412.7 416 448 416L480 416L480 544C480 561.7 494.3 576 512 576C529.7 576 544 561.7 544 544L544 96C544 78.3 529.7 64 512 64z" />
              </svg>
              Chicken
            </div>
          </div>
          <div className={style.featureRecipeBlog}>
            <div className={style.featureRecipeProfile}>
              <Image
                src="/images/John-Smith.png"
                width={400}
                height={400}
                style={{ width: "50px", height: "50px" }}
                alt="John Smith Profile"
              />
              <div >
                <h1>John Smith</h1>
                <h2>15 March 2022</h2>
              </div>
            </div>
            <button className={style.viewRCButton}>View Recipes<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320zM305 441C295.6 450.4 280.4 450.4 271.1 441C261.8 431.6 261.7 416.4 271.1 407.1L358.1 320.1L271.1 233.1C261.7 223.7 261.7 208.5 271.1 199.2C280.5 189.9 295.7 189.8 305 199.2L409 303C418.4 312.4 418.4 327.6 409 336.9L305 441z"/></svg></button>
          </div>
        </div>
        <div className={style.featureRecipeSecCol}>
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            animi tempore facilis nihil cumque qui exercitationem laboriosam!
            Sequi, nihil voluptas?
          </h1>
        </div>
      </div>
    </div>
  );
}
