import axios from 'axios';

export default axios.create({
    baseURL:"http://localhost:5000/api/cards",
    headers:{
        "Content-type":"application/json"
    }
});