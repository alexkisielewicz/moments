import axios from "axios";

axios.defaults.baseURL = 'https://drfapi-ci.herokuapp.com/';
axios.defaults.headers.post['Contenty-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;
