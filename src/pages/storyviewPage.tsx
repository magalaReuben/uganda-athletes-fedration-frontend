import { AppHeader } from "@/components/app-header";
import { AppFooter } from "@/components/footer";
import Image1 from "../assets/antelopes.png";
import soloTravel from "../assets/solo-travel.png";
import Image2 from "../assets/antelopes1.png";
import Image3 from "../assets/antelope2.png";
import { TopStoryCard } from "@/components/top-story-card";
import { TestimonialsSection } from "@/components/testimonials";
import { useLocation, useParams } from "react-router-dom";
import { useState } from "react";
import { baseUrl } from "@/lib/constants";

let topStories = [
  {
    id: 1,
    image: soloTravel,
    author: "admin",
    date: "20 AUG 2024",
    text: "The Ultimate Guide to Solo Travel: Tips for Adventurous Explorers",
  },
  {
    id: 2,
    image: soloTravel,
    author: "admin",
    date: "20 AUG 2024",
    text: "The Ultimate Guide to Solo Travel: Tips for Adventurous Explorers",
  },
  {
    id: 3,
    image: soloTravel,
    author: "admin",
    date: "20 AUG 2024",
    text: "The Ultimate Guide to Solo Travel: Tips for Adventurous Explorers",
  },
  {
    id: 4,
    image: soloTravel,
    author: "admin",
    date: "20 AUG 2024",
    text: "The Ultimate Guide to Solo Travel: Tips for Adventurous Explorers",
  },
];

interface Props {
  storyId: undefined | string;
}

const StoryViewPage = (props: Props) => {
  const [storyImages, setStoryImages] = useState();

  const { id } = useParams();
  const location = useLocation();

  return (
    <div>
      <section className="--px-8 --py-4 --pb-2 --gap-8 flex h-full min-h-screen w-full flex-col items-start justify-between bg-neutral-50 md:text-lg">
        <AppHeader />
        <section className="--py-2 --px-24 flex w-full items-center justify-between ">
          <main className="--px-24 mt-8 w-full flex-col items-start justify-between gap-8 py-4">
            {/* story header */}
            <div className="flex w-full flex-col items-start justify-between gap-8 px-24 py-4">
              <div className="border-b border-neutral-200">
                <h2 className="mb-2 mt-4 flex w-full flex-col text-2xl font-semibold md:text-4xl">
                  {location.state.story.title}
                </h2>
              </div>
              <div className="flex items-center justify-between gap-2">
                <span className="flex capitalize text-green-500">{location.state.story.author}</span>
                <span className="mx-2 flex">{location.state.story.created_at}</span>
              </div>
            </div>
            <div className="px-24">
              <img
                src={baseUrl + location.state.story.image}
                alt="hero featuring an antelope!"
                className="h-auto w-full"
              />
            </div>
            <div className="flex w-full flex-col items-start justify-between gap-8 px-24 py-4">
              <p>
                {location.state.story.upper_description}
              </p>
            </div>
            {/* story images */}
            <section className="mx-24 mb-12 mt-4 grid w-full justify-center gap-6 md:grid-cols-2 md:justify-between md:gap-4 lg:grid-cols-4 lg:gap-4">
              <div className="flex items-center justify-between gap-2">
                <img
                  src={Image2}
                  alt="featuring a lodge!"
                  className="max-h-62 mx-6 h-auto w-auto max-w-full scale-100 transform transition-transform duration-300 ease-linear group-hover:scale-105"
                />
                <img
                  src={Image3}
                  alt="featuring a lodge!"
                  className="max-h-62 mx-6 h-auto w-auto max-w-full scale-100 transform transition-transform duration-300 ease-linear group-hover:scale-105"
                />
              </div>
            </section>
            {/* image description */}
            <div className="flex w-full flex-col items-start justify-between gap-8 px-24 py-4">
              <p>
                {location.state.story.lower_description}
              </p>
            </div>
            {/* The Top Stories Section */}
            <div className="flex w-full flex-col items-start justify-between gap-8 px-24 py-4">
              <h2 className="mb-4 mt-12 flex w-full flex-col text-2xl font-semibold md:text-4xl">
                Related Stories
              </h2>
              <section className="my-6 mb-24 mt-4 grid w-full grid-cols-1 place-items-center gap-6 md:grid-cols-2 md:gap-4 lg:grid-cols-4">
                {topStories.map((story: any) => (
                  <TopStoryCard key={story.id} {...story} />
                ))}
              </section>
            </div>
            {/* The Testimonials Section */}
            <div className="mx- mb-8 flex w-full flex-col items-start justify-start gap-2 px-24 py-4">
              <h2 className="mb-4 mt-12 flex w-full flex-col text-2xl font-semibold md:text-4xl">
                Words from Our Happy Travelers
              </h2>
              <p className="flex">
                Discover what our satisfied travelers have to say about their
                experiences with us. Read their testimonials and reviews to
                learn how we've helped them create unforgettable memories and
                plan their dream vacations.
              </p>
              <TestimonialsSection />
            </div>
          </main>
        </section>
        <AppFooter />
      </section>
    </div>
  );
};

export default StoryViewPage;
