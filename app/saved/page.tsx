"use client"
import { Center, Icon, SpacedColumn, SpacedRow } from "@/app/ui";
import { UserSearch } from "lucide-react";

export default function Following() {
    return (
        <Center>
            <SpacedRow>
                <Icon icon={UserSearch} iconSize="w-15 h-15" />
                <SpacedColumn>
                    <span className="text-2xl">Accounts</span>
                    <span>Follow artists and creators to catch their events, drops and tours.</span>
                </SpacedColumn>
            </SpacedRow>
        </Center>
    )
}