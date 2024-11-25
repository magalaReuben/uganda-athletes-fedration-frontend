import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

let items = [
  {
    id: 1,
    label: "Day 1: Arrival and Introduction",
    text: `Eager to immerse themselves in the local culture, the travelers set out on a cultural excursion to a nearby village, where they were warmly welcomed by the indigenous community. Led by knowledgeable guides, they learned about the customs, traditions, and way of life of the local people, gaining a deeper appreciation for the rich cultural heritage of the region.
Afterward, they embarked on a guided nature walk through the surrounding forest, marveling at the diversity of plant and animal life that called the area home. With each step, they discovered hidden treasures and encountered rare wildlife, from colorful birds and butterflies to elusive forest creatures hiding in the shadows.
As the day drew to a close, the travelers returned to the lodge, their hearts full of gratitude for the unforgettable experiences and meaningful connections forged during their cultural and nature-filled adventures.`,
  },
  {
    id: 2,
    label: "Day 2: Gorilla Trekking Expedition",
    text: `Eager to immerse themselves in the local culture, the travelers set out on a cultural excursion to a nearby village, where they were warmly welcomed by the indigenous community. Led by knowledgeable guides, they learned about the customs, traditions, and way of life of the local people, gaining a deeper appreciation for the rich cultural heritage of the region.
Afterward, they embarked on a guided nature walk through the surrounding forest, marveling at the diversity of plant and animal life that called the area home. With each step, they discovered hidden treasures and encountered rare wildlife, from colorful birds and butterflies to elusive forest creatures hiding in the shadows.
As the day drew to a close, the travelers returned to the lodge, their hearts full of gratitude for the unforgettable experiences and meaningful connections forged during their cultural and nature-filled adventures.`,
  },
  {
    id: 3,
    label: "Day 3: Cultural Experience and Nature Walk",
    text: `Eager to immerse themselves in the local culture, the travelers set out on a cultural excursion to a nearby village, where they were warmly welcomed by the indigenous community. Led by knowledgeable guides, they learned about the customs, traditions, and way of life of the local people, gaining a deeper appreciation for the rich cultural heritage of the region.
Afterward, they embarked on a guided nature walk through the surrounding forest, marveling at the diversity of plant and animal life that called the area home. With each step, they discovered hidden treasures and encountered rare wildlife, from colorful birds and butterflies to elusive forest creatures hiding in the shadows.
As the day drew to a close, the travelers returned to the lodge, their hearts full of gratitude for the unforgettable experiences and meaningful connections forged during their cultural and nature-filled adventures.`,
  },
  {
    id: 4,
    label: "Day 4: Golden Monkey Trekking and Birdwatching",
    text: `Eager to immerse themselves in the local culture, the travelers set out on a cultural excursion to a nearby village, where they were warmly welcomed by the indigenous community. Led by knowledgeable guides, they learned about the customs, traditions, and way of life of the local people, gaining a deeper appreciation for the rich cultural heritage of the region.
Afterward, they embarked on a guided nature walk through the surrounding forest, marveling at the diversity of plant and animal life that called the area home. With each step, they discovered hidden treasures and encountered rare wildlife, from colorful birds and butterflies to elusive forest creatures hiding in the shadows.
As the day drew to a close, the travelers returned to the lodge, their hearts full of gratitude for the unforgettable experiences and meaningful connections forged during their cultural and nature-filled adventures.`,
  },
  {
    id: 5,
    label: "Day 5: Leisure Activities and Relaxation",
    text: `Eager to immerse themselves in the local culture, the travelers set out on a cultural excursion to a nearby village, where they were warmly welcomed by the indigenous community. Led by knowledgeable guides, they learned about the customs, traditions, and way of life of the local people, gaining a deeper appreciation for the rich cultural heritage of the region.
Afterward, they embarked on a guided nature walk through the surrounding forest, marveling at the diversity of plant and animal life that called the area home. With each step, they discovered hidden treasures and encountered rare wildlife, from colorful birds and butterflies to elusive forest creatures hiding in the shadows.
As the day drew to a close, the travelers returned to the lodge, their hearts full of gratitude for the unforgettable experiences and meaningful connections forged during their cultural and nature-filled adventures.`,
  },
  {
    id: 6,
    label: "Day 6: Departure",
    text: `Eager to immerse themselves in the local culture, the travelers set out on a cultural excursion to a nearby village, where they were warmly welcomed by the indigenous community. Led by knowledgeable guides, they learned about the customs, traditions, and way of life of the local people, gaining a deeper appreciation for the rich cultural heritage of the region.
Afterward, they embarked on a guided nature walk through the surrounding forest, marveling at the diversity of plant and animal life that called the area home. With each step, they discovered hidden treasures and encountered rare wildlife, from colorful birds and butterflies to elusive forest creatures hiding in the shadows.
As the day drew to a close, the travelers returned to the lodge, their hearts full of gratitude for the unforgettable experiences and meaningful connections forged during their cultural and nature-filled adventures.`,
  },
];

export function Accordions() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item) => (
        <AccordionItem key={item.id} value={item.label}>
          <AccordionTrigger>
            <span className="font-inter flex font-semibold">{item.label}</span>
          </AccordionTrigger>
          <AccordionContent>{item.text}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
