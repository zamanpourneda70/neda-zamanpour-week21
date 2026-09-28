"use client";

import Link from "next/link";
import styles from "./OpenPage.module.css";
// import { useState } from "react";
// import { useRouter } from "next/navigation";

function OpenPage({ setStep, name, setName, password, setPassword }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>بوت کمپ بوتواستارت</h1>

      <form className={styles.form} onSubmit={SubmitHandler}>
        <img src="/pic/logo.svg" alt="LOGO" className={styles.logo} />

        <h2>فرم ورود</h2>

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
        <Link href="/clothes" className={styles.backButton}>ورود</Link>
      </form>
    </div>
  );
}

export default OpenPage;
