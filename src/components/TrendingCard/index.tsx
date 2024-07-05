import React from "react";

interface TrendingCardProps {
  name: string;
  description: string;
  image: string;
  price: number;
}
export default function TrendingCard(props: TrendingCardProps) {
  return (
    <div className="w-80 items-start p-4 bg-white rounded-lg border border-border h-fit">
      <img
        src={"src/assets/svg/jacket.png"}
        alt={props.name}
        className="w-[200px] h-[150px]"
      />
      <div className="font-syne font-semibold text-base leading-6 pt-5 flex items-center capitalize text-chinese-black">
        {props.name}
      </div>
      <p className={"text-gray_card text-sm pt-2"}>{props.description}</p>
      <div className="flex flex-row group  gap-2 items-center pt-10 cursor-pointer"></div>
    </div>
  );
}
