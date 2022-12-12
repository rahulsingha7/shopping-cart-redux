import React from "react";
import { useSelector } from "react-redux";

export default function TotalPrice() {
  const count1 = useSelector((state) => state.canon.count);
  const count2 = useSelector((state) => state.asus.count);
  const count3 = useSelector((state) => state.dell.count);
  const count = count1 + count2 + count3;
  return (
    <div class="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
      <div class="flex justify-center items-center text-center">
        <div class="text-xl font-semibold">
          <p>Total Price</p>
          <p class="text-5xl">{count}</p>
        </div>
      </div>
    </div>
  );
}
