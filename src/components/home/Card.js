import Image from "next/image";
import React from "react";

const Card = ({ className, card }) => {
  const { image, title, description } = card;
  return (
    <>
      <div
        className={`${className} bg-slate-50 border border-1 border-solid h-[500px] rounded-lg p-2`}
      >
        <div className="h-[40%] ">
          <Image className="w-full h-full" src={image} alt="Social Image" />
        </div>
        <h2 className="text-center text-[1.5rem] my-2 text-success ">
          {title}
        </h2>
        <div className="px-3 h-[40%] overflow-y-auto ">
          <p className="">{description}</p>
        </div>
        <button
          className="bg-success text-light flex items-center justify-center
          w-full h-4 rounded-sm py-5 mb-2
          "
        >
          Donate
        </button>
      </div>
    </>
  );
};

export default Card;
