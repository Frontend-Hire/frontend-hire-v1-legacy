export const code = `import React from 'react';

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => this.props.toggleTodoCompletion(todo.id)}
          >
            {todo.title} {todo.completed ? '(completed)' : ''}
          </li>
        ))}
      </ul>
    );
  }
}

export default TodoList;
`;
