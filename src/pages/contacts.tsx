import { AppHeader } from "@/components/app-header";
import { AppFooter } from "@/components/footer";
import HeroImage from "../assets/contact-hero.png";
import ContactMap from "../assets/contact-map.png";

import { HiLocationMarker, HiPaperAirplane, HiPhone } from "react-icons/hi";
import { HiEnvelope } from "react-icons/hi2";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { TravelTipsSection } from "@/components/travel-tips";
import ResponsiveHero from "@/components/responsive-hero";

interface Props {}

// if (pageLoading) {
//   // return loading screen or component
//   return <PageLoader />;
// }

const ContactPage = (props: Props) => {
  return (
    <section className="--px-8 --py-4 --pb-2 --gap-8 flex h-full min-h-screen w-full flex-col items-start justify-between bg-neutral-50 md:text-lg">
      <AppHeader />
      <ResponsiveHero heroImage={HeroImage} title="Contact Us" subTitle="" />
      <main className="--px-24 w-full flex-col items-start justify-between gap-4 px-4 py-4 md:mt-8 md:gap-8">
        {/* The Contact Section */}
        <section className="--px-24 my-6 mb-24 mt-4 grid w-full grid-cols-1 gap-6 md:grid-cols-3 md:place-items-center md:gap-4">
          <div className="flex items-center justify-start gap-2">
            <HiPhone className="size-12 rounded-full bg-orange-200 p-2 text-orange-500" />
            <div className="flex flex-col items-start justify-start gap-2">
              <h2 className="flex font-semibold">Phone No</h2>
              <span className="flex">+25677847544 / +256758744789</span>
            </div>
          </div>
          <div className="flex items-center justify-start gap-2">
            <HiEnvelope className="size-12 rounded-full bg-orange-200 p-2 text-orange-500" />
            <div className="flex flex-col items-start justify-start gap-2">
              <h2 className="flex font-semibold">Email</h2>
              <span className="flex">ndraafricasafaris@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center justify-start gap-2">
            <HiLocationMarker className="size-12 rounded-full bg-orange-200 p-2 text-orange-500" />
            <div className="flex flex-col items-start justify-start gap-2">
              <h2 className="flex font-semibold">Head Office</h2>
              <span className="flex">
                Lico Bulding, <br /> Namugongo Rd Opposite Shell
              </span>
            </div>
          </div>
        </section>
        {/* The Map And Form Section */}
        <section className="--px-4 mt-4 grid w-full grid-cols-1 place-items-center gap-4 md:my-6 md:mb-24 md:grid-cols-2 md:gap-6 md:px-24">
          <div className="flex w-full">
            <img
              src={ContactMap}
              alt="hero featuring a map!"
              className="--h-auto h-96 w-full opacity-75"
            />
          </div>
          {/* The Form */}
          <div className="flex w-full flex-col items-start justify-start gap-2">
            <p className="flex">
              We're here to help! Use the form below to get in touch with our
              team.
            </p>
            <div className="flex w-full flex-col items-start justify-start gap-2">
              <h1 className="font-semibold">Name</h1>
              <Input />
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-2">
              <h1 className="font-semibold">Email</h1>
              <Input />
            </div>
            <div className="flex w-full  flex-col items-start justify-start gap-2">
              <h1 className="font-semibold">Message</h1>
              <Textarea className="w-full" />
            </div>
            <Button
              onClick={() => console.log("contact us")}
              className="--mx-auto mt-2 flex w-1/4 items-center gap-2 rounded-none  bg-gradient-to-r from-green-700 to-green-500 px-8 py-4 hover:from-green-600 hover:to-green-500"
            >
              Send
              <HiPaperAirplane className="rotate-90 transform" />
            </Button>
          </div>
        </section>
        {/* The Testimonials Section */}
        <div className="flex w-full flex-col items-start justify-start gap-2 md:my-8 md:px-24">
          <h2 className="mb-4 mt-12 flex w-full flex-col text-2xl font-semibold md:text-4xl">
            Words from Our Happy Travelers
          </h2>
          <p className="flex">
            Discover what our satisfied travelers have to say about their
            experiences with us. Read their testimonials and reviews to learn
            how we've helped them create unforgettable memories and plan their
            dream vacations.
          </p>
          <TravelTipsSection />
        </div>
      </main>
      <AppFooter />
    </section>
  );
};

export default ContactPage;
