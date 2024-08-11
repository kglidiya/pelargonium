"use client";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import Input from "../ui/input/Input";
import { useForm } from "react-hook-form";
import Spinner from "../ui/spinner/Spinner";
import emailjs from "@emailjs/browser";
import TextArea from "../ui/textarea/TextArea";
import styles from "./Form.module.css";
import Button from "../ui/button/Button";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "@/redux/cart/cartSlice";
interface IForm {
  width: string;
  variety?: string;
  placeholder?: string;
  text: string;
  value?: string;
}
export default function Form({
  width,
  variety,
  placeholder,
  text,
  value,
}: IForm) {
  const cart = useSelector((state: RootState) => state.value.cart);
  const dispatch = useDispatch()
  const form = useRef<HTMLFormElement | null>(null);
  const [btnText, setBtnText] = useState<string | ReactNode>(text);
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    reset,
    formState: { errors },
  } = useForm<any>({
    values: {},
  });

  // const order = [
  //   { variety: "ffff", quantity: 7 },
  //   { variety: "sss", quantity: 1 },
  // ];
  // const [orderStringified, setOrderStringified] = useState("");
  // useEffect(() => {
  //   let res = "";
  //   order.forEach((item) => {
  //     res += `сорт: ${item.variety}, кол-во: ${item.quantity}; `;
  //   });
  //   setOrderStringified(res);
  // }, []);
  // console.log(orderStringified);
  const onSubmit = () => {
    setBtnText(<Spinner />);
    // console.log(variety);
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE as string,
        process.env.NEXT_PUBLIC_MAILDEV_TEMPLATE as string,
        form.current as HTMLFormElement,
        process.env.NEXT_PUBLIC_KEY as string
      )
      .then(
        (result: any) => {
          if (result.text === "OK") {
            setBtnText("Отпралено");
            setTimeout(() => {
              if (form.current) form.current.reset();
              reset();
              variety?.includes('кол-во') && dispatch(clearCart())
              setBtnText("Отправить");
            }, 1000);
          } else setBtnText("Ошибка");
        },
        (error: any) => {
          // eslint-disable-next-line no-console
          console.log(error);
        }
      );
  };
  return (
    <form
      // onSubmit={(e: any) => (onSubmit(e))}
      onSubmit={handleSubmit(onSubmit)}
      ref={form}
      className={styles.wrapper}
      // onClick={(e: any) => onSubmit(e)}
    >
      <Input
        type="text"
        name="from_name"
        placeholder="Ваше имя"
        register={register}
        required
        error={errors}
        errorMessage="Заполните это поле"
      />
      <Input
        type="text"
        name="from_email"
        placeholder="Контакты"
        register={register}
        required
        error={errors}
        errorMessage="Заполните это поле"
      />
      <TextArea
        register={register}
        required
        placeholder={placeholder}
        name="message"
        error={errors}
        errorMessage="Заполните это поле"
        value={value && value}
      />
      <input
        type="text"
        name="tour"
        value={variety}
        readOnly
        style={{ display: "none" }}
      />
      <Button text={btnText} width={width} />
    </form>
  );
}
