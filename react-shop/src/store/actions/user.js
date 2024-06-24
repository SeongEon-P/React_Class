import { CLEAR_CURRENT_USER, SET_CURRENT_USER } from "../types";

export const setCurrentUser=(user) => {
    return {
        type: SET_CURRENT_USER,
        pload:user
    }
}
export const clearCurrentUser =() =>{
    return {
        type: CLEAR_CURRENT_USER,
    }
}