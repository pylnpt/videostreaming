"use server"

import { api } from "~/utils/api";

const onFollow = async (
    id: string,
) => {
    try {
        return api.user.followUser.useMutation({id: id});
    } catch(error) {
        throw new Error("Internal Server Error");
    }
};
 
export default onFollow;