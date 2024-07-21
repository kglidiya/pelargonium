"use client";
import { motion, AnimatePresence } from "framer-motion";
import ClientOnlyPortal from "../ClientOnlyPortal/ClientOnlyPortal";
import styles from "./Modal.module.css";
import Title from "../title/Title";
export default function Modal({
  isOpen,
  setOpen,
  children,
}: {
  isOpen: boolean;
  setOpen: any;
  children: any;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <ClientOnlyPortal selector="#modal">
          <motion.div
            id="#ovelay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.backdrop}
            onClick={(e) => {
              const target = e.target as HTMLDivElement;
              if(target.id === "#ovelay") {
                setOpen(false); 
              }
            }}
          >
            <div className={styles.modal}>
              {children}
            </div>
          </motion.div>

          {/* <motion.div
            onClick={setOpen}
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
     
            {children}
          </motion.div> */}
        </ClientOnlyPortal>
      )}
    </AnimatePresence>
  );
}
