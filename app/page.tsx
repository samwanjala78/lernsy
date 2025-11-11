"use client"
import Image from "next/image";
import { Button, fadedTextColor, Icon, RoundedCard, SpacedColumn, SpacedRow } from "./ui";
import { MapPin, Ticket } from "lucide-react";

export default function Home() {

  const categories = [
    "Arts & Theatre",
    "Events",
    "Cinema"
  ];

  const items = [
    { src: "/wrc.jpg", alt: "WRC", location: "Hell's Gate National Park, Naivasha", category: "Sports" },
    { src: "/walkertown.jpeg", alt: "Walker Town", location: "Laureate Gardens", category: "Concerts" },
    { src: "/bcinternational.jpeg", alt: "BCInternational", location: "Carnivore Grounds", category: "Concerts" },
  ];

  return (
    <SpacedColumn>
      <span className="font-semibold text-2xl">Categories</span>
      <div className="w-full flex gap-3">
        {categories.map((category) => {
          return <Button key={category} className="w-auto bg-white/90 text-black">{category}</Button>
        })}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {items.map((item) => {
          return (
            <RoundedCard key={item.src} className="w-full h-95" padding="p-0" justify="justify-start" flexcol={true}>
              <div className="relative w-full h-80">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="rounded-t-lg object-cover"
                />
                <RoundedCard rounded="rounded-full" padding="px-2 px-1" bg="bg-neutral-900/60" className="absolute top-1 right-1 ">
                  <span className={`text-sm ${fadedTextColor}`}>{item.category}</span>
                </RoundedCard>
              </div>
              
              <SpacedRow justify="justify-between" className="flex-grow w-full px-2">
              <SpacedRow gap="gap-1">
                <Icon icon={MapPin} className={fadedTextColor}/>               
                <span className={fadedTextColor}>{item.location}</span>
              </SpacedRow>
              <Icon icon={Ticket} className={fadedTextColor}/>  
              </SpacedRow>
            </RoundedCard>
          )
        })}
      </div>
    </SpacedColumn>
  );
}
