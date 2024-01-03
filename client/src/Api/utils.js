import axios from "axios";

export const imgUpload = async (image) => {
    const formDataToSend = new FormData();
    formDataToSend.append('image', image);

    const { data } = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGEBB_API}`, formDataToSend

    );
    return data

}