import apiClient from '../../api-client/ApiClient';
import Endpoints from '../../endpoints';

class FeedService {
    getAlgoCategories = () => apiClient().get(""+Endpoints.v1.ALGO_CATEGORIES);
}

export default new FeedService();
