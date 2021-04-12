import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import {Button} from "@material-ui/core";


const status = [
    {
      value: 'OPEN',
      label: 'В работе',
    },
    {
      value: 'ARCHIVED',
      label: 'Архивировать',
    },
    {
      value: 'CLOSE',
      label: 'Завершить',
    },
  ];

class EditProject extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: this.props.project.name,
            description: this.props.project.description,
            deadline:  this.props.project.deadline,
            status: this.props.project.status
        };
        this.editProject = this.editProject.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    editProject(e) {
        e.preventDefault();
        const project = {
            id: this.props.project.id,
            name: this.state.name,
            description: this.state.description,
            status: this.state.status,
            deadline:  this.state.deadline
        }
        this.props.handleSubmit(project);
        this.props.handleCancel();
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {

        return (
            <form >
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="name"
                            name="name"
                            label="Название"
                            value = {this.state.name} 
                            onChange={this.handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="description"
                            name="description"
                            label="Описание"
                            value = {this.state.description} 
                            onChange={this.handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="status"
                            name="status"
                            select
                            label="Статус проекта"
                            value = {this.state.status} 
                            onChange={this.handleChange}
                            fullWidth
                            >
                            {status.map((option) => (
                              <MenuItem key={option.value} value={option.value}>
                                {option.label}
                              </MenuItem >
                            ))}
                          </TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="deadline"
                            name="deadline"
                            label="Дата завершения"
                            type="date"
                            value = {this.state.deadline} 
                            onChange={this.handleChange}
                            InputLabelProps={{
                            shrink: true,
                            }}
                            fullWidth
                        />
                    </Grid>
                </Grid>
                <div className="button-place" style={{paddingTop: 30 + 'px'}} >
                <Button type="submit" variant="contained" color="primary" id="saveEditOrderButton"
                 className="saveEdit btn btn-primary" style={{marginRight: 5 + 'px'}} onClick={this.editProject}>Изменить</Button>
                <Button variant="contained" color="secondary" onClick={this.props.handleCancel}>Закрыть</Button>
                </div>
              </form>
        )
    }
}

export default EditProject;