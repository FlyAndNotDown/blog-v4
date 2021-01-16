import Axios from "axios";

const axiosInstance = Axios.create({
    withCredentials: true,
    xsrfCookieName: 'csrfToken',
    xsrfHeaderName: 'x-csrf-token'
});

export class Network {
    static getInstance() {
        return axiosInstance;
    }
}