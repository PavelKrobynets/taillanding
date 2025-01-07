"use client";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <header className="h-20 px-8  relative flex items-center justify-between lg:px-16 top-4">
      {/* MOBILE */}
      <div className="flex lg:hidden">
        {isOpened ? (
          <div className="color-white w-4 h-4">
            <X
              width={20}
              height={20}
              onClick={() => setIsOpened((prev) => !prev)}
            />
          </div>
        ) : (
          <Menu
            width={20}
            height={20}
            onClick={() => setIsOpened((prev) => !prev)}
          />
        )}
        <nav
          className={`absolute top-20 left-0 w-full bg-background text-white transition-all duration-700 ease-in-out ${
            isOpened ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <ul className="flex flex-col items-center justify-center">
            <li className="text-2xl py-4">Home</li>
            <li className="text-2xl py-4">About</li>
            <li className="text-2xl py-4">Services</li>
            <li className="text-2xl py-4">Pages</li>
            <li className="text-2xl py-4">Contacts</li>
          </ul>
        </nav>
      </div>
      {/* SCREEN */}
      <div className="hidden lg:flex">
        <nav>
          <ul className="flex flex-row items-center justify-between gap-14">
            <li className="text-2xl py-4">Home</li>
            <li className="text-2xl py-4">About</li>
            <li className="text-2xl py-4">Services</li>
            <li className="text-2xl py-4">Pages</li>
            <li className="text-2xl py-4">Contacts</li>
          </ul>
        </nav>
      </div>
      <Image src={"/logo.svg"} alt="logo" width={50} height={50} />
    </header>
  );
}
