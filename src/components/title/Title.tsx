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
interface ITitle {
  text: string;
  width?: string;
  boxShadow?: string;
}
export default function Title({ text, width, boxShadow }: ITitle) {
  return (
    <Link href={"/"} scroll={false}>
      <h1
        // initial={{ right: "-30%" }}
        // animate={{ right: "50%" }}
        // transition={{ duration: 0.5 }}
        className={`${styles.title} ${gogolFont.variable}`}
        style={{ width, boxShadow }}
      >
        {text}
      </h1>
    </Link>
  );
}
