import { Button } from "@/components/ui/button";
import { changeColor } from "@/redux/features/colorPicker/colorPickerSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import React from "react";

const ColorPicker = () => {
  const dispatch = useAppDispatch();

  const { color } = useAppSelector((state) => state.colorPicker);

  const colors = ["red", "green", "blue", "yellow"];
  return (
    <div className="mt-4 flex justify-center gap-4">
      {colors.map((singleColor) => {
        return (
          <Button
            className={`bg-red-500 text-white`}
            key={singleColor}
            onClick={() => dispatch(changeColor(singleColor))}
          >
            {singleColor}
          </Button>
        );
      })}
      <p>selected color: {color}</p>
    </div>
  );
};

export default ColorPicker;
