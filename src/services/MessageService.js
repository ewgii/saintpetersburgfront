import axios from 'axios';
import {HOST_BACK} from "../constants/Constants";

const MESSAGE_REST_API_URL = HOST_BACK + '/tempModelsMessage';
class MessageService{

    getMessages(){
       return axios.get(MESSAGE_REST_API_URL);
    }

}

export default new MessageService();