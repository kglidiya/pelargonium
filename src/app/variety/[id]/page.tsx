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
type Props = {
  params: { id: string };
};
export default function Variety({ params: { id } }: Props) {
  const variety = varieties.filter((el: any) => el.id === id)[0];
  const [tablet] = useMediaQuery("(max-width: 768px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  // console.log(id);
  const close = (e: React.MouseEvent<HTMLDivElement>) => {
    // console.log(e.target)
    const target = e.target as HTMLDivElement;
    if (target.nodeName === "DIV") {
      onClose();
    }
  };
  return (
    <div className={styles.container}>
      <NavBackIcon />
      <Title text={variety.title} />
      <ButtonOrder text="Заказать" onClick={onOpen} />

      <div className={styles.whiteContainer}>
        <Image
          alt="fff"
          src="/images/w4.png"
          width={0}
          height={0}
          sizes="100vw"
          className={styles.window_grey}
        />

        <div className={styles.description}>
          <p className={styles.price}>{"Цена: 800 руб."}</p>
          <p className={styles.paragraph}>
            Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский
            набор слов, но это не совсем так. Его корни уходят в один фрагмент
            классической латыни 45 года н.э., то есть более двух тысячелетий
            назад.
          </p>
          <p className={styles.paragraph}>
            Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский
            набор слов, но это не совсем так. Его корни уходят в один фрагмент
            классической латыни 45 года н.э., то есть более двух тысячелетий
            назад. Многие думают, что Lorem Ipsum - взятый с потолка
            псевдо-латинский набор слов, но это не совсем так. Его корни уходят
            в один фрагмент классической латыни 45 года н.э.
          </p>
        </div>
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
