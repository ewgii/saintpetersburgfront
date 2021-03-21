import axios from 'axios';

const MESSAGE_REST_API_URL = 'http://localhost:8080/tempModelsMessage';

class MessageService{

    getMessages(){
       return axios.get(MESSAGE_REST_API_URL);
    }

}



export default new MessageService();