import style from "./home.module.css"
import Image from "next/image";

export default function Home() {
  return (
    <div className={style.homeContainer}>
      <h1 className={style.homeTopic}>Hello World</h1>
      <p className={style.homeParagraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quo quis consectetur nulla, architecto incidunt cumque et natus nesciunt est at corporis vel similique excepturi aliquid earum ad officia dolor facilis. Omnis eos nihil quidem reprehenderit! Et veritatis perspiciatis porro sit veniam iste vitae nobis nesciunt expedita. Ipsum, corrupti ea.</p>
    </div>
  );
}
