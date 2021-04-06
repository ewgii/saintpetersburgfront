import axios from 'axios';
import {HOST_BACK} from '../constants/Constants'

const TASK_REST_API_URL = HOST_BACK + '/projects';

class TaskService{

    getTasks(){
        return axios.get(TASK_REST_API_URL);
    }

}

export default new TaskService();