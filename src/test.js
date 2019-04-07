import React, { Component } from 'react';
import axios from 'axios';

class Test extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            course: '',
            tag: '',
            description: ''
        };
    }

    onChange = (e) => {
        /*
         Because we named the inputs to match their
         corresponding values in state, it's
         super easy to update the state
         */
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        // get our form data out of state
        const { name, course, tag, description } = this.state;

        axios.post('http://api.bacalaureat.local/api/v1/create', { name, course, tag, description })
            .then((result) => {
                //access the results here....
            });
    }

    render() {
        const { name, course, tag, description } = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.onChange}
                />
                <input
                    type="text"
                    name="course"
                    value={course}
                    onChange={this.onChange}
                />
                <input
                    type="text"
                    name="tag"
                    value={tag}
                    onChange={this.onChange}
                />
                <input
                    type="text"
                    name="description"
                    value={description}
                    onChange={this.onChange}
                />
                <button type="submit">Submit</button>
            </form>
        );
    }
}
export default Test;