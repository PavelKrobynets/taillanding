import styles from "./intro.module.scss";
import Image from "next/image";

export default function Intro() {
  return (
    <div className={`flex flex-row py-[18vh]  gap-8 ${styles.background}`}>
      <div>
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
      <div>
        <Image
          src={"/main-front.webp"}
          alt="design image"
          width={100}
          height={100}
          className="hidden  md:block darker-image"
        />
      </div>
    </div>
  );
}
