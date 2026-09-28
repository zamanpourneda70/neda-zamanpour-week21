"use client";

import { useSearchParams } from "next/navigation";
import clothes from "@/app/data/clothes";
import ClothesList from "../components/templates/ClothesList";

function normalize(value = "") {
  return value.trim().toLocaleLowerCase();
}

function FilterClothes() {
  const searchParams = useSearchParams();
  const query = normalize(searchParams.get("query") || "");

  const filterData = clothes.filter((item) => {
    const name = normalize(item.name);
    const category = normalize(item.category);

    return name.includes(query) || category.includes(query);
  });

  return (
    <div>
      <ClothesList data={filterData} />
    </div>
  );
}

export default FilterClothes;
