import React, { Component } from 'react';
import axios from 'axios';

class Test extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            course: '',
            tag: '',
            description: '',
            selectedFile: null

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

    fileChangedHandler = event => {
        this.setState({selectedFile: event.target.files[0]})

    }

    onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
         formData.append(
             'newfile',
             this.state.selectedFile,
             this.state.selectedFile.name,
             this.state.name,
             this.state.course,
             this.state.tag,
             this.state.description
         )
        const config = { headers: { 'Access-Control-Allow-Origin': '*' } };
        axios.post('http://bacalaureat.local/api/v1/upload', formData,config);
        // get our form data out of state
        const { name, course, tag, description, selectedFile} = this.state;
        axios.post('http://bacalaureat.local/api/v1/upload',
                   { name, course, tag, description, selectedFile})
            .then((result) => {
                //access the results here....
            });



    }

    render() {
        const { name, course, tag, description, selectedFile } = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <input
                    type="file"
                    name="newfile"
                    value={selectedFile}
                    onChange={this.fileChangedHandler} />
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