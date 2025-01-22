"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

interface IItem {
  id: number;
  path: string;
  name: string;
  description: string;
}

export default function ServicesItem(props: IItem) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="border-t-[1px] border-zinc-700 relative h-[16rem] xl:h-[12rem]"
    >
      <div
        className={`absolute inset-0 flex flex-col gap-4 top-[1.2rem] items-center md:flex-row transition-transform duration-800 ${
          isHovered ? "scale-0" : "scale-100"
        }`}
      >
        <Image
          src={props.path}
          alt={`${props.name} icon`}
          width={100}
          height={100}
          className="w-[80px] md:w-[8rem]"
        />
        <h4 className="text-2xl px-[25%] text-center font-bold md:px-[10%]">
          {props.name}
        </h4>
        <p className="w-[70%] text-center">{props.description}</p>
      </div>
      <div
        className={`absolute inset-0 flex flex-col gap-6 items-center top-[2.5rem] transition-transform duration-800 md:flex-row md:top-[1.5rem] md:gap-14  ${
          isHovered ? "scale-1000" : "scale-0"
        }`}
      >
        <h4 className="text-5xl  md:w-[8rem] text-center font-bold">
          0{props.id}
        </h4>
        <h4 className="text-2xl w-[20rem]  text-center font-bold md:px-[5%]">
          {props.name}
        </h4>
        <button className="text-2xl uppercase flex flex-row items-center ml-5 ">
          view details &nbsp;
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
