import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
    render() { 
        return (
            <div>
                { 
                    this.props.todos.map((todo) => 
                        <TodoItem 
                            key={todo.id} 
                            todo={todo} 
                            markCompleteTodoItem={this.props.markComplete} 
                            deleteTodoItem={this.props.deleteTodo} />
                    )
                }
            </div>
        );  
    }
}

// PropTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
}
 
export default Todos;