import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const DialPad = () => {
  const {
    background3,
    textColor2,
    btns,
    btnsClear,
    btnsClearHover,
    btnsClearBorder,
    btnsHover,
    btnsBorder,
    btnEqual,
    btnEqualHover,
    btnEqualBorder,
  } = useAppSelector((state) => state.theme.theme);
  return (
    <div
      style={{ backgroundColor: background3, color: textColor2 }}
      className="w-full rounded-lg  px-6"
    >
      {/* Top row */}
      <div className="flex mt-6 justify-between space-x-4">
        <div
          className={`flex-1 rounded-lg flex items-center justify-center p-[6px] cursor-pointer text-[22px] font-extrabold`}
          style={{
            background: btns,
            borderBottomWidth: "4px",
            borderBottomStyle: "solid",
            borderBottomColor: btnsBorder,
          }}
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
          className={`flex-1 rounded-lg flex items-center justify-center p-[6px] cursor-pointer text-[22px] font-extrabold`}
          style={{
            background: btns,
            borderBottomWidth: "4px",
            borderBottomStyle: "solid",
            borderBottomColor: btnsBorder,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = btnsHover;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = btns;
          }}
        >
          8
        </div>
        <div
          className={`flex-1 rounded-lg flex items-center justify-center p-[6px] cursor-pointer text-[22px] font-extrabold`}
          style={{
            background: btns,
            borderBottomWidth: "4px",
            borderBottomStyle: "solid",
            borderBottomColor: btnsBorder,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = btnsHover;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = btns;
          }}
        >
          9
        </div>
        <div
          className={`flex-1 text-white rounded-lg flex items-center justify-center p-[6px] cursor-pointer text-[22px] font-extrabold`}
          style={{
            background: btnsClear,
            borderBottomWidth: "4px",
            borderBottomStyle: "solid",
            borderBottomColor: btnsClearBorder,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = btnsClearHover;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = btnsClear;
          }}
        >
          DEL
        </div>
      </div>
      {/* Third row */}
      <div className="flex mt-4 justify-between space-x-4">
        <div
          className={`flex-1 rounded-lg flex items-center justify-center p-[6px] cursor-pointer text-[22px] font-extrabold`}
          style={{
            background: btns,
            borderBottomWidth: "4px",
            borderBottomStyle: "solid",
            borderBottomColor: btnsBorder,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = btnsHover;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = btns;
          }}
        >
          4
        </div>
        <div
          className={`flex-1 rounded-lg flex items-center justify-center p-[6px] cursor-pointer text-[22px] font-extrabold`}
          style={{
            background: btns,
            borderBottomWidth: "4px",
            borderBottomStyle: "solid",
            borderBottomColor: btnsBorder,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = btnsHover;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = btns;
          }}
        >
          5
        </div>
        <div
          className={`flex-1 rounded-lg flex items-center justify-center p-[6px] cursor-pointer text-[22px] font-extrabold`}
          style={{
            background: btns,
            borderBottomWidth: "4px",
            borderBottomStyle: "solid",
            borderBottomColor: btnsBorder,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = btnsHover;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = btns;
          }}
        >
          6
        </div>
        <div
          className={`flex-1 rounded-lg flex items-center justify-center p-[6px] cursor-pointer text-[22px] font-extrabold`}
          style={{
            background: btns,
            borderBottomWidth: "4px",
            borderBottomStyle: "solid",
            borderBottomColor: btnsBorder,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = btnsHover;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = btns;
          }}
        >
          +
        </div>
      </div>
      {/* second row */}
      <div className="flex mt-4 justify-between space-x-4">
        <div
          className={`flex-1 rounded-lg flex items-center justify-center p-[6px] cursor-pointer text-[22px] font-extrabold`}
          style={{
            background: btns,
            borderBottomWidth: "4px",
            borderBottomStyle: "solid",
            borderBottomColor: btnsBorder,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = btnsHover;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = btns;
          }}
        >
          1
        </div>
        <div
          className={`flex-1 rounded-lg flex items-center justify-center p-[6px] cursor-pointer text-[22px] font-extrabold`}
          style={{
            background: btns,
            borderBottomWidth: "4px",
            borderBottomStyle: "solid",
            borderBottomColor: btnsBorder,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = btnsHover;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = btns;
          }}
        >
          2
        </div>
        <div
          className={`flex-1 rounded-lg flex items-center justify-center p-[6px] cursor-pointer text-[22px] font-extrabold`}
          style={{
            background: btns,
            borderBottomWidth: "4px",
            borderBottomStyle: "solid",
            borderBottomColor: btnsBorder,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = btnsHover;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = btns;
          }}
        >
          3
        </div>
        <div
          className={`flex-1 rounded-lg flex items-center justify-center p-[6px] cursor-pointer text-[22px] font-extrabold`}
          style={{
            background: btns,
            borderBottomWidth: "4px",
            borderBottomStyle: "solid",
            borderBottomColor: btnsBorder,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = btnsHover;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = btns;
          }}
        >
          -
        </div>
      </div>
      {/* First row */}
      <div className="flex mt-4 justify-between space-x-4">
        <div
          className={`flex-1 rounded-lg flex items-center justify-center p-[6px] cursor-pointer text-[22px] font-extrabold`}
          style={{
            background: btns,
            borderBottomWidth: "4px",
            borderBottomStyle: "solid",
            borderBottomColor: btnsBorder,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = btnsHover;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = btns;
          }}
        >
          .
        </div>
        <div
          className={`flex-1 rounded-lg flex items-center justify-center p-[6px] cursor-pointer text-[22px] font-extrabold`}
          style={{
            background: btns,
            borderBottomWidth: "4px",
            borderBottomStyle: "solid",
            borderBottomColor: btnsBorder,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = btnsHover;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = btns;
          }}
        >
          0
        </div>
        <div
          className={`flex-1 rounded-lg flex items-center justify-center p-[6px] cursor-pointer text-[22px] font-extrabold`}
          style={{
            background: btns,
            borderBottomWidth: "4px",
            borderBottomStyle: "solid",
            borderBottomColor: btnsBorder,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = btnsHover;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = btns;
          }}
        >
          /
        </div>
        <div
          className={`flex-1 rounded-lg flex items-center justify-center p-[6px] cursor-pointer text-[18px] font-extrabold`}
          style={{
            background: btns,
            borderBottomWidth: "4px",
            borderBottomStyle: "solid",
            borderBottomColor: btnsBorder,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = btnsHover;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = btns;
          }}
        >
          X
        </div>
      </div>
      {/* Action row */}
      <div className="flex mt-4 justify-between space-x-4 mb-6">
        <div
          className={`flex-1 text-white rounded-lg flex items-center justify-center p-[6px] cursor-pointer text-[22px] font-extrabold`}
          style={{
            background: btnsClear,
            borderBottomWidth: "4px",
            borderBottomStyle: "solid",
            borderBottomColor: btnsClearBorder,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = btnsClearHover;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = btnsClear;
          }}
        >
          RESET
        </div>
        <div
          className={`flex-1 text-white rounded-lg flex items-center justify-center p-[6px] cursor-pointer text-[22px] font-extrabold`}
          style={{
            background: btnEqual,
            borderBottomWidth: "4px",
            borderBottomStyle: "solid",
            borderBottomColor: btnEqualBorder,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = btnEqualHover;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = btnEqual;
          }}
        >
          =
        </div>
      </div>
    </div>
  );
};

export default DialPad;
