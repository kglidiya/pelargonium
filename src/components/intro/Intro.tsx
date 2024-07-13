"use client";
import React, { useEffect, useRef } from "react";
import { useMediaQuery } from "../../lib/chakra-ui";
import styles from "./Intro.module.css";
import Title from "../title/Title";
import Carousel from "../carousel/Carousel";
import { useSwipeable } from "react-swipeable";

export default function Intro() {
  const ref = useRef<HTMLDivElement | null>(null);
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
    console.log("scrollDown", ref.current?.clientHeight);
    window.scrollBy({
      top: ref.current?.clientHeight,
      left: 0,
      behavior: "smooth",
    });
  };

  const scrollTop = () => {
    console.log("scrollTop");
    window.scrollBy({
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
  }, [ref]);

  const refPassthrough = (el: any) => {
    handlers.ref(el);
    ref.current = el;
  };
  return (
    <section className={styles.intro} {...handlers} ref={refPassthrough}>
      {tablet && <Title text="Сортовые пеларгонии" />}
      <div className={styles.mask}>
        {!tablet && (
          <Title text="Сортовые пеларгонии" width="100%" boxShadow="none" />
        )}
      </div>
      <Carousel />
    </section>
  );
}
