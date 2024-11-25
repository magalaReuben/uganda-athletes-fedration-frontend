import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import DateSelector from "./DateSelector";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { Combobox } from "./comboBox";
import { useState } from "react";

export const FiltersPopup = () => {
  const [selectedDate, setSelectedDate] = useState("");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center gap-2 border border-green-300  bg-green-50 text-green-500"
        >
          <HiAdjustmentsHorizontal />
          <span className="flex">Filter</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Filter Settings</DialogTitle>
          <DialogDescription>
            See payments according to specific parameters.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex w-full items-center justify-start gap-2">
            <h3 className="w-1/4">Date:</h3>
            <DateSelector
              onDateSelected={(newValue) => setSelectedDate(newValue)}
            />
          </div>
          <div className="flex w-full items-center justify-start gap-2">
            <h3 className="w-1/4">Landlord:</h3>
            <Combobox />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Apply Settings</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
