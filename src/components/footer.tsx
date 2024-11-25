import { useWhatsappLink } from "@/hooks/useWhatsappLink";
import { ndra_api } from "@/utils/api";
import { useEffect, useState } from "react";
import { BsInstagram, BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import { FaWhatsappSquare } from "react-icons/fa";
import "../styles/lib/animate.v4.1.1.min.css";

interface Props {}

export const AppFooter = (props: Props) => {
  const [footer, setFooter] = useState<any>(null);
  let { whatsappLink } = useWhatsappLink(
    "+256752062530",
    "Hello am interested in Ndra Safari services seen on your website!",
  );

  const getFooterData = async () => {
    let data = await ndra_api.get("home/sitefooter");

    if (data) {
      // do somthing with data
      // console.log("data::", data.data[0]);
      setFooter(data?.data[0]);
    }
  };

  useEffect(() => {
    getFooterData();
  }, []);

  return (
    <>
      <footer className="--px-24 flex w-full flex-col items-center justify-between border-b border-neutral-800 bg-yellow-100 py-6 text-black">
        {/* The Whatsapp Thing */}
        {/* <a
          href={whatsappLink}
          className="animate__tada animate__animated animate__infinite animate__slow fixed bottom-8 right-8 z-50 flex md:bottom-12"
        >
          <FaWhatsappSquare className="text-4xl text-green-500 md:text-5xl" />
        </a> */}
        <div className="flex w-full flex-col items-start justify-between gap-4 px-6 py-6 pb-12 md:flex-row md:px-24 md:py-8">
          {/* Left */}
          <div className="flex w-full flex-col items-center justify-center gap-6 md:items-start md:justify-start">
            <h1 className="responsive-font flex font-sans text-2xl font-bold uppercase text-orange-500">
              {/* {footer && footer?.title} */}

            </h1>
            <p className="flex text-center text-black md:text-start">
              {/* {footer && footer?.description} */}
              Uganda Athletics Federation (UAF) is the national governing body of the sports of athletics under the rules and regulations of International Association of Athletics Federations (IAAF). It is a voluntary, non-profiting making body with the mandate of developing and promoting athletics in Uganda in line with the IAAF statutes.
            </p>
          </div>
          {/* Middle */}
          <div className="flex w-full flex-col items-start gap-6 md:ml-12">
            <h1 className="responsive-font flex font-sans text-2xl font-bold uppercase text-orange-500">
              Quick Links.
            </h1>
            <div className="flex w-full flex-col items-start gap-2 text-black">
              <span className="_hover-styles flex cursor-pointer hover:text-orange-500">
                FAQS
              </span>
              <span className="_hover-styles flex cursor-pointer  hover:text-orange-500">
                Stories
              </span>
              <span className="_hover-styles flex cursor-pointer hover:text-orange-500">
                Terms & Conditions
              </span>
              <span className="_hover-styles flex cursor-pointer hover:text-orange-500">
                Contact Us
              </span>
            </div>
          </div>
          {/* Right */}
          <div className="flex w-full flex-col items-center justify-center gap-6 md:items-start md:justify-start">
            <h1 className="responsive-font flex font-sans text-2xl font-bold uppercase text-orange-500">
              Find Us.
            </h1>
            <div className="flex w-full flex-col items-center justify-center gap-2 text-black md:items-start md:justify-start">
              <p className="flex">
              Uganda Athletics Federation<br className="hidden md:flex" /> Metropole House, Ground Floor, Suite G10.
              <br />
              Plot 8/10 Entebbe Road, Kampala.
              </p>
              <span className="flex">+256-414-340-342 </span>
              <span className="flex">+256-312-340-342</span>
              <span className="flex">secretariate@athleticsuganda.net</span>
              <span className="flex">uga@mf.worldathletics.org</span>
              <div className="mt-4 flex  w-full items-center justify-center gap-2 md:items-start md:justify-start">
                <BsInstagram className="_hover-styles size-5 cursor-pointer text-orange-600 hover:text-orange-500 md:size-6" />
                <BsFacebook className="_hover-styles size-5 cursor-pointer text-orange-600 hover:text-orange-500 md:size-6" />
                <BsTwitter className="_hover-styles size-5 cursor-pointer text-orange-600 hover:text-orange-500 md:size-6" />
                <BsYoutube className="_hover-styles size-5 cursor-pointer text-orange-600 hover:text-orange-500 md:size-6" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 w-full border-t-2 border-orange-500">
          <div className="mt-2 flex w-full items-center justify-center border-t-2 border-neutral-200 px-8 pt-6 text-center text-base md:px-24">
            &copy; {new Date().getFullYear()}. Uganda Athletics Federation All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};
