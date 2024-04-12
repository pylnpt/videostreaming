import { useRouter } from "next/router";
import { useRef } from "react";
import { api } from "~/utils/api";

const StreamerPage = () => {
    const { query } = useRouter()
    // const name = router.query.name;
    const userId = query.userId!;
    const fetchUsers = api.user.getUserById.useQuery({id: userId});
    
    return (
        <>
        {fetchUsers !== null && (
            <div>
                <p>Name : { fetchUsers.data?.name }</p>
                <p>Email : { fetchUsers.data?.email }</p>
                <img src={ fetchUsers.data?.image? fetchUsers.data?.image : ""} alt="profile image"></img>
            </div>
        )}        
        </> 
    );
}
 
export default StreamerPage;









