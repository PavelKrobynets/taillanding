import Title from "../title/Title";
import ServicesItem from "../servicesItem/ServicesItem";
export default function Services() {
  return (
    <section className="px-[2rem] flex flex-col gap-14 lg:flex-row pb-[150px]">
      <div>
        <Title title="what we do" />
        <h3 className="my-4  leading-10 text-4xl font-semibold lg:text-[3rem] lg:leading-12">
          Services We Provide
        </h3>
        <p className="text-md mr-10">
          Mestib ulligula remove the politices project completed marketing
          reserch abusiness high level process consultation for business.
        </p>
      </div>
      <div>
        <ServicesItem
          id={1}
          path={"/globe.svg"}
          name={"Content Writings and Marketing"}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </div>
    </section>
  );
}
