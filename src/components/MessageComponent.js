import React from 'react';
import MessageService from '../services/MessageService';

class MessageComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            messages:[]
        }
    }


    componentDidMount(){
        MessageService.getMessages().then((response) =>{
            this.setState({messages: response.data})
        });
    }


    render (){
        return (
            <div>
                <h1 className = "text-center"> Привет! Это наше учебное приложени!</h1>
                <table className = "table table-striped">
                    <tbody>
                        {
                            this.state.messages.map(
                                message =>
                                <tr key = {message.id}>
                                    <td>{message.message} </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }

}


export default MessageComponent;