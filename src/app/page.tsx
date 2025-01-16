import Header from "./components/header/Header";
import Intro from "./components/intro/Intro";
import Carousel from "./components/carousel/Carousel";
export default function Home() {
  return (
    <div className=" mx-auto">
      <Header />
      <Intro />
      <Carousel />
    </div>
  );
}
