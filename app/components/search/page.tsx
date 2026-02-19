"use client";
import React, { useState } from "react";
import style from "./search.module.css";

interface SearchProps {
  placeholder?: string;
  onSearch?: (searchTerm: string) => void;
  className?: string;
}

function SearchComp({
  placeholder = "Search...",
  onSearch,
  className,
}: SearchProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchTerm);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`${style.searchContainer} ${className || ""}`}
    >
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder={placeholder}
        className={style.searchInput}
      />
      <button type="submit" className={style.searchButton}>
        Search
      </button>
    </form>
  );
}

export default SearchComp;
