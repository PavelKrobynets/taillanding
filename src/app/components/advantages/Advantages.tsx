import Title from "../title/Title";
import Image from "next/image";

export default function Advantages() {
  return (
    <section className="px-7 md:flex md:flex-col md:items-center md:px-20 xl:max-w-[1650px] xl:mx-auto lg:grid lg:grid-cols-5 lg:gap-4 lg:content-center">
      <Image
        src={"/bedroom.webp"}
        alt="image"
        width={600}
        height={300}
        quality={100}
        className="object-contain brightness-90 lg:col-span-2"
      />
      <div className="lg:col-span-2 px-10 text-center">
        <Title title="advantages" />
        <ul>
          <li>Design</li>
          <li>Creativity</li>
          <li>Beauty</li>
        </ul>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
          laborum eos excepturi neque odit quidem quis quia asperiores, amet
          voluptate, assumenda id non obcaecati culpa iusto distinctio, fuga
          ipsum in?
        </p>
        <button className="btn">View more</button>
      </div>
      <div className="lg:col-span-1">
        <Image
          src={"/kitchen.webp"}
          alt="image"
          width={700}
          height={500}
          className="w-[100%] h-[80%] object-cover brightness-90 md:w-[40%] lg:w-[100%]"
        />
      </div>
    </section>
  );
}
