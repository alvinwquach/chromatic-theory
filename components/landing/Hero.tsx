import Link from "next/link";
import BookAppointment from "./BookAppointment";

type HeroProps = {
  backgroundUrl: string;
  backgroundPosition: number;
};

function Hero({ backgroundUrl, backgroundPosition }: HeroProps) {
  return (
    <div
      className="py-32 my-10 min-h-33vh bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${backgroundUrl})`,
        backgroundPosition: `${backgroundPosition} center`,
      }}
    ></div>
  );
}

export default Hero;
