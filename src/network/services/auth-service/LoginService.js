import apiClient from '../../api-client/ApiClient';
import Endpoints from '../../endpoints';

class AuthService {
    login = () => apiClient().post(""+Endpoints.v1.LOGIN);
    signup = () => apiClient().post(""+Endpoints.v1.SIGNUP);
}

export default new AuthService();
