import apiClient from '../../api-client/ApiClient';
import Endpoints from '../../endpoints';

class AlgoService {
    getAlgorithm = (category_id) => apiClient().get(""+Endpoints.v1.GET_ALGO+"/"+category_id);
}

export default new AlgoService();
