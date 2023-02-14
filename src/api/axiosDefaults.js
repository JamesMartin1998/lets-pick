// Code based from Code Institute's Moments project
import axios from "axios";

axios.defaults.baseURL = 'https://lets-pick.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true

export const axiosReq = axios.create();
export const axiosRes = axios.create();
