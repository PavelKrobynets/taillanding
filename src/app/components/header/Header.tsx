"use client";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import NavMenu from "../navMenu/NavMenu";

export default function Header() {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  return (
    <header className="h-20 px-6 -mb-20 z-50 relative flex items-center justify-between lg:px-16 top-4 ">
      {/* MOBILE */}
      <div className="flex lg:hidden ">
        {isOpened ? (
          <div className="color-white w-4 h-4 cursor-pointer z-10">
            <X
              width={30}
              height={30}
              onClick={() => setIsOpened((prev) => !prev)}
            />
          </div>
        ) : (
          <Menu
            width={30}
            height={30}
            onClick={() => setIsOpened((prev) => !prev)}
            className="cursor-pointer z-10"
          />
        )}
        <nav
          className={`absolute -top-3.5 pt-[10vh] left-0 w-full bg-background text-white transition-all duration-700 ease-in-out ${
            isOpened ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <NavMenu />
        </nav>
      </div>
      {/* SCREEN */}
      <div className="hidden lg:flex">
        <nav>
          <NavMenu />
        </nav>
      </div>
      <Image
        src={"/logo.svg"}
        alt="logo"
        width={50}
        height={50}
        className="cursor-pointer z-10 w-[5rem] h-[5rem] lg:w-[6rem] lg:h-[6rem]"
      />
    </header>
  );
}
