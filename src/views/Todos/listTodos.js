import React from "react";
import './ListTodos.scss';
import AddTodos from "./AddTodos.js";
import { toast } from "react-toastify";

class ListTodos extends React.Component {
    state = {
        listToDos: [
            { id: 1, title: 'Doing homeworks' },
            { id: 2, title: 'Making video' },
            { id: 3, title: 'Fixing bugs' },
        ],
        editTodos: {}
    }
    addNewToDos = (todo) => {
        this.setState({
            listToDos: [...this.state.listToDos, todo]

        })
        toast.success("Wow so easy!")
    }
    handleDeleteTodos = (todo) => {
        let currentTodos = this.state.listToDos;
        currentTodos = currentTodos.filter(item => item.id !== todo.id)
        this.setState({
            listToDos: currentTodos
        })
        toast.success("Sucessfully delete!!")
    }
    handleEditTodos = (todo) => {
        let { editTodos, listToDos } = this.state;
        let isEmptyObj = Object.keys(editTodos).length === 0;
        if (isEmptyObj === false && editTodos.id === todo.id) {
            let listToDosCopy = [...listToDos];
            let objIndex = listToDosCopy.findIndex((item => item.id === todo.id));

            listToDosCopy[objIndex].title = editTodos.title;
            this.setState({
                listToDos: listToDosCopy,
                editTodos: {}
            })
            toast.success("Sucessfully edit!!")
            return;
        }

        this.setState({
            editTodos: todo
        })

    }
    handleOnchangeEditTodos = (event) => {
        let editTodosCopy = { ...this.state.editTodos };
        editTodosCopy.title = event.target.value;
        this.setState({
            editTodos: editTodosCopy
        })
    }
    render() {
        let { listToDos, editTodos } = this.state;
        let isEmptyObj = Object.keys(editTodos).length === 0
        console.log('Check Empty Object', isEmptyObj)
        return (
            <>
                <p>
                    Simple Todos App with Long &amp; Eric
                </p>
                <div className="list-todo-container">
                    <AddTodos
                        addNewToDos={this.addNewToDos}
                    />
                    <div className="list-todo-content">
                        {listToDos && listToDos.length > 0 && listToDos.map((item, index) => {
                            return (
                                <div className="todo-child" key={item.id}>
                                    {isEmptyObj === true ?
                                        <span>{index + 1} - {item.title}</span>
                                        :
                                        <>
                                            {editTodos.id === item.id ?
                                                <span>{index + 1} - <input value={editTodos.title} onChange={(event) => this.handleOnchangeEditTodos(event)} /></span>
                                                :
                                                <span>{index + 1} - {item.title}</span>}
                                        </>

                                    }
                                    <button className="edit"
                                        onClick={() => this.handleEditTodos(item)}
                                    >
                                        {isEmptyObj === false && editTodos.id === item.id ?
                                            'Save'
                                            :
                                            'Edit'}
                                    </button>
                                    <button className="delete"
                                        onClick={() => this.handleDeleteTodos(item)}
                                    >Delete</button>
                                </div>
                            )
                        })}


                    </div>

                </div>
            </>
        )
    }
}

export default ListTodos;