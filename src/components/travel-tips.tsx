import travelTipsImage from "../assets/travel-tips.png";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

interface Props {}

let travelTips = [
  {
    id: 1,
    text: "Research the destination's safety guidelines and any travel advisories issued by your government.",
  },
  {
    id: 2,
    text: "Keep your belongings secure and be mindful of your surroundings, especially in crowded areas.",
  },
  {
    id: 3,
    text: "Carry a copy of important documents such as your passport, travel insurance, and emergency contact information.",
  },
  {
    id: 4,
    text: "Familiarize yourself with local customs and laws to avoid unintentional cultural faux pas.",
  },
];

export const TravelTipsSection = (props: Props) => {
  return (
    <section className="--py-2 --px-24 flex h-[30vh] w-full items-center justify-between border-b border-neutral-50 bg-gradient-to-r from-orange-50 to-neutral-50 text-neutral-800 shadow md:h-auto">
      <div className="relative isolate z-[1] flex h-full w-full items-center justify-start">
        <img
          src={travelTipsImage}
          alt="hero featuring an airplane!"
          className="h-full w-full opacity-75"
        />
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="absolute z-[2] flex h-full w-full flex-col gap-2 px-4 py-4 md:px-32 md:py-8">
          <h2 className="font-serif text-xl font-medium text-white md:mb-4 md:text-3xl">
            Travel Tips and Recommendations
          </h2>
          <ScrollArea className="--h-[30vh] w-full whitespace-nowrap">
            <div className="--md:px-32 flex h-full w-full flex-col items-start justify-start gap-2 truncate text-ellipsis px-4 py-4 md:py-8">
              {travelTips.map((tip) => (
                <div
                  key={tip.id}
                  className="flex w-4/5 items-center justify-start gap-2 md:w-3/4"
                >
                  <span className="flex rounded-full bg-orange-500 p-1 md:p-2"></span>
                  <p className="font-serif font-medium text-white md:text-xl">
                    {tip.text}
                  </p>
                </div>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </div>
    </section>
  );
};
