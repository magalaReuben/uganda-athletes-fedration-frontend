import { FaVanShuttle } from "react-icons/fa6";
import Logo from "../assets/logo.jpeg";

interface Props {}

export const PageLoader = (props: Props) => {
  return (
    <section className="--px-8 --py-4 --pb-2 --gap-8 flex h-full min-h-screen w-full flex-col items-center justify-center bg-neutral-50 md:text-lg">
      {/* <FaVanShuttle className="duration-4000 size-16 origin-left translate-x-4 transform animate-pulse text-green-500 opacity-75 will-change-transform animate-infinite" /> */}
      <img src={Logo} alt="logo" className="animate-pulse" height={300} width={300} />
      <p className="animate-pulse capitalize text-yellow-600 duration-1000 will-change-auto">
        loading...
      </p>
    </section>
  );
};
