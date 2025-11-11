"use client"
import { ChevronRight } from "lucide-react";
import { Icon, RoundedCard, SpacedColumn } from "../ui";

export default function Discover() {
    const items = [
        "Movie Previews",
        "Arts and Theatre Previews",
        "Concerts Preview",
        "Sports Preview",
        "Forums Preview"
    ]

    return (
        <div className="flex flex-col w-full gap-8">
            <SpacedColumn>
                {items.map((item) => {
                    return <RoundedCard key={item} className="sm:w-full md:w-full lg:w-1/2">
                        <div className="flex justify-between items-center w-full">
                            <span>{item}</span>
                            <Icon icon={ChevronRight}></Icon>
                        </div>
                    </RoundedCard>
                })}
            </SpacedColumn>
        </div>
    );
}
