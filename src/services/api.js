import axios from 'axios';

class APIService{
    async getAPI(url){
        const response = await axios.get(url);
        return response;
        // return axios.get(url)
        //             .then((response) => {
        //                 return response;
        //             })
        //             .catch((error) => {
        //                 return error
        //             })
    }

}

export default new APIService();