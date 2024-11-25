import { HiBadgeCheck, HiLocationMarker, HiUser } from "react-icons/hi";

interface Props {
  image: any;
  name: string;
  role: string;
}

export const MemberCard = (props: Props) => {
  return (
    <section className="_hover-styles group flex w-full cursor-pointer flex-col items-start justify-between gap-2 overflow-hidden shadow hover:shadow-md">
      <div className="_hover-styles group flex w-full cursor-pointer flex-col items-start justify-between gap-2 overflow-hidden shadow hover:shadow-md">
        <div className="relative isolate z-[1] flex w-full items-center justify-start">
          <img
            src={props.image}
            alt="featuring a wild animal!"
            className="h-auto w-full scale-100 transform opacity-95 transition-transform duration-300 ease-linear group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-white/5 to-white/10 transition-opacity duration-300 ease-linear group-hover:opacity-75"></div>
          <div className="group-hover:opacity-duration-300 absolute z-[2] flex h-full flex-col items-start justify-end gap-2 p-4 opacity-100 transition-opacity duration-300 ease-linear group-hover:opacity-50">
            <h3 className="border-t border-green-300 py-2 text-lg font-medium text-white md:text-xl">
              {props.name}
            </h3>
            <div className="flex w-full items-center justify-start gap-2 text-white">
              <HiBadgeCheck />
              <span className="flex">{props.role}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
