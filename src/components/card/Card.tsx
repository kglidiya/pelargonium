import React from "react";
import styles from "./Card.module.css";
import Image from "next/image";
import localFont from "next/font/local";
import Button from "../ui/button/Button";
// import { useRouter } from "next/navigation";
import Link from "next/link";

const gogolFont = localFont({
  src: [
    {
      path: "../../../public/fonts/ofont.ru_LainyDay.ttf",
      weight: "100",
      style: "regular",
    },
  ],
  variable: "--gogol-font",
});
export default function Card({
  image,
  title,
  available,
  id,
  onClick,
}: {
  image: string;
  title: string;
  id: string;
  available: boolean;
  onClick?: any;
}) {
  // const router = useRouter();  // -> Access Next.js Router here

  // console.log(router)
  return (
    <div className={styles.wrapper} onClick={onClick}>
      <div className={styles.buttonContainer}>
        {/* <p className={styles.p}>Нет в наличии</p> */}
        {/* <p className={styles.p}>Сообщить о поступлении</p> */}
        <Button
          text={available ? "Заказать" : "Сообщить о поступлении"}
          width="280px"
        />
      </div>
      <Image
        alt="fff"
        src={image}
        width={0}
        height={0}
        sizes="100vw"
        className={styles.image}
      />
      <Link href={`/variety/${id}`}>
        <p className={`${styles.title} ${gogolFont.variable}`}>{title}</p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "10px"
          }}
        >
          <p className={`${styles.p} ${styles.price}`}>700 руб</p>
          {!available && <p className={styles.p}>Нет в наличии</p>}
        </div>
        <p className={styles.p} style={{marginBottom: "10px"}}>Подробнее...</p>
      </Link>
    </div>
  );
}
