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
import { $NavItem } from "@/lib/types";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  onSelect: (value: string) => void;
  navItem: $NavItem;
}

export function NavDropdown(props: Readonly<Props>) {
  const [selectedItem, setSelectedItem] = useState(props.navItem.label);
  let navigate = useNavigate();

  useEffect(() => {
    props.onSelect(selectedItem);
  }, [selectedItem]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="_hover-styles flex cursor-pointer items-center justify-center gap-2 text-neutral-800 hover:text-green-500">
          <span className="capitalize">{selectedItem}</span>
          <ChevronDownIcon />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {/* <DropdownMenuLabel>{props.description}</DropdownMenuLabel> */}
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={selectedItem}
          onValueChange={setSelectedItem}
        >
          {props.navItem.links.map((link) => (
            <DropdownMenuRadioItem key={link.label} value={link.label}>
              <span
                className="flex capitalize hover:text-green-500 md:text-lg"
                onClick={() => navigate(link.route)}
              >
                {link.label}
              </span>
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
