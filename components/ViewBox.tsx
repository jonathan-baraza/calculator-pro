import { useAppSelector, useAppDispatch } from "@/redux/hooks";
const ViewBox = () => {
  const currentTheme = useAppSelector((state) => state.theme);
  return (
    <div
      style={{ backgroundColor: currentTheme.theme.background2 }}
      className="w-full h-[12vh] rounded-lg my-3 text-white text-5xl flex flex-wrap items-end justify-end"
    ></div>
  );
};

export default ViewBox;
