import React, { ReactNode } from "react";
import styles from "./Button.module.css";
interface IButton {
  text: string | ReactNode;
  onClick?: () => void;
  width: string;
}
export default function Button({ text, onClick, width }: IButton) {
  return (
    <div className={styles.container} onClick={onClick}>
      <button className={styles.button} style={{width}} onClick={onClick} type="submit">
        <div className={styles.button__line}></div>
        <div className={styles.button__line}></div>
        <span className={styles.button__text}>{text}</span>
        <div className={styles.button__drow1}></div>
        <div className={styles.button__drow2}></div>
      </button>
   </div>
  );
}
