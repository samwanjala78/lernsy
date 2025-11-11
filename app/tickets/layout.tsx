"use client"
import { usePathname } from "next/navigation";
import { Button, Icon, RoundedCard, SpacedColumn, SpacedRow } from "../ui";
import { ShoppingBag, Wallet } from "lucide-react";

enum Path {
    public_events = "/tickets",
    members_only = "/tickets/members-only",
    cinema = "/tickets/cinema",
}

export default function TicketsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname();

    const pages = [
        { href: Path.public_events, label: "Public Events" },
        { href: Path.members_only, label: "Members-Only" },
        { href: Path.cinema, label: "Cinema" }
    ]

    return (
        <div className="relative flex flex-col w-full gap-8">
            <SpacedRow>
                <RoundedCard className="sm:w-1/2 lg:w-32 h-32">
                    <a>
                        <SpacedColumn className="items-center">
                            <Icon icon={Wallet} iconSize="w-10 h-10"></Icon>
                            <span className={`text-center`}>My Spendings</span>
                        </SpacedColumn>
                    </a>
                </RoundedCard>
                <RoundedCard className="sm:w-1/2 lg:w-32 h-32">
                    <a>
                        <SpacedColumn className="items-center">
                            <Icon icon={ShoppingBag} iconSize="w-10 h-10"></Icon>
                            <span className={`text-center`}>Purchased Merchandise</span>
                        </SpacedColumn>
                    </a>
                </RoundedCard>
            </SpacedRow>

            <nav className="w-full text-white flex items-center">
                <ul className="flex space-x-4">
                    {pages.map(({ href, label }) => {
                        const active = pathname === href;
                        return (<li key={label}>
                            <a href={href} className="hover:text-blue-400 transition-colors text-xg">
                                <Button className={`${active ? `bg-white/90` : "bg-transparent text-white"} text-black w-auto`}>
                                    {label}
                                </Button>
                            </a>
                        </li>)
                    })}
                </ul>
            </nav>
            {children}
        </div>
    )
}
