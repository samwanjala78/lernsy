"use client"
import { Heart, Home, LucideIcon, Menu, Play, Search, Ticket, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export const fadedTextColor = "text-gray-400";

export function IconText({ icon: Icon, active, children }: { icon: LucideIcon, active: boolean, children?: React.ReactNode }) {
    return (
        <div className={`flex flex-col items-center gap-3 font-semibold ${active ? "text-white hover:text-neutral-900" : fadedTextColor}`}>
            <Icon className={`w-5 h-5`} />
            <span >{children}</span>
        </div>
    );
}

export function Icon({ icon: Icon, className, iconSize = "w-5 h-5" }: { icon: LucideIcon, className?: string, iconSize?: string }) {
    return (
        <Icon className={`${iconSize} ${className}`} />
    );
}

export function SpacedColumn({ children, className, gap = "gap-2" }: { children?: React.ReactNode, className?: string, gap?: string }) {
    return (<div className={`flex flex-col ${className} ${gap}`}>
        {children}
    </div>)
}

export function SpacedRow({ children, justify = "justify-start", className = "w-full", gap = "gap-2" }: { children?: React.ReactNode, className?: string, gap?: string, justify?: string }) {
    return (<div className={`flex items-center ${justify} ${className} ${gap}`}>
        {children}
    </div>)
}

export function CenterHorizontally({ children }: { children?: React.ReactNode }) {
    return (<div className={`flex w-full justify-center self-center`}>
        {children}
    </div>)
}

export function CenterVertically({ children }: { children?: React.ReactNode }) {
    return (<div className={`w-full flex items-center self-center`}>
        {children}
    </div>)
}

export function Center({ children }: { children?: React.ReactNode }) {
    return (<div className={`absolute w-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}>
        {children}
    </div>)
}

export function Button({ children, className }: { children?: React.ReactNode, className?: string }) {
    return (<div className={`block flex border text-sm sm:text-base border-white-700 shadow-lg rounded-md py-2 px-2 sm:px-6 justify-center items-center transition-all duration-200 ${className}`}>
        {children}
    </div>)
}

export function RoundedCard({ children, className, padding = "p-3 sm:p-6", justify = "justify-center", flexcol = false, rounded = "rounded-lg", bg = "bg-neutral-800" }: { children?: React.ReactNode, className?: string, padding?: string, justify?: string, flexcol?: boolean, rounded?: string, bg?: string }) {
    return (<div className={`block flex ${flexcol ? "flex-col" : ""} ${bg} text-sm sm:text text-white shadow-lg ${rounded} ${padding} ${justify} items-center transition-all duration-200 ${className}`}>
        {children}
    </div>)
}

export function VerticalSpacer() {
    return (
        <div className="h-4" />
    )
}

export function HorizontalSpacer() {
    return (
        <div className="w-4" />
    )
}

export function Searchbar({ className, placeholder }: { className?: string, placeholder: string }) {
    return (<SpacedRow gap="0" className={`w-full md:w-1/2 lg:text-base text-sm ${className}`}>
        <div className="w-auto flex justify-center items-center h-10 bg-neutral-800 border-1 py-1 px-3 rounded-l-full border-gray-800 text-white placeholder-gray-500">
            <Icon icon={Search} />
        </div>
        <input
            type="text"
            placeholder={placeholder}
            className="w-full h-10 bg-neutral-900 border-1 p-1 rounded-r-full border-neutral-800 focus:border-blue-500 focus:outline-none text-white placeholder-gray-500"
        />
    </SpacedRow>)
}

enum Path {
    home = "/",
    saved = "/saved",
    tickets = "/tickets",
    discover = "/discover",
    profile = "/profile"
}

export function Sidebar({ toggleSideBar, isSidebarOpen }: { toggleSideBar: (value: boolean) => void, isSidebarOpen: boolean }) {
    const pathname = usePathname();

    const links = [
        { href: Path.home, label: "Home", icon: Home },
        { href: Path.saved, label: "Saved", icon: Heart },
        { href: Path.tickets, label: "Tickets", icon: Ticket },
        { href: Path.discover, label: "Discover", icon: Play },
        { href: Path.profile, label: "Profile", icon: User },
    ];

    const sidebarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target as Node)
            ) {
                toggleSideBar(false);
            }
        }

        if (isSidebarOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isSidebarOpen, toggleSideBar]);

    return (
        <div
            ref={sidebarRef}
            className={`w-24 h-screen fixed top-0 z-10 text-white bg-black ${isSidebarOpen ? "flex" : "hidden"} lg:flex flex-col py-4`}>
            <div className={`flex justify-center items-center`}>
                <div className="relative w-10 h-10 cursor-pointer">
                    <Image
                        src="/lernsy.png"
                        alt="House"
                        fill
                        className="rounded-lg object-cover"
                    />
                </div>
            </div>
            <nav className="w-auto text-white flex flex-col py-4">
                <ul className="space-y-3">
                    {links.map(({ href, label, icon }) => {
                        const active =
                            href === "/"
                                ? pathname === "/"
                                : pathname.startsWith(`${href}`);
                        return (
                            <li key={label}>
                                <Link
                                    href={href}
                                    className={`block rounded-md px-3 py-2 transition-all duration-200 hover:bg-white`}
                                >
                                    <div
                                        onClick={() => toggleSideBar(false)}
                                        className="w-full h-full"
                                    >
                                        <IconText icon={icon} active={active}>
                                            {label}
                                        </IconText>
                                    </div>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
}

enum Path {
    following = "/saved",
    organizations = "/saved/organizations",
    merchandise = "/saved/merchandise",
}

export function TopBar({ toggleSideBar }: { toggleSideBar: () => void }) {
    return (<div className={`fixed w-full h-16 sm:left-24 top-0 z-8 items-center bg-black text-white flex p-2`}>
        {<RenderContent toggleSideBar={toggleSideBar} />}
    </div>)
}


function RenderContent({ toggleSideBar }: { toggleSideBar: () => void }) {
    const pathname = usePathname();

    const pages = [
        { href: Path.following, label: "Following" },
        { href: Path.organizations, label: "Organizations" },
        { href: Path.merchandise, label: "Merchandise" }
    ]

    const content = [
        <div key="home" className="lg:relative flex w-full gap-1 items-center">
            <span className="hidden sm:block">Hello, Sam</span>
            <button
                onClick={toggleSideBar}
                className="block sm:hidden p-1"
            >
                <Icon icon={Menu} className="w-6 h-6 text-white" />
            </button>
            <Searchbar className="lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2" placeholder="Search for Artists, Organizations, Users" />
        </div>,
        <nav key="saved" className="w-full text-white flex items-center gap-1">
            <button
                onClick={toggleSideBar}
                className="block sm:hidden p-1"
            >
                <Icon icon={Menu} className="w-6 h-6 text-white" />
            </button>
            <ul className="flex space-x-4 overflow-x-auto no-scrollbar">
                {pages.map(({ href, label }) => {
                    const active = pathname === href;
                    return (<li key={label}>
                        <a href={href} className="hover:text-blue-400 transition-colors text-xg">
                            <Button className={`${active ? "bg-white/90 text-black" : "bg-transparent text-white"} text-black w-32`}>
                                {label}
                            </Button>
                        </a>
                    </li>)
                })}
            </ul>
        </nav>,
        <div key="home" className="lg:relative flex w-full gap-1 items-center">
            <button
                onClick={toggleSideBar}
                className="block sm:hidden p-1"
            >
                <Icon icon={Menu} className="w-6 h-6 text-white" />
            </button>
            <span key="tickets" className="text-2xl font-semibold">My Tickets</span>
        </div>,
        <div key="discover" className="lg:relative flex w-full gap-1 items-center">
            <button
                onClick={toggleSideBar}
                className="block sm:hidden p-1"
            >
                <Icon icon={Menu} className="w-6 h-6 text-white" />
            </button>
            <span className="text-2xl hidden sm:block font-semibold">Trailers</span>
            <Searchbar className="lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2" placeholder="Search Trailers" />
        </div>
    ];

    switch (true) {
        case pathname === Path.home:
            return content[0];
        case pathname === Path.saved || pathname.startsWith(Path.saved):
            return content[1];
        case pathname === Path.tickets || pathname.startsWith(Path.tickets):
            return content[2];
        case pathname === Path.discover || pathname.startsWith(Path.discover):
            return content[3];
    }
}



