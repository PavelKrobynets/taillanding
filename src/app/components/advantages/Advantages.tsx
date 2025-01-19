import Title from "../title/Title";
import Image from "next/image";

export default function Advantages() {
  return (
    <section className="xl:max-w-[1650px] gap-8 pb-[100px] relative">
      <div className="px-[3rem] flex flex-col items-center md:px-[8rem] xl:mx-auto lg:grid lg:grid-cols-5 lg:px-1 lg:content-center lg:items-start ">
        <Image
          src={"/bedroom.webp"}
          alt="image"
          width={700}
          height={300}
          quality={100}
          className="object-fill brightness-90 lg:col-span-2 w-full xl:max-h-[550px]"
        />
        <div className="px-10 py-5 text-start flex flex-col gap-4 lg:col-span-2 lf:gap-8 ">
          <Title title="advantages" />
          <ul className="flex flex-col gap-2 font-medium text-6xl ">
            <li>Design</li>
            <li className="ml-8 text-7xl title-transparent">Creativity</li>
            <li>Beauty</li>
          </ul>
          <p className="text-2xl">
            Crafting spaces, inspiring lives <br /> where design meets
            innovation
          </p>
          <button className="btn">View more</button>
        </div>
        <div className="hidden lg:block lg:col-span-1 h-[100%]">
          <Image
            src={"/kitchen.webp"}
            alt="image"
            width={300}
            height={500}
            className="w-full h-[100%] object-cover brightness-90  lg:w-full"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 pt-[8rem] px-[2rem] lg:grid-cols-4">
        <div className="lg:col-span-1 lg:mx-auto lg:px-5 relative">
          <div className="absolute border rounded w-[7rem] h-[10rem] -top-[10px] right-[10rem] border-zinc-800"></div>
          <h4 className="">
            <span className="text-8xl">1</span>
            <span className="text-7xl relative">k</span>
          </h4>
          <p className="text-2xl mt-2">Created designs</p>
        </div>
        <div className="lg:col-span-1 lg:mx-auto lg:px-5 relative">
          <div className="absolute border rounded w-[7rem] h-[10rem] -top-[10px] right-[10rem] border-zinc-800"></div>
          <h4 className="">
            <span className="text-8xl">1</span>
            <span className="text-7xl relative">k</span>
          </h4>
          <p className="text-2xl mt-2">Created designs</p>
        </div>
        <div className="lg:col-span-1 lg:mx-auto lg:px-5 relative">
          <div className="absolute border rounded w-[7rem] h-[10rem] -top-[10px] right-[10rem] border-zinc-800"></div>
          <h4 className="">
            <span className="text-8xl">1</span>
            <span className="text-7xl relative">k</span>
          </h4>
          <p className="text-2xl mt-2">Created designs</p>
        </div>
        <div className="lg:col-span-1 lg:mx-auto lg:px-5 relative">
          <div className="absolute border rounded w-[7rem] h-[10rem] -top-[10px] right-[10rem] border-zinc-800"></div>
          <h4 className="">
            <span className="text-8xl">1</span>
            <span className="text-7xl relative">k</span>
          </h4>
          <p className="text-2xl mt-2">Created designs</p>
        </div>
      </div>
      <div className="hidden md:block xl:text-[22rem] text-stroke-bg left-[-10px] bottom-[-150px]">
        Achievements
      </div>
    </section>
  );
}
