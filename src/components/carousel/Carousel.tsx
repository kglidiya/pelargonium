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
  // { title: "1", image: "/images/18.jpeg" },
  { title: "1", image: "/images/32.jpeg" },
  { title: "1", image: "/images/27.jpg" },
  { title: "1", image: "/images/24.jpeg" },
  { title: "1", image: "/images/31.jpg" },
  { title: "1", image: "/images/30.jpeg" },
  // { title: "5", image: "/images/5.jpeg" },
  // { title: "7", image: "/images/7.jpeg" },
  // { title: "8", image: "/images/8.jpeg" },
  { title: "9", image: "/images/9.jpeg" },
  { title: "10", image: "/images/10.jpeg" },
  // { title: "11", image: "/images/11.jpeg" },
  // { title: "12", image: "/images/12.jpeg" },
  // { title: "13", image: "/images/13.jpeg" },
  // { title: "14", image: "/images/14.jpeg" },
  // { title: "15", image: "/images/15.jpeg" },
  // { title: "16", image: "/images/16.jpeg" },
  // { title: "17", image: "/images/17.jpeg" },
  // { title: "18", image: "/images/18.jpeg" },
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
          bottom: !tablet ? "50%" : "36%",
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
