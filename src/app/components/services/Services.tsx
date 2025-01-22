import Title from "../title/Title";
import ServicesItem from "../servicesItem/ServicesItem";
export default function Services() {
  return (
    <section className="px-[2rem] flex flex-col gap-14 lg:flex-row pb-[150px]">
      <div className="w-[40%]">
        <Title title="what we do" />
        <h3 className="my-4 leading-10 text-5xl font-semibold lg:text-[3rem] lg:leading-12">
          Services We Provide
        </h3>
        <p className="text-md mr-40">
          Mestib ulligula remove the politices project completed marketing
          reserch abusiness high level process consultation for business.
        </p>
      </div>
      <div className="relative w-[60%]">
        <ServicesItem
          id={1}
          path={"/services/sketch.svg"}
          name={"Layout development"}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <ServicesItem
          id={2}
          path={"/services/comp.svg"}
          name={"Graphic & Sketches Designing"}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <ServicesItem
          id={3}
          path={"/services/develop.svg"}
          name={"Interior construction"}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </div>
    </section>
  );
}
