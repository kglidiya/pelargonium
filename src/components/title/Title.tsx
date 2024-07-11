import React from "react";
import localFont from "next/font/local";
import styles from "./Title.module.css";
import Link from "next/link";
const gogolFont = localFont({
  src: [
    {
      // path: '../../public/fonts/ofont.ru_Gogol.ttf',
      // path: '../../public/fonts/ofont.ru_Denistina.ttf',
      // path: '../../public/fonts/ofont.ru_Nicoletta script.ttf',
      // path: '../../public/fonts/ofont.ru_Corinthia.ttf' no!,
      // path: '../../public/fonts/ofont.ru_Marianna.ttf',
      path: "../../../public/fonts/ofont.ru_LainyDay.ttf",
      weight: "100",
      style: "regular",
    },
  ],
  variable: "--gogol-font",
});
export default function Title({ text }: { text: string }) {
  return (
    <Link href={"/"} scroll={false}>
      <h1 className={`${styles.title} ${gogolFont.variable}`}>{text}</h1>
    </Link>
  );
}
