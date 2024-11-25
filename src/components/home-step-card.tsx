import { HiArrowRight } from "react-icons/hi";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

interface Props {
  stepCount: number;
  title: string;
  text: string;
  hasAction?: boolean;
}

export const HomeStepCard = (props: Props) => {
  const navigate = useNavigate();
  return (
    <div className="group relative z-[1] flex h-60 w-full cursor-pointer flex-col items-start justify-start gap-2 bg-gradient-to-t from-yellow-200 to-neutral-50 p-2 pt-6 shadow-md ring-1 ring-neutral-300 hover:shadow-lg">
      <span className="absolute -left-2 -top-2 z-[2] flex items-center justify-center rounded-full bg-orange-400 p-1 px-3 font-serif text-white">
        {props.stepCount}
      </span>
      <h3 className="flex text-balance pl-6 font-semibold">{props.title}</h3>
      <p className="flex">{props.text}</p>
      {props.hasAction && (
        <Button
          onClick={() => navigate("/safari-ideas")}
          className="ml-2 mt-14 flex w-auto items-center gap-2  rounded-none bg-gradient-to-r from-green-700 to-green-500 hover:from-green-600 hover:to-green-500"
        >
          Take First Step
          <HiArrowRight />
        </Button>
      )}
    </div>
  );
};
