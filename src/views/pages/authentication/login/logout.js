import axios from "axios"

export const logoutUser = () => async (dispatch) => {
    try {
        const res = await axios.get('/api/logout',{
            withCredentials:true
        })
    } catch (error) {
        console.log(error)
    }
}