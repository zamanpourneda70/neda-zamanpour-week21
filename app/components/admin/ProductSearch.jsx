import { useContacts } from "./ProductContext";
import styles from "./ProductSearch.module.css";

function ProductSearch() {
  const { searchProduct, setSearchProduct } = useContacts();

  return (
    <div className={styles.searchItem}>
      <span>🔎</span>
      <input
        type="search"
        value={searchProduct}
        onChange={(e) => setSearchProduct(e.target.value)}
        placeholder="جستجو."
      />
    </div>
  );
}
export default ProductSearch;
