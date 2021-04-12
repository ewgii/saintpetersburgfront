import React from 'react';
import Grid from '@material-ui/core/Grid';
import {Button} from "@material-ui/core";

class DeleteProject extends React.Component {

    constructor(props) {
        super(props);

        this.deleteProject = this.deleteProject.bind(this);
    }

    deleteProject(e) {
        e.preventDefault();
        this.props.handleSubmit(this.props.id);
        this.props.handleCancel();
    }

    render() {

        return (
            <Grid container spacing={3}>
                    <Grid item xs={12}>
            <h3 style={{textAlign: 'center' }}>Вы действительно хотите удалить проект?</h3>
            <div className="button-place" style={{paddingTop: 30 + 'px', float: 'right'}} >
                <Button type="submit" variant="contained" color="primary" id="deleteOrderButton"
                 className="deleteOrder btn btn-primary" style={{marginRight: 5 + 'px'}} onClick={this.deleteProject}>Удалить</Button>
                <Button variant="contained" color="secondary" onClick={this.props.handleCancel}>Закрыть</Button>
                </div>
          </Grid>
          </Grid>
        )
}
}

export default DeleteProject;