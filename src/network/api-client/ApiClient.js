import axios from 'axios';
import perf from '@react-native-firebase/perf';

const apiClient = ()=>{
    const REACT_APP_API_URL  = "http://44.206.245.7:3000/api/v1/";
    // const REACT_APP_API_URL  = "https://algo-network.getsandbox.com";
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



    const axiosInstance = axios.create({
        baseURL: REACT_APP_API_URL,
        headers:getHeader()
    });

    axiosInstance.interceptors.request.use(async function (config) {
        try {
            console.log("REQUEST:  --> "+JSON.stringify(config))
            const httpMetric = perf().newHttpMetric(config.url, config.method);
            config.metadata = { httpMetric };

            // add any extra metric attributes, if required
            // httpMetric.putAttribute('userId', '12345678');

            await httpMetric.start();
        } finally {
            return config;
        }
    });


    axiosInstance.interceptors.response.use(
        async function (response) {
            try {
                // Request was successful, e.g. HTTP code 200

                const { httpMetric } = response.config.metadata;

                // add any extra metric attributes if needed
                // httpMetric.putAttribute('userId', '12345678');

                httpMetric.setHttpResponseCode(response.status);
                httpMetric.setResponseContentType(response.headers['content-type']);
                await httpMetric.stop();
            } finally {
                return response;
            }
        },
        async function (error) {
            try {
                // Request failed, e.g. HTTP code 500

                const { httpMetric } = error.config.metadata;

                // add any extra metric attributes if needed
                // httpMetric.putAttribute('userId', '12345678');

                httpMetric.setHttpResponseCode(error.response.status);
                httpMetric.setResponseContentType(error.response.headers['content-type']);
                await httpMetric.stop();
            } finally {
                // Ensure failed requests throw after interception
                return Promise.reject(error);
            }
        },
    );



    return axiosInstance;






}

export default apiClient;
