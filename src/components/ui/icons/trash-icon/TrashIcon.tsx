import styles from "./TrashIcone.module.css";

interface ITrashIconProps {
  width?: number;
  height?: number;
  onClick?: VoidFunction;
  bottom?: number;
  top?: number;
  left?: number;
  right?: number;
}
export default function TrashIcon({ width, height, bottom, top, left, right, onClick }: ITrashIconProps) {
  return (
    <div
      className={styles.icon}
      onClick={onClick}
      // style={{
      //   bottom: `${bottom}px`,
      //   top: `${top}px`,
      //   left: `${left}px`,
      //   right: `${right}px`,
      // }}
    >
      <svg
        width={28}
        height={28}
        viewBox='-3 0 32 32'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        fill='white'
      >
        <g id='SVGRepo_bgCarrier' strokeWidth='0' />

        <g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round' />

        <g id='SVGRepo_iconCarrier'>
          {" "}
          <title>trash</title> <desc>Created with Sketch Beta.</desc> <defs> </defs>{" "}
          <g id='Page-1' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
            {" "}
            <g id='Icon-Set-Filled' transform='translate(-261.000000, -205.000000)' fill='white'>
              {" "}
              <path
                d='M268,220 C268,219.448 268.448,219 269,219 C269.552,219 270,219.448 270,220 L270,232 C270,232.553 269.552,233 269,233 C268.448,233 268,232.553 268,232 L268,220 L268,220 Z M273,220 C273,219.448 273.448,219 274,219 C274.552,219 275,219.448 275,220 L275,232 C275,232.553 274.552,233 274,233 C273.448,233 273,232.553 273,232 L273,220 L273,220 Z M278,220 C278,219.448 278.448,219 279,219 C279.552,219 280,219.448 280,220 L280,232 C280,232.553 279.552,233 279,233 C278.448,233 278,232.553 278,232 L278,220 L278,220 Z M263,233 C263,235.209 264.791,237 267,237 L281,237 C283.209,237 285,235.209 285,233 L285,217 L263,217 L263,233 L263,233 Z M277,209 L271,209 L271,208 C271,207.447 271.448,207 272,207 L276,207 C276.552,207 277,207.447 277,208 L277,209 L277,209 Z M285,209 L279,209 L279,207 C279,205.896 278.104,205 277,205 L271,205 C269.896,205 269,205.896 269,207 L269,209 L263,209 C261.896,209 261,209.896 261,211 L261,213 C261,214.104 261.895,214.999 262.999,215 L285.002,215 C286.105,214.999 287,214.104 287,213 L287,211 C287,209.896 286.104,209 285,209 L285,209 Z'
                id='trash'
              >
                {" "}
              </path>{" "}
            </g>{" "}
          </g>{" "}
        </g>
      </svg>
    </div>
  );
}
