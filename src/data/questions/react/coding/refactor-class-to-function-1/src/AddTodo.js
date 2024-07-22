export const code = `import React from 'react';

class AddTodo extends React.Component {
  state = { input: '' };

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo({
      id: Date.now(),
      title: this.state.input,
      completed: false,
    });
    this.setState({ input: '' });
  };

  render() {
    return (
      <form className="mb-4" onSubmit={this.handleSubmit}>
        <input
          type="text"
          className="border p-2"
          onChange={this.handleChange}
          value={this.state.input}
        />
        <button
          className="border border-green-500 bg-green-500 p-2 text-white"
          type="submit"
        >
          Add Todo
        </button>
      </form>
    );
  }
}

export default AddTodo;
`;
