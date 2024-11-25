import CarouselImage1 from "../assets/carousel-image.png";
import avatar1 from "../assets/avatar1.png";
import { TestimonialCarousel } from "./testimonial-carousel";
import { useEffect, useState } from "react";
import { ndra_api } from "@/utils/api";

interface Props {}

let testimonials = [
  {
    id: 1,
    image: 'https://www.athleticsuganda.net/images/partners/caa1.jpg',
    avatar: avatar1,
    text: "My recent trip with NDRA Africa Safari was an absolute dream come true! From start to finish, every detail was meticulously planned, and the experience exceeded all my expectations.",
    name: "Calvin Cordozar Broadus Jr",
    location: "United Kingdom",
  },
  {
    id: 2,
    image: 'https://www.athleticsuganda.net/images/partners/moes.jpg',
    avatar: avatar1,
    text: "My recent trip with NDRA Africa Safari was an absolute dream come true! From start to finish, every detail was meticulously planned, and the experience exceeded all my expectations.",
    name: "Jonnathan Dans",
    location: "United States",
  },
  {
    id: 3,
    image: 'https://www.athleticsuganda.net/images/partners/mtn.jpg',
    avatar: avatar1,
    text: "My recent trip with NDRA Africa Safari was an absolute dream come true! From start to finish, every detail was meticulously planned, and the experience exceeded all my expectations.",
    name: "Emily Mbosso",
    location: "Africa",
  },
  {
    id: 4,
    image: 'https://www.athleticsuganda.net/images/partners/ncos.jpg',
    avatar: avatar1,
    text: "My recent trip with NDRA Africa Safari was an absolute dream come true! From start to finish, every detail was meticulously planned, and the experience exceeded all my expectations.",
    name: "Calvin Cordozar Broadus Jr",
    location: "United Kingdom",
  },
  {
    id: 5,
    image: 'https://www.athleticsuganda.net/images/partners/nike.jpg',
    avatar: avatar1,
    text: "My recent trip with NDRA Africa Safari was an absolute dream come true! From start to finish, every detail was meticulously planned, and the experience exceeded all my expectations.",
    name: "Jonnathan Dans",
    location: "United States",
  },
  {
    id: 6,
    image: 'https://www.athleticsuganda.net/images/partners/uoc.jpg',
    avatar: avatar1,
    text: "My recent trip with NDRA Africa Safari was an absolute dream come true! From start to finish, every detail was meticulously planned, and the experience exceeded all my expectations.",
    name: "Emily Mbosso",
    location: "Africa",
  },
  {
    id: 7,
    image: 'https://www.athleticsuganda.net/images/partners/waa.jpg',
    avatar: avatar1,
    text: "My recent trip with NDRA Africa Safari was an absolute dream come true! From start to finish, every detail was meticulously planned, and the experience exceeded all my expectations.",
    name: "Emily Mbosso",
    location: "Africa",
  },
];

export const TestimonialsSection = (props: Props) => {
  // const [testimonials, setTestimonials] = useState<any>(null);

  const getTestimonials = async () => {
    //let data = await ndra_api.get("home/testimonials");
    const data = testimonials;
    if (data) {
      // console.log('testimonial data::', data);
      // setTestimonials(data);
    }
  };

  useEffect(() => {
    getTestimonials();
  }, []);

  return (
    <section className="my-6 mb-12 flex w-full items-center justify-center gap-4">
      {testimonials && <TestimonialCarousel items={testimonials} />}
    </section>
  );
};
