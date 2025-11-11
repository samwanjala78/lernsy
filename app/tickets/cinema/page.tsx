import { SpacedColumn } from "@/app/ui";

export default function MembersOnly() {
    return (
        <SpacedColumn>
            <span className="text-2xl">Cinema Tickets</span>
            <span>You haven&apos;t purchased any cinema tickets yet. Once you book a movie, you&apos;ll find all your ticket details here - including showtime, hall, seat, and QR code for check-in.</span>
        </SpacedColumn>
    )
}