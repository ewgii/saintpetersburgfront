import axios from 'axios';

const MESSAGE_REST_API_URL = 'https://task-tracker-lc-2021.herokuapp.com/tempModelsMessage';

class MessageService{

    getMessages(){
       return axios.get(MESSAGE_REST_API_URL);
    }

}



export default new MessageService();