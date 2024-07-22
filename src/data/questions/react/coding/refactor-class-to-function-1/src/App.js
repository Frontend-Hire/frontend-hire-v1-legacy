export const code = `import React from 'react';

import AddTodo from './AddTodo';
import TodoList from './TodoList';

class App extends React.Component {
  state = { todos: [{ id: 0, title: 'Hello World!', completed: true }] };

  handleAddTodo = (todo) => {
    this.setState({
      todos: [...this.state.todos, todo],
    });
  };

  handleToggleTodoCompletion = (id) => {
    const newTodos = [...this.state.todos];
    const todoToUpdate = newTodos.find((todo) => todo.id === id);
    todoToUpdate.completed = !todoToUpdate.completed;

    this.setState({
      todos: newTodos,
    });
  };

  render() {
    return (
      <div className="px-4 py-2">
        <AddTodo addTodo={this.handleAddTodo} />
        <TodoList
          todos={this.state.todos}
          toggleTodoCompletion={this.handleToggleTodoCompletion}
        />
      </div>
    );
  }
}

export default App;
`;
