import { LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {
    icon: LucideIcon,
    label: string,
    href?: string,
}

export function NavButton({
    icon: TheIcon,
    label,
    href,
}: Props) {
    return (
        <Button
            variant="ghost"
            size="icon"
            aria-label={label}
            title={label}
            className="rounded-full"
            asChild
        >
            {href ? (
                <Link href={href}>
                    <TheIcon />
                </Link>
            ) : (
                <TheIcon />
            )}
        </Button>
    )
}