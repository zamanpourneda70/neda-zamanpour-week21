"use client";

import { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "../components/context/AuthContext";

function SendPage() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const { login } = useAuth();
  const router = useRouter();

  const SubmitHandler = (event) => {
    event.preventDefault();

    // اعتبارسنجی‌ها
    if (name.length < 3) {
      alert("نام کاربری باید حداقل ۳ کاراکتر باشد.");
      return;
    }

    if (password.length < 5) {
      alert("رمز عبور باید حداقل ۵ کاراکتر باشد.");
      return;
    }

    if (password !== rePassword) {
      alert("رمز عبور و تکرار آن یکسان نیستند!");
      return;
    }
    login(name.trim());
    alert("ثبت‌نام با موفقیت انجام شد!");
    router.push("/");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>فروشگاه لباس</h1>
      <form className={styles.form} onSubmit={SubmitHandler}>
        <img src="/pic/logo.svg" alt="LOGO" className={styles.logo} />
        <h2>فرم ثبت نام</h2>
        <input
          type="text"
          placeholder="نام کاربری"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="رمز عبور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="تکرار رمز عبور"
          value={rePassword}
          onChange={(e) => setRePassword(e.target.value)}
          required
        />
        <button type="submit" className={styles.backButton}>
          ثبت
        </button>
        <Link href="/signIn" className={styles.link}>
          حساب کاربری دارید؟
        </Link>
      </form>
    </div>
  );
}

export default SendPage;
