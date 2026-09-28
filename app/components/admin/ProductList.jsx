
import ProductItem from "./ProductItem";
import styles from "./ProductList.module.css";
import { useContacts } from "./ProductContext";

function ProductList() {
  const {
    products,
    filteredContacts,
  } = useContacts();

  const validProducts = (filteredContacts || []).filter(
    (product) =>
      product &&
      typeof product === "object" &&
      product.id
  );

  console.log("products:", products);
  console.log("filteredContacts:", filteredContacts);
  console.log("validProducts:", validProducts);

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>نام کالا</th>
            <th>موجودی</th>
            <th>قیمت</th>
            <th>شناسه کالا</th>
            <th>-</th>
          </tr>
        </thead>

        <tbody>
          {products.length === 0 ? (
            <tr>
              <td colSpan="5">
                هنوز هیچ محصولی ثبت نشده است!
              </td>
            </tr>
          ) : validProducts.length === 0 ? (
            <tr>
              <td colSpan="5">
                اطلاعاتی با این مشخصات یافت نشد!
              </td>
            </tr>
          ) : (
            validProducts.map((product) => (
              <ProductItem
                key={product.id}
                product={product}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
