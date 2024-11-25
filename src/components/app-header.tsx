// import { supabase } from "@/utils/supabase-client";
import { Button } from "./ui/button";
// import { useNavigate } from "react-router-dom";
import { NavDropdown } from "./nav-dropdown";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.jpeg";
import { useState } from "react";
import SleekModal from "./sleek-modal";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { HiMenuAlt4, HiSearch, HiX } from "react-icons/hi";
import { MobileDrawer } from "./mobile-drawer";
import { Fade } from "react-awesome-reveal";
import { SpinButton } from "./spin-button";
import { Dropdown } from "./dropdown";
import DateSelector from "./DateSelector";
import { ndra_api } from "@/utils/api";
import { set } from "date-fns";

export const AppHeader = () => {
  // const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [date, setDate] = useState("");
  const [submitText, setSubmitText] = useState("submit");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    country: "Uganda",
    destination: "",
    travelDates: date,
    durationOfStay: "",
    numberOfTravelers: "",
    additionalInfo: "",
    durationType: "days",
  });

  const handleSubmit = () => {
    // console.log(formData);
    setIsSubmitting(true);
    postQuotation(formData);
  };

  const postQuotation = async (payload: typeof formData) => {
    let response = await ndra_api.post("home/sendemail/", payload);

    if (response.status === "success") {
      setIsSubmitting(false);
      setSubmitText("submission successful");
      setTimeout(() => {
        setIsModalOpen(false);
      }, 1000);
    } else {
      console.error("error on submit quotation", response);
    }
  };

  const navItems = [
    {
      label: "About UAF",
      route: "/about-us",
      links: [],
    },
    {
      label: "Clubs/Associations",
      // route: "/",
      links: [],
    },
    {
      label: "Athletes",
      // route: "/destinations",
      links: [],
    },
    {
      label: "New And Updates",
      // route: "/safari-ideas",
      links: [],
    },
    {
      label: "Gallery",
      // route: "/stories",
      links: [],
    },
    {
      label: "Competitions",
      // route: "/reviews",
      links: [],
    },
    {
      label: "more",
      route: "",
      links: [
        {
          label: "FAQs",
          // route: "/faqs",
        },
        {
          label: "contact us",
          // route: "/contact",
        },
        {
          label: "privacy policy",
          // route: "/privacy-policy",
        },
      ],
    },
  ];

  return (
    <>
      <header className="--py-4 sticky top-0 z-50 flex w-full items-center justify-between border-b-2 border-orange-500 bg-white px-4 text-neutral-800 shadow md:px-24 h-24">
        {/* <h1 className="flex items-center gap-2 text-lg font-bold text-orange-500">
        <HiLightningBolt />
        <span className="flex font-sans">NDRA</span>
      </h1> */}
        <div className="flex items-center gap-4">
          <a href="/">
          <img
            src={Logo}
            alt="brand logo"
            className="--w-28 h-16 animate-fade-right animate-once md:h-20"
          />
          </a>
          <h1 className="text-lg font-bold text-yellow-700">Uganda Athletics Federation</h1>
        </div>
        {/* The Middle Navigation */}
        <nav className="hidden cursor-pointer items-center justify-center gap-4 md:flex ">
          <Fade duration={800} cascade damping={0.1} triggerOnce>
        {navItems.map((navItem: any) => {
          if (navItem.links.length > 0) {
            return (
          <NavDropdown
            key={navItem.label}
            navItem={navItem}
            onSelect={(value) => setSelected(value)}
          />
            );
          } else {
            return (
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
            ? "pending"
            : isActive
              ? "cursor-pointer font-medium capitalize text-orange-500"
              : "_hover-styles flex cursor-pointer items-center justify-center gap-2 capitalize text-neutral-800 hover:text-orange-500"
            }
            key={navItem.label}
            to={navItem.route}
          >
            {navItem.label}
          </NavLink>
            );
          }
        })}
          </Fade>
        </nav>
        {/* <div className="hidden items-center justify-center gap-4 md:flex"> */}
          {/* <HiSearch
        size={30}
        onClick={handleSearch}c
        className="_hover-styles cursor-pointer text-neutral-500 hover:text-orange-500"
          /> */}
          {/* <Button
        onClick={() => setIsModalOpen(true)}
        className="animate-fade-left rounded-none bg-green-600 animate-once hover:bg-green-500"
          >
        Request Quote
          </Button> */}
        {/* </div> */}
        {/* The Mobile Nav */}
        <div className="flex md:hidden">
          <MobileDrawer
        onOpenChange={(value) => setMobileNavOpen(value)}
        isOpen={mobileNavOpen}
        trigger={
          <Button variant="outline" onClick={() => setMobileNavOpen(true)}>
            <HiMenuAlt4 />
          </Button>
        }
          >
        <div className="flex w-full flex-col items-start justify-start gap-2 px-4 py-6">
          <div className="flex w-full items-center justify-between gap-4">
            <h1 className="font-inter font-bold">Uganda Athletes Federation</h1>
            <Button
          variant="outline"
          onClick={() => setMobileNavOpen(false)}
            >
          <HiX />
            </Button>
          </div>
          <nav className="flex w-full flex-col items-start justify-start gap-4">
            {navItems.map((navItem: any) => {
          if (navItem.links.length > 0) {
            return navItem.links.map((link: any) => (
              <NavLink
            className={({ isActive, isPending }) =>
              isActive
                ? "flex w-full cursor-pointer items-center justify-start border-b-2 border-yellow-200/80 pb-1 font-medium capitalize text-orange-500"
                : "_hover-styles border-neutral-200/border-orange-200/80 flex w-full cursor-pointer items-center justify-start gap-2 border-b-2 pb-1 capitalize text-neutral-800 hover:text-orange-500"
            }
            key={link.label}
            to={link.route}
              >
            {link.label}
              </NavLink>
            ));
          } else {
            return (
              <NavLink
            className={({ isActive, isPending }) =>
              isActive
                ? "flex w-full cursor-pointer items-center justify-start border-b-2 border-yellow-200/80 pb-1 font-medium capitalize text-orange-500"
                : "_hover-styles border-neutral-200/borde-orange-200/80 flex w-full cursor-pointer items-center justify-start gap-2 border-b-2 pb-1 capitalize text-neutral-800 hover:text-orange-500"
            }
            key={navItem.label}
            to={navItem.route}
              >
            {navItem.label}
              </NavLink>
            );
          }
            })}
          </nav>
          {/* <Button
            onClick={() => setIsModalOpen(true)}
            className="mt-4 w-full rounded-none bg-green-600 text-sm hover:bg-green-500"
          >
            Request Quote
          </Button> */}
        </div>
          </MobileDrawer>
        </div>
      </header>
      <SleekModal
        size="md"
        isOpen={isModalOpen}
        title="Request Quote"
        onClose={() => setIsModalOpen(false)}
      >
        <section className="flex w-full flex-col items-center justify-center gap-4">
          <div className="grid w-full grid-cols-2 place-items-center gap-8">
            <div className="flex w-full flex-col items-start justify-start gap-2">
              <h1 className="font-inter font-semibold">Name</h1>
              <Input
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  })
                }
              />
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-2">
              <h1 className="font-inter font-semibold">Phone Number</h1>
              <Input
                type="tel"
                required
                inputMode="numeric"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    phone: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="grid w-full grid-cols-2 place-items-center gap-8">
            <div className="flex w-full flex-col items-start justify-start gap-2">
              <h1 className="font-inter font-semibold">Email</h1>
              <Input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
              />
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-2">
              <h1 className="font-inter font-semibold">Country</h1>
              <Input
                value={formData.country}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    country: e.target.value,
                  })
                }
                className="text-500"
              />
            </div>
          </div>
          <div className="grid w-full grid-cols-2 place-items-center gap-8">
            <div className="flex w-full flex-col items-start justify-start gap-2">
              <h1 className="font-inter font-semibold">Destination</h1>
              <Input
                required
                value={formData.destination}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    destination: e.target.value,
                  })
                }
              />
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-2">
              <h1 className="font-inter font-semibold">Travel Dates</h1>
              <DateSelector
                allowFutureDates={true}
                onDateSelected={(value) =>
                  setFormData((formData) => ({
                    ...formData,
                    travelDates: value,
                  }))
                }
              />
              {/* <Input
                value={formData.travelDates}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    travelDates: e.target.value,
                  })
                }
              /> */}
            </div>
          </div>
          <div className="grid w-full grid-cols-2 place-items-center gap-8">
            <div className="flex w-full flex-col items-start justify-start gap-2">
              <h1 className="font-inter font-semibold">Duration Of Stay</h1>
              <div className="--flex-col flex w-full items-start justify-start gap-2">
                <Input
                  required
                  value={formData.durationOfStay}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      durationOfStay: e.target.value,
                    })
                  }
                />
                <Dropdown
                  description="select time of stay"
                  items={["days", "weeks", "months"]}
                  label="days"
                  onSelect={(value) => setDate(value)}
                />
              </div>
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-2">
              <h1 className="font-inter font-semibold">Number Of Travelers</h1>
              <Input
                required
                type="number"
                inputMode="numeric"
                value={formData.numberOfTravelers}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    numberOfTravelers: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="flex w-full  flex-col items-start justify-start gap-2">
            <h1 className="font-inter font-semibold">Additional Info</h1>
            <Textarea
              value={formData.additionalInfo}
              className="w-full"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  additionalInfo: e.target.value,
                })
              }
            />
          </div>
          {/* <Button
            onClick={() => setIsModalOpen(false)}
            className="mx-auto mt-2 flex w-1/4 items-center gap-2 rounded-none  bg-gradient-to-r from-green-700 to-green-500 px-8 py-4 hover:from-green-600 hover:to-green-500"
          >
            Submit
          </Button> */}
          <SpinButton
            className="--w-1/4 mx-auto mt-2 flex items-center gap-2 rounded-none  bg-gradient-to-r from-green-700 to-green-500 px-8 py-4 hover:from-green-600 hover:to-green-500"
            isLoading={isSubmitting}
            loadingText="Submiting..."
            text={submitText}
            onClick={handleSubmit}
          />
        </section>
      </SleekModal>
    </>
  );
};
