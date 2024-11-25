import { AppHeader } from "@/components/app-header";
import { AppFooter } from "@/components/footer";
import HeroImage from "../assets/hero-image3.png";
import { HiPlayCircle } from "react-icons/hi2";
import videoPreview from "../assets/video-preview1.png";
import chimpanzee from "../assets/chimpanzee.png";
import Image1 from "../assets/boatrow.png";
import Image2 from "../assets/gorrilas.png";
import Image3 from "../assets/map.png";
import Lodge1 from "../assets/lodge1.png";
import Lodge2 from "../assets/lodge2.png";
import Lodge3 from "../assets/lodge3.png";
import IdeaMap from "../assets/idea-map.png";
import IdeaLady1 from "../assets/idea-lady1.png";
import IdeaLady2 from "../assets/idea-lady2.png";
import { DestinationViewCarousel } from "@/components/destination-view-carousel";
import { useEffect, useState } from "react";
import { TravelTipsSection } from "@/components/travel-tips";
import { TestimonialsSection } from "@/components/testimonials";
import { Button } from "@/components/ui/button";
import { Accordions } from "@/components/accordion";
import { useLocation, useParams } from "react-router-dom";
import { baseUrl } from "@/lib/constants";
import { ndra_api } from "@/utils/api";

let carouselItems = [
  {
    id: 1,
    name: "Mweya Safari Lodge",
    image: Lodge1,
    price: "$1200",
  },
  {
    id: 2,
    name: "Ishasha Wilderness Camp",
    image: Lodge2,
    price: "$1000",
  },
  {
    id: 3,
    name: "Katara Lodge",
    image: Lodge3,
    price: "$800",
  },
  {
    id: 4,
    name: "Mweya Safari Lodge",
    image: Lodge1,
    price: "$1200",
  },
];

let packlist = [
  { id: 1, text: "Passport and photocopies" },
  { id: 2, text: "Visa and travel permits (if required)" },
  { id: 3, text: "Sunglasses with UV protection" },
  { id: 4, text: "Binoculars for wildlife viewing" },
  { id: 5, text: "Lightweight, breathable shirts and pants" },
  { id: 6, text: "Long-sleeved shirts and pants for sun protection" },
  { id: 7, text: "Fleece or sweater for cool mornings and evenings" },
  { id: 8, text: "Sturdy, closed-toe hiking boots or walking shoes" },
  { id: 9, text: "Sandals or flip-flops for leisure time" },
];

interface Props {
  ideaId: string | undefined;
}

const IdeaViewPage = (props: Props) => {
  useEffect(() => {
    console.log("this page idea is:", props.ideaId);
  }, []);

  const { id } = useParams();
  const location = useLocation();
  const [safariDayByDayIteration, setSafariDayByDayIteration] = useState([]);

  const fetchSafariDayByDayIteration = async () => {
    try {
      const response = await ndra_api.get(
        `safariideas/safaridaybydayiteration/${id}`,
      );
      setSafariDayByDayIteration(response.data); // Update the type of destinationHeader to match the type of location
      console.log("Destination fetched successfully", response.data);
    } catch (error) {
      console.error("Failed to fetch destination", error);
    }
  };

  useEffect(() => {
    fetchSafariDayByDayIteration();
  }, []);

  // if (pageLoading) {
  //   // return loading screen or component
  //   return <PageLoader />;
  // }

  return (
    <section className="--px-8 --py-4 --pb-2 --gap-8 flex h-full min-h-screen w-full flex-col items-start justify-between bg-neutral-50 md:text-lg">
      <AppHeader />
      <section className="my-8 flex w-full items-center justify-between px-24 py-4">
        <h1 className="text-2xl font-medium capitalize text-neutral-700 md:text-6xl">
          {location.state.safariIdea.description}
        </h1>
      </section>
      <div className="flex w-full items-center justify-between px-24 py-4">
        <div className="flex items-center justify-between gap-8">
          <div className="flex flex-col items-start justify-start gap-2">
            <span className="flex text-sm text-green-500">Duration</span>
            <span className="flex font-semibold">
              {location.state.safariIdea.tour_duration} Days
            </span>
          </div>
          <div className="flex flex-col items-start justify-start gap-2">
            <span className="text-greenSubmit-500 flex text-sm">Price</span>
            <span className="flex font-semibold">
              $ {location.state.safariIdea.price} per person
            </span>
          </div>
        </div>
        <Button
          onClick={() => console.log("book")}
          className="--mx-auto --mt-2 --w-1/4 flex items-center gap-2 rounded-none  bg-gradient-to-r from-green-700 to-green-500 px-8 py-4 hover:from-green-600 hover:to-green-500"
        >
          Book Now
        </Button>
      </div>
      {/* The Hero Carousel */}
      <section className="my-4 flex w-full items-center justify-between px-24 py-4">
        <img
          src={baseUrl + location.state.safariIdea.image}
          alt="featuring a wild animal!"
          className="h-auto w-full scale-100 transform opacity-95 transition-transform duration-300 ease-linear group-hover:scale-105"
        />
      </section>
      <main className="--px-24 w-full flex-col items-start justify-between gap-8 py-4">
        <section className="flex w-full items-center justify-between gap-8 px-24 py-4">
          {/* The Left */}
          <div className="flex w-8/12 flex-col items-start justify-between gap-4">
            <h2 className="my-4 flex w-full flex-col text-2xl font-semibold md:text-4xl">
              Day-by-Day Itinerary
            </h2>
            <Accordions />
            {/* The Packing List */}
            <h2 className="my-4 flex w-full flex-col text-2xl font-semibold md:text-4xl">
              Packing List
            </h2>
            <ul className="space-y-2">
              {packlist.map((item) => (
                <li key={item.id} className="flex items-center">
                  <span className="mr-2 h-2 w-2 flex-shrink-0 rounded-full bg-gray-800"></span>
                  <span className="--text-gray-800">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* The Right */}
          <div className="flex w-1/3 flex-col items-start justify-start gap-4 py-4">
            <img
              src={baseUrl + location.state.safariIdea.map}
              alt="featuring a map!"
              className="h-auto w-full scale-100 transform opacity-95 transition-transform duration-300 ease-linear group-hover:scale-105"
            />
            <h2 className="flex w-full flex-col text-xl font-semibold md:text-2xl">
              Safari Guides and Experts
            </h2>
            <p className="flex">
              Local guides and experts play a crucial role in enhancing the
              safari experience by providing valuable insights, knowledge, and
              expertise about the destination's wildlife, ecosystems, and
              culture. Here are some examples of local guides and experts that
              travelers might encounter during a safari
            </p>
            {/* <div className="mt-4 flex w-full items-center justify-between gap-4">
              <div className="flex w-1/2 flex-col items-start justify-start gap-2 px-8">
                <img
                  src={IdeaLady1}
                  alt="featuring a woman!"
                  className="h-auto w-full"
                />
                <h2 className="font-inter flex w-full flex-col text-center font-semibold md:text-xl">
                  Namagembe Josephine
                </h2>
              </div>
              <div className="flex w-1/2 flex-col items-start justify-start gap-2 px-8">
                <img
                  src={IdeaLady2}
                  alt="featuring a woman!"
                  className="h-auto w-full"
                />
                <h2 className="font-inter flex w-full flex-col text-center font-semibold md:text-xl">
                  Atimago Ritah
                </h2>
              </div>
            </div> */}
          </div>
        </section>
        {/* Travel Tips */}
        <TravelTipsSection />
        {/* <div className="flex w-full flex-col items-start justify-between gap-8 px-24 py-4">
          <h2 className="mb-2 mt-12 flex w-full flex-col text-2xl font-semibold md:text-4xl">
            lodges to sleep in, comments...
          </h2>
        </div> */}
      </main>
      <AppFooter />
    </section>
  );
};

export default IdeaViewPage;
