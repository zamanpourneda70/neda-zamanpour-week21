import clothes from "@/app/data/clothes";
import ClotheDetails from "@/app/components/templates/ClotheDetails";

export default async function ClothesDetail({ params }) {
  const { clotheId } = await params;
  const clotheDetails = clothes[clotheId - 1];

  return (
    <ClotheDetails {...clotheDetails}/>
  );
}
