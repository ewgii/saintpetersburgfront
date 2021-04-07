import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../Title';
import TaskService from "../../services/TaskService";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {Button} from "@material-ui/core";


class Tasks extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            tasks:[]
        }
    }

    componentDidMount(){
        TaskService.getTasks().then((response) =>{
            this.setState({tasks: response.data})
        });
    }

    render () {
        return (
            <React.Fragment>
                <Title>Проекты
                    <Button variant="contained"  color="primary">
                        Добавить
                        <AddCircleOutlineIcon />
                    </Button>
                </Title>

                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Название</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { this.state.tasks.map((task) => (
                            <TableRow key={task.id}>
                                <TableCell>{task.name}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </React.Fragment>
        )
    }
}
export default Tasks;