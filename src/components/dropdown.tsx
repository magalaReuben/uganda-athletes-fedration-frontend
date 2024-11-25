import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";

interface Props {
  onSelect: (value: string) => void;
  label: string;
  description: string;
  items: string[];
}

export function Dropdown(props: Readonly<Props>) {
  const [selectedItem, setSelectedItem] = useState(props.label);

  useEffect(() => {
    props.onSelect(selectedItem);
  }, [selectedItem, props]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center justify-center gap-2 text-green-500"
        >
          <span className="capitalize">{selectedItem}</span>
          <ChevronDownIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{props.description}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={selectedItem}
          onValueChange={setSelectedItem}
        >
          {props.items.map((item) => (
            <DropdownMenuRadioItem key={item} value={item}>
              <span className="flex capitalize md:text-lg">{item}</span>
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
