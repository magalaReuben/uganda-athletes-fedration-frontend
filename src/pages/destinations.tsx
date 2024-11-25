import { AppHeader } from "@/components/app-header";
import { AppFooter } from "@/components/footer";
import HeroImage from "../assets/hero-image2.png";
import { SearchBar } from "@/components/search-box";
import { useEffect, useState } from "react";
import { DestinationCard } from "@/components/destination-card";
import { TestimonialsSection } from "@/components/testimonials";
import { TravelTipsSection } from "@/components/travel-tips";
import { ndra_api } from "@/utils/api";
import { PageLoader } from "@/components/page-loader";
import { Item, SleekCarousel } from "@/components/sleek-carousel";
import ResponsiveHero from "@/components/responsive-hero";
import { PageFilters } from "@/components/page-filters";

interface Props {}

let viewFilters = ["all", "uganda", "kenya", "tanzania", "rwanda", "nigeria"];

const DestinationsPage = (props: Props) => {
  const [destinations, setDestinations] = useState<any | []>([]);
  const [pageLoading, setPageLoading] = useState(true);
  const [pageData, setPageData] = useState(destinations);
  const [pageFilters, setPageFilters] = useState<any | []>([]);
  const [currentFilter, setCurrentFilter] = useState(pageFilters[0]);

  const fetchDestinations = async () => {
    try {
      const response = await ndra_api.get("destinations/destinations");

      setDestinations(response?.data);
      let filters = [
        ...new Set(response?.data.map((item: any) => item?.location?.location)),
      ];
      filters.push("All");
      setPageFilters(filters.reverse());
      setPageData(response?.data);
      setPageLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDestinations();
  }, []);
  if (pageLoading) {
    // return loading screen or component
    return <PageLoader />;
  }

  const filterPageData = (value: string) => {
    if (value === "All") {
      setPageData(destinations);
    } else {
      let newPageData = destinations.filter(
        (item: any) => item.location.location === value,
      );
      setPageData(newPageData);
    }
    setCurrentFilter(value);
    // console.log("page:", pageData);
  };

  return (
    <section className="--px-8 --py-4 --pb-2 --gap-8 flex h-full min-h-screen w-full flex-col items-start justify-between bg-neutral-50 md:text-lg">
      <AppHeader />
      <ResponsiveHero
        heroImage={HeroImage}
        title="Destinations"
        subTitle="A journey of a thousand miles..."
      />
      <main className="--px-24 mt-8 w-full flex-col items-start justify-between gap-8 py-4">
        <div className="flex w-full flex-col items-start justify-between gap-4 px-4 md:gap-8 md:px-24 md:py-4">
          <SearchBar />
          {/* The View Filters */}
          <PageFilters
            filters={pageFilters}
            onSelect={(value) => filterPageData(value)}
          />
          {/* The Destination Cards */}
          <section className="mb-12 flex w-full">
            {currentFilter === "All" ? (
              <SleekCarousel itemsPerView={3} delay={6000}>
                {destinations?.map((item: any) => (
                  <Item key={item.id}>
                    <DestinationCard {...item} />
                  </Item>
                ))}
              </SleekCarousel>
            ) : (
              <section className="--mb-12 grid w-full grid-cols-1 place-items-center gap-4 md:grid-cols-3 md:gap-y-6">
                {pageData?.map((item: any) => (
                  <DestinationCard key={item.id} {...item} />
                ))}
              </section>
            )}
          </section>
          {/* <section className="mb-12 grid w-full grid-cols-1 place-items-center gap-4 md:grid-cols-3 md:gap-y-6">
            {destinations?.map((item: any) => (
              <DestinationCard key={item.id} {...item} />
            ))}
          </section> */}
        </div>
        {/* Travel Tips */}
        <TravelTipsSection />
        {/* The Testimonials Section */}
        <div className="my-4 flex w-full flex-col items-start justify-start gap-2 px-4 md:my-8 md:px-24">
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

export default DestinationsPage;
