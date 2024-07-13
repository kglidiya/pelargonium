// "use client";
/* eslint-disable @next/next/no-img-element */
// import { Parallax, ParallaxLayer, } from "@react-spring/parallax";
import { Parallax, ParallaxLayer } from "../../lib/react-spring";
import styles from "./ParallaxSection.module.css";
import Card from "../card/Card";
import Form from "../form/Form";

import Image from "next/image";
import { cardsData } from "@/utils/constants";

import VarietiesLink from "../varieties-link/VarietiesLink";
import VarietyAnimation from "../variety-animation/VarietyAnimation";

// import Modal from "../modal/Modal";

export default function ParallaxSection() {
  // const [tablet] = useMediaQuery('(min-width: 768px)');
  return (
    <Parallax pages={4} className={styles.container}>
      <ParallaxLayer offset={1} speed={1} className={styles.container2} />
      <ParallaxLayer offset={2} speed={1} />
      {/* <ParallaxLayer offset={2} speed={1} className={styles.container3}/> */}
      <ParallaxLayer offset={3} speed={0.3} className={styles.container3}>
        <Image
          alt="горшок"
          src="/images/bf.png"
          width={0}
          height={0}
          sizes="100vw"
          className={styles.bascket}
          style={{zIndex: 7}}
        />
        <div className={styles.form}>
          <Form placeholder="Ваше сообщение" text="Отправить" width="240px" />
          <div className={styles.animatedGroup}>
          <VarietyAnimation  top={'350px'}/>
        </div>
        </div>
    
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0} factor={3} style={{ zIndex: 2 }}>
        <div className={styles.cards}>
          {cardsData.map((card) => {
            return (
              // <Link key={card.title} href={`/variety/${card.id}`}>
              <Card {...card} key={card.id} />
              // </Link>
            );
          })}
        </div>
        <VarietiesLink />
        <div className={styles.textContainer}>
          <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
          <p className={styles.paragraph}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum
          </p>
          <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation
          </p>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={0.05} speed={0.5} style={{ opacity: 1 }}>
        <Image
          alt="картинка"
          src="/images/w2.png"
          width={0}
          height={0}
          sizes="100vw"
          className={styles.image1}
        />
      </ParallaxLayer>

      <ParallaxLayer offset={0.1} speed={-1}>
        <Image
          alt="цветок"
          src="/images/geran1.png"
          width={0}
          height={0}
          sizes="100vw"
          className={styles.flower}
        />
      </ParallaxLayer>

      <ParallaxLayer
        offset={2.55}
        speed={-0.15}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          alt=""
          src="/images/w1.png"
          width={0}
          height={0}
          sizes="100vw"
          className={styles.image2}
        />
      </ParallaxLayer>

      <ParallaxLayer
        offset={3.3}
        speed={0.1}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          alt=""
          src="/images/w2.png"
          width={0}
          height={0}
          sizes="100vw"
          className={styles.image3}
        />
      </ParallaxLayer>

      {/* <ParallaxLayer
        offset={3.4}
        speed={-0}
        style={{
          position: "relative",
          zIndex: 6,
        }}
      >
        <Image
          alt="горшок"
          src="/images/bf.png"
          width={0}
          height={0}
          sizes="100vw"
          className={styles.bascket}
        />
        <div className={styles.form}>
          <Form placeholder="Ваше сообщение" text="Отправить" width="240px" />
        </div>
      </ParallaxLayer> */}
    </Parallax>
  );
}
