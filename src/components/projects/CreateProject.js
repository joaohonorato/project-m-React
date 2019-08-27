import React, { Component } from 'react'

export class CreateProject extends Component {
    state = {
        title: '',
        content: '',
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }
    render() {
        return (
            <div className='container'>
                <form onSubmit={this.handleOnSubmit} className='white'>
                    <h5 className='grey-text text-darken-3'>Create New Project</h5>
                    <div className='input-field'>
                        <label htmlFor='title'>Title</label>
                        <input type='text' id='title' onChange={this.handleOnChange} />
                    </div>
                    <div className='input-field'>
                        <label htmlFor='content'>Content</label>
                        <textarea id='content' className='materialize-textarea' onChange={this.handleOnChange} ></textarea>
                    </div>
                    <div className='input-field'>
                        <button className='btn pink lighten-1 z-depth-0'>Create</button>
                    </div>
                </form>
            </div >
        )
    }
}

export default CreateProject
