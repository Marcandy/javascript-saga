import React, { Component } from 'react';

class AddTodo extends Component { // we automatically get props form a class component
                                // so no need to create a constructor
    state = {
        inputContent: ''
    }

    handleSubmit = (e) => { // prevent default form action from beein done
        e.preventDefault(); //we will not do the logic rather we will make the
                            // component push it to the state
        this.props.addTodo(this.state.inputContent)
        this.setState({
            inputContent: ''
        })
    }
    handleChange = (e) => {
        this.setState({
            inputContent: e.target.value
        })
    }
    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Add new Todo</label>
                <input
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.inputContent}
                />{/*this so that the input value become empty*/}
            </form>
        )
    }
}

export default AddTodo;