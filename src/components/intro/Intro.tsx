"use client";
import React, { useContext, useEffect, useRef } from "react";
import { useDisclosure, useMediaQuery } from "../../lib/chakra-ui";
import styles from "./Intro.module.css";
import Title from "../title/Title";
import Carousel from "../carousel/Carousel";
import { useSwipeable } from "react-swipeable";
import { motion } from "framer-motion";
import { StoreContext } from "@/app/hoc/StoreProvider";
import { observer } from "mobx-react-lite";
import Link from "next/link";
import CartIcon from "../ui/cart-icon/CartIcon";
import Overlay from "../overlay/Overlay";
import Form from "../form/Form";
import localFont from "next/font/local";
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

const Intro = observer(() => {
  const ref = useRef<HTMLDivElement | null>(null);
  // const store = useContext(StoreContext).store;
  const [tablet] = useMediaQuery("(max-width: 768px)");
  useEffect(() => {
    const setViewHeight = () => {
      document.documentElement.style.setProperty(
        "--vh",
        `${window.innerHeight * 0.01}px`
      );
    };
    setViewHeight();
    window.addEventListener("resize", setViewHeight);
    return () => {
      window.removeEventListener("resize", setViewHeight);
    };
  }, []);

  const scrollDown = () => {
    // e.preventDefault();
    console.log("scrollDown", ref.current);
    // console.log("window", window);
    // console.log(ref.current?.getBoundingClientRect().height);
    window.scrollTo({
      // top: ref.current?.clientHeight,
      top: ref.current?.clientHeight,
      left: 0,
      behavior: "smooth",
    });
  };

  const scrollTop = () => {
    // console.log("scrollTop");
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  const handlers = useSwipeable({
    onSwipedDown: () => {
      scrollTop();
    },
    onSwipedUp: () => {
      // console.log("scrollDown", ref.current?.clientHeight);
      scrollDown();
    },
  });

  useEffect(() => {
    const scrollContainer = ref.current;
    const onWheel = (e: WheelEvent) => {
      // e.stopPropagation()
      e.preventDefault();
      if (e.deltaY > 0) {
        scrollDown();
      }
      if (e.deltaY < 0) {
        scrollTop();
      }
    };
    if (scrollContainer) {
      scrollContainer.addEventListener("wheel", onWheel, { passive: false });
    }

    return () => {
      if (scrollContainer)
        scrollContainer.removeEventListener("wheel", onWheel);
    };
  }, []);

  const refPassthrough = (el: any) => {
    handlers.ref(el);
    ref.current = el;
  };

  return (
    <motion.section className={styles.intro} {...handlers} ref={refPassthrough}>
      {tablet && <Title text="Сортовые пеларгонии" />}

      <div className={styles.mask}>
        {!tablet && (
          <motion.h1
            initial={{ x: "100%" }}
            animate={{ x: "0" }}
            transition={{ duration: 0.5 }}
            className={`${styles.title} ${gogolFont.variable}`}
          >
            Сортовые пеларгонии
          </motion.h1>
        )}
      </div>
      <Carousel />
    </motion.section>
  );
});
export default Intro;
