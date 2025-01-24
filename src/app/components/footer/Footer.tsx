import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mails,
  MapPinHouse,
  Twitter,
  Facebook,
  Linkedin,
  Instagram,
  Send,
} from "lucide-react";
import NavMenu from "../navMenu/NavMenu";
export default function Footer() {
  return (
    <footer className="flex flex-col px-[2rem] pb-[1rem]">
      <div className="flex flex-col gap-8 md:flex-row justify-between border-y-[1px] border-y-zinc-700 items-center py-12 lg:px-[3rem]">
        <h4 className="font-small text-4xl capitalize lg:text-7xl">
          Get in touch
        </h4>
        <button className="btn">send a message</button>
      </div>
      <div className="flex flex-col gap-12 items-center py-[3rem] border-b-[1px] border-y-zinc-700">
        <Image
          src={"/logo.svg"}
          alt="logo"
          width={100}
          height={100}
          className=""
        />
        <ul className="flex flex-col lg:flex-row gap-6 lg:gap-[8rem]">
          <li className="flex flex-row items-center gap-3">
            <div className="bg-zinc-800 p-3 rounded-full">
              <Phone />
            </div>
            <div className="flex flex-col">
              <p className="text-lg font-semibold text-zinc-400">
                Call anytime
              </p>
              <Link href="#" className="text-xl font-bold">
                + 9136 (000) - 1741
              </Link>
            </div>
          </li>
          <li className="flex flex-row items-center gap-3">
            <div className="bg-zinc-800 p-3 rounded-full">
              <Mails />
            </div>
            <div className="flex flex-col">
              <p className="text-lg font-semibold text-zinc-400">Send email</p>
              <Link href="#" className="text-xl font-bold">
                boring@company.com
              </Link>
            </div>
          </li>
          <li className="flex flex-row items-center gap-3">
            <div className="bg-zinc-800 p-3 rounded-full">
              <MapPinHouse />
            </div>
            <div className="flex flex-col">
              <p className="text-lg font-semibold text-zinc-400">
                Visit Office
              </p>
              <Link href="#" className="text-xl font-bold">
                704 Terry Ave, Seattle
              </Link>
            </div>
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center py-[3rem] gap-4">
        <NavMenu gap={2} />
        <ul className="flex flex-row space-x-7">
          <li>
            <Twitter className="w-5 cursor-pointer" />
          </li>
          <li>
            <Facebook className="w-5 cursor-pointer" />
          </li>
          <li>
            <Linkedin className="w-5 cursor-pointer" />
          </li>
          <li>
            <Instagram className="w-5 cursor-pointer" />
          </li>
          <li>
            <Send className="w-5 cursor-pointer" />
          </li>
        </ul>
      </div>
    </footer>
  );
}
