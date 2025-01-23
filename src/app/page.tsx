import {
  Header,
  Intro,
  Carousel,
  About,
  Advantages,
  Services,
  Gallery,
  Footer,
} from "./index";

export default function Home() {
  return (
    <div className=" mx-auto">
      <Header />
      <Intro />
      <Carousel />
      <About />
      <Advantages />
      <Services />
      <Gallery />
      <Footer />
    </div>
  );
}
