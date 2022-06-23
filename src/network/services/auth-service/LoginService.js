import apiClient from '../../api-client/ApiClient';
import Endpoints from '../../endpoints';

class AuthService {
    login = ({email, password}) => apiClient().post(""+Endpoints.v1.LOGIN, {email, password});
    signup = ({email, password, username}) => apiClient().post(""+Endpoints.v1.SIGNUP, {email, password, username});
    checkEmail = (email) => apiClient().post(""+Endpoints.v1.CHECK_EMAIL, {email});
}

export default new AuthService();
