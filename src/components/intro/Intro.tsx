"use client";
import React, { useEffect, useRef } from "react";
import styles from "./Intro.module.css";
import Title from "../title/Title";
import Carousel from "../carousel/Carousel";
import { useSwipeable } from "react-swipeable";

export default function Intro() {
  const ref = useRef<HTMLDivElement | null>(null);

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
  console.log('scrollDown', ref.current?.clientHeight)
    window.scrollTo({
      top: ref.current?.clientHeight,
      left: 0,
      behavior: "smooth",
    });
  };

  const scrollTop = () => {
    console.log('scrollTop')
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
      scrollDown();
    },
  });

  useEffect(() => {
    const scrollContainer = ref.current;
    const onWheel = (e: WheelEvent) => {
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
    <section className={styles.intro} {...handlers} ref={refPassthrough}>
      <Title text="Сортовые пеларгонии" />
      <div className={styles.mask}></div>
      <Carousel />
    </section>
  );
}
