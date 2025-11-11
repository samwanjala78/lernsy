import { SpacedColumn } from "@/app/ui";

export default function MembersOnly() {
    return (
        <SpacedColumn>
            <span className="text-2xl">Invitation Required</span>
            <span>When you&apos;re invited, your access will unlock and available tickets will show up here. These exclusive tickets are usually reserved for private gatherings, VIP experiences, closed premieres, or member-only community events.</span>
        </SpacedColumn>
    )
}