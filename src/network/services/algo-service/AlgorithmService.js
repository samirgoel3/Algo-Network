import apiClient from '../../api-client/ApiClient';
import Endpoints from '../../endpoints';

class AlgoService {
    getAlgorithm = (category_id) => apiClient().get(""+Endpoints.v1.GET_ALGO+"/"+category_id);
    getAlgoCategories = () => apiClient().get(""+Endpoints.v1.GET_ALGO_CATEGORIES);
}

export default new AlgoService();
