import Axios from "axios";

const axiosInstance = Axios.create({
    withCredentials: true,
});

export class Network {
    static getInstance() {
        return axiosInstance;
    }
}