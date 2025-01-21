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
      className=" border-t-[1px] pt-10 border-zinc-700 relative"
    >
      <div
        className={`flex flex-col gap-4 items-center transition-opacity ease-in-out duration-1000 ${
          isHovered ? "opacity-0" : "opacity-100"
        }`}
      >
        <Image
          src={props.path}
          alt={`${props.name} icon`}
          width={100}
          height={100}
          className="w-[80px]"
        />
        <h4 className="text-2xl px-[25%] text-center font-bold">
          {props.name}
        </h4>
        <p className="w-[70%] text-center">{props.description}</p>
      </div>
      <div
        className={`flex flex-col gap-6 items-center absolute top-12 transition-opacity ease-in-out duration-1000 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <h4 className="text-5xl px-[25%] text-center font-bold">{props.id}</h4>
        <h4 className="text-2xl px-[25%] text-center font-bold">
          {props.name}
        </h4>
        <button className="text-2xl uppercase flex flex-row items-center">
          view details &nbsp;
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
