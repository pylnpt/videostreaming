import { 
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from "~/components/ui/tooltip"

interface TooltipProps {
    label : string;
    children: React.ReactNode;
    asChild?: boolean;
    side?:"top" | "bottom" | "left" | "right";
    align?: "start" | "center" | "end";
};

const HintTooltip = ({
    label,
    children,
    asChild,
    side,
    align
}: TooltipProps) => {
    return ( 
        <>
            <TooltipProvider>
                <Tooltip delayDuration={0}>
                    <TooltipTrigger asChild={asChild}>
                        {children}
                    </TooltipTrigger>
                    <TooltipContent className="text-primary bg-navbar-bg"
                        side={side}
                        align={align}>
                        <p className="font-semibold">
                            {label}
                        </p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </>
     );
}
 
export default HintTooltip;