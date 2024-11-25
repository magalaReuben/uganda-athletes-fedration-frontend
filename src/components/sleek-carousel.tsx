// Sleek Carousel v1 By Hussein Kizz
// Last Modified April 1, 2024
// MIT LICENSE

import React, { useState, useEffect, useRef } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
// import "../styles/lib/magic-animations.css";
import "../styles/lib/animate.v4.1.1.min.css";
import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
  autoPlay?: boolean;
  delay?: number;
  itemsPerView?: number;
  pauseOnInteraction?: boolean;
  resumeDelayAfterInteraction?: number;
}

function checkViewPort(
  query = "md",
  queryType = "max",
  onChange = (e: any) => null,
) {
  // sizes adapted from tailwind preset: https://tailwindcss.com/docs/responsive-design
  let sizes: Record<string, string> = {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    hd: "1536px",
  };

  if (!sizes[query]) {
    console.error("Invalid query argument, use any of sm,md,lg,xl or hd!");
    return null;
  }
  let mediaString = `(${queryType}-width: ${sizes[query]})`;
  const mediaQuery = window.matchMedia(mediaString);

  if (onChange) {
    mediaQuery.addEventListener("change", (e) => {
      onChange(e);
    });
  }
  return mediaQuery.matches;
}

export const SleekCarousel = (props: Props) => {
  const [current, setCurrent] = useState(0);
  // items per view defualts to one on mobile or 1 if items per view not set for medium screens and above
  let initialItemsPerView = checkViewPort("md") ? 1 : props.itemsPerView || 1;
  const [itemsPerView, setItemsPerView] = useState(initialItemsPerView);
  const [displayedChildren, setDisplayedChildren] = useState<any>([]);

  useEffect(() => {
    // update items perView when view port changes
    checkViewPort("md", "max", (event: any) => {
      if (event.matches) {
        // console.log("mobile", itemsPerView);
        setItemsPerView(1);
        calculateDisplayedChildren(1);
      } else {
        // todo: handle mobile i item per view set and restore to items per view on medium screen
        // todo: handle hover user interactions gracefully pausing the auto play
        // todo: fix responsiveness to always span whole width regardless of no. of items per view, height should also have a minimum sensible height
        // console.log("not mobile", itemsPerView);
        setItemsPerView(initialItemsPerView);
        calculateDisplayedChildren(initialItemsPerView);
      }
      return null;
    });
  }, []);

  const handlePrev = () => {
    setCurrent((prev) =>
      prev <= 1
        ? React.Children.count(props.children) - itemsPerView
        : prev - itemsPerView,
    );
  };

  const handleNext = () => {
    setCurrent((prev) =>
      prev + itemsPerView >= React.Children.count(props.children)
        ? 0
        : prev + itemsPerView,
    );
  };

  const calculateDisplayedChildren = (_itemsPerView: null | number = null) => {
    const childrenArray = React.Children.toArray(props.children);
    const start = current;
    const end = start + (_itemsPerView || itemsPerView);
    setDisplayedChildren(childrenArray.slice(start, end));
  };

  useEffect(() => {
    calculateDisplayedChildren();
  }, [current, props.children]);

  const autoPlayInterval = useRef<NodeJS.Timeout | null>(null);

  const pauseAutoPlay = () => {
    if (autoPlayInterval.current) {
      clearInterval(autoPlayInterval.current);
    }
  };

  const resumeAutoPlay = () => {
    if (props.autoPlay ?? true) {
      autoPlayInterval.current = setInterval(() => {
        handleNext();
      }, props.delay || 5000);
    }
  };

  useEffect(() => {
    if (props.autoPlay ?? true) {
      resumeAutoPlay();
    }

    return () => {
      if (autoPlayInterval.current) {
        clearInterval(autoPlayInterval.current);
      }
    };
  }, [props.autoPlay, props.delay]);

  useEffect(() => {
    let resumeTimeout: NodeJS.Timeout | null = null;

    if (props.pauseOnInteraction ?? true) {
      pauseAutoPlay();

      if (props.resumeDelayAfterInteraction ?? 2500) {
        resumeTimeout = setTimeout(() => {
          resumeAutoPlay();
        }, props.resumeDelayAfterInteraction);
      }
    }

    return () => {
      if (resumeTimeout) {
        clearTimeout(resumeTimeout);
      }
    };
  }, [current, props.pauseOnInteraction, props.resumeDelayAfterInteraction]);

  // Todo: buttons customizations and postion via props
  return (
    <div className="relative z-0 flex h-56 w-[88vw] min-w-full rounded bg-neutral-100 shadow-lg md:h-80">
      <button
        onClick={handlePrev}
        className="group absolute -left-3 top-24 z-20 grid size-6 place-items-center rounded-full bg-neutral-100 shadow ring-1 ring-neutral-300 hover:bg-orange-100 active:text-orange-500 md:-left-4 md:top-36 md:size-8"
      >
        <HiChevronLeft className="size-5 text-neutral-500 transition-all duration-300 ease-linear  group-hover:text-orange-500 md:size-5" />
      </button>
      <section
        className={`flex h-56 w-full min-w-full flex-auto gap-4 md:h-80`}
      >
        {displayedChildren}
      </section>
      {/* <section
        className={`grid min-h-80 w-full min-w-full grid-cols-1 gap-4 md:grid-cols-${itemsPerView}`}
      >
        {displayedChildren}
      </section> */}
      <button
        onClick={handleNext}
        className="group absolute -right-3 top-24 z-20 grid size-6 place-items-center rounded-full bg-neutral-100 shadow ring-1 ring-neutral-300 hover:bg-orange-100 active:text-orange-500 md:-right-4 md:top-36 md:size-8"
      >
        <HiChevronRight className="size-5 text-neutral-500 transition-all duration-300 ease-linear  group-hover:text-orange-500 md:size-5" />
      </button>
    </div>
  );
};

export const Item = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  // todo: provide better transition for elements as they slide in...
  // todo: the item animations should be direction aware i.e fade right or left depending on clicked button direction or gesture and items should be draggable with ability to interact with the carousel auto play on user interactions
  return (
    <div
      className={cn(
        `animate__animated --animate__fadeInLeft animate__slideInRight relative flex h-full min-h-full w-full flex-auto items-center justify-center overflow-hidden bg-neutral-500 ${className}`,
      )}
    >
      {children}
    </div>
  );
};
