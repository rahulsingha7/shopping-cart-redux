import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../redux/dell/actions";

export default function Dell() {
  const quantity = useSelector((state) => state.dell.quantity);
  const price = useSelector((state) => state.dell.price);

  const dispatch = useDispatch();
  const incrementHandler = (value) => {
    dispatch(increment(value));
  };
  return (
    <div class="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
      <div class="flex justify-between px-4 items-center">
        <div class="text-lg font-semibold">
          <p>Dell E1916HV 18.5 Inch ({quantity})</p>
          <p class="text-gray-400 text-base">Tk {price}</p>
        </div>
        <div class="text-lg font-semibold">
          <button
            onClick={() => incrementHandler(1)}
            class="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-2 rounded-full inline-flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
