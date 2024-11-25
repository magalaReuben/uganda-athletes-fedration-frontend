import { Input } from "./ui/input";
import { HiSearch } from "react-icons/hi";

interface Props {}

export const SearchBar = (props: Props) => {
  return (
    <div className="relative w-full">
      <Input
        className="w-full bg-neutral-200 text-neutral-500 ring-1 ring-neutral-300"
        placeholder="search..."
      />
      <HiSearch className="absolute right-2 top-2 text-neutral-500 " />
    </div>
  );
};
