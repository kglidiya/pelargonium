import React from "react";
import styles from "./CartItem.module.css";
import { IItem } from "@/utils/types";
import ButtonDecrement from "../ui/buttonDecrement/ButtonDecrement";
import ButtonIncrement from "../ui/buttonIncrement/ButtonIncrement";
import Image from "next/image";
import { observer } from "mobx-react-lite";
interface ICartItem extends IItem {
  borderBottom: string;
}
const CartItem = observer(
  ({ variety, qty, image, price, borderBottom }: ICartItem) => {
    // console.log("price", price);
    return (
      <li className={styles.wrapper} style={{ borderBottom }}>
        <div className={styles.counter}>
          <Image
            alt=""
            src={image}
            width={0}
            height={0}
            sizes="100vw"
            className={styles.image}
          />
          <p className={styles.text}>{variety}</p>
          {/* <p className={styles.text}>{`${price} руб.`}</p> */}
        </div>

        <div className={styles.counter}>
        <p className={styles.text}>{`${price} руб.`}</p>
          <ButtonDecrement count={qty} onClick={() => {}} />
          <p className={styles.text}>{qty}</p>
          {/* <p className={styles.text}>{`${price} руб.`}</p> */}
          <ButtonIncrement disabled={false} onClick={() => {}} />
        </div>
      </li>
    );
  }
);
export default CartItem;
