import { baseUrl } from "@/lib/constants";
import React from "react";
import { Button } from "./ui/button";
import { HiLocationMarker, HiFlag } from "react-icons/hi";
import { NavLink } from "react-router-dom";

interface Props {
  image: any;
  title: string;
  location: any;
  id: number;
}

export const DestinationCard = (props: Props) => {
  console.log(props);
  return (
    <NavLink
      to={`/`}
      //to={`/destination/${props.id}`}
      //state={{ destination: props }}
      className="_hover-styles group flex h-full w-full cursor-pointer flex-col items-start justify-between gap-2 overflow-hidden shadow hover:shadow-md"
    >
      <div className="_hover-styles group flex h-full w-full cursor-pointer flex-col items-start justify-between gap-2 overflow-hidden shadow hover:shadow-md">
        <div className="--h-60 relative isolate z-[1] flex h-full w-full items-center justify-start">
          <img
            src={props.image}
            alt="featuring a sport's event!"
            className="h-full w-full scale-100 transform object-cover opacity-75 transition-transform duration-300 ease-linear group-hover:scale-105"
          />
          <div className="absolute inset-0 h-full bg-gradient-to-t from-black/75 via-white/5 to-white/10 transition-opacity duration-300 ease-linear group-hover:opacity-75"></div>
          <div className="group-hover:opacity-duration-300 absolute z-[2] flex h-full flex-col items-start justify-end gap-2 p-4 font-serif opacity-100 transition-opacity duration-300 ease-linear group-hover:opacity-50">
            <h3 className="font-serif text-lg font-medium text-white md:text-xl">
              {props.title}
            </h3>
            <div className="flex w-full items-center justify-start gap-2 text-white">
              {/* <HiFlag />
              <span className="flex">{props.location}</span> */}
              <Button
                onClick={() => {}}
                className="animate-fade-left rounded-none bg-orange-400 animate-once hover:bg-green-500"
              >
                Read More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </NavLink>
  );
};
