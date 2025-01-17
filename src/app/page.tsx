import Header from "./components/header/Header";
import Intro from "./components/intro/Intro";
import Carousel from "./components/carousel/Carousel";
import About from "./components/about/About";
export default function Home() {
  return (
    <div className=" mx-auto">
      <Header />
      <Intro />
      <Carousel />
      <About />
    </div>
  );
}
