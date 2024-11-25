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
import { $lodgesItem } from "@/lib/types";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

interface Props {
  lodges: $lodgesItem[];
}

export function DestinationViewCarousel(props: Props) {
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

  return (
    <div className="mx-12">
      <Carousel
        plugins={[plugin.current]}
        className="--max-w-xs w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          <section className="mx-6 mb-12 mt-4 grid w-full justify-center gap-6 md:grid-cols-2 md:justify-between md:gap-4 lg:grid-cols-4 lg:gap-4">
            {props.lodges.map((item) => (
              <CarouselItem
                key={item.id}
                className="flex items-center justify-center"
              >
                <div>
                  <img
                    src={item.image}
                    alt="featuring a lodge!"
                    className="max-h-62 mx-6 h-auto w-auto max-w-full scale-100 transform transition-transform duration-300 ease-linear group-hover:scale-105"
                  />
                  <div className="mx-6 flex w-full items-center justify-between gap-2 border-t border-neutral-200">
                    <span className="flex">
                      <p className="text-lg font-bold text-neutral-800 sm:text-xl">
                        {item.name}
                      </p>
                    </span>
                    <span className="flex capitalize text-green-500">
                      {item.price}
                    </span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </section>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
