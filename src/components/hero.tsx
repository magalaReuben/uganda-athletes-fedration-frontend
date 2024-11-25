import React from "react";
import HeroImage from "../assets/hero-image.png";
import { HiArrowRight } from "react-icons/hi2";
import { Button } from "./ui/button";
import { baseUrl } from "@/lib/constants";
import { ReactTyped } from "react-typed";

interface Props {
  heroData: any;
}

export const Hero = (props: Props) => {
  return (
    <section className="--py-2 --px-24 h-[700px] flex w-full items-center justify-between border-b border-neutral-50 bg-gradient-to-r from-green-50 to-neutral-50 text-neutral-800 shadow">
      <div className="relative isolate z-[1] flex w-full items-center justify-start">
        {props.heroData && (
          <img
            //src={`${baseUrl}${props?.heroData?.image}`}
             src = 'https://lh3.googleusercontent.com/oT5U29JmOSBhruZalcY5sMQdF5Yeyr0Ml60jlCGKoMfTKsTukqvWdvyq_3QsFB0Z6Xs0byxdqPNHyl3V__qANMe6r-r7LnddqQ=s594'
            alt="hero featuring an antelope!"
            className="w-full opacity-100 object-cover h-[700px]"
          />
        )}
        <div className="absolute inset-0 bg-black opacity-35"></div>
        <div className="--px-4 absolute z-[2] flex w-full flex-col gap-2 px-2 py-2 capitalize md:px-32 md:py-8">
          {/* {props.heroData && (
            <p className="responsive-font --text-xl w-full text-center font-medium text-white md:hidden md:text-start md:text-6xl">
              {props?.heroData?.items[0]}
            </p>
          )} */}
          {props.heroData && (
            <p className="responsive-font --text-xl hidden h-32 w-full text-center font-medium text-white md:flex md:text-start md:text-6xl">
              <ReactTyped
              strings={["Welcome to Uganda Athletes Federation", "Empowering Athletes", "Achieving Excellence"]}
              typeSpeed={100}
              loop
              backSpeed={20}
              cursorChar="|"
              showCursor={true}
              />
            </p>
          )}
          {/* <a href="#populars">
            <Button className="group mt-8 hidden w-auto items-center gap-2 rounded-none bg-gradient-to-r from-orange-700 to-orange-500 hover:from-orange-600 hover:to-orange-500 md:flex md:w-1/4">
              Get Started
              <HiArrowRight className="animate-ping transition-all duration-300 ease-linear group-hover:animate-none group-hover:text-orange-100" />
            </Button>
          </a> */}
        </div>
      </div>
    </section>
  );
};
