"use client";
import Link from "next/link";
import styles from "./Layout.module.css";
import SearchBar from "../module/SearchBar";
import { useAuth } from "../context/AuthContext";

function Layout({ children }) {
  const { user, logout } = useAuth();

  return (
    <html lang="fa" dir="rtl">
      <body>
        <header className={styles.header}>
          <div className={styles.link}>
            <li>
              <Link href="/"> صفحه نخست</Link>
            </li>
            <li>
              <Link href="/clothes">فروشگاه</Link>
            </li>
            <li>
              <Link href="/tracking">پیگیری سفارشات</Link>
            </li>
            <li>
              <Link href="/blog">مجله</Link>
            </li>
            <li>
              <Link href="/about-us">تماس با ما</Link>
            </li>
          </div>
          <SearchBar />
          <nav className={styles.nav}>
            {user ? (
              <div>
                <span>
                  خوش آمدی، <strong>{user}</strong> 👋
                </span>
                <button onClick={logout} className={styles.button}>
                  خروج
                </button>
              </div>
            ) : (
              <Link href="/login" className={styles.enter}>ورود / ثبت‌نام</Link>
            )}
          </nav>
        </header>
        <div className={styles.container}> {children}</div>
        <footer className={styles.footer}>
          <h3>Next.js course || Clothes for women</h3>
          <h5>تمام حقوق برای فروشگاه محفوظ است . </h5>
        </footer>
      </body>
    </html>
  );
}

export default Layout;
