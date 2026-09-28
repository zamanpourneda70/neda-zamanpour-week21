import Link from "next/link";
import Card from "@/app/components/module/Card";
import styles from "./ClothesList.module.css";

export default function ClothesList({ data }) {
  return (
    <section>
      <Link href="/clothes" className={styles.backButton}>
        بازگشت
      </Link>

      {data?.length ? (
        <div className={styles.container}>
          {data.map((clothe) => (
            <Card key={clothe.id} {...clothe} />
          ))}
        </div>
      ) : (
        <p>موردی در این دسته‌بندی پیدا نشد.</p>
      )}
    </section>
  );
}
