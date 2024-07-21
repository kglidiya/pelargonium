"use client";
import React, { ReactNode, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import styles from "./Overlay.module.css";
import Title from "../title/Title";
import ClientOnlyPortal from "../ClientOnlyPortal/ClientOnlyPortal";
import { StoreContext } from "@/app/hoc/StoreProvider";
import CartItem from "../cart-item/CartItem";
import { getTotal } from "@/utils/helpers";
import { useDisclosure } from "@chakra-ui/react";
import Form from "../form/Form";
interface IOverlay {
  onClose: any;
  isOpen: boolean;
  children?: ReactNode;
  cart?: any;
}
export default function Overlay({ onClose, isOpen, cart }: IOverlay) {
  const store = useContext(StoreContext).store;
  // console.log(isOpen);
  // const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <AnimatePresence>
      {isOpen ? (
        <ClientOnlyPortal selector="#modal">
          <motion.div
            onClick={onClose}
            className={styles.container}
            initial={{ width: 0 }}
            animate={{ width: "100vw", right: 0 }}
            transition={{ duration: 1 }}
            exit={{ width: 0, right: 0, left: "100%" }}
          >
            <Title
              text="Сортовые пеларгонии"
              width="fit-content"
              boxShadow="none"
            />
            {cart.length > 0 ? (
              <>
                <ul className={styles.cart}>
                  {store.cart.map((el: any, i: number) => {
                    return (
                      <CartItem
                        {...el}
                        key={el.variety}
                        borderBottom={
                          i === store.cart.length - 1
                            ? "none"
                            : "1px solid white"
                        }
                      />
                    );
                  })}
                </ul>
                <p className={styles.total}>{`ИТОГО: ${getTotal(
                  store.cart
                )} руб.`}</p>

                <div className={styles.formContainer}>
                  <Form
                    variety={"variety.title"}
                    placeholder={"Самовывоз/доставка (адрес)"}
                    text="Заказать"
                    width="240px"
                  />
                </div>
              </>
            ) : (
              <p style={{color: 'white'}}>Ваша корзина пуста</p>
            )}
            <Image
              alt="картинка"
              src="/images/output-onlinetools2.png"
              width={0}
              height={0}
              sizes="100vw"
              className={styles.image}
            />
          </motion.div>
        </ClientOnlyPortal>
      ) : null}
    </AnimatePresence>
  );
}
