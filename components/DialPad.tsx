import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const DialPad = () => {
  const { background3, textColor2, btns, btnsClear, btnsHover } =
    useAppSelector((state) => state.theme.theme);
  return (
    <div
      style={{ backgroundColor: background3, color: textColor2 }}
      className="w-full rounded-lg h-[50vh] px-6"
    >
      <div className="flex mt-6 justify-between space-x-4">
        <div
          className={`flex-1 rounded-lg flex items-center justify-center p-[6px] cursor-pointer text-[22px] font-extrabold`}
          style={{ background: btns }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = btnsHover;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = btns;
          }}
        >
          7
        </div>
        <div
          className="flex-1 rounded-lg flex items-center justify-center p-[6px] cursor-pointer text-[22px] font-extrabold "
          style={{ background: btns }}
        >
          8
        </div>
        <div
          className="flex-1 rounded-lg flex items-center justify-center p-[6px] cursor-pointer text-[22px] font-extrabold "
          style={{ background: btns }}
        >
          9
        </div>
        <div
          className="flex-1 rounded-lg text-white flex items-center justify-center p-[6px] cursor-pointer text-[22px] font-extrabold "
          style={{ background: btnsClear }}
        >
          DEL
        </div>
      </div>
    </div>
  );
};

export default DialPad;
