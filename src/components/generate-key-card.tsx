import { useState } from "react";
import CopyButton from "./copy-button";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface GenerateKeyCardProps {
    value: string | null;
};

const GenerateKeyCard = ({value}: GenerateKeyCardProps) => {

    const [show, setShow] = useState(false);
    const onShow = () => {
        setShow(!show);
    }
    return ( 
        <>
        <div className="rounded-xl bg-muted p-6">
                <div className="flex items-start gap-x-10">
                    <p className="font-semibold shrink-0">
                        Generated Stream Key
                    </p>
                    <div className="space-y-2 w-full">
                        <div className="w-full flex items-center gap-x-2">
                            <Input value={value || ""} 
                                type={show? "text" : "password"}
                                placeholder= "Stream Key"
                            />
                            <CopyButton value={value || ""} />
                        </div>
                        <Button
                            onClick={onShow}
                            size="sm"
                            variant="link"
                        >
                            {show? "Hide" : "Show"}
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default GenerateKeyCard;