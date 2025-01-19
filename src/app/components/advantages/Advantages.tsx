import Title from "../title/Title";
import Image from "next/image";

export default function Advantages() {
  return (
    <section className="px-[3rem] flex flex-col items-center md:px-[8rem] xl:max-w-[1650px] xl:mx-auto lg:grid lg:grid-cols-5 lg:px-1 lg:content-center lg:items-start ">
      <Image
        src={"/bedroom.webp"}
        alt="image"
        width={700}
        height={300}
        quality={100}
        layout="responsive"
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
          Crafting spaces, inspiring lives <br /> where design meets innovation
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
    </section>
  );
}
