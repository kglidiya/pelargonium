"use client";
import React from "react";
import styles from "./VarietyAnimation.module.css";
import { motion } from "framer-motion";
import Image from "next/image";
interface IAnimation {
  bottom?: number;
  top?: number | string;
}
export default function VarietyAnimation({bottom, top}: IAnimation) {
  return (
    <div className={styles.animatedGroup} style={{bottom, top}}>
      <Image
        alt="fff"
        src="/images/w6.png"
        width={0}
        height={0}
        sizes="100vw"
        className={styles.window_white}
      />
      <motion.div
        className={styles.flowerContainer}
        initial={{ bottom: "0", visibility: "hidden" }}
        whileInView={{
          bottom: "29%",
          visibility: "visible",
        }}
        transition={{ duration: 1 }}
      >
        <Image
          alt="fff"
          src="/images/geran1.png"
          width={0}
          height={0}
          sizes="100vw"
          className={styles.flower}
        />
      </motion.div>
    </div>
  );
}
