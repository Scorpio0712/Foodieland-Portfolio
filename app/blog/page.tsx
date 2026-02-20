"use client";
import React, { useState } from "react";
import style from "../style/blog.module.css";
import SearchComp from "../components/search/page";
import CardComp from "../components/card/page";
import PaginationComp from "../components/pagination/page";

function BlogListPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (page: number) => setCurrentPage(page);

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
            variant="horizontal"
            title="Chicken Ramen Soup with Mushroom"
            image="/images/food/chick-ramen.png"
            detail="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim "
            author="Wade Warren"
            authorImage="/images/author/Wade-Warren.png"
            date="12 November 2021"
          />
          <CardComp
            variant="horizontal"
            title="10 Vegetarian Recipes To Eat This Month"
            image="/images/food/mixedtropifruit-image.png"
            detail="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim "
            author="Robert Fox"
            authorImage="/images/author/Robert-Fox.png"
            date="12 November 2021"
          />
          <CardComp
            variant="horizontal"
            title="Full Guide to Becoming a Professional Chef"
            image="/images/design/fullguide-image.png"
            detail="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim "
            author="Dianne Russell"
            authorImage="/images/author/Dianne-Russell.png"
            date="12 November 2021"
          />
          <CardComp
            variant="horizontal"
            title="Simple & Delicious Vegetarian Lasagna"
            image="/images/food/veganlasagna-image.png"
            detail="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim "
            author="Leslie Alexander"
            authorImage="/images/author/Leslie-Alexander.png"
            date="12 November 2021"
          />
          <CardComp
            variant="horizontal"
            title="Plantain and Pinto Stew with Aji Verde"
            image="/images/food/pintostew-image.png"
            detail="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim "
            author="Courtney Henry"
            authorImage="/images/author/Courtney-Henry.png"
            date="12 November 2021"
          />
          <CardComp
            variant="horizontal"
            title="We’re Hiring a Communications Assistant!"
            image="/images/design/comassis-image.png"
            detail="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim "
            author="Albert Flores"
            authorImage="/images/author/Albert-Flores.png"
            date="12 November 2021"
          />
        </div>
        <div className={style.blogList_BodyTastyRecipes}>
          <h1>Tasty Recipes</h1>
        </div>
      </section>
      <PaginationComp
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
          className={style.blogList_Pagination}
        />
    </main>
  );
}

export default BlogListPage;
