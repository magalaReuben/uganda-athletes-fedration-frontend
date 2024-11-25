import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { BiLoaderAlt } from "react-icons/bi";
import { cn } from "@/lib/utils";

interface Props {
  text: string;
  loadingText: string;
  isLoading: boolean;
  onClick?: () => void;
  className?: string;
}

export const SpinButton = (props: Props) => {
  const [submitButtonText, setSubmitButtonText] = useState(props.text);
  const [showLoader, setShowLoader] = useState(false);

  // triggering button animation whenever is loading changes
  useEffect(() => {
    if (props.isLoading) {
      setSubmitButtonText(props.loadingText);
      setShowLoader(true);
    } else {
      setSubmitButtonText(props.text);
      setShowLoader(false);
    }
  }, [props.isLoading]);

  return (
    <Button
      onClick={() => props.onClick?.()}
      type="submit"
      className={`flex w-full items-center justify-center gap-1 capitalize ${props.className} ${
        showLoader
          ? "pointer-events-none cursor-progress"
          : "pointer-events-auto cursor-auto"
      }`}
    >
      {showLoader ? (
        <BiLoaderAlt className="animate-spin animate-duration-300" />
      ) : null}
      <span className="flex">{submitButtonText}</span>
    </Button>
  );
};
