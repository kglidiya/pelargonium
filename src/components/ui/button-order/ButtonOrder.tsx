import React from "react";
import styles from "./ButtonOrder.module.css";
import localFont from "next/font/local";
const gogolFont = localFont({
  src: [
    {
      path: "../../../../public/fonts/ofont.ru_LainyDay.ttf",
      weight: "100",
      style: "regular",
    },
  ],
  variable: "--gogol-font",
});
interface IButtonSend {
  onClick?: () => void;
  text: string;
  rotate?: string;
  right?: string;
  top?: string|number;
  left?: string|number;
  backgroundColor?: string;
  
}
export default function ButtonOrder({
  onClick,
  rotate,
  right,
  left,
  top,
  backgroundColor,
  text,
}: IButtonSend) {
  return (
    <button
      type="button"
      className={`${styles.button} ${gogolFont.variable}`}
      onClick={onClick}
      style={{
        rotate,
        right,
        left,
        top,
        backgroundColor,
      }}
    >
      {text}
    </button>
  );
}
