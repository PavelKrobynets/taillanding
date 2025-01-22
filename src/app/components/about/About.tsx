import Title from "../title/Title";
export default function About() {
  return (
    <section className="py-[6rem] flex flex-col items-center xl:py-[10rem] relative">
      <Title title="About us" />
      <p className="my-6 text-center leading-10 text-3xl font-semibold lg:text-[3rem] lg:leading-12">
        Innovative Designs for Modern Minds
        <br /> Crafting Visions into Reality
        <br /> Style.Innovation.
        <span className="text-stroke">Impact.</span>
      </p>
      <button className="mt-6 btn">explore more</button>
      <div className="hidden lg:block xl:text-[22rem] text-stroke-bg left-[-10px] top-[-50px] overflow-hidden">
        Innovation
      </div>
    </section>
  );
}
