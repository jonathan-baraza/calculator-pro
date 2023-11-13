import { useAppSelector, useAppDispatch } from "@/redux/hooks";
const ViewBox = () => {
  const { background, background2, background3, textColor, textColor2 } =
    useAppSelector((state) => state.theme.theme);
  return (
    <div
      style={{ backgroundColor: background2, color: textColor }}
      className="w-full h-[12vh] rounded-lg my-3 p-2  text-4xl font-bold flex flex-wrap items-center justify-end"
    >
      399,230
    </div>
  );
};

export default ViewBox;
