import styles from "./ClotheDetails.module.css"
function ClotheDetails(props) {
      const { id, name, image, price } = props;

  return (
    <div className={styles.container}>
        <img src={image} alt="image"/>
<h3>{name}</h3>
<h4>{price}</h4>


    </div>
  )
}

export default ClotheDetails