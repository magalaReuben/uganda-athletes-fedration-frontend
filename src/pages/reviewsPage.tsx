import { AppHeader } from "@/components/app-header";
import { AppFooter } from "@/components/footer";
import HeroImage from "../assets/lodges-hero.png";
import { useEffect, useState } from "react";
import { Slide, Fade } from "react-awesome-reveal";
import { TestimonialsSection } from "@/components/testimonials";
import { ndra_api } from "@/utils/api";
import { PageLoader } from "@/components/page-loader";
import ResponsiveHero from "@/components/responsive-hero";

import avatar from "../assets/avatar1.png";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "@/lib/constants";

interface Props {}

const ReviewsPage = (props: Props) => {
  const [pageLoading, setPageLoading] = useState(true);
  const [testimonials, setTestimonials] = useState<any>(null);

  const getTestimonials = async () => {
    let data = await ndra_api.get("home/testimonials");

    if (data) {
      // console.log('testimonial data::', data);
      setTestimonials(data?.data);
      setPageLoading(false);
    }
  };

  useEffect(() => {
    getTestimonials();
  }, []);

  const navigate = useNavigate();

  if (pageLoading) {
    // return loading screen or component
    return <PageLoader />;
  }

  return (
    <section className="--px-8 --py-4 --pb-2 --gap-8 flex h-full min-h-screen w-full flex-col items-start justify-between bg-neutral-50 md:text-lg">
      <AppHeader />
      <ResponsiveHero
        heroImage={HeroImage}
        title="Reviews"
        subTitle="Words from Our Happy Travelers..."
      />
      <main className="--px-24 w-full flex-col items-start justify-between gap-4 py-4 md:mt-8 md:gap-8">
        <div className="flex w-full flex-col items-start justify-between gap-4 px-4 py-4 md:gap-8 md:px-24">
          <p className="flex border-l-2 border-orange-500 pl-2">
            Discover what our valued customers have to say about their
            unforgettable safari experiences. Dive into a collection of
            heartfelt testimonials and glowing reviews that capture the essence
            of Africa's wilderness, wildlife encounters, and cultural immersion.
            From solo travelers to families, honeymooners to adventurers, each
            review offers a glimpse into the transformative power of safari
            travel. Join us on a journey through the eyes of our guests and find
            inspiration for your own safari adventure
          </p>
        </div>

        {/* The Reviews Section */}
        <section className="my-6 mb-12 mt-4 grid w-full grid-cols-1 place-items-center gap-6 px-4 py-4 md:grid-cols-3 md:gap-4 md:px-24">
          <Fade duration={800} cascade damping={0.1}>
            {testimonials?.map((item: any) => (
              <div
                key={item.id}
                className="flex flex-col items-start justify-start gap-2 overflow-hidden rounded-lg bg-neutral-50 p-4 shadow-lg ring-1 ring-neutral-200"
              >
                <div className="flex items-start gap-4">
                  <img
                    src={`${baseUrl}${item.image}`}
                    alt="avatar"
                    className="size-12 rounded-full"
                  />
                  <div className="flex flex-col items-start justify-start gap-1">
                    <h3 className="text-xl font-bold capitalize">
                      {item.name}
                    </h3>
                    <p className="text-sm text-neutral-500">
                      {item.created_at.substring(0, 10)}
                    </p>
                    <p className="text-sm text-neutral-800">
                      {item.Testimonial}
                    </p>
                    <div className="flex items-center gap-2"></div>
                  </div>
                </div>
              </div>
            ))}
          </Fade>
        </section>
        {/* The Explore Button */}
        <div className="flex w-full items-center justify-center px-4 py-4 md:px-24">
          <Button
            onClick={() => navigate("/safari-ideas")}
            className="mx-auto my-8 flex w-full items-center gap-2 rounded-none bg-gradient-to-r from-green-700  to-green-500 px-6 py-4 hover:from-green-600 hover:to-green-500 md:w-1/4 md:px-8 md:py-8"
          >
            Explore Our Safari Packages!
          </Button>
        </div>
      </main>
      <AppFooter />
    </section>
  );
};

export default ReviewsPage;
