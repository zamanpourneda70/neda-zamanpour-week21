import { useContacts } from "./ProductContext";
import styles from "./ProductButton.module.css";

function ProductButton() {
  const {
    openAddContactHandler,
  } = useContacts();

  return (
    <div className={styles.button}>
      <button type="button" onClick={openAddContactHandler}>
        افزودن محصول
      </button>

    </div>
  );
}

export default ProductButton;
