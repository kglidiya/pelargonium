/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

import styles from "./page.module.css";
import Carousel from "@/components/carousel/Carousel";

import ParallaxSection from "@/components/parallax-section/ParalaxSection";
import Title from "@/components/title/Title";
import Intro from "@/components/intro/Intro";

export default function Home() {
  return (
    <>
      <Intro />
      <ParallaxSection />
    </>
  );
}
