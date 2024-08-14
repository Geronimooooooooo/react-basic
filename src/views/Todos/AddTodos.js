import React from "react";
import { toast } from "react-toastify";


class AddTodos extends React.Component {
    state = {
        title: '',
    }
    HandleOnchangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    HandleAddTodo = () => {
        if (!this.state.title) {
            toast.error('Missing title');
            return;
        }
        let todo = {
            id: Math.floor(Math.random() * 10000),
            title: this.state.title
        }
        this.props.addNewToDos(todo);
        this.setState({
            title: ''
        })
    }
    render() {
        let { title } = this.state;
        return (

            <div className="add-todo">
                <input type="text" value={title} onChange={(event) => this.HandleOnchangeTitle(event)} />
                <button type="button" className="add" onClick={() => this.HandleAddTodo()}>Add</button>
            </div>
        )
    }


}

export default AddTodos;