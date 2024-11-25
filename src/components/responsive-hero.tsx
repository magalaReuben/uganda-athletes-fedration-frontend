import React from "react";

interface Props {
  heroImage: string;
  title: string;
  subTitle: string;
}

const ResponsiveHero = (props: Props) => {
  return (
    <section className="--py-2 --px-24 flex max-h-80 w-full items-center justify-between border-b border-neutral-50 bg-gradient-to-r from-orange-50 to-neutral-50 text-neutral-800 shadow">
      <div className="relative isolate z-[1] flex w-full items-center justify-start">
        <img
          src={props.heroImage}
          alt="hero featuring an antelope!"
          className="h-auto w-full opacity-75"
        />
        <div className="absolute inset-0 bg-black opacity-45"></div>
        <div className="--gap-2 absolute z-[2] flex w-full flex-col items-center justify-center px-4 py-4 md:items-start md:justify-start md:px-32 md:py-8">
          <p className="font-playfair text-xl font-medium text-white md:text-6xl">
            {props.title}
          </p>
          <p className="responsive-font text-center text-sm font-medium text-white md:text-start md:text-3xl">
            {props.subTitle}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResponsiveHero;
