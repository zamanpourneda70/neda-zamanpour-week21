import { useEffect } from "react";
import { useContacts } from "./ProductContext";
import styles from "./AddProduct.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { productSchema } from "./productSchema.jsx";

function AddProduct() {
const { showAddProduct, product, addHandler, closeHandler, isLoading } = useContacts();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(productSchema),
    defaultValues: product,
  });
  useEffect(() => {
    reset(product);
  }, [product, reset]);
  const onSubmit = (data) => {
    addHandler(data);
  };
  if (!showAddProduct) return null;

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h2> {product.id ? "ویرایش اطلاعات" : "ایجاد محصول جدید"}</h2>
        <div>
          <label htmlFor="name">نام کالا</label>
          <input {...register("name")} placeholder=" نام کالا" id="name" />
          <p className={styles.message}>{errors.name?.message}</p>
        </div>
        <div>
          <label htmlFor="quantity">تعداد موجودی</label>
          <input {...register("quantity",{ valueAsNumber: true })} placeholder="تعداد " id="quantity" />
          <p className={styles.message}>{errors.quantity?.message}</p>
        </div>
        <div>
          <label htmlFor="price">قیمت</label>
          <input {...register("price",{ valueAsNumber: true })} placeholder="قیمت" id="price" />
          <p className={styles.message}>{errors.price?.message}</p>
        </div>
        <div className={styles.buttons}>
          <button type="submit" disabled={isLoading} className={styles.firsBn}>
    {isLoading ? "در حال ثبت..." : (product.id ? "ویرایش محصول" : "ایجاد محصول")}
  </button>
          <button type="button" className={styles.secBn} onClick={closeHandler}>
            انصراف
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
