import Link from "next/link";
import styles from "./Card.module.css";

function Card(props) {
  const { id, name, image, price } = props;
  return (
    <Link href={`/clothes/${id}`}>
    <div className={styles.container}>
      <img src={image} className={styles.image} alt={name} />
      <div className={styles.text}>
      <h4>{name}</h4>
      <h4>{price}</h4>
      </div>
    </div>
    </Link>
  );
}

export default Card;
