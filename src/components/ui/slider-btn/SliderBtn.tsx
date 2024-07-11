import styles from "./SliderBtn.module.css";
import Arrow from "../arrow/Arrow";

interface IButton {
  onClick?: () => void;
  rotate: string;
  right?: string;
  bottom?: string;
  left?: string;
  backgroundColor?: string;
  color: string;
}
export default function SliderBtn({
  onClick,
  rotate,
  right,
  left,
  bottom,
  backgroundColor,
  color,
}: IButton) {
  return (
    <button
      type="button"
      className={styles.button}
      onClick={onClick}
      style={{
        rotate,
        right,
        left,
        bottom,
        backgroundColor,
      }}
    >
      <Arrow fill={color} />
    </button>
  );
}
