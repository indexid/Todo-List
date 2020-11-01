import React, { Component } from 'react';
import './ItemAddForm.css';

class ItemAddForm extends Component {
    state = {
      label: ''
    };
  
    onLabelChange = (event) => {
      this.setState({ label: event.target.value })
    };
  
    onSubmit = (event) => {
      event.preventDefault();
      const { label } = this.state;
      this.setState({ label: '' });
      const cb = this.props.onItemAdded || (() => {});
      cb(label);
    };
  
    render() {
      return (
        <form
          className="bottom-panel d-flex"
          onSubmit={this.onSubmit}>
  
          <input 
            type="text"
            className="form-control new-todo-label"
            value={this.state.label}
            onChange={this.onLabelChange}
            placeholder="What needs to be done?" />
  
          <button 
            type="submit"
            className="btn btn-outline-secondary">
            Add
          </button>
        </form>
      );
    }
}

export default ItemAddForm;