import axios from "axios";

axios.defaults.baseURL = 'https://lets-pick-app.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true