import axios from 'axios';

/*const HOST_BACK = 'http://localhost:8080';*/
const HOST_BACK = 'https://task-tracker-lc-2021.herokuapp.com';

const MESSAGE_REST_API_URL = HOST_BACK + '/tempModelsMessage';

class MessageService{

    getMessages(){
       return axios.get(MESSAGE_REST_API_URL);
    }

}



export default new MessageService();