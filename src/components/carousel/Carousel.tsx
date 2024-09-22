/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import Slider from "react-slick";
// import { images } from "../../utils/constants";
import styles from "./Carousel.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "@chakra-ui/react";
const images = [
  { title: "1", image: "/images/333.jpg" },
  { title: "1", image: "/images/67.jpeg" },
  { title: "1", image: "/images/35.jpeg" },
  { title: "1", image: "/images/53.jpeg" },
  { title: "1", image: "/images/56.jpg" },
  // { title: "1", image: "/images/27.jpg" },
  { title: "1", image: "/images/41.jpeg" },


];
export default function Carousel() {
  const [tablet] = useMediaQuery('(max-width: 768px)');

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    appendDots: (dots: any) => (
      <ul
        style={{
          margin: "0px",
          display: "flex",
          flexDirection: !tablet ? "column": "row",
          gap: !tablet ?"10px": "5px",
          bottom: !tablet ? "50%" : "46vh",
          width: !tablet ? "53%": "100%",
          right: 0,
          transform: !tablet ? "translate(0, 50%)": "",
          justifyContent: !tablet ? "" : 'center'
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
          width: !tablet?"13px": '9px',
          height: !tablet?"13px": '9px',
          borderRadius: "50%",
        }}
      ></span>
    ),
  };

  return (
    <Slider {...settings}>
      {images.map((img: { title: string; image: string }) => {
        return (
          <div key={img.title}>
            <img src={img.image} alt="Картинка" className={styles.image} />
          </div>
        );
      })}
    </Slider>
  );
}
