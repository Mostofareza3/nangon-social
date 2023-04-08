import React from "react";
import Card from "./Card";
import { cardData } from "../../../data/card";

const CardContainer = () => {
  return (
    <section className="w-full mb-16 flex flex-col items-center justify-center">
      <div className="grid grid-cols-12 gap-5">
        {cardData.map((card) => (
          <Card
            key={card.key}
            card={card}
            className="col-span-4 sm:col-span-12 md:col-span-12 lg:col-span-6"
          />
        ))}
      </div>
    </section>
  );
};

export default CardContainer;
