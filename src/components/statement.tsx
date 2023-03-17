import SliderComponent from "./slider";
import { useState } from "react";
import { _categories } from "@/helper/database";

interface props {
  statement: string;
  setResultArray: (
    e: { categories: _categories; value: number; statement: string }[]
  ) => void;
  indexArray: number;
  resultArray: { categories: _categories; value: number; statement: string }[];
  categories: _categories;
  dispatch: any;
  tasks: any;
}
const StatementComponent = ({
  statement,
  resultArray,
  indexArray,
  setResultArray,
  categories,
  tasks,
  dispatch,
}: props) => {
  return (
    <div className="statement">
      <div className="statement--label">{statement}</div>
      <SliderComponent
        statement={statement}
        resultArray={resultArray}
        indexArray={indexArray}
        setResultArray={setResultArray}
        categories={categories}
        dispatch={dispatch}
        tasks={tasks}
      />
    </div>
  );
};
export default StatementComponent;
