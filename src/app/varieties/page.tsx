// 'use client'
import React from "react";
import styles from "./VarietiesAll.module.css";
import Title from "@/components/title/Title";
import { cardsData } from "@/utils/constants";
import Card from "@/components/card/Card";
import NavBackIcon from "@/components/ui/nav-back-icon/NavBackIcon";
import VarietyAnimation from "@/components/variety-animation/VarietyAnimation";
import { useDisclosure } from "@chakra-ui/react";

// import { StoreContext } from "../hoc/StoreProvider";

export default function Varieties() {
  // const store = useContext(StoreContext).store;
  // const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className={styles.container}>
      <NavBackIcon/>
      <Title text="Сортовые пеларгонии" />
      <div className={styles.cards}>
        {cardsData.map((card) => {
          return <Card key={card.id} {...card} />;
        })}
      </div>
      <VarietyAnimation top={'auto'} bottom={0}/>
    </div>
  );
}
