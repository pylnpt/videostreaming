import { cn } from "~/lib/utils";

interface OnlineStreamerBadgeProps {
    className?: string;
};

const OnlineStreamerBadge = ({
    className,
}: OnlineStreamerBadgeProps) => {
    return (
        <div className={cn(
            "bg-primary text-center p-0.5 px-1.5 rounded-md uppercase text-[9px] border border-background font-semibold tracking-wide text-sidebar-bg",
            className,
        )}>
            Streaming
        </div>
    );
}
 
export default OnlineStreamerBadge;