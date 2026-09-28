"use client";

import Link from "next/link";
import styles from "./page.module.css";
import { useState } from "react";
import { useAuth } from "../components/context/AuthContext";

// import { useRouter } from "next/navigation";

function OpenPage() {
  const [name, setName] = useState("");
    const [password, setPassword] = useState("");
  const SubmitHandler = (event) => {
    event.preventDefault();
    if (name.length < 3) {
      alert("نام کاربری باید حداقل ۳ کاراکتر باشد.");
      return;
    }

    if (password.length < 5) {
      alert("رمز عبور باید حداقل ۵ کاراکتر باشد.");
      return;
    }
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>فروشگاه لباس</h1>

      <form className={styles.form} onSubmit={SubmitHandler}>
        <img src="/pic/logo.svg" alt="LOGO" className={styles.logo} />

        <h2>فرم ورود</h2>

        <input className={styles.input}
          type="text"
          placeholder="نام کاربری"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input className={styles.input}
          type="password"
          placeholder="رمز عبور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link href="/" className={styles.Button} >
          <button className={styles.backButton}>
            ورود
          </button>
        </Link>
        <Link href="/login" className={styles.link}>
        ثبت نام نکرده اید؟
        </Link>
      </form>
    </div>
  );
}

export default OpenPage;
