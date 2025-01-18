import { Header, Intro, Carousel, About, Advantages } from "./index";

export default function Home() {
  return (
    <div className=" mx-auto">
      <Header />
      <Intro />
      <Carousel />
      <About />
      <Advantages />
    </div>
  );
}
