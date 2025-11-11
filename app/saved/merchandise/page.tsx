"use client"
import { Center, Icon, SpacedColumn, SpacedRow } from "@/app/ui";
import { ShoppingBag } from "lucide-react";

export default function Following() {
    return (
        <Center>
            <SpacedRow>
                <Icon icon={ShoppingBag} iconSize="w-15 h-15" />
                <SpacedColumn>
                    <span className="text-2xl">Merchandise</span>
                    <span>Save the stuff you&apos;re vibing with - grab it later when you&apos;re ready.</span>
                </SpacedColumn>
            </SpacedRow>
        </Center>
    )
}