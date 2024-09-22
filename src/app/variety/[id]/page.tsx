"use client";
import { varieties } from "@/utils/constants";
import { AnimatePresence, motion } from "framer-motion";
// import { useDisclosure } from "@chakra-ui/react";
import { useDisclosure, useMediaQuery } from "../../../lib/chakra-ui";
import styles from "./Varierty.module.css";
import Title from "@/components/title/Title";
import VarietySlider from "@/components/variety-sider/VarietySlider";
import Image from "next/image";
import ButtonOrder from "@/components/ui/button-order/ButtonOrder";
import Overlay from "@/components/overlay/Overlay";
import Form from "@/components/form/Form";
import VarietyAnimation from "@/components/variety-animation/VarietyAnimation";
import NavBackIcon from "@/components/ui/nav-back-icon/NavBackIcon";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "@/redux/cart/cartSlice";
type Props = {
  params: { id: string };
};
export default function Variety({ params: { id } }: Props) {
  const variety = varieties.filter((el: any) => el.id === id)[0];
  const [tablet] = useMediaQuery("(max-width: 768px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cart = useSelector((state: RootState) => state.value.cart);
  const dispatch = useDispatch();
  const close = (e: React.MouseEvent<HTMLDivElement>) => {
    // e.stopPropagation();
    const target = e.target as HTMLDivElement;
    if (target.nodeName === "DIV") {
      onClose();
    }
  };
  return (
    <div className={styles.container}>
      <NavBackIcon />
      <Title text={variety.title} />
      {/* <ButtonOrder
        text="Заказать"
        onClick={() =>
          dispatch(
            addItem({
              variety: variety.title,
              qty: 1,
              image: variety.images[0],
              price: variety.price,
            })
          )
        }
      /> */}

      <div className={styles.whiteContainer}>
   
        <div className={styles.description}>
          <p
            className={styles.price}
          >{`Цена ${variety.title}: ${variety.price} руб.`}</p>
          {variety.description.map((paragraph, i: number) => {
            return (
              <p key={i} className={styles.paragraph}>
                {paragraph}
              </p>
            );
          })}
           <Image
          alt="fff"
          src="/images/w4.png"
          width={0}
          height={0}
          sizes="100vw"
          className={styles.window_grey}
        />
         <ButtonOrder
        text="Заказать"
        onClick={() =>
          dispatch(
            addItem({
              variety: variety.title,
              qty: 1,
              image: variety.images[0],
              price: variety.price,
            })
          )
        }
      />
        </div>
        {/* <ButtonOrder
        text="Заказать"
        onClick={() =>
          dispatch(
            addItem({
              variety: variety.title,
              qty: 1,
              image: variety.images[0],
              price: variety.price,
            })
          )
        }
      /> */}
      </div>
      <div className={styles.slider}>
        <VarietySlider images={variety.images} />
      </div>

      <VarietyAnimation />

      {/* <Overlay onClose={close} isOpen={isOpen}>
        <div className={styles.formContainer}>
          <Form
            variety={variety.title}
            placeholder={"Самовывоз/доставка (адрес)"}
            text="Заказать"
            width="240px"
          />
        </div>
      </Overlay> */}
    </div>
  );
}
