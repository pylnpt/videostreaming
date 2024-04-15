import { 
    Dialog,
    DialogHeader,
    DialogTrigger,
    DialogContent,
    DialogTitle
} from "~/components/ui/dialog";
import { 
    Alert,
    AlertDescription,
    AlertTitle
} from "~/components/ui/alert";

import { 
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "~/components/ui/select";

import { Button } from "./ui/button";
import { AlertTriangle } from "lucide-react";
import { DialogClose } from "@radix-ui/react-dialog";


const ConnectionModal = () => {
    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="default">
                        Generate
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>
                            Generate connection
                        </DialogTitle>
                    </DialogHeader>
                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Ingress Type" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="RTMP">RTMP</SelectItem>
                            <SelectItem value="WHIP">WHIP</SelectItem>
                        </SelectContent>
                    </Select>
                    <Alert>
                        <AlertTriangle className="h-4 w-4"/>
                        <AlertTitle>Warning!</AlertTitle>
                        <AlertDescription>
                            If you submit to this action you are going to reset 
                            all of the active streams that are using this connection.
                        </AlertDescription>  
                    </Alert>
                    <div className="flex justify-between">
                        <DialogClose>
                            <Button 
                                variant="ghost"
                            >
                                Cancel
                            </Button>
                            <Button 
                                variant="default"
                                onClick={()=> {}}>Generate
                            </Button>
                        </DialogClose>
                    </div>
                </DialogContent>
            </Dialog>
        </> 
    );
}
 
export default ConnectionModal;