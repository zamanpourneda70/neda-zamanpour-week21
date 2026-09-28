import clothes from "@/app/data/clothes";
import ClothesPage from "../components/templates/ClothesPage";
import Categories from "../components/module/Categories"

function Details() {
  return (
    <div>
      <Categories data={clothes}/>
       <ClothesPage data={clothes}/>

    </div>
  );
}

export default Details;
