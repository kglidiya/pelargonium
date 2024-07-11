/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import Slider from "react-slick";
// import { images } from "../../utils/constants";
import styles from "./VarietySlider.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderBtn from "../ui/slider-btn/SliderBtn";
import { useMediaQuery } from "@chakra-ui/react";
// const t = {
//   display: "block",
//   height: 40px",
//   width: 40px,
//   background-color: aqua,
// }


export default function VarietySlider({ images }: { images: string[] }) {
  const [tablet] = useMediaQuery("(max-width: 768px)");
  const settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots: any) => (
      <ul
        style={{
          margin: "0px",
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          bottom: "20px",
          width: "50%",
          right: "50%",
          transform: "translate(75%, 0)",
        }}
      >
        {" "}
        {dots}{" "}
      </ul>
    ),
    customPaging: () => (
      <span
        style={{
          display: "block",
          backgroundColor: "rgb(255, 255, 255)",
          width: !tablet ? "13px": "9px",
          height: !tablet ? "13px": "9px",
          borderRadius: "50%",
        }}
      ></span>
    ),
    nextArrow: (
      <SliderBtn
        color="#bcb8b7"
        rotate="0deg"
        bottom="-41px"
        right="calc(50% - 45px)"
      />
    ),
    prevArrow: (
      <SliderBtn
        rotate="180deg"
        bottom="-41px"
        left="calc(50% - 45px)"
        backgroundColor={!tablet ? "#bcb8b7": "white"}
        color={!tablet ? "white": "#bcb8b7"}
      />
    ),
  };

  return (
    <Slider {...settings}>
      {images.map((img) => {
        return (
          <div key={img}>
            <Image
              alt="fff"
              src={img}
              width={0}
              height={0}
              sizes="100vw"
              className={styles.image}
            />
          </div>
        );
      })}
    </Slider>
  );
}
