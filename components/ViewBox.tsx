import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import styles from "./style.module.css";
const ViewBox = () => {
  const { background, background2, background3, textColor, textColor2 } =
    useAppSelector((state) => state.theme.theme);
  const { expression, answer, showBlinker, result, showResult } =
    useAppSelector((state) => state.compute);
  return (
    <div
      style={{ backgroundColor: background2, color: textColor }}
      className="w-full relative h-[12vh] rounded-lg my-3 p-2  text-4xl font-bold flex flex-wrap items-center justify-end"
    >
      {showResult && (
        <span className="text-xs absolute right-1 top-1">{result}=</span>
      )}
      <span>
        {expression}
        {showBlinker && <span className={styles.blinker}>|</span>}
      </span>
    </div>
  );
};

export default ViewBox;
