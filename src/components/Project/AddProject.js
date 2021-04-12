import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import {Button} from "@material-ui/core";

class AddProject extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            description: '',
            deadline:  '',
            disabled: false
        };
        this.addProject = this.addProject.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    addProject(e) { 
        e.preventDefault();
        const project = {
            name: this.state.name,
            description: this.state.description,
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
                <Button disabled={this.state.disabled} type="submit" variant="contained" color="primary" id="saveEditOrderButton"
                 className="saveEdit btn btn-primary" style={{marginRight: 5 + 'px'}} onClick={this.addProject}>Добавить</Button>
                <Button variant="contained" color="secondary" onClick={this.props.handleCancel}>Закрыть</Button>
                </div>
              </form>
        )
    }
}

export default AddProject;