import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../Title';
import ProjectService from "../../services/ProjectService";
import ImportExportIcon from '@material-ui/icons/ImportExport';

class ArchivedProjects extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            projects:[]
        } 
    }

    componentDidMount(){
        ProjectService.getArchivedProjects().then((response) =>{
            this.setState({projects: response.data})
        });
    }

    render () {
        return (
            <React.Fragment>
                <Title >Архивированные проекты
                </Title>

                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Название</TableCell>
                            <TableCell>Вернуть из архива</TableCell>
                        </TableRow>

                    </TableHead>
                    <TableBody>
                        { this.state.projects.map((project) => (
                            <TableRow key={project.id}>
                                <TableCell>{project.name}</TableCell>
                                <TableCell>
                                    <ImportExportIcon />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </React.Fragment>
        )
    }
}
export default ArchivedProjects;