import axios from 'axios';
const apiClient = ()=>{
    const REACT_APP_API_URL  = "https://algo-network.getsandbox.com";
    const AUTHORIZATION = 'KJABHIYGklbhkfrfjkbjkfbrkbc';

    const getHeader  = ()=>{
        if(true){
            return getPrivateHeader()
        }else{
            return getPublicHeader()
        }
    }

    const getPublicHeader = ()=>{
        return {
            "Content-Type":"application/json",
            "Authorization":AUTHORIZATION,
        }
    }

    const getPrivateHeader = ()=>{
        return {
            "Content-Type":"application/json",
            "Authorization":AUTHORIZATION,
            "token":"iuyfghvjbnoiutfuyjb__8979hkjn",
        }
    }


    return axios.create({
        baseURL: REACT_APP_API_URL,
        headers:getHeader()
    });






}

export default apiClient;
