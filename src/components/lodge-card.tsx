import { baseUrl } from "@/lib/constants";
import { HiClock, HiLocationMarker } from "react-icons/hi";
import { NavLink } from "react-router-dom";

interface Props {
  image: any;
  name: string;
  range: string;
  price: string;
  website: string;
}

export const LodgeCard = (props: Props) => {
  return (
    <NavLink
      to={props.website}
      className="_hover-styles group flex max-h-[26rem] w-full cursor-pointer flex-col items-start justify-between gap-2 overflow-hidden shadow hover:shadow-md"
    >
      <div className="_hover-styles group flex w-full cursor-pointer flex-col items-start justify-between gap-2 overflow-hidden shadow hover:shadow-md">
        <div className="relative isolate z-[1] flex w-full flex-col items-center justify-between">
          <img
            src={baseUrl + props.image}
            alt="featuring a wild animal!"
            className="h-auto w-full scale-100 transform opacity-95 transition-transform duration-300 ease-linear group-hover:scale-105"
          />
          <div className="group-hover:opacity-duration-300 flex w-full items-center justify-between gap-2 p-4 opacity-100 transition-opacity duration-300 ease-linear group-hover:opacity-50">
            <div className="flex flex-col items-start justify-start gap-2">
              <h3 className="font-playfair w-4/5 text-lg font-medium text-neutral-700 md:text-xl">
                {props.name}
              </h3>
              <span className="flex text-sm text-gray-700">{props.range}</span>
            </div>
            <div className="flex items-center justify-start gap-2 text-sm text-green-500">
              {/* <HiClock /> */}
              <span className="flex">{props.price}</span>
            </div>
          </div>
        </div>
      </div>
    </NavLink>
  );
};
