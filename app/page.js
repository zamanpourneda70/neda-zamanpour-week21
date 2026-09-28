
import clothes from "@/app/data/clothes";
import ClothesPage from "./components/templates/ClothesPage";
import Categories from "./components/module/Categories";
import HomePage from "./components/templates/HomePage";
import styles from "./page.module.css"


 function Page() {
  const pans=clothes.slice(0,3)
  const hats=clothes.slice(3,6)
  const dress=clothes.slice(6,9)
  const shirt=clothes.slice(9,12)
  const set=clothes.slice(12,15)


  return(<>
  <div className={styles.container}>
  <HomePage/>
  <Categories />
  <p className={styles.text}>شلوار</p>
  <ClothesPage data={pans}/>
  <p className={styles.text}>کلاه</p>
  <ClothesPage data={hats}/>
  <p className={styles.text}>لباس مجلسی</p>
  <ClothesPage data={dress}/>
  <p className={styles.text}>تی شرت</p>
  <ClothesPage data={shirt}/>
  <p className={styles.text}>لباس ست</p>
  <ClothesPage data={set}/>
</div>
  </>) 
}
export default Page