import axiosSecure from "."
// save users data in mongodb
export const saveUser = async (user)=>{

    const currentUser={
        email:user.email,
        role:'guest',
        status:"verified"

    }
    const {data} = await axiosSecure.put(`/users/${user?.email}`, currentUser)

    return data;

}
// Get token from server
export const getToken = async (email)=>{
    const {data} = await axiosSecure.post(`/jwt`,email)
    console.log('token received');
    return data;

}
// remove token from browser
export const removeToken = async ()=>{
    const {data} = await axiosSecure.get(`/logout`)
    return data;

}
