import CopyButton from "./copy-button";
import { Input } from "./ui/input";


interface GenerateUrlProps {
    value?: string;
}

const GenerateUrlCard = ({value}: GenerateUrlProps) => {
    return (
        <>
            <div className="rounded-xl bg-muted p-6">
                <div className="flex items-center gap-x-10">
                    <p className="font-semibold shrink-0">
                        GenratedURl
                    </p>
                    <div className="space-y-2 w-full">
                        <div className="w-full flex items-center gap-x-2">
                            <Input value={value || ""} 
                                disabled
                                placeholder= "Server URL"
                            />
                            <CopyButton 
                                value={value || ""}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default GenerateUrlCard;