"use client";
import React from "react";
import Link from "next/link";
import styles from "./VarietiesLink.module.css";

export default function VarietiesLink() {
  return (
    <Link className={styles.link} href={"/varieties"}>
      <p className={styles.link_text}>Bсе сорта</p>
    </Link>
  );
}
