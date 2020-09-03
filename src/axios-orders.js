import axios from 'axios';

const instance = axios.create({
    baseURL: "https://burger-project-5df11.firebaseio.com/"
});

export default instance;
