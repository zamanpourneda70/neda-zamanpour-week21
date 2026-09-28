import ClothesList from "@/app/components/templates/ClothesList";
import clothes from "@/app/data/clothes";

export default async function ClothesCategoryPage({ params }) {
  const { clotheCategory } = await params;

  const filteredClothes = clotheCategory === "all" 
    ? clothes 
    : clothes.filter((clothe) => clothe.category === clotheCategory);

  return (
    <ClothesList data={filteredClothes} />
  );
}
