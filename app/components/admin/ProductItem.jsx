import { useContacts } from "./ProductContext";
import styles from "./ProductItem.module.css";
import trash from '../../assets/trash.svg';
import edit from '../../assets/edit.png';

function ProductItem({ product }) {
  const {
    deleteHandler,
    editContactHandler,
  } = useContacts();
  return (
    <tr className={styles.row}>
      <td>{product.name}</td>
      <td>{product.quantity}</td>
      <td>
        {product.price}  هزار تومان  
      </td>
      <td>
        {product.id} 
      </td>
      <td className={styles.box}>
          <>
            <button
              className={styles.button}
              type="button"
              onClick={() => editContactHandler(product.id)}
              aria-label="ویرایش"
            >
              <img src={edit} alt="edit" />
            </button>

            <button
              className={styles.button}
              type="button"
              onClick={() => deleteHandler(product.id)}
              aria-label="حذف "
            >
              <img src={trash} alt="delete" />
            </button>
          </>
      </td>
    </tr>
  );
}

export default ProductItem;
