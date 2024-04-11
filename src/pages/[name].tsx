import { useRouter } from "next/router";

const StreamerPage = () => {
    const router = useRouter()
    const name = router.query.name;
    return ( 
    <div>
        Name : {name}
    </div> );
}
 
export default StreamerPage;