import styles from "./intro.module.scss";
import Image from "next/image";
import frontImage from "/public/main-front.webp";

export default function Intro() {
  return (
    <section className={`${styles.background} z-10 max-w-full`}>
      <div
        className={`flex flex-row relative py-[22vh] gap-8 xl:max-w-[1650px] xl:mx-auto`}
      >
        <div className="z-10">
          <ul className="flex flex-row gap-8 text-base font-bold ml-6">
            <li>Fb.</li>
            <li>Tw.</li>
            <li>In.</li>
            <li>Be.</li>
          </ul>
          <ul className="flex flex-col gap-2 font-medium text-6xl ml-6 md:text-7xl md:ml-[5rem] lg:text-8xl lg:ml-[9rem] xl:text-[8rem]">
            <li>Things</li>
            <li className="ml-8 text-8xl title-transparent md:text-8xl lg:text-9xl lg:ml-15 xl:text-[9rem] xl:ml-20">
              creative
            </li>
            <li>everyday</li>
          </ul>
        </div>
        <Image
          src={frontImage}
          alt="design image"
          className={`hidden  md:block ${styles.darker_image} md:w-[350px] lg:w-[450px]  lg:right-[500px] xl:w-[550px] 2xl:w-[700px]`}
        />
      </div>
    </section>
  );
}
