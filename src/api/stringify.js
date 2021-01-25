import axios from 'axios';

//TODO change baseURL to https://stringify-chat.netlify.app
export default axios.create({
    baseURL:'https://stringify-chat.herokuapp.com/'
});
