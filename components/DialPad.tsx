import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  setExpression,
  del,
  reset,
  setOperator,
  compute,
} from "@/redux/features/computeSlice";
import { MouseEvent, useState } from "react";

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
  const { currentTerm, expression } = useAppSelector((state) => state.compute);
  const dispatch = useAppDispatch();

  const [operators, setOperators] = useState<string[]>([""]);
  const [operands, setOperands] = useState<string[]>([""]);

  const handleCompute = (e: any) => {
    const term = e.target?.id || e.target?.innerHTML;

    switch (term) {
      case "0":
        dispatch(setExpression("0"));
        break;
      case "1":
        dispatch(setExpression("1"));
        break;
      case "2":
        dispatch(setExpression("2"));
        break;
      case "3":
        dispatch(setExpression("3"));
        break;
      case "4":
        dispatch(setExpression("4"));
        break;
      case "5":
        dispatch(setExpression("5"));
        break;
      case "6":
        dispatch(setExpression("6"));
        break;
      case "7":
        dispatch(setExpression("7"));
        break;
      case "8":
        dispatch(setExpression("8"));
        break;
      case "9":
        dispatch(setExpression("9"));
        break;
      case ".":
        if (
          currentTerm === "." ||
          !currentTerm ||
          currentTerm === "+" ||
          currentTerm === "-" ||
          currentTerm === "/" ||
          currentTerm === "x"
        ) {
          return;
        }
        dispatch(setExpression("."));
        break;
      case "+":
        dispatch(setOperator("+"));
        break;
      case "-":
        dispatch(setOperator("-"));
        break;
      case "/":
        dispatch(setOperator("/"));
        break;
      case "x":
        dispatch(setOperator("x"));
        break;
      case "del":
        dispatch(del());
        break;
      case "reset":
        dispatch(reset());
        break;
      case "=":
        dispatch(compute("="));
        break;
      default:
        break;
    }
  };

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
          id="7"
          onClick={(e) => {
            handleCompute(e);
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
          id="8"
          onClick={(e) => {
            handleCompute(e);
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
          id="9"
          onClick={(e) => {
            handleCompute(e);
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
          id="del"
          onClick={(e) => {
            handleCompute(e);
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
          id="4"
          onClick={(e) => {
            handleCompute(e);
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
          id="5"
          onClick={(e) => {
            handleCompute(e);
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
          id="6"
          onClick={(e) => {
            handleCompute(e);
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
          id="+"
          onClick={(e) => {
            handleCompute(e);
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
          id="1"
          onClick={(e) => {
            handleCompute(e);
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
          id="2"
          onClick={(e) => {
            handleCompute(e);
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
          id="3"
          onClick={(e) => {
            handleCompute(e);
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
          id="-"
          onClick={(e) => {
            handleCompute(e);
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
          id="."
          onClick={(e) => {
            handleCompute(e);
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
          id="0"
          onClick={(e) => {
            handleCompute(e);
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
          id="/"
          onClick={(e) => {
            handleCompute(e);
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
          id="x"
          onClick={(e) => {
            handleCompute(e);
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
          id="reset"
          onClick={(e) => {
            handleCompute(e);
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
          id="="
          onClick={(e) => {
            handleCompute(e);
          }}
        >
          =
        </div>
      </div>
    </div>
  );
};

export default DialPad;
