import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel-mod";
import { useRef } from "react";
import { $CarouselItem } from "@/lib/types";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import avatar from "../assets/avatar1.png";
import CarouselImage from "../assets/carousel-image.png";
import { baseUrl } from "@/lib/constants";

interface Props {
  items: any;
}

export function TestimonialCarousel(props: Props) {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));
  console.log('testimonial data::', props.items);
  return (
    <Carousel
      plugins={[plugin.current]}
      className="--max-w-xs w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {props.items.map((item: any) => (
          <CarouselItem key={item.id}>
            <section className="--overflow-hidden group relative flex h-[20vh] w-full cursor-pointer flex-col items-center justify-center gap-2">
              <div className="relative h-full w-full">
              <div
                className="absolute inset-0 bg-black opacity-95 brightness-50 filter"
                style={{
                background: `url('https://source.unsplash.com/1600x900')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                }}
              ></div>
              <div className="--z-[2] absolute bottom-0 left-0 right-0 mx-auto flex h-full w-4/5 flex-col items-center justify-center gap-6 overflow-hidden  p-2 text-neutral-50 md:w-1/2">
                <img
                src={`${item.image}`}
                alt="featuring top reviewer"
                className=" size-40"
                />
                <div className="flex w-full flex-col items-center justify-between gap-1">
                {/* <span className="flex capitalize text-orange-400 md:text-xl">
                  {item.name}
                </span> */}
                {/* <span className="flex border-b border-green-200 pb-1">
                  {item.location}
                </span> */}
                </div>
                <div className="flex w-full items-center justify-center gap-1">
                {/* <RiDoubleQuotesL />
                <p className="--font-serif w-full truncate text-ellipsis text-balance px-2 text-center text-sm font-medium capitalize md:px-4">
                  {item.Testimonial}
                </p>
                <RiDoubleQuotesR /> */}
                </div>
              </div>
              </div>
            </section>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
}
