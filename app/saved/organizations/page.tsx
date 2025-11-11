"use client"
import { Center, Icon, SpacedColumn, SpacedRow } from "@/app/ui";
import { Building2 } from "lucide-react";

export default function Following() {
    return (
        <Center>
            <SpacedRow className="w-screen sm:w-auto" justify="justify-center">
                <Icon icon={Building2} iconSize="w-15 h-15" />
                <SpacedColumn>
                    <span className="text-2xl">Organizations</span>
                    <span>Stay in the loop with your favorite crews and the events they throw.</span>
                </SpacedColumn>
            </SpacedRow>
        </Center>
    )
}