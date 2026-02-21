"use client";
import React from "react";
import Image from "next/image";
import style from "../style/blogpost.module.css";

function BlogPostPage() {
  return (
    <main className={style.blogPost_Container}>
      <section className={style.blogPost_Header}>
        <h1>Full Guide to Becoming a Professional Chef</h1>
        <div className={style.blogPost_Author}>
          <div className={style.blogPost_AuthorInfo}>
            <Image
              src="/images/author/John-Smith.png"
              alt="John Smith Image"
              width={40}
              height={40}
            />
            <span className={style.blogPost_AuthorName}>John Smith</span>
          </div>
          <span className={style.blogPost_Date}>15 March 2022</span>
        </div>
        <div className={style.blogPost_DeScript}>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            tempora similique quia voluptate libero modi, numquam soluta,
            obcaecati, quo quasi saepe blanditiis totam doloribus ipsa labore
            amet error ipsam nam voluptates et? Voluptas eum dolorum enim, ut
            tenetur ducimus esse sed architecto quibusdam. Dolores ut culpa
            dolor ducimus quam quasi.
          </span>
        </div>
        <div className={style.blogPost_HeaderImage}>
          <Image
            src="/images/design/fullguide-image.png"
            alt="Full Guide to Becoming a Professional Chef Image"
            fill
          />
        </div>
      </section>
      <section className={style.blogPost_BodyContent}>
        <div className={style.blogPost_Content}>
          <div className={style.blogPost_ContentOne}>
            <h1>How did you start out in the food industry?</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              magni quisquam libero vero itaque recusandae aspernatur dolores
              quos dolor ea quidem mollitia, quia repellendus, labore nesciunt
              quam architecto tempore sapiente alias cupiditate ex dicta.
              Recusandae repellat ipsam nemo tempora, reprehenderit dolorem
              animi non magnam ipsum quae delectus quisquam deserunt
              perspiciatis.
            </p>
          </div>
        </div>
        <div className={style.blogPost_SocialBtn}>
            <span>SHARE THIS ON:</span>
        </div>
      </section>
    </main>
  );
}

export default BlogPostPage;
