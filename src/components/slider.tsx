import * as React from "react";
import { useEffect } from "react";
import Box from "@mui/material/Box";

import Slider from "@mui/material/Slider";
import { _categories } from "@/helper/database";
interface props {
  setResultArray: (
    e: { categories: _categories; value: number; statement: string }[]
  ) => void;
  indexArray: number;
  resultArray: { categories: _categories; value: number; statement: string }[];
  categories: _categories;
  dispatch: any;
  tasks: any;
  statement: string;
}
const SliderComponent = ({
  resultArray,
  indexArray,
  setResultArray,
  categories,
  dispatch,
  tasks,
  statement,
}: props) => {
  console.log(
    resultArray[indexArray] === undefined ? 50 : resultArray[indexArray].value
  );
  let tempArr = [...resultArray];
  const marks = [
    {
      value: 0,
      label: "Disagree",
    },
    {
      value: 10,
    },
    {
      value: 20,
    },
    {
      value: 30,
    },
    {
      value: 40,
    },
    {
      value: 50,
      label: "Neutral",
    },
    {
      value: 60,
    },
    {
      value: 70,
    },
    {
      value: 80,
    },
    {
      value: 90,
      label: "Agree",
    },
  ];

  const changeHandler = (value: number) => {
    tempArr[indexArray] = { categories, value, statement };
    setResultArray(tempArr);
  };
  function valuetext(value: number) {
    return `${value}°C`;
  }

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        track="inverted"
        aria-labelledby="track-inverted-slider"
        getAriaValueText={valuetext}
        defaultValue={
          resultArray[indexArray] === undefined
            ? 50
            : resultArray[indexArray].value * 10
        }
        marks={marks}
        //@ts-ignore
        onChangeCommitted={(_, e) => changeHandler(Math.round(e / 10))}
      />
    </Box>
  );
};
export default SliderComponent;
