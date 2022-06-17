import React from "react";

//props --> clr: color in HEX, name: name of component, allocation/value: allocation/value in text.
const PassiveTrackingCard = (props) => {
  return (
    <div className="flex justify-center m-3">
      <div className="shadow-sm border border-gray-100 w-11/12 rounded-md h-16 grid grid-cols-12 grid-rows-1 items-center justify-center p-1">
        <div
          className="w-3 h-3 rounded-full grid-cols-1 m-2 break-words"
          style={{ backgroundColor: props.clr }}
        ></div>
        <div
          className="col-span-5 m-2 font-semibold"
          style={{ cursor: "pointer" }}
          onClick={() => {
            props.onCheck(props.id);
          }}
        >
          {props.name}
        </div>

        <div className="col-span-3 m-2 text-sm flex flex-col justify-center items-center">
          <span className="text-gray-500">Allocation $</span>
          <span>{props.allocation}</span>
        </div>

        <div className="col-span-3 m-2 text-sm flex flex-col justify-center items-center">
          <span className="text-gray-500">Value</span>
          <span>{props.value}</span>
        </div>
      </div>
    </div>
  );
};

export default PassiveTrackingCard;
