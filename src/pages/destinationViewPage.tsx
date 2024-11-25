import { AppHeader } from "@/components/app-header";
import { AppFooter } from "@/components/footer";
import HeroImage from "../assets/hero-image3.png";
import { HiPlayCircle } from "react-icons/hi2";
import videoPreview from "../assets/video-preview1.png";
import Image1 from "../assets/boatrow.png";
import Image2 from "../assets/gorrilas.png";
import Image3 from "../assets/map.png";
import Lodge1 from "../assets/lodge1.png";
import Lodge2 from "../assets/lodge2.png";
import Lodge3 from "../assets/lodge3.png";
import { DestinationViewCarousel } from "@/components/destination-view-carousel";
import { useEffect, useState } from "react";
import { TravelTipsSection } from "@/components/travel-tips";
import { TestimonialsSection } from "@/components/testimonials";
import { ndra_api } from "@/utils/api";
import { useParams, useLocation } from "react-router-dom";
import { baseUrl } from "@/lib/constants";

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

interface Props {
  destinationId: string | undefined;
}

const DestinationsViewPage = (props: Props) => {
  const [destinationdetails, setDestination] = useState([]);
  const { id } = useParams();
  const location = useLocation();

  const fetchDestination = async () => {
    try {
      const response = await ndra_api.get(
        `destinations/destinationdetails/${id}`,
      );
      setDestination(response.data); // Update the type of destinationHeader to match the type of location
      console.log("Safari day by day fetched successfully", response.data);
    } catch (error) {
      console.error("Failed to fetch destination", error);
    }
  };

  useEffect(() => {
    fetchDestination();
  }, []);

  // if (pageLoading) {
  //   // return loading screen or component
  //   return <PageLoader />;
  // }

  return (
    <section className="--px-8 --py-4 --pb-2 --gap-8 flex h-full min-h-screen w-full flex-col items-start justify-between bg-neutral-50 md:text-lg">
      <AppHeader />
      <section className="--py-2 --px-24 flex w-full items-center justify-between border-b border-neutral-50 bg-gradient-to-r from-green-50 to-neutral-50 text-neutral-800 shadow">
        <div className="relative isolate z-[1] flex w-full items-center justify-start">
          <img
            src={HeroImage}
            alt="hero featuring an antelope!"
            className="h-auto w-full opacity-75"
          />
          <div className="absolute inset-0 bg-black opacity-45"></div>
          <div className="absolute z-[2] flex flex-col gap-2 px-32 py-8">
            <p className="font-serif text-2xl font-medium text-white md:text-6xl">
              {location.state.destination.title}
            </p>
            <p className="my-4 flex w-full text-white">
              {location.state.destination.description}
            </p>
          </div>
        </div>
      </section>
      <main className="--px-24 mt-8 w-full flex-col items-start justify-between gap-8 py-4">
        {destinationdetails &&
          destinationdetails?.map((item: any) => (
            <div>
              <div className="flex w-full flex-col items-start justify-between gap-8 px-24 py-4">
                <h2 className="mb-2 mt-12 flex w-full flex-col text-2xl font-semibold md:text-4xl">
                  {item.title}
                </h2>
                <p className="flex w-full">{item.description}</p>
              </div>
              <div className="group mb-4 mt-8 flex w-full items-center justify-center gap-5 px-24 py-2">
                <div className="relative isolate z-[1] flex w-full items-center justify-start">
                  {item.image_or_video &&
                    (item.image_or_video.endsWith(".mp4") ? (
                      <video controls className="h-auto w-full">
                        <source
                          src={baseUrl + item.image_or_video}
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <img
                        src={baseUrl + item.image_or_video}
                        alt="featuring a lively wild animal!"
                        className="h-auto w-full opacity-75"
                      />
                    ))}
                  <div className="absolute inset-0 bg-black opacity-25"></div>
                  <div className="absolute z-[2] flex h-full w-full flex-col items-center justify-center gap-2 px-32 py-8">
                    {item.image_or_video &&
                      item.image_or_video.endsWith(".mp4") && (
                        <HiPlayCircle className="size-16 text-white group-hover:text-green-500" />
                      )}
                  </div>
                </div>
              </div>
            </div>
          ))}

        {/* map view */}
        <div className="mb-2 mt-12 px-24">
          <img
            src={baseUrl + location.state.destination.map}
            alt="hero featuring an antelope!"
            className="h-auto w-full"
          />
        </div>
        {/* Travel Tips */}
        <TravelTipsSection />
        {/* lodges near destination */}
        {/* <div className="flex w-full flex-col items-start justify-between gap-8 px-24 py-4">
          <h2 className="mb-2 mt-12 flex w-full flex-col text-2xl font-semibold md:text-4xl">
            Lodges Near Queen Elizabeth National Park
          </h2>
        </div> */}
        {/* carousel itmes */}
        {/* <DestinationViewCarousel lodges={carouselItems} /> */}
        {/* The Testimonials Section */}
        <div className="mx- mb-8 flex w-full flex-col items-start justify-start gap-2 px-24 py-4">
          <h2 className="mb-4 mt-12 flex w-full flex-col text-2xl font-semibold md:text-4xl">
            Words from Our Happy Travelers
          </h2>
          <p className="flex">
            Discover what our satisfied travelers have to say about their
            experiences with us. Read their testimonials and reviews to learn
            how we've helped them create unforgettable memories and plan their
            dream vacations.
          </p>
          <TestimonialsSection />
        </div>
      </main>
      <AppFooter />
    </section>
  );
};

export default DestinationsViewPage;
