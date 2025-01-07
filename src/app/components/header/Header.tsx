"use client";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <header className="h-20 p-2 relative flex items-center justify-between">
      {isOpened ? (
        <div className="color-white w-4 h-4">
          <X
            width={20}
            height={20}
            onClick={() => setIsOpened((prev) => !prev)}
          />
          <nav className="absolute ">
            <ul className="flex flex-col justify-center">
              <li className="text-white text-2xl py-4">Home</li>
              <li className="text-white text-2xl py-4">About</li>
              <li className="text-white text-2xl py-4">Services</li>
              <li className="text-white text-2xl py-4">Pages</li>
              <li className="text-white text-2xl py-4">Contacts</li>
            </ul>
          </nav>
        </div>
      ) : (
        <Menu
          width={20}
          height={20}
          onClick={() => setIsOpened((prev) => !prev)}
        />
      )}
      <Image src={"/logo.svg"} alt="logo" width={50} height={50} />
    </header>
  );
}
