import { AppHeader } from "@/components/app-header";
import { AppFooter } from "@/components/footer";
import HeroImage from "../assets/wild-cow.png";
import { useEffect, useState } from "react";
import { TestimonialsSection } from "@/components/testimonials";
import { IdeaCard } from "@/components/idea-card";
import { ndra_api } from "@/utils/api";
import { PageLoader } from "@/components/page-loader";
import ResponsiveHero from "@/components/responsive-hero";
import { PageFilters } from "@/components/page-filters";

interface Props {}

let viewFilters = [
  "all",
  "Walking Safaris",
  "Gorilla Trekking",
  "Game Drives",
  "Photography Safaris",
  "Cultural Safaris",
  "Hiking Adventure",
];

const SafariIdeasPage = (props: Props) => {
  const [pageLoading, setPageLoading] = useState(true);
  const [safariIdeas, setSafariIdeas] = useState([]);
  const [pageData, setPageData] = useState(safariIdeas);
  const [pageFilters, setPageFilters] = useState<any | []>([]);

  const fetchSafariIdeas = async () => {
    let data = await ndra_api.get("safariideas/safariideas/");

    if (data) {
      // do somthing with data
      setSafariIdeas(data?.data);
      let filters = [
        ...new Set(data?.data.map((item: any) => item?.safari_tag?.tag)),
      ];
      filters.push("All");
      setPageFilters(filters.reverse());
      setPageData(data?.data);
      setPageLoading(false);
    }
  };

  console.log("safariIdeas::", safariIdeas);

  useEffect(() => {
    fetchSafariIdeas();
  }, []);

  if (pageLoading) {
    // return loading screen or component
    return <PageLoader />;
  }

  const filterPageData = (value: string) => {
    if (value === "All") {
      setPageData(safariIdeas);
    } else {
      let newPageData = safariIdeas.filter(
        (item: any) => item.safari_tag.tag === value,
      );
      setPageData(newPageData);
    }
    console.log("page:", pageData);
  };

  return (
    <section className="--px-8 --py-4 --pb-2 --gap-8 flex h-full min-h-screen w-full flex-col items-start justify-between bg-neutral-50 md:text-lg">
      <AppHeader />
      <ResponsiveHero
        heroImage={HeroImage}
        title="Safari Ideas"
        subTitle="Ideas to get you started on your exploration journey."
      />
      <main className="--px-24 mt-8 w-full flex-col items-start justify-between gap-8 py-4">
        <div className="flex w-full flex-col items-start justify-between gap-4 px-4 md:gap-8 md:px-24 md:py-4">
          {/* The View Filters */}
          <PageFilters
            filters={pageFilters}
            onSelect={(value) => filterPageData(value)}
          />
          {/* The Safari Ideas Cards */}
          <section className="--mb-12 grid w-full grid-cols-1 place-items-center gap-4 md:grid-cols-3 md:gap-y-6">
            {pageData &&
              pageData?.map((item: any) => (
                <IdeaCard key={item.id} {...item} />
              ))}
          </section>
        </div>
        {/* The Testimonials Section */}
        <div className="my-8 flex w-full flex-col items-start justify-start gap-2 px-4 md:my-8 md:px-24">
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

export default SafariIdeasPage;
