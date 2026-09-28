import Link from "next/link";
import styles from "./Categories.module.css";

function Categories() {
  return (
    <div className={styles.container}>
      <Link href="/categories/all">
        <div className={styles.conten}>
          <img src="/pic/all.png" alt="My Image" />
          <p>همه دسته بندی ها</p>
        </div>
      </Link>
      <Link href="/categories/pan">
        <div className={styles.conten}>
          <img src="/pic/pic.png" alt="My Image" />
          <p>شلوار</p>
        </div>
      </Link>
      <Link href="/categories/set">
        <div className={styles.conten}>
          <img src="/pic/seic.png" alt="My Image" />
          <p>لباس ست</p>
        </div>
      </Link>
      <Link href="/categories/shirt">
        <div className={styles.conten}>
          <img src="/pic/shi.png" alt="My Image" />
          <p>تی شرت</p>
        </div>
      </Link>
      <Link href="/categories/hat">
        <div className={styles.conten}>
          <img src="/pic/hic.png" alt="My Image" />
          <p>کلاه</p>
        </div>
      </Link>
      <Link href="/categories/nightdress">
        <div className={styles.conten}>
          <img src="/pic/mic.png" alt="My Image" />
          <p>لباس مجلسی</p>
        </div>
      </Link>
    </div>
  );
}

export default Categories;
