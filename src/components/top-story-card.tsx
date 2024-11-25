import { baseUrl } from "@/lib/constants";
import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { NavLink } from "react-router-dom";

interface Props {
  image: any;
  author: string;
  created_at: string;
  title: string;
  id: number;
}

export const TopStoryCard = (props: Props) => {
  return (
    // <NavLink
    //   //to={`/story/` + props.id}
    //   state={{ story: props }}
    //   className="mb-16 flex w-full items-center justify-center gap-2 "
    // >
      <div className="_hover-styles --overflow-hidden group flex h-52 w-full cursor-pointer flex-col items-start justify-between gap-2 bg-slate-200 shadow-md hover:shadow-lg">
        <div className="relative isolate z-[1] flex h-full w-full items-center justify-start">
          <img
            src={props.image}
            alt="featuring a top story!"
            className="--scale-100 --group-hover:scale-105 h-full w-full transform object-cover opacity-100 transition-transform duration-300 ease-linear"
          />
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="absolute -bottom-12 left-0 right-0 z-[2] mx-auto flex w-4/5 translate-y-12 flex-col items-center justify-start gap-3 bg-white p-2 text-neutral-800 shadow ring-1 ring-neutral-300 group-hover:text-opacity-75">
            <p className="line-clamp-2 w-full text-balance font-serif text-lg font-medium capitalize md:text-xl">
              {props.title}
            </p>
            <div className="flex w-full items-center justify-between gap-2 border-t border-neutral-200">
              <span className="flex capitalize text-green-500">
                {props.author}
              </span>
              {props.created_at && (
                <span className="flex">
                  {props.created_at}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    // </NavLink>
  );
};
