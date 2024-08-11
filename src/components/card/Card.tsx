"use client";
import React, { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { observer } from "mobx-react-lite";
import { useStores } from "@/app/hooks/UseStore";
import { useMediaQuery } from "@chakra-ui/react";
import styles from "./Card.module.css";
import Image from "next/image";
import localFont from "next/font/local";
import Button from "../ui/button/Button";
// import { useRouter } from "next/navigation";
import Link from "next/link";
import Modal from "../modal/Modal";
import Form from "../form/Form";
import { StoreContext } from "@/app/hoc/StoreProvider";
import { RootState } from "@/redux/store";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { addItem } from "@/redux/cart/cartSlice";

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
const Card = ({
  image,
  title,
  available,
  price,
  id,
  onClick,
}: {
  image: string;
  title: string;
  id: string;
  available: boolean;
  price: number;
  onClick?: any;
}) => {
  // const store = useContext(StoreContext).store
  const cart = useSelector((state: RootState) => state.value.cart);
  const dispatch = useDispatch();
  // console.log(cart);
  const [open, setOpen] = useState(false);
  const [tablet] = useMediaQuery("(max-width: 768px)");
  const openModal = () => {
    setOpen(true);
  };
  // console.log(open)
  return (
    <div className={styles.wrapper} onClick={onClick}>
      <div className={styles.buttonContainer}>
        {/* <p className={styles.p}>Нет в наличии</p> */}
        {/* <p className={styles.p}>Сообщить о поступлении</p> */}
        <Button
          text={available ? "Заказать" : "Сообщить о поступлении"}
          width="280px"
          onClick={() =>
            available
              ? dispatch(addItem({ variety: title, qty: 1, image, price }))
              : openModal()
          }
          // onClick={() => available ? store.addItem({variety: title, qty: 1, image, price}) : openModal()}
        />
      </div>
      {/* {image.map((el) => {
        return (
          <Image
            key={image[0]}
            alt="fff"
            src={el}
            width={0}
            height={0}
            sizes="100vw"
            className={styles.image}
          />
        );
      })} */}
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
            marginTop: "10px",
          }}
        >
          <p className={`${styles.p} ${styles.price}`}>700 руб</p>
          {!available && <p className={styles.p}>Нет в наличии</p>}
        </div>
        <p className={styles.p} style={{ marginBottom: "10px" }}>
          Подробнее...
        </p>
      </Link>
      {open && (
        <Modal isOpen={open} setOpen={setOpen}>
          <>
            <Form
              variety={title}
              value={`Сообщить о поступлении сорта ${title}`}
              text="Заказать"
              width="240px"
            />
            <div className={styles.animation}>
              <motion.div
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 1 }}
              >
                <Image
                  alt="цветок"
                  src="/images/geran1.png"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className={styles.flower}
                />
              </motion.div>
              <motion.div
                className={styles.bascketContainer}
                // initial={{ opacity: 0 }}
                // animate={{ opacity: 1 }}
                // transition={{ duration: 1 }}
              >
                <Image
                  alt="горшок"
                  src="/images/bf.png"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className={styles.bascket}
                  style={{ zIndex: 7 }}
                />
              </motion.div>
            </div>
          </>
        </Modal>
      )}
    </div>
  );
};
export default Card;
