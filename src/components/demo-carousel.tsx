import React from "react";
import { SleekCarousel, Item } from "./sleek-carousel";
import image from "../assets/gorrilas.png";
import image2 from "../assets/birds.png";

interface Props {}

export const DemoCarousel = (props: Props) => {
  return (
    <div>
      <SleekCarousel itemsPerView={3} autoPlay={false}>
        <Item>
          <img src={image} alt="some" className="h-full w-full object-cover" />
        </Item>
        <Item>
          <img src={image2} alt="some" className="h-full w-full object-cover" />
        </Item>
        <Item>foo 3</Item>
        <Item>foo 4</Item>
        <Item>foo 5</Item>
        <Item>foo 6</Item>
      </SleekCarousel>
    </div>
  );
};
