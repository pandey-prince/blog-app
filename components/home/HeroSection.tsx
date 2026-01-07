import { Button } from "../ui/button";
import heroImg from "../../public/download.jpg";
import Image from "next/image";
export default function HeroSection() {
  return (
    <div className="flex flex-row gap-2 text-white justify-around items-center  w-full bg-pink-700 py-26">
      <div className="flex flex-col gap-6 justify-between items-center w-xl text-center">
        <div className="text-6xl ">Explore the World through Words</div>
        <div className="text-xl">
          Discover insightfull articles, throught-provoking stories, and expert
          perspectives on technology, lifestyle and innovation
        </div>
        <div className="flex flex-row gap-7 justify-between items-center w-ful">
          <Button>Start Reading</Button>
          <Button>Explore Topics</Button>
        </div>
        <div className="flex flex-row justify-between items-center w-full text-lg">
          <div>
            <div className="font-black ">1k+</div>
            <div>Published articles</div>
          </div>
          <div>
            <div className="font-black">50+</div>
            <div>Expert Writers</div>
          </div>
          <div>
            <div className="font-black ">10M</div>
            <div>Monthly Readers</div>
          </div>
        </div>
      </div>
      <div className="">
        <Image src={heroImg} alt="heroImg" width={300} />
      </div>
    </div>
  );
}
