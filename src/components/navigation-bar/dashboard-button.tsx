import Link from "next/link";
import { Button } from "../ui/button";
import { PanelTop as Icon} from 'lucide-react';

const DashBoardButton = () => {
    return ( 
        <>
        <Button asChild
            variant="ghost">
            <Link href="/dashboard/main">
            {/* items-center gap-x-4  w-[40px] h-[40px] */}
                <div className="flex text-primary  hover: hover">
                    <Icon className="h-4 w-4" />
                        {/* <span>Dashboard</span> */}
                </div>
            </Link>
        </Button>
        </>
     );
}
 
export default DashBoardButton;