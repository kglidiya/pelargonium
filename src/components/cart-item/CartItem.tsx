"use client";
import React from "react";
import styles from "./CartItem.module.css";
import { IItem } from "@/utils/types";
import ButtonDecrement from "../ui/buttonDecrement/ButtonDecrement";
import ButtonIncrement from "../ui/buttonIncrement/ButtonIncrement";
import Image from "next/image";
import { observer } from "mobx-react-lite";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { addItem, decrement, deleteItem } from "@/redux/cart/cartSlice";
import TrashIcon from "../ui/icons/trash-icon/TrashIcon";
interface ICartItem extends IItem {
  borderBottom: string;
}
const CartItem = observer(
  ({ variety, qty, image, price, borderBottom }: ICartItem) => {
    const cart = useSelector((state: RootState) => state.value.cart);
    const dispatch = useDispatch();
    // console.log(cart);
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
          <ButtonDecrement
            count={qty}
            onClick={() =>
              dispatch(decrement({ variety, qty: 1, image, price }))
            }
          />
          <p className={styles.text}>{qty}</p>
          {/* <p className={styles.text}>{`${price} руб.`}</p> */}
          <ButtonIncrement
            disabled={false}
            onClick={() => dispatch(addItem({ variety, qty: 1, image, price }))}
          />
            <TrashIcon onClick={() =>
            dispatch(deleteItem({ variety }))
          }/>
        </div>
        {/* <TrashIcon onClick={() =>
            dispatch(deleteItem({ variety }))
          }/> */}
      </li>
    );
  }
);
export default CartItem;
