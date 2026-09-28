"use client";

import { useState } from "react"; 
import styles from "./SendPage.module.css";
import Link from "next/link";

function SendPage() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

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

    if (password !== rePassword) {
      alert("رمز عبور و تکرار آن یکسان نیستند!");
      return;
    }


    if (error) {
      alert("خطا در ثبت‌نام: " + error.message);
    } else {
      alert("ثبت‌نام با موفقیت انجام شد!");
    }
    if (error) {
      const message = error.response?.data?.message || "خطایی رخ داد";
      alert(message);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>بوت کمپ بوتواستارت</h1>
      <form className={styles.form} onSubmit={SubmitHandler}>
        <img src="/pic/logo.svg" alt="LOGO" className={styles.logo} />
        <h2>فرم ثبت نام</h2>
        <input
          type="text"
          placeholder="نام کاربری"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="password"
          placeholder="رمز عبور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="تکرار رمز عبور"
          value={rePassword}
          onChange={(e) => setRePassword(e.target.value)}
        />
        <Link href="/OpenPage.jsx" className={styles.backButton}>ورود</Link>

      </form>
    </div>
  );
}

export default SendPage;
