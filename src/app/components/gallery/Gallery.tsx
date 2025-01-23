import Image from "next/image";
import Title from "../title/Title";
export default function Gallery() {
  return (
    <section className="flex flex-col lg:max-w-[1400px] px-[2rem] pb-[7rem]">
      <Title title="Our gallery" />
      <h4 className="my-4 leading-10 text-5xl font-semibold lg:text-[3rem] lg:leading-12">
        Latest showcase
      </h4>
      <div className="flex flex-col ">
        <div className="flex flex-col gap-0 md:grid md:grid-cols-3 md:grid-rows-1">
          <h5 className="font-bold text-4xl text-center text-gray-300 pt-[2rem] md:pt-[6rem] hover:bg-[#100b05]  duration-700  lg:text-6xl  md:mx-auto">
            Bathroom design
          </h5>
          <p className="font-light lg:text-lg pr-[10%] text-center pt-[2rem] md:pt-[6rem] hover:bg-[#100b05] duration-700 px-10 col-start-2 col-end-3 hover:bg-#21160b md:text-sm ">
            The loft-style bathroom combines soft gray-brown tones with black
            industrial accents, creating a sleek and modern aesthetic. Natural
            textures like wooden vanities and stone countertops add warmth and
            balance to the space.
          </p>
          <Image
            src={"/bathroom.webp"}
            alt="image-bathroom"
            width={400}
            height={400}
            className="pt-[2rem] md:pt-0 col-start-3 col-end-4 w-full"
          />
        </div>
        <div className="flex flex-col md:grid md:grid-cols-3 md:grid-rows-1">
          <p className="font-light order-2 md:order-1  lg:text-lg pr-[10%] text-center pt-[2rem] md:pt-[6rem] hover:bg-[#100b05] duration-700 px-10 md:text-sm ">
            The loft-style bedroom features smooth gray walls and muted brown
            tones, offering a cozy yet sophisticated vibe. Industrial lighting
            and minimalist decor emphasize the modern design while keeping the
            atmosphere inviting.
          </p>
          <Image
            src={"/bedroom2.webp"}
            alt="image-bedroom"
            width={400}
            height={400}
            className="w-full order-3 md:order-2"
          />
          <h5 className="font-bold order-1 md:order-3 text-6xl text-center text-gray-300 pt-[2rem] md:pt-[6rem] hover:bg-[#100b05] duration-700  lg:text-6xl  md:mx-auto">
            Bedroom design
          </h5>
        </div>
      </div>
    </section>
  );
}
