import Card from "../module/Card"
import styles from "./ClothesPage.module.css"


function ClothesPage({data}) {
  return (
     <div className={styles.container}>
          {data.map((clothe) => (
            <Card key={clothe.id} {...clothe} />
          ))}
        </div>
  )
}

export default ClothesPage