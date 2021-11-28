import axios from 'axios';

export default axios.create({
    baseURL:"https://protected-waters-44858.herokuapp.com/api/cards",
    headers:{
        "Content-type":"application/json"
    }
});