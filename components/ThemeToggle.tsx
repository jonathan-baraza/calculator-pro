import { setTheme } from "@/redux/features/themeSlice";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { useDispatch } from "react-redux";
const ThemeToggle = () => {
  const currentTheme = useAppSelector((state) => state.theme);
  const dispatch = useDispatch();
  return (
    <div
      className="w-full flex justify-between items-end py-4"
      style={{ color: currentTheme.theme.textColor }}
    >
      <div className="font-bold text-xl">calc</div>
      <div className="flex space-x-3 items-end">
        <div className="text-[10px] pb-[2px] font-semibold ">THEME</div>
        <div className="flex flex-col ">
          <div className="w-full space-x-3 flex justify-between font-semibold text-[10px] mb-[2px] px-2 ">
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>
          <div
            className="w-full rounded-xl h-[20px] px-1 flex items-center justify-between"
            style={{ backgroundColor: currentTheme.theme.background3 }}
          >
            <div
              className={`h-[13px]  ${
                currentTheme.name === "one" ? "bg-[#f97268]" : "bg-transparent"
              } rounded-full w-[13px] cursor-pointer `}
              onClick={() => {
                dispatch(setTheme("one"));
              }}
            ></div>
            <div
              className={`h-[13px]  ${
                currentTheme.name === "two" ? "bg-[#f88e3d]" : "bg-transparent"
              } rounded-full w-[13px] cursor-pointer `}
              onClick={() => {
                dispatch(setTheme("two"));
              }}
            ></div>
            <div
              className={`h-[13px]  ${
                currentTheme.name === "three"
                  ? "bg-[#92fcf7]"
                  : "bg-transparent"
              } rounded-full w-[13px] cursor-pointer `}
              onClick={() => {
                dispatch(setTheme("three"));
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeToggle;
