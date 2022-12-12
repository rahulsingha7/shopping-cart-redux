import React from "react";
import { useSelector } from "react-redux";

export default function TotalItem() {
  const quantity = useSelector((state) => state.canon.value);
  const quantity1 = useSelector((state) => state.asus.value);
  const quantity2 = useSelector((state) => state.dell.value);
  const totalItem = quantity + quantity1 + quantity2;
  return (
    <div class="flex justify-center items-center text-center">
      <div class="text-xl font-semibold">
        <p>Total Item</p>
        <p class="text-5xl">{totalItem}</p>
      </div>
    </div>
  );
}
