import Title from "../title/Title";
import Image from "next/image";

export default function Advantages() {
  return (
    <section className=" gap-8 pb-[100px] relative">
      <div className="px-[2rem]  md:px-[8rem]  lg:grid lg:grid-cols-5 lg:px-1 lg:content-center lg:items-start ">
        <Image
          src={"/bedroom.webp"}
          alt="image"
          width={700}
          height={300}
          quality={100}
          className="object-fill brightness-90 lg:col-span-2 w-full xl:max-h-[550px]"
        />
        <div className=" py-5 text-start flex flex-col gap-4 md:px-[2rem] lg:col-span-2 lf:gap-8 ">
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
      <div className="ml-[4rem] grid grid-cols-2 gap-12 lg:pl-[5rem] pt-[8rem] px-[2rem] lg:grid-cols-4 ">
        <div className="lg:col-span-1 mx-auto lg:px-5 relative">
          <div className="absolute border rounded w-[7rem] h-[10rem] -top-[10px] right-[8rem] lg:right-[10rem] border-border "></div>
          <h4 className="">
            <span className="text-8xl">1</span>
            <span className="text-7xl relative">k</span>
          </h4>
          <p className="text-2xl mt-2">Created designs</p>
        </div>
        <div className="lg:col-span-1 mx-auto lg:px-5 relative">
          <div className="absolute border rounded w-[7rem] h-[10rem] -top-[10px] right-[8rem] lg:right-[10rem] border-border"></div>
          <h4 className="">
            <span className="text-8xl">600</span>
            <span className="text-7xl relative"></span>
          </h4>
          <p className="text-2xl mt-2">Happy clients</p>
        </div>
        <div className="lg:col-span-1 mx-auto lg:px-5 relative">
          <div className="absolute border rounded w-[7rem] h-[10rem] -top-[10px] right-[8rem] lg:right-[10rem] border-border"></div>
          <h4 className="">
            <span className="text-8xl">57</span>
            <span className="text-7xl relative"></span>
          </h4>
          <p className="text-2xl mt-2">Award winners</p>
        </div>
        <div className="lg:col-span-1 mx-auto lg:px-5 relative">
          <div className="absolute border rounded w-[7rem] h-[10rem] -top-[10px] right-[8rem] lg:right-[10rem] border-border"></div>
          <h4 className="">
            <span className="text-8xl">19</span>
            <span className="text-7xl relative">k</span>
          </h4>
          <p className="text-2xl mt-2">Cups of coffee</p>
        </div>
      </div>
      <div className="hidden lg:block xl:text-[22rem] text-stroke-bg left-[-10px] xl:bottom-[-150px] bottom-[10px] overflow-hidden">
        Achievements
      </div>
    </section>
  );
}
