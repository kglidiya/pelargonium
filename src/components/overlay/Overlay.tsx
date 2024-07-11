"use client";
import React, { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import styles from "./Overlay.module.css";
interface IOverlay {
  onClose: any;
  isOpen: boolean;
  children?: ReactNode;
}
export default function Overlay({ onClose, isOpen, children }: IOverlay) {
  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          onClick={onClose}
          className={styles.container}
          initial={{ width: 0 }}
          animate={{ width: "100vw", right: 0 }}
          transition={{ duration: 1 }}
          exit={{ width: 0, right: 0, left: "100%" }}
        >
          <Image
            alt="картинка"
            src="/images/output-onlinetools2.png"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              position: "absolute",
              right: 0,
              bottom: 0,
              display: "block",

              height: "35vh",
              width: "auto",
              objectFit: "contain",
            }}
          />
          {children}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
