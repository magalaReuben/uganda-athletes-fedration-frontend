import { HiBadgeCheck, HiLocationMarker, HiUser } from "react-icons/hi";

interface Props {
  image: any;
  name: string;
  role: string;
}

export const MemberCard = (props: Props) => {
  return (
    <section className="_hover-styles group flex w-full cursor-pointer flex-col items-start justify-between gap-2 overflow-hidden shadow hover:shadow-md bg-green-50">
      <div className="flex w-full h-full flex-col items-start justify-end gap-2 p-4">
        <img
          src={props.image}
          alt="featuring a team member"
          className="h-full w-full object-cover">
        </img>
        <h3 className="--text-white border-t border-green-300 py-2 text-lg font-semibold md:text-xl w-full">
          {props.name}
        </h3>
        <div className="--text-white flex w-full items-center justify-start gap-2">
          <HiBadgeCheck />
          <span className="flex">{props.role}</span>
        </div>
      </div>
    </section>
  );
};
