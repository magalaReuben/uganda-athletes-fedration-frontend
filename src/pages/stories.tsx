import { AppHeader } from "@/components/app-header";
import { AppFooter } from "@/components/footer";
import HeroImage from "../assets/stories-hero.png";

import soloTravel from "../assets/solo-travel.png";
import guides from "../assets/guides.png";
import zebras from "../assets/zebras.png";

import { TopStoryCard } from "@/components/top-story-card";
import { TestimonialsSection } from "@/components/testimonials";
import { useEffect, useState } from "react";
import { ndra_api } from "@/utils/api";
import { PageLoader } from "@/components/page-loader";
import ResponsiveHero from "@/components/responsive-hero";

interface Props {}

let topStories = [
  {
    id: 1,
    image: guides,
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
    image: zebras,
    author: "admin",
    date: "20 AUG 2024",
    text: "The Ultimate Guide to Solo Travel: Tips for Adventurous Explorers",
  },
  {
    id: 4,
    image: guides,
    author: "admin",
    date: "20 AUG 2024",
    text: "The Ultimate Guide to Solo Travel: Tips for Adventurous Explorers",
  },
  {
    id: 5,
    image: soloTravel,
    author: "admin",
    date: "20 AUG 2024",
    text: "The Ultimate Guide to Solo Travel: Tips for Adventurous Explorers",
  },
  {
    id: 6,
    image: zebras,
    author: "admin",
    date: "20 AUG 2024",
    text: "The Ultimate Guide to Solo Travel: Tips for Adventurous Explorers",
  },
];

const StoriesPage = (props: Props) => {
  const [stories, setStories] = useState([]);
  const [pageLoading, setPageLoading] = useState(true);

  const fetchStories = async () => {
    let data = await ndra_api.get("stories/stories/");

    if (data) {
      setStories(data?.data);
      setPageLoading(false);
    }
  };

  useEffect(() => {
    fetchStories();
  }, []);

  if (pageLoading) {
    // return loading screen or component
    return <PageLoader />;
  }

  return (
    <section className="--px-8 --py-4 --pb-2 --gap-8 flex h-full min-h-screen w-full flex-col items-start justify-between bg-neutral-50 md:text-lg">
      <AppHeader />
      <ResponsiveHero
        heroImage={HeroImage}
        title="Stories"
        subTitle="Some stories to get you inspired!"
      />
      <main className="--px-24 w-full flex-col items-start justify-between gap-4 md:mt-8 md:gap-8 md:py-4">
        {/* The Stories Section */}
        <h2 className="mt-4 flex w-full flex-col px-4 text-2xl font-semibold md:mb-4 md:mt-12 md:px-24 md:text-4xl">
          Get Inspired with Our Latest Stories
        </h2>
        <section className="mt-4 grid w-full grid-cols-1 place-items-center gap-6 px-4 md:my-6 md:mb-24 md:grid-cols-2 md:gap-4 md:px-24 lg:grid-cols-3">
          {stories &&
            stories.map((story: any) => (
              <div key={story.id} className="mb-12 flex w-full">
                <TopStoryCard {...story} />
              </div>
            ))}
        </section>
        {/* The Testimonials Section */}
        <div className="my-8 flex w-full flex-col items-start justify-start gap-2 px-4 md:px-24">
          <h2 className="mt-4 flex w-full flex-col text-2xl font-semibold md:mb-4 md:mt-12 md:text-4xl">
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

export default StoriesPage;
