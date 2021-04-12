import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../Title';
import ProjectService from "../../services/ProjectService";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import {Button} from "@material-ui/core";
import AddProject from './AddProject';
import EditProject from './EditProject';
import DeleteProject from './DeleteProject';
import ModalWindow from "../ModalWindow";

class Projects extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            projects:[],
            name: '',
            description: '',
            deadline: ''
        }
        this.openModalAddProject = this.openModalAddProject.bind(this); 
        this.openModalEditProject = this.openModalEditProject.bind(this); 
        this.openModalDeleteProject = this.openModalDeleteProject.bind(this);   
        this.handleEditProject = this.handleEditProject.bind(this);
        this.handleAddProject = this.handleAddProject.bind(this);
        this.handleDeleteProject = this.handleDeleteProject.bind(this);
    }

    componentDidMount(){
        ProjectService.getProjects().then((response) =>{
            this.setState({projects: response.data})
        });
    }


    state = {
        isOpen: false,
        title: '',
        children: ''
    };

    openModalAddProject() {
        this.setState({ title: 'Добавление проекта' });
        this.setState({ children: <AddProject handleSubmit={this.handleAddProject}
             handleCancel={this.handleCancel}/> });
        this.setState({ isOpen: true });
    }

    openModalEditProject(id) {
        ProjectService.getProject(id).then(
            response => {
                this.setState({ project: response.data });
                this.setState({ title: 'Изменение проекта' });
                this.setState({ children: <EditProject project={this.state.project}
                    handleSubmit={this.handleEditProject}
                    handleCancel={this.handleCancel}/> });
        this.setState({ isOpen: true });
            })
    }

    openModalDeleteProject(id) {
        ProjectService.getProject(id).then(
            response => {
                this.setState({ project: response.data });
                this.setState({ title: '' });
                this.setState({ children: <DeleteProject id={this.state.project.id}
                    handleSubmit={this.handleDeleteProject}
                    handleCancel={this.handleCancel}/> });
        this.setState({ isOpen: true });
            })
    }

    handleDeleteProject = (id) => {   
        ProjectService.delete(id)
        .then(response => {
            this.componentDidMount();
        })
            .catch(e => {
                console.log(e);
            });
    }

    handleEditProject = (project) => {   
        ProjectService.update(project)
        .then(response => {
            this.componentDidMount();
        })
            .catch(e => {
                console.log(e);
            });
    }

    handleAddProject = (project) => {   
        ProjectService.create(project)
            .then(response => {
                this.componentDidMount();
            })
            .catch(e => {
                console.log(e);
            });
    }

    handleCancel = () => {
        this.setState({ isOpen: false });
    };

    render () {
        return (
            <React.Fragment>
                <Title >Проекты
                    <Button variant="contained" style={{float: 'right'}} color="primary" onClick={this.openModalAddProject}>
                        Добавить
                        <AddCircleOutlineIcon />
                    </Button>
                </Title>

                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Название</TableCell>
                            <TableCell>Задачи</TableCell>
                            <TableCell>Действия</TableCell>
                        </TableRow>

                    </TableHead>
                    <TableBody>
                        { this.state.projects.map((project) => (
                            <TableRow key={project.id}>
                                <TableCell>{project.name}</TableCell>
                                <TableCell>
                                    <VisibilityIcon />
                                </TableCell>
                                <TableCell>
                                    <EditIcon onClick={() => this.openModalEditProject(project.id)} />
                                    <DeleteIcon onClick={() => this.openModalDeleteProject(project.id)} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                <ModalWindow
                    title={this.state.title}
                    isOpen={this.state.isOpen}
                    onCancel={this.handleCancel}
                    children={this.state.children}
                >
                </ModalWindow>

            </React.Fragment>
        )
    }
}
export default Projects;