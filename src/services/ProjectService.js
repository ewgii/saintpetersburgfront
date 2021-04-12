import axios from 'axios';
import {HOST_BACK} from '../constants/Constants'

const PROJECT_REST_API_URL = HOST_BACK + '/projects';

class ProjectService{

    getProjects(){
        return axios.get(PROJECT_REST_API_URL);
    }

    getArchivedProjects(){
        return axios.get(PROJECT_REST_API_URL + '/archived');
    }

    getProject(id){
        return axios.get(PROJECT_REST_API_URL + `/${id}`);
    }

    create(project){
        return axios.post(PROJECT_REST_API_URL, project);
    }

    update(project){
        return axios.put(PROJECT_REST_API_URL, project);
    }

    delete(id){
        return axios.delete(PROJECT_REST_API_URL + `/${id}`);
    }

}

export default new ProjectService();