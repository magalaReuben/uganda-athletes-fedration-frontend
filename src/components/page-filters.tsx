import { useEffect, useState } from "react";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { Button } from "./ui/button";

interface Props {
  filters: string[];
  onSelect?: (filter: string) => void;
}

export const PageFilters = (props: Props) => {
  const [selected, setSelected] = useState(props.filters[0]);

  useEffect(() => {
    console.log("selected::", selected);
    props.onSelect && props.onSelect(selected);
  }, [selected]);

  return (
    <ScrollArea className="mb-8 mt-4 w-full whitespace-nowrap">
      <div className="flex w-full gap-2 capitalize">
        {props.filters.map((filter) => (
          <Button
            key={filter}
            onClick={() => setSelected(filter)}
            variant="outline"
            className={`capitalize ${selected === filter ? "bg-green-500 text-white hover:bg-green-600 hover:text-green-50" : "foo"}`}
          >
            {filter}
          </Button>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};
