import {cva, type VariantProps} from "class-variance-authority";
import { Skeleton } from "./ui/skeleton";
import { cn } from "~/lib/utils";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "~/components/ui/avatar";
import OnlineStreamerBadge from "~/components/online-streamer-badge";

const avatarSize = cva(
    "",
    {
        variants: {
            size: {
                default: "h-8 w-8",
                lg: "h-14 w-14",
                xl: "h-20 w-20",
            },
        },
        defaultVariants: {
            size:"default",
        },
    },
);

interface StreamerAvatarProps 
    extends VariantProps<typeof avatarSize> {
        name : string | null;
        image: string | undefined;
        isOnline?: boolean;
        showBadge?: boolean; 
}

export const StreamerAvatar = ({
    name,
    image,
    isOnline,
    showBadge,
    size
}: StreamerAvatarProps) => {
    const badgeIsViable = showBadge && isOnline;
    return (  
        <>
            <div className="relative">
                <Avatar
                    className={cn(
                        isOnline && "ring-2 ring-primary border border-sidebar-bg",
                        avatarSize({ size })
                    )}>
                    <AvatarImage src={image}/>
                    <AvatarFallback className="text-white">
                        { name !== null && (
                            name[0],
                            name[name.length - 1 ])
                        }
                    </AvatarFallback> 
                </Avatar>
                {/* { badgeIsViable && (
                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                        <OnlineStreamerBadge />
                    </div>
                )} */}
            </div>
        </>
    );
}
 
interface StreamerAvatarSkeletonProps 
    extends VariantProps<typeof avatarSize> {};

export const StreamerAvatarSkeleton = ({
    size,
} : StreamerAvatarSkeletonProps) => {
    return (
        <Skeleton className={cn(
            "rounded-full",
            avatarSize({ size }),
        )} />
    );
};