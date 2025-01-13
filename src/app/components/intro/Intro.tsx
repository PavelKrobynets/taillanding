import styles from "./intro.module.scss";

export default function Intro() {
  return (
    <div className={`flex flex-col py-[18vh]  gap-8 ${styles.background}`}>
      <ul className="flex flex-row gap-8 text-base font-bold ml-6">
        <li>Fb.</li>
        <li>Tw.</li>
        <li>In.</li>
        <li>Be.</li>
      </ul>
      <ul className="flex flex-col gap-2 font-medium text-6xl ml-6 md:text-7xl lg:text-8xl lg:ml-[11rem] xl:text-[8rem]">
        <li>Things</li>
        <li className="ml-8 text-8xl title-transparent md:text-8xl lg:text-9xl lg:ml-15 xl:text-[9rem] xl:ml-20">
          creative
        </li>
        <li>everyday</li>
      </ul>
    </div>
  );
}
