"use client";
import React from "react";
import style from "../style/blog.module.css";
import SearchComp from "../components/search/page";
import CardComp from "../components/card/page";

function BlogListPage() {
  const handleSearch = (searchTerm: string) => {
    console.log("Searching for: ", searchTerm);
  };

  return (
    <main className={style.blogList_Container}>
      <section className={style.blogList_Header}>
        <h1>Blog & Article</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam et
          exercitationem dolorum, nostrum adipisci nulla eaque ex architecto
          earum impedit!
        </p>
        <SearchComp
          placeholder="Search article, news or recipe..."
          onSearch={handleSearch}
          className={style.customSearchComp}
        />
      </section>
      <section className={style.blogList_Body}>
        <div className={style.blogList_BodyList}>
          <CardComp
            title="Firecracker Vegan Lettuce Wraps - Spicy!"
            image="/images/food/spicysandwiches-image.png"
            typeOne="30 Minutes"
            typeTwo="Seafood"
            imageHeight="200px"
          />
          <CardComp
            variant="horizontal"
            title="Chicken Ramen Soup with Mushroom"
            image="/images/food/chick-ramen.png"
            detail="Lorem ipsum dolor sit amet consectetur"
            author="John Doe"
            authorImage="/images/avatar.png"
            date="Feb 19, 2026"
          />
        </div>
        <div className={style.blogList_BodyTastyRecipes}>
          <h1>Tasty Recipes</h1>
        </div>
      </section>
    </main>
  );
}

export default BlogListPage;
