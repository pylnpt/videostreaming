import { useEffect } from "react";
import GenerateUrlCard from "~/components/generate-url-card";
import GenerateKeyCard from "~/components/generate-key-card";
import { Button } from "~/components/ui/button";
import ConnectionModal from "~/components/connection-modal";

const StreamKeys = () => {
    useEffect(() => {
        async function generateServerUrl() {
        }
    }, []);

    return (
    <div className="p-6">
        <div className="flex items-center justify-between mb-4">
            <h1 className="tex-2xl font-bold">Key settings</h1>
        </div>
        <ConnectionModal/>
        <div className="space-y-4">
            <GenerateUrlCard value={""}/>
            <GenerateKeyCard value={""}/>
            {/* <GenerateKeyCard value={stream.serverUrl}/> */}
            {/* <GenerateUrlCard value={""}/> // stream.serverUrl */}
        </div>
    </div>
     );
}
 
export default StreamKeys;