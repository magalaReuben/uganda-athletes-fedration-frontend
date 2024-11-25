import { AppHeader } from "@/components/app-header";
import { AppFooter } from "@/components/footer";
import HeroImage from "../assets/about-hero.png";
import LadyImage from "../assets/lady.png";
import GatheringImage from "../assets/gathering.png";
import ContactMap from "../assets/contact-map.png";
import { HiPlayCircle } from "react-icons/hi2";
import videoPreview from "../assets/video-preview1.png";

import { HiLocationMarker, HiPaperAirplane, HiPhone } from "react-icons/hi";
import { HiEnvelope } from "react-icons/hi2";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { TravelTipsSection } from "@/components/travel-tips";
import { MemberCard } from "@/components/member-card";

interface Props {}

let team = [
  {
    id: 1,
    name: "Mr. Otucet Dominic",
    role: "THE PRESIDENT UGANDA ATHLETICS FEDERATION.",
    image: 'https://www.athleticsuganda.net/uploads/b204890f1815ac0e5172b5d9544d5bf9470824.jpg',
  },
  {
    id: 2,
    name: "Mr. Kavuma Lawrence",
    role: "VICE PRESIDENT ADMINISTRATION",
    image: 'https://www.athleticsuganda.net/uploads/c030eff50377fa113dba0b638b017345480824.jpg',
  },
  {
    id: 3,
    name: "Mr.  Namayo Mawerere",
    role: "THE ASSISTANT GENERAL SECRETARY",
    image: 'https://www.athleticsuganda.net/uploads/1fe7396c014df152e2d67ec26a92a3e6000824.png',
  },
  {
    id: 4,
    name: "Ayikoru Beatrice",
    role: "THE GENERAL SECRETARY",
    image: 'https://www.athleticsuganda.net/uploads/fac42a41230bb74ed23b910ef39ad34b570824.jpg',
  },
  {
    id: 5,
    name: "Mr. Kiwa Faustino",
    role: "THE TREASURER",
    image: 'https://www.athleticsuganda.net/uploads/59edb50f6765058b7a0ec17ce27be715010824.jpg',
  },
  {
    id: 6,
    name: "Mr. Njia Benjamin",
    role: "VICE PRESIDENT TECHNICAL",
    image: 'https://www.athleticsuganda.net/uploads/d08959b1bab2db363c32145992f060d9540824.jpg',
  },
  
];

// if (pageLoading) {
//   // return loading screen or component
//   return <PageLoader />;
// }

const AboutUsPage = (props: Props) => {
  return (
    <section className="--px-8 --py-4 --pb-2 --gap-8 flex h-full min-h-screen w-full flex-col items-start justify-between bg-neutral-50 md:text-lg">
      <AppHeader />
      <section className="--py-2 --px-24 flex w-full items-center justify-between border-b border-neutral-50 bg-gradient-to-r from-green-50 to-neutral-50 text-neutral-800 shadow">
        <div className="relative isolate z-[1] flex w-full items-center justify-start h-48 md:h-64">
          <img
            src='https://www.athleticsuganda.net/uploads/8edc9ef3c8ce1c5deb686a998f239f86520824.jpg?1731369600061'
            alt="hero featuring an antelope!"
            className="h-full w-full object-cover opacity-100"
          />
          <div className="absolute inset-0 bg-black opacity-45"></div>
          <div className="absolute z-[2] flex flex-col gap-2 px-32 py-8">
            <p className="font-serif text-2xl font-medium text-white md:text-6xl">
              About Us
            </p>
          </div>
        </div>
      </section>
      {/* The Mission Section */}
      <section className="my-4 flex w-full flex-col items-start justify-start gap-4 px-4 py-4 md:my-8 md:px-24">
        <h1 className="text-2xl font-medium capitalize text-neutral-900 md:text-6xl">
          Our Mission
        </h1>
        <p className=" text-balance text-neutral-800">
        Our mission is to foster a culture of athletic excellence, inclusivity, and integrity. We aim to inspire and empower athletes of all ages and abilities to achieve their full potential, both on and off the field. Through strategic partnerships, innovative programs, and unwavering dedication, we strive to create a supportive and dynamic environment where athletes can thrive and contribute to the growth and success of the sport. Our commitment to excellence extends beyond competition, as we prioritize the holistic development of athletes, promoting values such as teamwork, discipline, and sportsmanship. Together, we are dedicated to building a brighter future for athletics in Uganda and beyond.
        </p>
      </section>
      {/* The Journey Section */}
      <section className="flex w-full flex-col items-start justify-start gap-4 px-4 py-4 md:my-8 md:px-24">
        <h1 className="text-2xl font-medium capitalize text-neutral-900 md:text-6xl">
        Stakeholders
        </h1>
        <p className=" text-balance text-neutral-800">
        Stakeholders The UAF and its Member Associations jointly implement athletics activities in the country and prepare athletes for national and international competitions held under Rules and Regulations of the global athletics body, World Athletics (WA). This includes activities of the Confederation of African Athletics (CAA) and Eastern Africa Athletics Region (EAAR) to which it is affiliated. The Federation collaborates directly with the Ministry of Sports and Education (MoES) through the National Council of Sports (NCS) on general development of athletics in schools. It collaborates with Uganda Olympic Committee (UOC) and Commonwealth Games Association Uganda (CGAU) pertaining to Athletics as a key sport of the Olympic Movement and the Commonwealth Sport.
        </p>
      </section>
      {/* Video Preview*/}
      <div className="group flex w-full items-center justify-center gap-5 px-4 py-2 md:mb-4 md:mt-8 md:px-24">
        <div className="relative isolate z-[1] flex w-full items-center justify-start">
          <img
            src='https://pbs.twimg.com/media/E4G5TsgWYAIvWEd.jpg'
            alt="featuring a lively wild animal!"
            className="h-auto w-full opacity-95"
          />
          <div className="absolute inset-0 bg-black opacity-25"></div>
          <div className="absolute z-[2] flex h-full w-full flex-col items-center justify-center gap-2 px-32 py-8">
            <HiPlayCircle className="size-16 text-white group-hover:text-green-50" />
          </div>
        </div>
      </div>
      {/* The Team Section */}
      <section className="flex w-full flex-col items-start justify-start gap-4 px-4 py-4 md:my-8 md:px-24">
        <h1 className="text-2xl font-medium capitalize text-neutral-900 md:text-6xl">
        Foundation 
        </h1>
        <p className=" text-balance text-neutral-800">
        The idea of starting an annual athletics championship in Uganda was first discussed in an informal meeting at the home of Major Lawrence at Nakasero. On 4 April 1925, a group of enthusiastic sports personalities convened a meeting at the then Imperial Hotel in Kampala to endorse the possibility of organizing an annual athletics championships. This inaugural meeting later gave birth to the Uganda Native (African) Athletic Association aimed at developing and promoting local athletics (for Ugandans). The founder members of the association included former Deputy Speaker of the National Assembly Hon. S. W. Kulubya who was also the 1st African Mayor of Kampala City and Chairman of National Council of Sports. The Executive of the Ugandan Native Athletic Association included Honorary Secretary Sir. Sydaly Abrahams. The UNAA which started in colonial period (1925) later evolved into Uganda Amateur Athletic Association (UAAA) at Independence (1962) and transformed into Uganda Amateur Athletics Federation in 1993 then Uganda Athletics Federation in 2004 when internally, athletics embraced the component of professionalism. In 1954, Uganda Native Athletics Association affiliated to the then International Amateur Athletics Federation (IAAF). These names later changed into and are known as Uganda Athletics Federation (UAF) and International Association of Athletics Federations (IAAF). By affiliating to IAAF, it is automatically affiliated to Africa Athletics Confederation (CAA) and Eastern Africa Athletics Region (EAAR). Locally, the athletics is an affiliate of the Uganda Olympic Committee and registered with National Council of Sports (NCS). The membership of Athletics moved from individuals as at the initiation in 1925 to clubs and district associations when it became a federation in 1993.
        </p>
      </section>
      <section className="my-4 flex w-full flex-col items-start justify-start gap-4 px-4 py-4 md:my-8 md:px-24">
        <h1 className="text-2xl font-medium capitalize text-neutral-900 md:text-6xl">
        Executive Committee
        </h1>
        <section className="grid w-full grid-cols-1 place-items-center gap-4 md:mb-12 md:grid-cols-4 md:gap-y-6">
          {team.map((member) => (
            <MemberCard key={member.id} {...member} />
          ))}
        </section>
      </section>
      {/* The Rest Of Stuff */}
      <section className="my-4 flex w-full flex-col items-start justify-start gap-4 px-4 py-4 md:my-8 md:px-24">
        <h1 className="text-2xl font-medium capitalize text-neutral-900 md:text-6xl">
          Our Objectives
        </h1>
        <div className="mt-4 flex flex-col items-start justify-start gap-2">
          <h2 className="text-xl font-medium capitalize text-neutral-900 md:text-3xl">
            Govern Athletics
          </h2>
          <p className=" text-balance text-neutral-800">
            Govern the sport of athletics in Uganda, ensuring that all activities are conducted in accordance with the rules and regulations set forth by the International Association of Athletics Federations (IAAF).
          </p>
        </div>

        <div className="mt-4 flex flex-col items-start justify-start gap-2">
          <h2 className="text-xl font-medium capitalize text-neutral-900 md:text-3xl">
            Develop and Promote
          </h2>
          <p className=" text-balance text-neutral-800">
            Develop, promote, and control athletics in Uganda by organizing events, providing training programs, and supporting athletes at all levels to achieve excellence.
          </p>
        </div>

        <div className="mt-4 flex flex-col items-start justify-start gap-2">
          <h2 className="text-xl font-medium capitalize text-neutral-900 md:text-3xl">
            Encourage Cooperation
          </h2>
          <p className=" text-balance text-neutral-800">
            Encourage cooperation and togetherness amongst athletes, coaches, and athletics officials to foster a supportive and collaborative environment for the growth of the sport.
          </p>
        </div>

        <div className="mt-4 flex flex-col items-start justify-start gap-2">
          <h2 className="text-xl font-medium capitalize text-neutral-900 md:text-3xl">
            Prevent Improper Practices
          </h2>
          <p className=" text-balance text-neutral-800">
            Prevent and/or eradicate improper methods or practices in athletics, particularly focusing on discouraging drug abuse and protecting athletes from any form of abuse or exploitation.
          </p>
        </div>

        <div className="mt-4 flex flex-col items-start justify-start gap-2">
          <h2 className="text-xl font-medium capitalize text-neutral-900 md:text-3xl">
            Encourage Honesty
          </h2>
          <p className=" text-balance text-neutral-800">
            Encourage honest practices and fair play in athletics at all levels, promoting integrity and sportsmanship among athletes, coaches, and officials.
          </p>
        </div>

        <div className="mt-4 flex flex-col items-start justify-start gap-2">
          <h2 className="text-xl font-medium capitalize text-neutral-900 md:text-3xl">
            Organize Educational Events
          </h2>
          <p className=" text-balance text-neutral-800">
            Organize courses, seminars, and lectures for the instruction and teaching of athletics, aimed at furthering the objectives of the Federation and enhancing the knowledge and skills of participants.
          </p>
        </div>

        <div className="mt-4 flex flex-col items-start justify-start gap-2">
          <h2 className="text-xl font-medium capitalize text-neutral-900 md:text-3xl">
            Enforce Rules
          </h2>
          <p className=" text-balance text-neutral-800">
            Compile, disseminate, and enforce rules and regulations governing national, regional, district, and other athletics competitions to ensure fair and standardized practices.
          </p>
        </div>

        <div className="mt-4 flex flex-col items-start justify-start gap-2">
          <h2 className="text-xl font-medium capitalize text-neutral-900 md:text-3xl">
            Train National Teams
          </h2>
          <p className=" text-balance text-neutral-800">
            Select and train National Athletics teams for all international athletics events, providing them with the necessary resources and support to compete at the highest levels.
          </p>
        </div>

        <div className="mt-4 flex flex-col items-start justify-start gap-2">
          <h2 className="text-xl font-medium capitalize text-neutral-900 md:text-3xl">
            Coordinate Representatives
          </h2>
          <p className=" text-balance text-neutral-800">
            Coordinate and control athletes and officials who represent the nation in or outside it, ensuring they adhere to the standards and expectations of the Federation.
          </p>
        </div>

        <div className="mt-4 flex flex-col items-start justify-start gap-2">
          <h2 className="text-xl font-medium capitalize text-neutral-900 md:text-3xl">
            Prevent Discrimination
          </h2>
          <p className=" text-balance text-neutral-800">
            Strive to ensure that no racial, religious, political, or other kind of discrimination is allowed in athletics, and take all practical measures to stop such discrimination, promoting inclusivity and equality.
          </p>
        </div>

        <div className="mt-4 flex flex-col items-start justify-start gap-2">
          <h2 className="text-xl font-medium capitalize text-neutral-900 md:text-3xl">
            Enforce WA Rules
          </h2>
          <p className=" text-balance text-neutral-800">
            Enforce World Athletics (WA) Rules and Regulations in all matters pertaining to the sport of athletics, ensuring compliance and maintaining the integrity of the sport.
          </p>
        </div>

        <div className="mt-4 flex flex-col items-start justify-start gap-2">
          <h2 className="text-xl font-medium capitalize text-neutral-900 md:text-3xl">
            Regulate Management Firms
          </h2>
          <p className=" text-balance text-neutral-800">
            License and regulate athletics management firms, Athletes’ Representatives, Agents, and Promoters to ensure they operate within the guidelines and standards set by the Federation.
          </p>
        </div>
      </section>
      <AppFooter />
    </section>
  );
};

export default AboutUsPage;
