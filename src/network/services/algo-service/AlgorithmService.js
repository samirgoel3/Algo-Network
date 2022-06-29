import apiClient from '../../api-client/ApiClient';
import Endpoints from '../../endpoints';

class AlgoService {
    getAlgorithm = (category_id) => apiClient().get("" + Endpoints.v1.GET_ALGO + "/" + category_id);
    getAlgoCategories = () => apiClient().get("" + Endpoints.v1.GET_ALGO_CATEGORIES);
    getAlgoListByCategory = (category_id)=> apiClient().post(""+Endpoints.v1.GET_ALGO_BY_CATEGORY, {category_id});
    getSearchAlgorithmClient = (key, signalToCancel)=> apiClient().post(""+Endpoints.v1.SEARCH_ALGO, {key},{cancelToken: signalToCancel});
}
export default new AlgoService();
