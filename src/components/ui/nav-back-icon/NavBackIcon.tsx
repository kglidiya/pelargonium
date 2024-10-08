"use client";
import { useRouter } from "next/navigation";
import styles from "./NavBackIcon.module.css";


export default function NavBackIcon() {
  const router = useRouter();
  console.log(router)
  return (
    <div className={styles.icon} onClick={() => router.back()}>
      <svg
        width="40px"
        height="40px"
        viewBox="-1.2 -1.2 26.40 26.40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#d7d3d3"
        strokeWidth="0.00024000000000000003"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0" />

        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 2C10 1.57279 9.72862 1.19277 9.32454 1.05413C8.92046 0.915482 8.47293 1.04884 8.21065 1.38606L1.21065 10.3861C0.929784 10.7472 0.929784 11.2528 1.21065 11.6139L8.21065 20.6139C8.47293 20.9512 8.92046 21.0845 9.32454 20.9459C9.72862 20.8072 10 20.4272 10 20V16.0102C15.3788 16.1223 17.9631 17.1431 19.2613 18.2532C20.4954 19.3085 20.7201 20.5489 20.9557 21.8492L20.9558 21.8496C20.9759 21.9606 20.9961 22.0721 21.017 22.1838C21.1098 22.6798 21.5576 23.029 22.0613 22.9981C22.5649 22.9672 22.9666 22.5659 22.9981 22.0623C23.1695 19.3143 22.9121 15.3323 20.9709 12.0007C19.0871 8.7677 15.6945 6.28195 10 6.02241V2Z"
            fill="#d7d3d3"
          />{" "}
        </g>
      </svg>
    </div>
  );
}
