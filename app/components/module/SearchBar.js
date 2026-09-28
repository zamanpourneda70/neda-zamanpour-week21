"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./SearchBar.module.css";

function SearchBar() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearch(event) {
    event.preventDefault();

    const term = searchTerm.trim();
    if (!term) return;

    router.push(`/filter?query=${encodeURIComponent(term)}`);
  }

  return (
    <form className={styles.searchItem} onSubmit={handleSearch}>
      <span>🔎</span>
      <input
        type="search"
        placeholder="جستجو بر اساس نام یا دسته‌بندی..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
    </form>
  );
}

export default SearchBar;
