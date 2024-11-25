import { AppHeader } from "@/components/app-header";
import { AppFooter } from "@/components/footer";
import HeroImage from "../assets/lodges-hero.png";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

import image1 from "../assets/lodge1.png";
import image2 from "../assets/lodge2.png";
import image3 from "../assets/lodge3.png";

import { TestimonialsSection } from "@/components/testimonials";
import { IdeaCard } from "@/components/idea-card";
import { LodgeCard } from "@/components/lodge-card";
import { ndra_api } from "@/utils/api";
import { PageLoader } from "@/components/page-loader";
import { PageFilters } from "@/components/page-filters";
import ResponsiveHero from "@/components/responsive-hero";

interface Props {}

let viewFilters = [
  "all",
  "Entebbe",
  "Kenya",
  "Western Uganda",
  "Tanzania",
  "Murchison Falls",
  "Bwindi National park",
];

// let lodges = [
//   {
//     id: 1,
//     name: "Ishasha Wilderness Camp",
//     range: "Mid-range",
//     price: "$1200 pp",
//     image: image2,
//   },
//   {
//     id: 2,
//     name: "Kyambura Gorge Lodge",
//     range: "Mid-range",
//     price: "$1200 pp",
//     image: image3,
//   },
//   {
//     id: 3,
//     name: "Mweya Safari Lodge",
//     range: "Mid-range",
//     price: "$1200 pp",
//     image: image1,
//   },
//   {
//     id: 4,
//     name: "Ishasha Wilderness Camp",
//     range: "Mid-range",
//     price: "$1200 pp",
//     image: image2,
//   },
//   {
//     id: 5,
//     name: "Mweya Safari Lodge",
//     range: "Mid-range",
//     price: "$1200 pp",
//     image: image1,
//   },
//   {
//     id: 6,
//     name: "Kyambura Gorge Lodge",
//     range: "Mid-range",
//     price: "$1200 pp",
//     image: image3,
//   },
// ];

const LodgesPage = (props: Props) => {
  const [selected, setSelected] = useState(viewFilters[0]);
  const [pageLoading, setPageLoading] = useState(true);
  const [locations, setLocations] = useState();
  const [lodges, setLodges] = useState([]);

  const getLocations = async () => {
    let data = await ndra_api.get("lodges/lodgelocations");
    if (data) {
      setLocations(data?.data[0]);
      setPageLoading(false);
    }
  };

  const getLodges = async () => {
    let data = await ndra_api.get("lodges/lodges");
    console.log("data::", data.data[0]);
    if (data) {
      setLodges(data?.data);
      setPageLoading(false);
    }
  };

  useEffect(() => {
    getLocations();
    getLodges();
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
        title="Lodges"
        subTitle="Find a great resting place."
      />
      <main className="--px-24 w-full flex-col items-start justify-between gap-4 py-4 md:mt-8 md:gap-8">
        <div className="flex w-full flex-col items-start justify-between gap-4 px-4 py-4 md:gap-8 md:px-24">
          {/* The View Filters */}
          <PageFilters filters={viewFilters} />
          {/* The Safari Ideas Cards */}
          <section className="grid w-full grid-cols-1 place-items-center gap-4 md:mb-12 md:grid-cols-3 md:gap-y-6">
            {lodges?.map((item: any) => <LodgeCard key={item.id} {...item} />)}
          </section>
        </div>
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

export default LodgesPage;
