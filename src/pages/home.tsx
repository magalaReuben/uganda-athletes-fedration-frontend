import { AppHeader } from "@/components/app-header";
import { AppFooter } from "@/components/footer";
import { Hero } from "@/components/hero";
import { DestinationCard } from "@/components/destination-card";
import { HomeStepCard } from "@/components/home-step-card";
import { TopStoryCard } from "@/components/top-story-card";
import { Button } from "@/components/ui/button";
import { TestimonialsSection } from "@/components/testimonials";
import { useEffect, useState } from "react";
import { ndra_api } from "@/utils/api";
import { PageLoader } from "@/components/page-loader";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "@/lib/constants";
import VideoPlayer from "@/components/video-player";
import { Slide, Fade } from "react-awesome-reveal";
import { Item, SleekCarousel } from "@/components/sleek-carousel";
import { create } from "domain";

interface Props {}

let homeSteps = [
  {
    stepCount: 1,
    title: "Govern Athletics",
    text: "Govern the sport of athletics in Uganda, ensuring that all activities are conducted in accordance with the rules and regulations set forth by the International Association of Athletics Federations (IAAF).",
  },
  {
    stepCount: 2,
    title: "Develop and Promote",
    text: "Develop, promote, and control athletics in Uganda by organizing events, providing training programs, and supporting athletes at all levels to achieve excellence.",
  },
  {
    stepCount: 3,
    title: "Encourage Cooperation",
    text: "Encourage cooperation and togetherness amongst athletes, coaches, and athletics officials to foster a supportive and collaborative environment for the growth of the sport.",
  },
  {
    stepCount: 4,
    title: "Prevent Improper Practices",
    text: "Prevent and/or eradicate improper methods or practices in athletics, particularly focusing on discouraging drug abuse and protecting athletes from any form of abuse or exploitation.",
  },
  {
    stepCount: 5,
    title: "Encourage Honesty",
    text: "Encourage honest practices and fair play in athletics at all levels, promoting integrity and sportsmanship among athletes, coaches, and officials.",
  },
  {
    stepCount: 6,
    title: "Organize Educational Events",
    text: "Organize courses, seminars, and lectures for the instruction and teaching of athletics, aimed at furthering the objectives of the Federation and enhancing the knowledge and skills of participants.",
  },
  {
    stepCount: 7,
    title: "Enforce Rules",
    text: "Compile, disseminate, and enforce rules and regulations governing national, regional, district, and other athletics competitions to ensure fair and standardized practices.",
  },
  {
    stepCount: 8,
    title: "Train National Teams",
    text: "Select and train National Athletics teams for all international athletics events, providing them with the necessary resources and support to compete at the highest levels.",
  },
  {
    stepCount: 9,
    title: "Coordinate Representatives",
    text: "Coordinate and control athletes and officials who represent the nation in or outside it, ensuring they adhere to the standards and expectations of the Federation.",
  },
  {
    stepCount: 10,
    title: "Prevent Discrimination",
    text: "Strive to ensure that no racial, religious, political, or other kind of discrimination is allowed in athletics, and take all practical measures to stop such discrimination, promoting inclusivity and equality.",
  },
  {
    stepCount: 11,
    title: "Enforce WA Rules",
    text: "Enforce World Athletics (WA) Rules and Regulations in all matters pertaining to the sport of athletics, ensuring compliance and maintaining the integrity of the sport.",
  },
  {
    stepCount: 12,
    title: "Regulate Management Firms",
    text: "License and regulate athletics management firms, Athletes’ Representatives, Agents, and Promoters to ensure they operate within the guidelines and standards set by the Federation.",
  },
];

const HomePage = (props: Props) => {
  const [heroData, setHeroData] = useState(null);
  const [subHeroData, setSubHeroData] = useState<any>(null);
  const [topStories, setTopStories] = useState<any[]>([]);
  const [popularDestinations, setPopularDestinations] = useState<any[]>([]);
  const [pageLoading, setPageLoading] = useState(true);
  const [homeVideo, setHomeVideo] = useState<any>(null);
  const navigate = useNavigate();

  const getPageData = async () => {
    // it might be better to merge this into a single endpoint on backend called getHomeData that brings all this at once than subsqeunt calls
    let homeIntro = await ndra_api.get("home/homeintro");
    let destinations = await ndra_api.get("destinations/destinations");
    let stories = await ndra_api.get("stories/stories");
    let homeVideo = await ndra_api.get("home/homevideo");

    if (homeIntro) {
      // console.log(
      //   "hero data::",
      //   homeIntro.data[0].description.split("\r\n\r\n"),
      // );
      setHeroData({
        ...homeIntro?.data[0],
        items: homeIntro?.data[0].description.split("\r\n\r\n"),
      });
    }

    if (destinations) {
      const allDestinations = [{id:0, 
                                image:'https://cdn.standardmedia.co.ke/images/wysiwyg/images/YGpMKnQ6BFrZUjFalaJWYIicAjoHGBn8RdvVGkTt.jpg', 
                                ispopular:true, 
                                title:'Regional events'},
                                {id:1, 
                                  image:'https://campus-cdhk.oss-cn-hongkong.aliyuncs.com/attachments/image/195/88/129/681346_358802/681346_358802_800_auto_jpg.jpg', 
                                  ispopular:true, 
                                  title:'Commonwealth Games'},
                                  {id:2, 
                                    image:'https://cms.forbesafrica.com/wp-content/uploads/2024/08/GettyImages-2165018278.jpg', 
                                    ispopular:true, 
                                    title:'Olympic Games'},
                                  {id:3, 
                                    image:'https://eagle.co.ug/wp-content/uploads/2015/06/Moses-Kipsiro-won-Gold-in-the-All-Africa-Games-in-Maputo-1.jpg', 
                                    ispopular:true, 
                                    title:'All Africa Games'},
                                    {id:4, 
                                      image:'https://assets.aws.worldathletics.org/98e0fcc6-c9bf-4c7c-ad03-8f0667fb3daa.jpg', 
                                      ispopular:true, 
                                      title:'World Athletics series'},
                                      {id:5, 
                                        image:'https://cdn.standardmedia.co.ke/images/wysiwyg/images/YGpMKnQ6BFrZUjFalaJWYIicAjoHGBn8RdvVGkTt.jpg', 
                                        ispopular:true, 
                                        title:'Regional events'},
                              ];
      const popularDestinations = allDestinations.filter(
        (destination: any) => destination.ispopular,
      );
      //console.log(allDestinations);
      setPopularDestinations(popularDestinations);
    }

    if (stories) {
      // const allStories = stories?.data;
      const allStories = [
                        {
                          id:1, 
                          is_approved:true, 
                          is_top_story:true, 
                          title: 'Nakaayi and Team Uganda eye glory at World Road Running Championships',
                          image:'https://sportal365images.com/process/smp-images-production/ringier.africa/10062023/a2dea9fc-f5f1-4ce9-9140-a1c0332e3e65.jpg?operations=fit(960:)',
                          author:'By Micheal Nsubuga',
                          created_at:'2024-10-19',
                        },
                        {id:0, is_approved:true, 
                          is_top_story:true, 
                          title: 'Cheptegei, Kiplimo lead Team Uganda for the World Athletics Cross Country Championships',
                          image:'https://sportal365images.com/process/smp-images-production/ringier.africa/16032024/46a6ae77-a891-474c-9a68-e82676d3c325.jpg?operations=fit(:420)',
                          author:'By David Isabirye',
                          craeted_at:'2024-08-19',
                        },
    ]
      const topStories = allStories.filter(
        (story: any) => story.is_approved && story.is_top_story,
      );
      setTopStories(topStories);
      // setPageLoading(false);
    }

    if (homeVideo) {
      setHomeVideo(homeVideo?.data[0]);
    }

    // if (homeIntro && subIntro && destinations && stories && homeVideo) {
    //   setPageLoading(false);
    // }
  };

  const getSubHeroData = async () => {
    let data = await ndra_api.get("home/homesubintro");

    if (data) {
      setSubHeroData(data?.data[0]);
      setPageLoading(false);
    }
  };

  useEffect(() => {
    // we get subHero stuff after, we couldn't combine it with others in getPagedata, it was causing some funny bug!
    getPageData().then(() => getSubHeroData());
  }, []);

  if (pageLoading) {
    // return loading screen or component
    return <PageLoader />;
  }

  return (
    <section className="--px-8 --py-4 --pb-2 --gap-8 flex h-full min-h-screen w-full flex-col items-start justify-between bg-neutral-50 md:text-lg">
      <AppHeader />
      <Hero heroData={heroData} />
      <main className="mt-8 w-full flex-col items-start justify-between gap-8 px-4 py-4 md:px-24 ">
        {/* The After Hero Callout Section */}
        <div className="w-full flex-col items-start justify-between gap-2">
          <h2 className="flex w-full flex-col border-l-8 border-orange-400 pl-2 text-2xl font-semibold md:text-4xl">
            <div className="flex flex-col items-start justify-start gap-2 md:flex-row md:items-center md:gap-4">
              {/* <span className="flex"> {subHeroData?.title}</span> */}
              <span className="flex"> Who we are</span>
              {/* <span className="flex text-green-500">beauty of Africa</span> */}
            </div>
            {/* <span className="flex">without the crowds.</span> */}
          </h2>
          <Fade>
            {/* <p className="my-4 flex w-full">{subHeroData?.description}</p> */}
            <p className="my-4 flex w-full">Uganda Athletics Federation (UAF) is the national governing body of the sports of athletics under the rules and regulations of International Association of Athletics Federations (IAAF). It is a voluntary, non-profiting making body with the mandate of developing and promoting athletics in Uganda in line with the IAAF statutes.</p>
          </Fade>
        </div>
        {/* The Popular Destinations Section */}
        <h2 className="mb-4 mt-12 flex w-full flex-col text-2xl font-semibold md:text-4xl">
          What We do
        </h2>
        <Fade>
            {/* <p className="my-4 flex w-full">{subHeroData?.description}</p> */}
          <p className="my-4 flex w-full">As the nation's Athletes governing body we manage and promote the sport of Athletics through talent identification, development and organizational efficiency for sustainable, gender responsive participation and excellence</p>
        </Fade>
        <SleekCarousel itemsPerView={3} delay={6000}>
          {popularDestinations?.map((item: any) => (
            <Item key={item.id}>
              <DestinationCard {...item} />
            </Item>
          ))}
        </SleekCarousel>
        {/* <section className="grid w-full grid-cols-1 place-items-center gap-4 md:grid-cols-3 md:gap-3">
          <Slide duration={800} cascade damping={0.1} triggerOnce>
            {popularDestinations?.map((item: any) => (
              <DestinationCard key={item.id} {...item} />
            ))}
          </Slide>
        </section> */}
        {/* The Steps Section */}
        <div className="mb-8 flex w-full flex-col items-start justify-start gap-2">
          <h2 className="mb-4 mt-12 flex w-full flex-col text-2xl font-semibold md:text-4xl">
            Our Objectives
          </h2>
          <Fade>
            <p className="flex">
              The following are our main objectives as the Uganda Athletics Federation:
            </p>
          </Fade>
        </div>
        <section className="my-6 mb-12 mt-4 grid w-full grid-cols-1 place-items-center gap-6 md:grid-cols-2 md:gap-4 lg:grid-cols-4">
          <Fade duration={800} cascade damping={0.1}>
            {homeSteps.map((step) => (
              <HomeStepCard key={step.stepCount} {...step} />
            ))}
          </Fade>
        </section>
        {/* The Video Preview */}
        <div className="--px-24 group mb-4 mt-8 flex w-full items-center justify-center gap-5 py-2">
          {/* {homeVideo && <VideoPlayer url={`${baseUrl}${homeVideo.video}`} />} */}
          <iframe width="100%" height="750" src="https://www.youtube.com/embed/C9cF2hsvAUg?si=fTXdam2gzpK1Z9or" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        {/* The Top Stories Section */}
        <h2 className="mb-4 mt-12 flex w-full flex-col text-2xl font-semibold md:text-4xl">
          Top Stories
        </h2>
        <section className="my-6 mb-24 mt-4 grid w-full grid-cols-1 place-items-center gap-16 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
          <Fade duration={800} cascade damping={0.1}>
            {topStories?.map((story: any) => (
              <TopStoryCard key={story.id} {...story} />
            ))}
          </Fade>
        </section>
        {/* The View More Button */}
        <Button
          // onClick={() => navigate("/stories")}
          className="mx-auto my-8 flex w-full items-center gap-2 rounded-none bg-gradient-to-r from-orange-700  to-orange-500 px-6 py-4 hover:from-red-600 hover:to-red-500 md:w-1/4 md:px-8 md:py-8"
        >
          View More
        </Button>
        {/* The Testimonials Section */}
        <div className="mb-8 flex w-full flex-col items-start justify-start gap-2">
          <h2 className="mb-4 mt-12 flex w-full flex-col text-2xl font-semibold md:text-4xl">
            Our Partners
          </h2>
          <p className="flex">
            We work with a number of partners to ensure that we deliver the best services to our athletes and stakeholders.
          </p>
          <TestimonialsSection />
        </div>
      </main>
      <AppFooter />
    </section>
  );
};

export default HomePage;
